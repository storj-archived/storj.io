---
title: Sharing Storage Space for Fun and Profit
date: '2019-01-31T11:30:00-07:00'
image: /blog/img/blog-ill-sharing-storage.png
categories:
  - community
authors:
  - John Gleeson
---
The Storj Explorer release, the public alpha for storage node operators, is rapidly approaching. And for waitlist members who are eagerly awaiting their chance to become storage node operators and share their excess hard drive space on the network, that day can’t come soon enough! 

It’s been quite a journey getting from V2 to V3, and the V2 storage node operators (who were previously called farmers) have played a critical part in making that journey possible. These invaluable community members provided the Storj network with not only a steady and consistent supply of storage space, but also valuable data and insights - ranging from telemetry and experience operating a distributed storage network at petabyte scale, to the deep understanding of the economics, incentives and business logic involved. In this edition of the Storj blog, we’re going to talk specifically about the economics of being a Storj V3 network storage node operator.

One of the most common questions we’ve consistently been asked is how much can a storage node operator earn by sharing excess hard drive space and network bandwidth? The answer is that “it depends” (on a number of factors). While it was extremely difficult to calculate earning potential on the V2 network, on the V3 network it’s much more straightforward. 

Of course, by “much more straightforward,” I don’t mean easy. If the dynamics of distributed and decentralized storage were easy, we wouldn’t be the only ones doing it at massive scale. In the spirit of transparency, read on to learn how the sausage is made (or, for the vegetarians in the audience, how the mushrooms are grown). 

The two biggest factors impacting the earning potential of a storage node are the demand from people looking to store data on the network and the number of storage nodes available to supply storage and bandwidth to meet that demand. Any economic ecosystem needs a health balance of supply and demand, and with distributed and decentralized storage, this is especially true.

