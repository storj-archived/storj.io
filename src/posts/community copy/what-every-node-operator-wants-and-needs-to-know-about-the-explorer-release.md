---
title: What Every Node Operator Wants (and Needs) to Know About the Explorer Release
date: '2019-01-25T15:27:44-07:00'
image: /blog/img/blog-storage-node.png
categories:
  - community
authors:
  - Brandon Iglesias and John Gleeson
---
We asked and you answered! The results of the Storage Node Operator Survey are in. We have a long [waitlist of storage node operators](https://storj.io/sign-up-farmer) interested in sharing their hard drives and bandwidth on the Storj V3 network. We asked this group of future storage node operators some questions about their network environment, hardware, available storage, and a number of other data points that will help us understand what we can expect on the launch of the Explorer release. In this post, we’re going to share what we learned and what it means for the network. In addition, since our future storage node operators were kind enough to share this information with us, we’re going to provide some more detail on the upcoming release.

![null](/blog/img/survey-you-win.png)

#### The results are in: There is a lot of storage capacity out there

We received an overwhelming response to our storage node operator survey with 4,258 total responses. The good news is that the overwhelming majority met the recommended minimum requirements to run a storage node, and a large number exceeded the preferred recommendation. While you can read all about [what we expect it will take to be a successful storage node operator on the V3 network](https://storj.io/blog/2019/01/we-need-great-storage-node-operators-for-the-v3-network-have-you-got-what-it-takes-to-succeed/) in one of the other blog posts in this series, it’s worth repeating here. We’ve certainly had a lot of feedback from the community on these, and the discussion has been really good so far! To wit:

**Minimum Recommended Storage Node Requirements:**

* A minimum of one (1) processor core dedicated to each storage node service 
* A minimum of 500 GB with no maximum of available space per node 
* 2 TB of bandwidth available per month; unlimited preferred 
* 5 Mbps bandwidth upstream 
* 25 Mbps bandwidth downstream 
* Online and operational 99.3 % of the time per month (MAX total downtime of 5 hours monthly)  

**Preferred Storage Node Requirements:**

* A minimum of one (1) processor core dedicated to each node service 
* A minimum of 8 TB and a maximum of 24 TB of available space per node 
* 16+ TB of unmetered bandwidth available per month; unlimited preferred 
* 100 Mbps bandwidth upstream 
* 100 Mbps bandwidth downstream 
* Online and operational 99.5% of the time per month 

So, based on the questions we asked the community, how do we stack up? Well, let’s take a look.

**1. Can you dedicate one processor core to operate a storage node?**

**Answer:**

* Yes: 98%
* No: 2% 

We were pretty confident this would be a fairly low bar. We didn’t ask about the quality of that processor, but operating a storage node is fairly low demand when it comes to compute. While we expect a mix of faster processors, low-power devices like Raspberry Pis, and mid-level NAS devices, the one area that this matters is proof of work. Proof of work might be a challenge for the low power devices, but we’ll provide a tutorial for completing proof of work and generating a NodeID on a faster machine, then transfer that NodeID to the low power device. But so far, we're off to a good start.

**2. How much unused hard drive space can you share on the V3 network?**

**Answer:**

* At least 500 GB: 94%

We were happy to see that such a large percentage of our community members have more than 500 GB of storage capacity to share on the V3 network! Based on our survey consisting of 4,258 community members, we will have access to 2 PB of capacity just counting the minimum end of the spectrum. We actually expect that the total capacity will be several times that, once our entire waitlist has been connected to the network. 

**3. How much bandwidth volume can you contribute to the network each month?** 

**Answer:** 

* Less than 2 TB of bandwidth per month: 21%
* 2-16 TB of bandwidth per month: 32%
* Over 16 TB of bandwidth per month: 47%

Bandwidth volume measures how much storage can be uploaded and downloaded from a storage node. It also has the biggest earning potential for storage node operators. We expect that [ISP bandwidth caps](https://storj.io/blog/2018/12/a-free-and-open-internet-is-vital-and-is-under-siege/) are the biggest limiting factor for our community here, namely those that have less than 2 TB of bandwidth to spare per month. In many parts of the US, ISPs artificially limit how much data a user can download or upload in a month, shutting down service or imposing overcharges if the bandwidth cap is exceeded. They impose their limits evenly to all websites and are a big stiffler of innovation for decentralized architectures. While we relentlessly optimize the V3 network to operate in a bandwidth-constrained environment, it’s good to see that 79% of the respondents have more - and in some cases significantly more - than the minimum recommended bandwidth and almost half have the preferred amount of bandwidth. Overall, we’re pretty happy with what we’re seeing on bandwidth availability.

**4. How much upload bandwidth speed can you contribute to the network?** 

**Answer:** 

* Less than 5 Mbps upload bandwidth: 10%
* 5-25 Mbps of upload bandwidth: 42%
* 25 Mbps of upload bandwidth: 14%
* Over 100 Mbps of upload bandwidth: 34%

Upload bandwidth speed is critical to delivering data to developers, partners and other companies and individuals storing data on the network, with low latency. Fast upload bandwidth has the potential to greatly impact earnings for storage node operators. When an Uplink client recalls a file segment when downloading the file, it requests the segment from the Satellite. The Satellite performs a statistical analysis of the nodes holding the segment pieces and returns a list of 35 nodes. The Uplink client requests the pieces held by the 35 nodes, but stops after receiving 29 pieces from the fastest 29 nodes. This is why it pays to be fast! The key is that although download speed is typically higher in asynchronous internet connections, from the perspective of a person uploading a file to, or downloading a file from, a decentralized file system, the upload and download from the client’s perspective are the inverse of the storage node. For example, when a client uploads data to the network, it is technically downloaded to the storage node. Similarly, when data is downloaded by a client, it is technically being uploaded by the storage node.

Again, It’s good to see that 90% of the respondents have more, and in some cases significantly more than, the minimum recommended bandwidth. Overall, we’re pretty happy with what we’re seeing on bandwidth availability.

**5. How much download bandwidth speed can you contribute to the network?**

**Answer:** 

* Less than 25 Mbps download bandwidth: 14%
* 25-100 Mbps of download bandwidth: 39%
* Over 100 Mbps of download bandwidth: 47%

In this response we’re seeing the performance delta with asynchronous internet connections. Only 14% of respondents were below the minimum recommendation for download speed. With 86% over the minimum and almost half over the preferred level, these results bode well for a highly performant network. For storage node operators, fast download bandwidth has a huge impact on the network’s ability to compete on performance with the mega-cloud storage providers. 

Although we get a huge lift on performance from the bittorrent-style parallelism, (especially with downloads, the speeds can be blazing fast), uploads have the additional challenge of the erasure coding overhead. When a 1 GB file is uploaded, we’re not just uploading the 1 GB, [we are also uploading another 1.75 GB of additional data from the erasure coding to provide the required level of durability](https://storj.io/blog/2019/01/why-proof-of--replication-is-bad-for-decentralized-storage-part-2-churn-and-burn/). What that means is we need a lot of storage node operators with fast download speeds so we can provide high performance uploads even with the extra data overhead. 

#### Free and Open Internet Powering Decentralization

It is great to see that so many of our storage node operators have fast, virtually unfettered internet access and such high bandwidth caps. This type of free and open internet will have a huge impact on the decentralized future we all believe in. While we may not be able to use all of that bandwidth from day one, as growth of the network in 2019 will be measured to ensure stability, durability and performance translate into an excellent customer experience. As a result, we fully expect to prove to the market that distributed and decentralized storage will change the game for cloud storage!

#### Launching Explorer - The V3 Alpha for Storage Node Operators

That of course leads us to the next big question of “when.” The Explorer release, the public alpha for storage node operators, is right around the corner. Final testing is underway and we expect to be onboarding the first batch of new storage node operators within the next few weeks. This release will allow people to download the storage node software and start sharing hard drive space on the V3 network. Initially, we will be gating the onboarding of new storage node operators based on our current waitlist to maximize initial network stability. 

With this release, we will begin to build the supply side of the V3 network. Throughout this phase of the alpha, we will be uploading and downloading data to test the performance, stability, and durability of the files stored on the network. We will be paying storage node operators for storage space and bandwidth utilized during this testing, as if we were operating the production network. Specific details on payments and earnings for storage node operators will be shared in the coming weeks. 

From the start, storage node operators will begin to build reputation scores that will determine how much data they are given to store and how much bandwidth allocation they receive. Watch for more blog posts on the details behind reputation, payout calculations, and what it takes to be a successful storage node operator on V3. Here are some specific details on the Explorer release:

* **Timing** - The initial Explore release is scheduled to happen in the next couple of weeks, with the initial invitations to the storage node operator waitlist. 
* **Waitlist Phases** - With the Explorer release, the initial growth of the network for the first month or two will be started from the waitlist, broken out into three main phases spaced out to manage growth and durability.  
* **Gating Process** - The onboarding of the waitlisted storage node operators will include us providing storage nodes with a authorization token that will allow the storage node operator to generate a signed certificate so that they can connect to the network. Once we get through the waitlist and reach a sufficient level of stability, we’ll remove the certificate requirement, allowing anyone to sign up to be a storage node operator on the  network.  
* **Proof of Work** - New nodes joining the network will need to complete a proof of work. The POW requires storage nodes to complete a complex mathematical challenge that produces a hash with at least 30 trailing zeroes, which is then used as the NodeID. This represents a fairly significant effort that we expect a reasonably performant device to complete in 8-10 hours. While more lightweight devices, such as Raspberry Pis, may struggle to complete the POW, this task can be accomplished on a different machine and the ID later transferred to the lightweight device. 
* **Payment** - V3 storage node operators will be paid in STORJ tokens for the storage and bandwidth utilized by the network, beginning with the Explorer release. The payout process will be similar to the V2 process, with payouts being sent for Storj Labs-operated satellites on a monthly basis. 
* **Software Updates** - The storage node software is being deployed as a Docker container to make running and upgrading the software during the public alpha releases as easy as possible. Ultimately, the software will incorporate an auto-update function. 
* **Network Configuration** - The initial release of the storage node software requires manual configuration of network access, including port forwarding. In later releases during the public alpha for storage node operators we’ll be incorporating NAT traversal. 
* **Security** - We’ve engaged a third party security testing firm to ensure that the storage node software is safe to run and won’t introduce any vulnerabilities. In addition, all our code is open source to ensure transparency and maximize community-verified security. 

#### What's in a Successful Launch?

Our definition of a successful launch of the Explorer release is that our community of operators are able to run storage nodes that successfully store and deliver data, they are compensated for the storage and bandwidth utilization they provide to the network, and they build a strong reputation for their storage nodes. Our goal is to build a supply of long-term, reliable and available storage nodes, as well as validate the assumptions around reputation and incentives. The Explorer release is the first step in publicly launching the V3 network, and we can’t wait to see what happens when we get the community engaged!
