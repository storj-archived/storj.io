---
title: How Storj increases object storage security exponentially
date: '2016-06-07T05:45:00-04:00'
categories:
  - engineering
authors:
  - James Prestwich
---
Security and privacy are at the core of the Storj ethos. Last week in Berlin, we were delighted to present at a Blueyard event called  Decentralized & Encrypted — The mission to upgrade the Internet & an open conversation with Edward Snowden  ([https://goo.gl/aFV15O](https://goo.gl/aFV15O)). Below is a look into how we strive to secure our users’ privacy by decentralizing and encrypting object storage.  

Storj’s P2P object storage network relies on a supply side, composed of people or organizations (“farmers”) who provide storage capacity ([https://storj.io/share.html](https://storj.io/share.html)) to the network in exchange for compensation. These farmers provide storage services to the demand side: developers who are building applications that need to store and retrieve static content (photos, videos, documents, etc) for a variety of use cases (archiving, content delivery, syncing/sharing, etc).

Each farmer is a node on the Storj network. We started with only one node, but the network has since grown significantly since inception (each dot on the map below represents one or more nodes):

![image](/blog/img/map.jpg)

**One of the most interesting aspects of the Storj network is that as it grows, it gets more secure – there is a network effect for security.**

But before we can talk about security on the network, we have to review some aspects of the technology, and what exactly we mean by “security” in the context of a file on the network.

We like to think of security as a measure of the effort involved in gaining unauthorized access to a file. For example, we believe modern encryption, e.g. AES256, to be secure, because (to the best of our knowledge) the number of operations (or the effort) required to compromise it cannot be mustered in the lifespan of the universe.

Data is kept secure and private via a series of client-side processes before it enters the network. First the metadata required to remotely verify file integrity is generated, then the data is sharded, and each shard is encrypted. The keys are kept by the client, and the user can manage the keys however they think best. The encrypted data is then sent out into the network, and the integrity of the data is checked at regular intervals using cryptographic challenges that can only be answered positively if the file has not been modified or deleted. Theoretically, because unencrypted data is never exposed, files in this system should be as secure as the user’s key management.

But sometimes things don’t go as planned, like in the RSA backdoor instance. In the case of such a nightmare scenario, a distributed network has a key advantage over traditional storage systems: the attacker has to know where the shards are stored in order to retrieve and decrypt them. Those shard locations can be secured separately from the keys themselves, and are essential to retrieving a file. This is where Storj’s security proposition becomes highly relevant again.

The most expensive operation in cloud storage is retrieval. As the network grows, it becomes more difficult to find the shards composing a given file with an uninformed search, meaning that an attacker must make progressively more retrievals to compromise a file. If an attacker’s strategy is random draws, his likelihood of retrieving a given file in n retrievals follows a [hypergeometric distribution](https://en.wikipedia.org/wiki/Hypergeometric_distribution), and can be easily calculated given N, the number of shards in the network, and k, the number of shards in the file. For example, a file composed of 5 shards (k), in a network of 1,000 shards (N) requires 871 retrievals to have a 50% chance of retrieving all 5 shards and thus compromising the file entirely.

To save you some time, we’ve made a [gist](https://gist.github.com/super3/ba2282488a9a3f1994257690b41a121c) that contains a simple script to exhaustively calculate probabilities on networks of arbitrary size (N), with files composed of arbitrary numbers of shards (k) as well as the results of all possible variations up to 100 shards. The results clearly show a linear relationship between network size and the number of retrievals (n) required to reach a specific confidence level.

Applying the same definition of security to the network as a whole, we can say that the number of operations required to compromise a significant portion of the network scales with both the number of files on the network and the security of a file on the network. Since each file added to the network increases overall network security and individual file security, the security of the network scales with the square of the number of files on the network. As the network grows in size, its security as a whole grows exponentially.

In short: because each file added to the network increases the number of operations required to find any given file, as the network grows, it get exponentially harder for an attacker to locate a target file. Adding data to the Storj network is like blowing a handful of encrypted sand onto an encrypted beach - as the beach grows, it becomes much harder for an attacker to find the specific grains of sand s/he wants.

Below is a basic graphical representation of the relationship between network size and the security of both individual files, and the network itself.

![image](/blog/img/lgraf.jpg)

We’re humbled by the 1.7x million growth rate that our network has experienced, the 3.4PB of storage capacity that Storj farmers have contributed to the network, and the exponential increase in the network’s security over the last year. We also look forward to launching commercial operations in July, and continuing to increase the security of our network as developers add large quantities of data to it.

Help us make the Internet more private and secure by sharing storage capacity and storing data on our shared resources. Storj - Sharing:Privacy.