If you need the full details and math behind why that is, [check out the blog post on how node churn impacts network performance and file durability](https://storj.io/blog/2019/01/why-proof-of--replication-is-bad-for-decentralized-storage-part-2-churn-and-burn). The main idea is that if there is too much supply (too many storage node operators) and not enough demand for the service (people paying for storage and bandwidth) nodes will start leaving the network because they don’t earn enough money for it to be worth the effort. Too many nodes leaving and taking pieces of files offline with them increases the amount of data repair that needs to be done to ensure files are not lost. Too much repair causes network congestion and can impact durability.

#### Balancing Supply and Demand

One thing we did discover with the V2 network is that if you have too much demand and not enough supply, it’s actually not so bad. Word-of-mouth alone was able to activate over 100 PB of supply over the course of just a few week's time. However, as we launch the V3 Explorer release, we’re seeding the initial demand and gating the supply with a [waitlist](https://storj.io/#waitlist).

This is important for prospective storage nodes to understand: **we’re paying storage node operators to store data beginning with the Explorer alpha release (to be released very soon) just as if we were charging for data**. During the beta later this year, partners, developers and other users will begin using the network’s full capabilities and we will begin charging for data stored on the network. 

We’re growing the alpha network slowly at first, but will quickly open access so anyone can join. We’re doing this with a specific objective: to build a supply of long-term, reliable storage nodes with demonstrably high ratings across all reputation factors. (If you want to [learn about what those reputation factors are, we recently published a blog post](https://storj.io/blog/2019/01/reputation-matters-when-it-comes-to-storage-nodes) on that, too.)

#### Three Tips for Storage Node Operators

Before we get into the numbers of how much STORJ you can earn by participating in the network, you’ll want to do three things to maximize your earning potential as a storage node operator:

1. **Join the network as early as possible** - start increasing your reputation as soon as possible to maximize earnings over time  
2. **Work on availability and reliability** - your uptime (the percentage of the time you’re connected to the network) will have a huge impact on your node reputation  
3. **Run the standard storage node software** - we’re an open source project, but if you’re using storage node software that’s been manipulated to create an advantage or game the system, ultimately that will produce a bad result for you and the network 

All of the network incentives, checks, and balances are geared to maximize the economic rewards for storage node operators who do those three things. In an upcoming blog post on updates to the storage node operator terms and conditions for the V3 network, we’ll share the new rules, but rest assured they are consistent with the principles outlined above.

#### Overview of Storage Node Operator Payments

With that foundation established, let’s review how storage node operators earn STORJ tokens on the network. Our goal is to pass along approximately 60% of the revenue generated on the network to our storage node operators. The structure of how we compensate storage node operators has three components, two that carry over from the V2 network and a new additional component - repair bandwidth:

* **Storage** - storage nodes are paid for storing data on the hard drive space they share with the network. Payments will be made to storage node operators in STORJ tokens at $1.50 per TB. Storage payments are calculated based on GB-hours per month, inclusive of the expansion factor resulting from erasure coding the data. So, if you share 4 TB of data on the network, and 2 TBs are utilized by the network for an entire month, that would equal $3 in STORJ tokens.  
* **Egress bandwidth** - storage nodes are paid for the egress bandwidth used when Uplink clients download data from the storage nodes. Payments will be made to storage node operators at $20 per TB. These bandwidth payments are for all data downloaded by Uplink clients as part of the normal retrieval of uploaded data. 
* **Repair bandwidth** - storage nodes are paid for the egress bandwidth used when satellites download pieces of files from storage nodes as part of the repair process. Payments will be made to storage node operators at $10 per TB. These bandwidth payments to storage node operators are for all data downloaded by Satellites as part of the process to repair data that is lost due to node churn.Note that Satellites download pieces from multiple storage nodes, then recreate missing pieces, and upload the new pieces to other statistically uncorrelated, high-reputation nodes. Storage nodes are not responsible for actual data repair. For more information on the details of file repair, [check out the white paper.](https://storj.io/white-paper) 

We’ll be publishing updated pricing for the V3 network as we get closer to the production launch this fall, but, just as with the previous V2 network, all prices to store data on the network are quoted in USD and may be paid in fiat currency or STORJ tokens. Payments to storage node operators are calculated in USD and paid in STORJ tokens.

#### Cost Model and the Effect of Node Churn

While the cost structure is different from the V2 network, the expected payout to storage node operators is expected to remain close to 60% of the price charged for storage on the network. When storage nodes exit the network and take pieces of files offline, the network tracks the remaining number of pieces of files and when the number of available pieces drops below the repair threshold, the network replaces those missing pieces via the repair process.

To execute the repair process, the network Satellite downloads the minimum number of pieces required, and then uses Reed-Solomon erasure coding to regenerate the missing pieces. The regenerated pieces are then uploaded to new, nodes with high reputation. Privacy and security are maintained throughout the process, as repair does not require the file or its pieces to be decrypted. The bandwidth used when the pieces are downloaded from the high quality nodes is paid as repair egress.

Too much node churn can potentially drive up the cost of storage and could even impact durability, which would decrease demand for storage on the network. 

#### Incentive Structure to Reduce Unplanned Churn and Repair

If you haven’t picked up on this from the preceding blog posts and the discussion above, we relentlessly optimize to reduce the impact of node churn on the network. In addition to continuously optimizing the repair processes and erasure code ratios, there are also three additional parts of the incentive model designed to reduce the amount of node churn and data repair. All of these are new with the V3 network.

#### Held Amount Model

With the V3 network, we’re introducing a new component to the payout model to provide storage node operators with a way to exit the network without taking their files offline when they do. This creates an incentive to exit the network in a way that does the least amount of harm to the community. The concept maintains a balance between a very low cost of entry with a way to insulate against the cost of data repair. 

Nodes do not need to provide any up-front stake to start earning STORJ tokens as a storage node operator. Rather, during the first 9 months of storage node operation, a percentage of earnings are placed in a holding account. These funds are held until a storage node operator chooses to leave the network. At 15 months, a portion of the balance is returned to the storage node operator, while the remainder is held indefinitely. 

If the storage node operator uses the graceful exit function (described more fully below) when leaving the network, the funds will be returned to the storage node operator after the exit is complete. If the storage node operator exits the network abruptly without completing the graceful exit, the funds will be forfeited to offset the cost of data repair caused by the storage node exit.

The withholding function is structured with a tiered reduction in withholdings as the amount of time the node is on the network increases. The withholding model is as follows:

* **Months 1-3**: 75% of storage node revenue is withheld, 25% is paid to the storage node operator 
* **Months 4-6**: 50% of storage node revenue is withheld, 50% is paid to the storage node operator 
* **Months 7-9**: 25% of storage node revenue is withheld, 75% is paid to the storage node operator 
* **Months 10-15**: 100% of storage node revenue is paid to the storage node operator 
* **Month 15**: 50% of total withholdings are returned to storage node operator, with the remaining 50% held until the node gracefully exits the network 

The withholding model is designed to incentivize and reward both-long term reliable storage nodes as well as nodes that, when they do choose to leave the network, exit in a way that is least damaging to the network.

#### Graceful Exit

If a node operator unexpectedly shuts down their node when they want to leave the network, the unavailability of the data on the network will contribute to repair costs. Graceful exit is a new function in which a storage node operator who wants to exit the network can trigger a function to return the data the storage node is holding to the network, instead of exiting the network and deleting the data stored by the node.

The sequence of events following the triggering of the graceful exit function is as follows:

1. Graceful exit is triggered by the storage node operator and the node contacts any Satellites for which it is storing data 
2. Each Satellite returns a list of new storage nodes to which the node should upload the pieces of data stored on the storage node 
3. The storage node uploads the pieces to the appropriate nodes and updates the appropriate Satellites when complete 
4. Satellites disqualify the Node ID associated with the gracefully exited storage node in order to signal that the business relationship between the node associated with this Node ID and the Satellite has concluded 
5. Satellites pay out the balance of STORJ withheld during the next pay cycle 

Graceful exit is designed for nodes that intend to permanently exit the network. Ultimately, storage nodes will maximize potential earnings through consistent, reliable, long-term operation. 

#### Disqualification

Disqualification is the negative consequence for storage nodes when the node behavior deviates from the network business rules. The [recent blog post on storage node reputation and node selection criteria](https://storj.io/blog/2019/01/reputation-matters-when-it-comes-to-storage-nodes/) provides a much deeper dive into the different reputation factors used in the storage node reputation. Please take a look (and check out the [V3 white paper](https://storj.io/white-paper) of course) for more detail on the multifaceted statistical model for reputation. Other than graceful exit, there isn’t a single reputation score for disqualification, but rather a nuanced combination of factors in the statistical model. 

The practical impact of disqualification for storage node operators is that a node is unable to transact business with Satellites that have disqualified it. Disqualification for any reason other than a successful graceful exit will always result in forfeiture of withheld funds.

Once a storage node has been disqualified, if the storage node operator wishes to resume operating a storage node in the future, they will need to generate a new node with a new NodeID. This means that the storage node will need to complete proof of work again and go back through the process of establishing withholdings and rebuilding reputation.

Along with the disqualification process, there will be an automated way to appeal disqualifications based on technical errors in very limited circumstances. 

<img src="/blog/img/sno-payment-flow-chart.png" alt="Example Outlines for SNO Payments" width="100%"/>
_The flow chart above outlines the anticipated lifecycle for storage nodes, with the expectation that nodes will operate successfully and profitably on the network for multiple years._

#### Calculating Potential Earnings for Storage Node Operators

Now for the part you really want to know! While this is the section future storage node operators will care about most, (and most of you probably skipped to this part anyway) if you didn’t read the whole article, you’re not maximizing your chances to earn the biggest possible payout. 

In this section, we’re making some assumptions about how we expect the network to behave at scale, but at the same time, we’re trying to be conservative to provide realistic estimates. Real-world performance may differ from the estimates below due to a variety of factors outside our control. While the variables may change, the math is correct. We’ve provided a calculator that lets you model different scenarios on the network to help you decide whether you want to operate a storage node - but if you’re in, be in for the long haul. Long term, reliable storage nodes are what we need to build an exabyte-scale distributed and decentralized storage network.

There are two sets of factors that impact the potential earnings for storage node operators. 

* **Network demand** - The percentage of available storage space used, the types of use cases and how much bandwidth they consume (archive vs. CDN), the amount of node churn, and how frequently data turns over, all impact potential storage node earnings. 
* **Storage node environment** - While the amount of storage space a node offers to share is important, available bandwidth is a much more significant factor in storage node earning potential, and that includes upload/download speeds as well as any bandwidth cap imposed by the ISP. 

In advance of the V3 network launch, it’s difficult to anticipate what the demand will be, but based on our experience with the V2 network and current conversations with demand partners, we’re making the following assumptions for the calculations below:

* **Network demand** - The network will operate at approximately 50% of capacity, meaning that we’ll use about 50% of the storage and bandwidth available on average from storage node operators. 
* **Egress bandwidth** - The network will operate at approximately 50% of data downloaded per month. 
* **Ingress bandwidth** - The network will operate with about 40% new data being uploaded per month, whether representing network growth or replacement of deleted data. 
* **Node churn** - Storage nodes will stay on the network for longer than 12 months on average. 
* **Repair** - The calculations assume that about 10% of data will be repaired on the network each month. 

The following variables and calculated values are used in determining the amount of data and bandwidth a storage node operator can contribute, and in turn, how much the storage node operator could earn based on the above assumptions and available resources:

#### Variables

1. **Storage per storage node operator** - The amount of hard drive space available to share by a storage node. 
2. **Download speed** - The downstream bandwidth available on the network on which the storage node is operating, measured in Mbps.  
3. **Upload speed** - The upstream bandwidth available on the network on which the storage node is operating, measured in Mbps. 
4. **ISP bandwidth cap** - The maximum amount of bandwidth a storage node operator can utilize in a month before being subjected to a bandwidth cap enforcement action such as incurring a financial penalty or being subjected to bandwidth throttling from an ISP. 
5. **Storage node operator bandwidth utilization percentage** - The percentage of the total monthly bandwidth cap that a user will dedicate to be used by their storage node, assuming some percentage of bandwidth will be utilized for other services. 
6. **Egress bandwidth percentage** - The average amount of egress traffic from client downloads based on the use cases we support.  
7. **Repair bandwidth ratio (as a percent of storage)** - The percentage amount of repair traffic on the network, primarily driven by node churn, software or hardware failure. While specific nodes may experience higher or lower repair traffic based on the pieces they hold, this is the average across the network. 
8. **Ingress bandwidth percentage** - The amount of bandwidth available for uploads of new data from clients.  

#### Calculations

1. **Total available upload bandwidth based on download speed (excluding cap)** - The maximum amount of data available for ingress, based on download speed in Mbps multiplied by number of seconds in a month. 
2. **Total available download bandwidth based on upload speed (excluding cap)** - This calculation is the percent of the bandwidth cap a user is willing to dedicate to the Storj network multiplied by the bandwidth cap for ingress. 
3. **Maximum data uploaded per month (TB) based on BW cap x percent available for upload** - This calculation is the amount of data that can be uploaded irrespective of the cap, based on download speed in Mbps multiplied by seconds in a month. 
4. **Maximum data uploaded per month (TB) based on download speed x seconds in month** - This calculation is the percent of the bandwidth cap a user is willing to dedicate to the Storj network multiplied by the bandwidth cap. 
5. **Maximum data downloaded per month (TB) based on BW Cap x percent available for download** - This calculation is the amount of data that can be downloaded irrespective of the cap, based on upload speed in Mbps multiplied by the number of seconds in a month. 
6. **Maximum data downloaded per month (TB) based on upload speed** - This calculation is the percentage of the bandwidth cap required to dedicate to Storj repair traffic times the bandwidth cap. 
7. **Maximum Repair Traffic per Month (TB) based on BW Cap** - This calculation is the amount of data for repair traffic irrespective of the cap based on upload speed in Mbps times seconds in a month. 
8. **Maximum Repair Traffic per Month (TB) based on upload speed** - This is how many months it will take to fill the available hard drive space at the lesser ingress rate of percent of available BW cap or actual throughput. 

It’s worth restating that storage node operators will maximize their earning potential, regardless of their network or hardware, by remaining online as much as possible. All of the examples below [assume the nodes are online 99.3% of the month or more](https://storj.io/blog/2019/01/we-need-great-storage-node-operators-for-the-v3-network-have-you-got-what-it-takes-to-succeed/). What does 99.3% availability mean to you? 5h 6m 48.2s per month can be used for upgrades, maintenance, and moving your storage node to a more prominent place in your home or data center. It’s tight, but not unachievable. Need more time to replace drives or replace the flux capacitor in your NAS? The network will put your node in containment mode for up to 7 days before it gets disqualified. On the other hand, if you’re upgrading the drives every month, perhaps storage node reputation may not be your biggest issue.

The following examples are based on two different storage nodes with different bandwidth caps. Note that the amount of data stored is inclusive of the expansion factor. 

<img src="/blog/img/sno-payments-1.png" alt="Example Outlines for SNO Payments" width="100%"/>

You’ll notice that maximum throughput for upload (lines 11, 12), download (lines 13, 14), and repair (lines 15, 16) can be calculated two different ways - either based on the bandwidth cap or based on maximum throughput speeds up and down. How much you can earn as a storage node operator will always be limited by the lesser of the two possible values. This has nothing to do with Storj, it’s just how the math works.

#### Storage Node Revenue Per Month

Given the assumptions and calculations above, the following table shows how much a 4TB storage node can earn, including the expansion factor for example 1. The table below shows the maximum amount the hypothetical storage node operator could earn in the first year of operating a storage node. The table also shows the amount of withholdings and total amount of withholdings after completing the probationary period.One thing worth noting is that while the larger amount hard drive space does provide the opportunity to earn more income than the smaller amount of shared hard drive space in the second example, It’s the relatively unconstrained bandwidth that really makes a difference.

<img src="/blog/img/sno-payments-2.png" alt="Example SNO 1" width="100%"/>

As you can see, once the storage node has met its 9-month withholding amount, monthly earnings reach approximately $58.80 per month, or $705.60 annually. When the node hits its 15 month mark, half of the $262.08 withheld ($131.08) would be returned to the storage node operator. For someone with a lot of extra storage and bandwidth capacity, it’s a non-trivial amount.

The next table shows the maximum amount a hypothetical storage node operator could earn in the first year of operating a storage node based on the second example. 

<img src="/blog/img/sno-payments-3.png" alt="Example SNO 2" width="100%"/>

In the case of a smaller node in a more bandwidth-constrained environment, once the storage node has met its 9-month withholding amount, monthly earnings reach approximately $8.10 per month, or 97.20 annually. When the node hits its 15 month mark, half of the $34.67 withheld ($17.34) would be returned to the storage node operator. 

#### So, are you in?

This is a lot of information, I get it. This, combined with the other blog posts on [storage node reputation and selection criteria](https://storj.io/blog/2019/01/reputation-matters-when-it-comes-to-storage-nodes/), as well as [success criteria for operating a node](https://storj.io/blog/2019/01/we-need-great-storage-node-operators-for-the-v3-network-have-you-got-what-it-takes-to-succeed/), should be enough for prospective storage node operators to understand whether they want to make the long term commitment to join the Storj network. 

The only thing that could possibly make this easier would be to publish a calculator to help estimate potential earnings for storage nodes based on their storage hardware and network characteristics.

The good news? We have one of those too! Along with this blog post, we’ve published [an interactive calculator](https://storj.io/storage-node-estimator) to help people considering becoming storage node operators decide if it’s right for them. 

Keep in mind, this simple calculator is only an estimate of possible earnings and not a guarantee of any kind. So many factors are involved in payout calculations, from the amount of demand, types of data and use  cases, and general load on the network, to your node and network characteristics and uptime. Actual network behavior is very difficult to predict.  If you decide to become a storage node operator, any payout will be made based on actual data stored and bandwidth used, pursuant to the [Storage Sharing Terms and Conditions](https://storj.io/terms-of-service/).

So, run the numbers. If it works for you, [join the network](https://storj.io/#waitlist) and stick with us for a long time. We may not change how data is stored in the cloud overnight, but with your help we’ll get there, and sooner than you think!
