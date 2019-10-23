---
title: IPFS Now on Storj Network
date: '2019-10-06T18:33:58-06:00'
image: /blog/img/storj-blog-storjipfs.jpg
categories:
  - business
authors:
  - Kevin Leffew
draft: false
---
Developers have been clamoring for a decentralized storage solution for pinning data on IPFS— and the Storj community has answered the call with [storjipfs.com](https://storjipfs.com/).

The IPFS protocol is popular with decentralized app developers as a way to address content from its hash output. While it's merely a way to address files across a DHT (or network of Kademlia nodes), it's usually deployed with Amazon S3 or local storage on the backend. What this means is that decentralized apps using IPFS without pinning to a decentralized storage backend aren't all that decentralized. 

Any time a file is uploaded to an IPFS node, there’s no guarantee the file will persist longer than a few minutes (unless self-hosted on reliable hardware, or backed by a centralized cloud provider). The users of services built on the IPFS network face issues where the data they’re trying to access and share is no longer hosted by any nodes. The reality of IPFS is best illustrated through the [IPFS subreddit](https://www.reddit.com/r/IPFS_Hashes/)— many of the links are dead, because their hosts have gone offline.

 We’re excited to announce the availability of a reference architecture that backs an IPFS node to the Tardigrade decentralized cloud storage service. This guarantees the persistence, distribution, and security of content-addressed data.

You can now upload files to the Storj network through the IPFS system by going to [storjipfs.com.](https://storjipfs.com/)

Our community members created this impressive project and we can’t thank them enough for their efforts.

Traditional IPFS architecture requires copies of a file spread amongst multiple hosts to achieve redundancy measures. While the theory is interesting, in practice, the approach just doesn’t produce the performance and availability required in modern applications. Instead of replicating files to multiple hosts and relying on a single host for file delivery, Storj uses erasure coding and peer-to-peer parallel delivery. [We don’t just think our approach is better, the math proves it](https://storj.io/blog/2019/01/why-proof-of-replication-is-bad-for-decentralized-storage-part-2-churn-and-burn/). 

When an IPFS node is backed by the [Tardigrade Network](https://tardigrade.io), we are able to solve many of the problems that IPFS developers face; problems including data decentralization, data persistence, and default encryption at rest. The Storj network architecture has a native repair system built into it that ensures files remain alive, even when nodes go offline. This reference implementation provides IPFS addressability with durability and reliability on par with the best centralized cloud providers in the industry.

The IPFS gateway isn’t the only solution for developers on the Storj network. When it comes to reliable, performant, secure, and economical storage for decentralized apps, the native Storj platform is the best option. Storj offers a wide range of developer tools, including a CLI, S3-compatible gateway, and Go library with language bindings for C, Python, Node.js, .NET, Java, Android, and Swift.

To gain access to the Storj network and Tardigrade Service, sign up for the developer waitlist here: [https://tardigrade.io/waitlist](https://tardigrade.io/waitlist/).
