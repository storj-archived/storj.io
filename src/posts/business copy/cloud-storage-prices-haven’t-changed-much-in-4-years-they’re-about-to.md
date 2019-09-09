---
title: Cloud Storage Prices Haven’t Changed Much in 4 Years but They’re About To
date: '2019-04-24T16:30:40-06:00'
image: /blog/img/blog-storage-pricing-1.jpg
categories:
  - business
authors:
  - John Gleeson
---
During our Q2 town hall earlier this month, we received a couple of emails inquiring about pricing for the V3 network. We haven’t announced pricing yet, but we can share some information about the breakdown of the costs, and how pricing works in a decentralized network, along with some important details for partners and app developers in terms of the mechanics of billing and invoicing.

#### Break it down for me

Unlike traditional cloud storage, Storj Labs doesn’t operate a bunch of data centers, or even one. Instead, we rely on a network of storage node operators contributing unused network bandwidth and hard drive storage capacity. What that means is, instead of paying for buildings, hardware, and bandwidth, our direct costs are mostly limited to paying our storage node operators. We’ve published a number of blogs [on the economics of operating a storage node](https://storj.io/blog/2019/01/sharing-storage-space-for-fun-and-profit/), ([and we even have a calculator for that](https://storj.io/storage-node-estimator/)), but this blog is really about how we pass those savings along to developers.

#### What’s the difference?

With traditional cloud storage, a file is stored in a data center somewhere. When that file is accessed, it is downloaded in its entirety through a single network pipe all at once. If too many people access that file (or other files) in that data center, the network connection can become congested and performance can suffer. 

Decentralized cloud storage is fundamentally different in that a single file is stored as hundreds (or even thousands) of encrypted pieces spread over hundreds or thousands of statistically uncorrelated storage nodes. Those pieces are downloaded in parallel from those storage nodes, and that translates into a considerable performance boost since the bottleneck shifts from server-side to client-side, where bandwidth is typically much less constrained.

This is accomplished through the use of erasure codes, which, [in addition to ensuring file durability in distributed systems](https://storj.io/blog/2018/11/replication-is-bad-for-decentralized-storage-part-1-erasure-codes-for-fun-and-profit/), are also extremely useful for performance and availability. How does that work? By default, we use a 29/80 erasure code ratio and 64MB segment size. That means any file under 64MB is broken into 80 pieces, of which any 29 can be used to reconstitute the file or segment. When a file is downloaded concurrently by different applications or users, each user will be downloading pieces from the fastest storage nodes to deliver 29 pieces–but not necessarily any of the same storage nodes. The default settings are ideal for the most common general data storage use cases where files may be downloaded up to a thousand times per month. However, once download rates go above this level, the load put on a group of 80 nodes becomes excessive and node failure is a real threat. We’ll talk more below about how erasure codes make it easy to address this risk and the pricing implications in greater detail below.

This architecture is designed to both provide high durability and reduce coordination and latency for excellent performance and availability. And the best part? Even though files are encrypted client side, they are streamed in and out of the network, meaning we can support a wide range of object storage use cases without compromising data privacy or security.

Our default configuration results in an expansion factor of 275%, meaning that for every TB that’s uploaded to the network, we store 2.75 TB. Downloads don’t have an expansion factor. When you download that 1 TB file, you only download 1 TB of data, it’s just faster and more available. If you want blazing fast downloads, you may end up with a little more than 1 TB downloaded because the Uplink requests pieces from more nodes than needed, to make sure you get the fastest possible storage nodes. This approach minimizes latency and significantly reduces the long tail effect.

We’re using our Vanguard Alpha through our beta to measure and analyze the optimal erasure code ratio for the most common use cases. Once that process is finished, we’ll publish standard pricing and provide a calculator. But that’s not where the pricing discussion ends.

We’re a metered service. We charge for data stored on the network in Gb-hours (GbH) per month. Bandwidth is a little easier–we just charge for actual egress bandwidth. What happens if the default erasure code ratio settings don’t provide enough throughput for the performance or availability requirements of a particular use case? Well, it’s as easy as just changing the erasure code ratio and segment size. Continuing the thought from earlier in this blog, higher performance and availability are simply a factor of having more and/or smaller pieces. If 29/80 isn’t right for a given use case, 40/160 might be a better fit. With more pieces, the file is spread over more nodes and will deliver higher availability and performance. 

Of course, that file also has a higher expansion factor–400%. That file will cost more, but this model provides a much simpler, more flexible, and predictable cost for object storage. It’s more flexible since app developers can tune storage exactly to their use case instead of being forced to choose between infrastructure-limited choices of archival, general, or CDN with no in-between. Moreover, app developers don’t have to configure multiple storage repositories in different data centers with various access controls, different management interfaces, and pricing structures to meet the needs for their particular use case. Regardless of whether the use case requires high performance, high throughput, or just plain old high durability, we provide one simple interface to achieve it.

Probably the most desired feature on our roadmap is something planned for later this year–dynamic scaling for hot files. We already have a file repair function that can recreate pieces that may be lost if a node fails or leaves the network unexpectedly. Reed-Solomon erasure coding allows us to recreate pieces without having access to the content of the encrypted file. What that also allows us to do is dynamically scale the erasure code ratio up or down, depending on how much a file is being downloaded. App developers will be able to choose dynamic availability as an option.

A file that was uploaded with a 29/80 erasure code ratio could be dynamically scaled to 29/160 or 29/400 depending on demand, then scaled back down to 29/80 automatically. The coolest part is that if you just add in geo-targeting for storage nodes, you have a CDN! And yes, we’re going to do that, too.

#### How will billing and invoices work?

Once we’ve dialed in the optimal erasure coding ratios, developers will be billed for the actual use of storage in GbH per month. Higher expansion factors will cost proportionately more to account for the increase in costs to store that data. Bandwidth will be billed for actual use. Overall, we will be priced so that we provide the optimal configuration that delivers the durability developers expect from cloud storage with a better user experience, better privacy, security, and performance at a price that’s about a third less than the mega-cloud providers. 

Developers will be able to check their usage in near-real-time from their Satellite accounts and pay their bills with either a credit card or STORJ tokens, all via one simple web interface. If you want to find out how much you’re going to love using and managing your cloud storage from your Tardigrade Satellite, try it out during our Vanguard Alpha. You’ll be able to create a project and get 25 GB of storage and bandwidth for free. If you’re on the waitlist, the wait is almost over–invites are going out now! If you’re not on the waitlist, [join now](https://tardigrade.io/waitlist/) and you’ll get your invitation to try it soon!

#### A word on Tardigrade Satellites

We recently launched our new Tardigrade brand. Tardigrade is our brand for the Satellites operated by Storj Labs and its partners. Tardigrade Satellites offer predictable pricing, high availability, excellent performance, and reliable durability. While we expect the community to operate additional Satellites, only the best-operated and highest-quality Satellites will feature the Tardigrade brand.

#### What’s next

We will be using the Vanguard Alpha to load up the network with data, analyze performance, and tune the system for the optimal balance of performance and value. Along with the Vanguard Alpha participants, we will performance and stress test the network to generate incredibly valuable data and build our supply of storage node operators. We’ll be publishing pricing and a calculator for developers and partners in the coming weeks, but for now, you can test drive our distributed and decentralized cloud storage for free. Of course, we’re always looking for feedback and contributions–so if you try it and there’s a feature you’d love to see, let us know, or better yet, build it and [contribute to our open source project on GitHub!](https://github.com/storj/storj)
