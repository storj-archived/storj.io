---
title: The Role of Qualification Gates in Getting to Beta and Beyond
date: '2019-08-22T03:55:00-07:00'
image: /blog/img/gates.png
categories:
  - engineering
authors:
  - Ben Golub
draft: false
---
Today marks a really exciting day for Storj Labs. We launched the first beta of our V3 Storj software, and we simultaneously launched the beta for our Tardigrade Cloud Storage Service, which is (we expect) the first of many decentralized storage services built by many organizations using Storj software.

This post discusses the very important qualification gateswe’ve established for each of our major milestones: Pioneer 1 (beta 1), Pioneer 2 (beta 2), and Voyager (production). It also discusses where we stand in terms of meeting those gates.

#### Background

Our goal with Tardigrade is ambitious: we aim to deliver the first truly enterprise-grade, decentralized cloud storage service. This means we not only have to deliver on the security, scale, and privacy promise of decentralization, but must also deliver enterprise-class durability, availability, performance, and support. This also has to measure up or be comparable to the well-established cloud service providers—and we also aim to do it at a fraction of their price. We also need to provide the proper economic support and incentives to our large and growing network of storage node operations, open source partners, and demand side partners.

This isn’t an easy task. Introducing any new storage technology is very difficult and cloud storage has an even bigger uphill battle, especially given the well established and generally well-regarded cloud services offered by some of the largest companies in the world. Hitting these lofty goals on a decentralized network, with enterprise-grade characteristics is much more difficult than building a centralized cloud service. In fact, it really hasn’t ever been done before. 

Storj’s V2 network (launched in 2017) achieved scale rapidly. We reached 150 PB of capacity, over 100,000 globally distributed nodes, and steady usage faster than expected. However, we didn’t deliver durability and performance comparable to the centralized players. And the expansion factor of eight in V2 (i.e., we consumed 8 GB of total storage for every 1 GB stored) made it difficult to make the network work economically. To ensure that the V3 network is sustainably enterprise-grade, we took a different approach. We’re S3 compliant, have an expansion factor of 2.7, and have the promise of far better durability, performance, and availability. We’ve also proceeded much more deliberately, with an emphasis not only on code and on network growth, but also on network quality, stability, and performance. One of the important elements in achieving this has been the adoption of qualification gates.

#### Qualification Gates

