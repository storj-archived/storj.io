---
title: Updates to Farmer Payouts and Network Testing
date: '2018-04-12T16:28:00-04:00'
categories:
  - business
authors:
  - Storj
---
At the beginning of this year, our team announced we were working toward an updated architecture that would allow the network to scale to exabyte capacity. As part of this announcement, we also revealed we would be pausing new user signups to ensure accessibility, reliability, and integrity of our current customers’ data. As a provider of decentralized cloud storage, ensuring data integrity is essential, and our current customers who actively store data on the Storj network are extremely important to us as we continue on our path toward re-architecting the network and building different use cases for decentralized storage.

<!--more-->

Today, we are announcing another step in our journey. Up until now, Storj has employed a payment subsidy to farmers to grow the network’s storage capacity which, in turn, allowed us to stress test the network’s capacity, both internally and with the support of the community. The subsidy was always meant to be a temporary feature.

What we found is that the current network architecture can handle much more capacity than we imagined, even though the extra capacity did impact availability at certain times. Thanks to the joint effort of farmers, the internal Storj Labs team, and the broader Storj community, we were able to grow the network to store 101 PB in March, making the Storj network the largest decentralized cloud storage platform in this solar system (that we know of).* What we also found is that the per-payout address subsidy had the unintended consequence of incentivizing the creation of large numbers of nodes that did not provide the performance characteristics necessary for a robust storage network, while reducing the amount of workload and compensation received by the high-quality farmers. Quite frankly, the subsidy rewarded some bad actors who mass created low-quality nodes, while taking away from the good farmers who are the backbone of our network.

**Ending farmer subsidy payments**

As we continue our march toward releasing the next iteration of our network architecture, we are implementing a new approach to testing, design, and compensation, which will focus more on bandwidth, performance, and durability and less on raw capacity.  This change in resource utilization means Storj will no longer provide farmer per-payout address subsidy payments. Existing farmers who signed up prior to today (April 12) will continue to be paid a subsidy until the end of April.

We do realize that some of our farmers may choose to leave the network. We understand if this is their choice and thank them extensively for their contributions to the platform, the community, and our mission of making decentralized applications a reality. However, we believe that the new model will be more rewarding for the good farmers and deliver better overall quality for our users. If the network is going to be successful and sustainable long term, we need a healthy balance between supply and demand. As we continue to build the demand, we hope that the majority of our loyal community of farmers will continue with us on our journey with or without subsidized payouts.

The beauty of decentralized networks is that even if nodes go offline, data will not be lost. Each file shard stored on the network is erasure encoded and replicated, so as a farmer goes offline, the replicated shards take the place of the primary shard. If a specific shard and all its replicated copies are missing, the file can be rebuilt from its remaining shards.

Ending the farmer subsidy has the added benefit of eliminating some issues with certain farmers gaming the system built around our subsidy payment structure—spinning up many nodes with multiple payout addresses to receive multiple subsidies. That was never the intention of the subsidy and we have always taken steps to eliminate these bad actors. Over the next few weeks, we will be completing the review of the subsidy payout for March, which will delay payments. We expect March payouts to be completed by end of April. The delay in the payout isn't something we want to do, but is the result of needing to address the individuals gaming the system. We are working to identify those individuals and they will not be paid multiple subsidy payments.

**Betting the farm on Storj farmers**

Ending the farmer subsidy will greatly improve reliability over the long term by incentivizing only the highly available farmers who store data on the network and contribute to the longevity of the platform.

To be a successful farmer, it is critical to maintain high availability and uptime (keeping your computer or storage device online at all times). The value of a farmer with 99.9 percent availability versus a farmer with 99.99 percent availability increases by more than an order of magnitude.

In the end, the high-availability farmers will earn the most on the network—especially as we release new use cases. Our future testing of bandwidth and file retrievability will help us as we work toward better understanding these particular farmers in advance of launching our V3 network architecture.

**Up next**

Over the next few days to the next few weeks, we will roll out several blogs around our architecture update. Some of these topics include details on an update called SIP9, which will refine farmer scoring models; a guide on how we determine farmer score and how you can improve your score for the storage nodes you run; and details on our new approach to stress testing, which will begin in May.

We thank you all for your contributions to the Storj community and your support as we make decentralized applications a reality!

_—The Storj Team_

_\* To be clear, the network was around 50 PB when we announced the pause in user signups. Most of the new data is temporary or for testing—useful for stress testing our network, but not representative of real usage of the network._
