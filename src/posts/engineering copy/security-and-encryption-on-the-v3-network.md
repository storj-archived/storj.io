---
title: Security and Encryption on the V3 Network
date: '2018-11-08T10:26:40-07:00'
categories:
  - engineering
authors:
  - Moby von Briesen
---
Data privacy and security are very important components of the Storj network and are primarily maintained through client-side encryption of file paths, content, and metadata. By encrypting client-side, we avoid the danger of making this data available to attackers, and anyone else who is unable to derive the necessary encryption keys.

When designing our method for encryption, we had to consider future features and how our encryption method might impact them. For example, we plan to implement bucket, file, and directory sharing, which places constraints on how files and file paths are encrypted. We need to maintain the security of encrypted components while still allowing for the possibility of decryption without direct control of the root secret used to upload files. In the new V3 network, we make this possible by hierarchically deriving keys based on the root secret and file path. This method is detailed more below.
<!--more-->
We also designed our encryption method to avoid using the same keys for content encryption of different files and different segments of the same file. This is advantageous not only because it makes file sharing of encrypted files more secure, but because it does not put other segments or files at risk if one of them is compromised.

The encryption algorithm we used for content and metadata is easily configurable between AES-GCM and “[Secretbox](https://nacl.cr.yp.to/secretbox.html),” which are both authenticated encryption algorithms. This means that if any encrypted data is tampered with, the client downloading the data will know about it once the data is decrypted.

In the following sections, we will elaborate on the implementation of encryption on the V3 Storj network. But first, it’s critical to understand the definitions of a few key concepts used on the network for encryption.

* **Segment**: The largest subdivision of a file. All the segments of a file are usually the same size. In most cases, the last segment will be smaller than the rest.
* **Path**: The representation for a file’s “location.” Paths are essentially an arbitrary number of strings delimited by slashes (e.g. _this/is/a/file.txt_). On the Storj network, the Satellite uses paths to keep track of file metadata as well as pointers to storage nodes that possess encrypted file content.
* **Root secret**: A private string defined by the client that is used to derive keys for encrypting and decrypting data stored on the network.
* **Path key**: A key derived from the root secret and the file path. There is a different path key for every element in the path, and a path key is used to derive new path keys for lower level path items.
* **Random key**: A randomly generated key used to encrypt segment content and metadata.
* **Derived key**: A key derived from the path key for the lowest level path element. The derived key is used to encrypt the random key before it is stored in a segment’s metadata.
* **HMAC**: Hash-based message authentication code. We generate HMACs using path elements and encryption keys in order to derive new keys for lower levels of the path. Using hashes makes it easy to generate keys from higher levels without making it possible to generate higher level keys from lower level ones.
* **AES-GCM**: An authenticated encryption algorithm that makes use of the Advanced Encryption Standard and uses the Galois/Counter mode for encrypting blocks.
* **Secretbox**: An authenticated encryption algorithm from the NaCl library that combines the Salsa20 encryption cipher and Poly1305 message authentication code.

### Path Encryption

Paths are encrypted in a hierarchical and deterministic way using the root encryption key. Each path component is encrypted separately based on information derived from previous path components.

Consider an unencrypted path _p_ that is made up of path elements _p<sub>1</sub>/p<sub>2</sub>/.../p<sub>n</sub>_. The end goal is to generate an encrypted path _e_, which is made up of elements _e<sub>1</sub>/e<sub>2</sub>/.../e<sub>n</sub>_. We have a root secret, s<sub>0</sub>, and can derive a path key using this secret, _k<sub>0</sub>_ = _K(s<sub>0</sub>)_. We then define the next secret as _s<sub>1</sub> = HMAC(s<sub>0</sub>, p<sub>1</sub>)_ and encrypt the first path element as _e<sub>1</sub> = encrypt(k<sub>0</sub>, p<sub>1</sub>)_. In more general terms, each derived secret _s<sub>i</sub>_ = _HMAC(s<sub>i-1</sub>, p<sub>i</sub>)_, and each encrypted path element _e<sub>i</sub> = encrypt(k<sub>i-1</sub>, p<sub>i</sub>)_ where the path key _k<sub>i-1</sub> = K<sub>(si-1)</sub>._

This method of path encryption allows us to do some interesting things. Consider a user, Brandon, with several files and subdirectories under the path _p<sub>1</sub>/p<sub>2</sub>/p<sub>3</sub>/_. Brandon wants to share everything under this path with Nat, another user, without revealing anything at a higher level _(p<sub>1</sub>/..., p<sub>1</sub>/p<sub>2</sub>/...)_. Brandon can provide Nat with the encrypted path _e<sub>1</sub>/e<sub>2</sub>/e<sub>3</sub>/_ and the secret _s<sub>3</sub>_. Nat is now able to derive the encryption keys for any of Brandon’s files prefixed with the path _e<sub>1</sub>/e<sub>2</sub>/e<sub>3</sub>/_. However, she will be unable to decrypt any of the first three path elements or files that do not have the required prefix.

While there are many benefits to path encryption, its ability to efficiently list unencrypted file names in order can present a challenge. Since the order of listed items is determined by the paths stored on the Satellite, listed items will always be returned in order based on their encrypted path names, but will not be alphabetical when the paths are decrypted.

Users of the network are able to opt out of path encryption on a per-bucket basis because of this limitation. If a user opts out of encrypted paths, the paths will still only be visible to the Satellite. Storage nodes do not have information about paths or metadata associated with pieces they are storing.

### Content and Metadata Encryption

When a user uploads a file, we read it one segment at a time on the client-side. Before each segment is split up, erasure encoded, and stored on remote storage nodes, we generate a random content encryption key. We also create a starting nonce equal to the segment number and use it along with the random key to encrypt the segment data.

Next, we generate the derived key, dk, which we define with _s<sub>n+1</sub>_ = _HMAC(s<sub>n</sub>, “content”)_, where _dk_ _=_ _K(s<sub>n+1</sub>)_ and _s<sub>n</sub>_ is the last secret generated from the file path using the technique detailed above. The reason we add one more derivation step instead of setting _dk = K(s<sub>n</sub>)_ is because a file path can also be a prefix for other file paths. For instance, _a/b/c_ is a valid file path, but so is _a/b/c/d_. If Brandon wants to share _a/b/c_ with Nat, he should be able to provide Nat with a derived key to decrypt the file _c_, but it shouldn’t be possible for Nat to derive the key to access the file _d_ even though it has the same prefix. By adding one more dimension of key derivation for content encryption, we avoid this issue.

Each segment has metadata associated with it on the Satellite. Segment metadata includes the random key used to encrypt that segment’s content. We encrypt the random key with the derived key (dk) and a randomly generated nonce. The nonce is stored along with the encrypted content key in the segment metadata. This way, we use a different random encryption key for each segment, but anyone with the derived key can decrypt those keys.

The last segment’s metadata contains information in addition to the encrypted key and key nonce. The additional information is the metadata for the entire file. Some of this metadata is unencrypted, such as encryption type (AES-GCM or Secretbox) and encryption block size, since they are necessary to properly decrypt the file and metadata. The remainder of the metadata, which includes the number of segments, segment size, last segment size, and additional arbitrary metadata is encrypted with the last segment’s random content encryption key.

In summary, encryption and security on decentralized cloud storage networks need to be carefully thought out to enable the sharing of files without compromising entire buckets of data. Cloud storage platforms need the ability to easily share data for deployments like CDNs, websites and other use-cases. By deriving keys hierarchically from file paths, and encrypting data with different keys, the V3 Storj network will maintain data privacy without removing important features.

You can read more about encryption on the V3 Storj network in sections 3.6 and 4.1 of [our whitepaper](https://storj.io/white-paper).