If you listened to our [last town hall](https://www.youtube.com/watch?v=S5coCag7vR4), you’ve learned that we established a formal series of qualification gates for our two Tardigrade betas and this has informed us going into production. In general, you only get one chance to win customers over in the cloud storage space. So, to help ensure that we’re truly enterprise-grade, we’re holding to these gates. The gates are specific, objective criteria that we must meet in order to officially move into a particular phase. With this post, I’d like to go into a bit more detail as to what our gates are for the various phases and where we stand now.

We established a set of 15 gates for going into each of our major phases. 

A subset of those gates you’ll find outlined in the table below. In the first column, we list the gates. In the second column, we list where we’re at now. In the third through fifth columns, you’ll see our gates for entering Pioneer 1 (beta 1), Pioneer 2 (beta 2), and finally Voyager (production). Any item in green has been met. 

You’ll see that we’ve not only met all of the gates heading into beta, but in many cases, we’ve also met or exceeded our gates for beta 2 and production.

<img src="/blog/img/launch-gates-chart.png" alt="Storj Labs launch gates for beta 1, beta 2, and production." width="100%"/>

A few notes of explanation about the gates:

#### File Durability

This is perhaps the most important gate. Our goal is that no file is ever lost. After doing our last major alpha release 2.5 months ago, we haven’t lost a single file or segment (i.e. durability of 100%). Our production goal is 99.9999999% (Nine, nines—meaning you’re far more likely to win the lottery or be struck by lightning than lose a file on Tardigrade).

We measure durability not only by randomly downloading large numbers of files, but also by looking at segment durability. While the random test is a sample, the segment durability looks at the entire population of segments. 

As a reminder, each file is broken up into one or more segments of 64 MB each. Each segment is (using Reed Solomon) divided into 80 pieces, of which any 29 can be used to reconstitute the segment. Each part of the 80 pieces is located on a different storage node in the network. A segment would be lost if the number of available pieces dropped below 29. However, long before that point, we would initiate a repair process by reconstituting all 80 pieces.  In theory, we should  never lose a file, since nodes have low correlation risk, operating on different hardware, different power supplies, different networks, with different operators, etc.  

As you can see from the graph below, we constantly measure the number of pieces available for segments in our network. We report the median number of pieces for each segment, the distribution of pieces, and the segment with the lowest number of pieces. This means the “least healthy” segment has never dipped below 57 pieces, and the median is holding steady at around 75. As is the case with many of our metrics, durability should only improve as we add more nodes to the network and a broader distribution of nodes.

<img src="/blog/img/segment-health-percentiles.png" alt="Figure 2: Segment Health Chart (Segments must have a minimum of 29 pieces to be reconstituted)." width="100%"/>

Figure 2: Segment Health Chart (Segments must have a minimum of 29 pieces to be reconstituted).

#### Service Availability

Service availability measures the availability of Satellites. We’re currently at 99.95% availability on production Satellites (meaning the service as a whole should only be unavailable for four minutes in any given month). Our production goal is 99.995% (i.e., the service should only be unavailable for two minutes in any given month, or about four seconds per day).

#### Segment Retrievability

This measures how many attempts to download a segment per day are successful. We test a randomly selected segment every minute, and (so far) are seeing success rates of above 99.93% (i.e. less than one attempt out of one thousand isn’t successful on the first attempt). This doesn’t mean the file is gone (durability is 100%); it just means a second attempt is necessary. Generally, this is because the Satellite isn’t available or fewer than 30 nodes are available to serve pieces (either because they are temporarily offline or because they’re at max capacity). While we’re at our production goal, we’re trying to take this number even higher to ensure retrievability for very large files that are composed of multiple segments. Retrievability should also improve as we add more nodes to the network. 

#### Upload Performance

We measure the time it takes to upload a 10 MB file and then we repeat this test for 100 files. We then compare the results to AWS, which is generally considered the gold standard for centralized cloud service. We not only look at the median time to upload, we also look at the long tail performance. Across a really broad range of file sizes and locations, we are comparable to (and at times faster than) AWS.For a beta, that’s pretty encouraging. Moreover, we have a really tight distribution.  Our 95th percentile time is only .16 s slower than our median time. (i.e. the slowest 5 files uploaded almost as fast as the median). This points to the power of decentralization and should only get better as we add more nodes and continue to add nodes that are distributed closer to the end users (ultimately, the speed of light becomes a factor).

![null](/blog/img/gates-chart-1.png)

The above results are uploading from a location in Virginia (i.e. Eastern US) in conjunction with a satellite in Iowa (i.e Central  US)

When we look at Uploading from Belgium to a satellite in the Iowa, the times still look really good.

![null](/blog/img/gates-chart-2.png)

NB: We intend to publish results for different file sizes and different geographies before Beta 2.  We’re also exploring [COSBench](https://github.com/intel-cloud/cosbench) benchmarking.

#### Download Performance

We measure the time it takes to download and reconstitute a 10 MB file. We repeat this test for 100 files, and then compare the results to AWS. Across a really broad range of file sizes and locations, we are comparable to (and at times faster than) AWS. Our median download time is 1.69 seconds. We’re especially excited about our tight distribution. Our 95th percentile time is only .19 s slower than our median time. (i.e. the slowest 5 files uploaded almost as fast as the median). This points to the power of decentralization and should only get better as we add more nodes and continue to add nodes that are distributed closer to the end users (ultimately, the speed of light becomes a factor).

![null](/blog/img/gates-chart-3.png)

The above results are downloading to a location in Virginia (i.e. Eastern US) in conjunction with a satellite in Iowa (i.e Central  US)

When we look at downloading to a location in  Belgium in conjunction with a  satellite in the Iowa, the times still look really good.

![null](/blog/img/gates-chart-4.png)

NB: We intend to publish results for different file sizes and different geographies before Beta 2.  We’re also exploring [COSBench](https://github.com/intel-cloud/cosbench) benchmarking.

#### Proven Capacity

Our SNO operators have offered up over 8 PB of capacity to the network. However, in keeping with our “trust but verify” approach, we tend to look at proven capacity. Both Storj Labs and our partners have uploaded a lot of test and production data to the network during the alphas. (Over 2 PB of data to the network.) Our production goal is to be at 6 PB proven capacity, and we expect to exceed that goal by a wide margin.

Note that while we believe the capacity of the network is significantly higher, we held ourselves to this more conservative, proven number. This number is more than an order of magnitude lower than the V2 network, which had a capacity of 150 PB at its peak. While we have several partners and beta customers with several petabytes of capacity, we’re aiming to grow the network more gradually, so that we generally only have about three months of excess capacity at a time. This helps us ensure that all nodes are receiving economically interesting payouts. 

#### Number of Vetted Nodes

This is the number of currently available, vetted nodes. When a node first joins the network, there is a probationary period, during which the node has to prove itself (e.g. maintaining a certain uptime and performance levels, passing all content audits). During that vetting period, the node only receives  as small amount of non-critical data. Once vetted, a node can start receiving more data (and not just test data), but must continue to maintain uptime and audit requirements to avoid disqualification. The number of vetted nodes in the table above (over 1,500 nodes now), excludes any probationary nodes, any nodes temporarily offline, any nodes that have voluntarily quit the network, and any nodes that have been disqualified (e.g. due to missing uptime or audit requirements). Our production goal is 5,000 nodes—still a fraction of the V2 number.

#### Vetted Node Churn

Our current node churn (excluding probationary nodes) is 3.07 %. Our beta 1 gate was 5%, and our beta 2 gate is 3.0%, so we’re almost there. We’re not yet at our production goal of 2%, but we’re getting close.. Our system is very resilient to having any individual nodes (or even a significant percentage of nodes) churn. However, performance, economics, and most statistics all do better as we bring average node churn down.

#### Other Gates

We have a wide variety of other gates. These include gates around code quality and test coverage, user and storage node operator set up success rates, various capabilities, payment success rates, peak network, and more. We also have gates around enablement of non-Storj Labs Tardigrade Satellites, and are aiming to be [“Chaos Monkey”](https://en.wikipedia.org/wiki/Chaos_engineering)  and even “Chaos Gorilla” resilient before production.We hit all seven gates for Beta 1, and have hit an additional two gates for Beta 2. 

#### Caveats

We’ve achieved results to date on a fairly small scale network, with ~75 users testing the network in addition to ourselves (including a large number of OSPP partners). We have over 11,000 developers on the waitlist, including some very large customers with very large data requirements. As we scale up, we certainly expect to hit some hiccups and encounter unexpected issues, which is why we’ve added an extra beta cycle and are cautiously increasing the rate at which we add new users and new SNOs to the network. However, signs are looking really positive, and we hope to take most of the brakes completely off in the next couple of months.

Stay tuned! If you have additional suggestions for gates or measurements, please send our way!
