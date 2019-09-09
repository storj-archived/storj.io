---
title: 'Introducing KFS: a local file store inspired by Kademlia'
date: '2016-09-23T11:36:00-04:00'
categories:
  - engineering
authors:
  - Storj
---
Our object store is built on a distributed storage network. Nodes on the network, called "farmers," store a lot of files, on a wide variety of hardware. Storj Share, our farming client, runs on everything from Raspberry Pis, to blades in server farms. In addition to the technical challenges of building and maintaining a distributed network, it turns out that writing, reading, and managing thousands of files on the same device presents some interesting problems in itself.

<!--more-->

We started with the simple (and naive) approach: use the file system. Shards were stored as files in a folder. Performance was poor, as expected. After a while we switched to [LevelDB](https://github.com/google/leveldb), which was a huge step forward. It's free software, runs well on low-end hardware, can be embedded, is easily modifiable, etc. etc. It was a huge step up in terms of maintainability and performance.

After a while though, we noticed performance drops sharply after about 100 GiB stored. As the size of the database increases a few things happen. Older data gets pushed down to lower levels, which increases read times. Compaction time scales linearly with database size, blocking most operations while it runs. This leads to long unpredictable hangs when reading and writing. We'd like farmers to be able to fill 4 TB hard drives with remotely-accessible files. Scaling issues at 100 GB are not exactly how we get there.

So we did what any self-respecting hacker would do: wrote a meta-layer to manage distributing data across hundreds of independent LevelDB instances. Yeah, that seems crazy, so bear with me for a minute. Compaction is causing most of the issues, so we thought about ways to bound the time it could run. As mentioned above, compaction scales linearly with database size. One of the best features of LevelDB is that creating, opening, and closing an instance is cheap. So we decided that attempting to modify LevelDB to scale vertically would be a huge mistake. Horizontal scaling is the way to go. After all, who would want one database when you could have 256 instead?

**What is KFS?**

[KFS](https://github.com/storj/kfs/) is the brainchild of our lead engineer, [Gordon Hall](https://github.com/bookchin/), maintainer of [Kad](https://github.com/kadtools), and free-software activist. Unsurprisingly, it is heavily inspired by Kademlia, his first love. KFS is a management system for LevelDB instances that seeks to address the scaling problems. Rather than a single large instance, it shards files across 256 separate size-limited instances, called S-Buckets.

S-Buckets are limited to 32 GiB, giving a total capacity of 8 TiB. They're then indexed 0 - 255. This keeps each bucket well under our 100 GiB scaling limit, and provides a one-byte identifier for each bucket. Incoming files are sorted into buckets using XOR distance (thanks Kademlia!). The first byte of the file's hash is XORed with the first byte of a key. For Storj we use the node's ID as the key, but any arbitrary byte could be used. The resulting byte is the index of the S-bucket that the file "belongs" in. This allows us to quickly and efficiently sort files into S-buckets deterministically and statelessly. It also lets us quickly identify which bucket a stored file is located in.

Opening, and closing buckets is cheap and fast, so we can do it on the fly as files and requests come in. We don't even have to create the bucket until we sort a file into it. Using exclusive-or between an evenly distributed value like a cryptographic hash and a key provides an even distribution of results. This means that buckets fill at approximately the same rate, regardless of index. And any given read or write operation has an even chance of using any particular bucket. Ergo usage and operations are spread evenly (probabilistically speaking) across all buckets, as shown in the chart below.  
  

![image](/blog/img/ch1.png)

  
Within a bucket, files are stored as a set of keyed 64 KiB chunks. For maximum performance of reads and writes, we want to store chunks consecutively. LevelDB sorts lexicographically by key, so chunks are keyed by concatenating an index to their hash. For example, chunk 0 is keyed by `[HASH] 000000`, and chunk 671 is keyed by `[HASH] 000671`. This ensures that all file reads and writes are a series of small, fast, consecutive 64 KiB reads or writes. It also allows for efficient partial reads at arbitrary indexes.

KFS takes the operations, data, and maintenance costs that would be devoted to an individual instance, and distributes them evenly across hundreds of buckets. By distributing the load we can ensure that no individual bucket hits the 100 GiB scalability limit while still storing many large files.

**How'd it work out?**

Horizontally scaling many LevelDB instances has a number of benefits to scalability. Chiefly, it mitigates the impact compaction has on operations. Because compaction runs individually across each instance, rather than across the whole data set, the issues compaction causes for scaling are minimized. Although compaction across the file set as a whole will take approximately the same amount of computation (compaction scales linearly with data), it now occurs separately for each instance. Which is to say, compaction is broken up into 256 smaller processes running independently.

Previously compaction would lock the entire database. With KFS it locks only individual buckets, leaving many others available to read and write. Operations and compaction are distributed evenly across hundreds of buckets, meaning the chance of an operation being blocked by compaction is small. Whereas previously compaction would block the entire fileset for several seconds (or longer on low-end hardware), it now blocks only small sections of the file set for a much shorter time period.  
  

![image](/blog/img/ch2.png)

  
As a result, in our initial tests KFS performs faster for all tested operations and file sizes. It also performs more consistently for writes and unlinks. To reach these conclusions, we ran hundreds of tests with file sizes from 8 MiB to 512 MiB on reads, writes, and unlinks, and we intend to keep testing with a variety of hardware and parameter tweaks. See the full methodology [here](https://storj.github.io/kfs/tutorial-performance-testing.html) (credit to our data scientist, [Patrick Gerbes](https://github.com/pgerbes1)).

We're in the process of rolling KFS out to our farmers. In the future we hope to update the performance information with data from thousands of devices running it in the wild.

As with all our software, KFS is available [on Github](https://github.com/storj/kfs) under the GPL. Additional documentation is available [here](http://storj.github.io/kfs). You can contact the Storj team there, or via [hello@storj.io](mailto:hello@storj.io).
