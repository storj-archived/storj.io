---
title: >-
  We need great storage node operators for the V3 network! Have you got what it
  takes to succeed?
date: '2019-01-17T14:44:38-05:00'
image: /blog/img/want-to-join-the-v3-network.png
categories:
  - engineering
authors:
  - John Gleeson
---
With the the previous version of the Storj network, we learned from experience what it takes to scale a distributed storage network to over 100 petabytes. That experience and expertise has led to the development of the V3 network. As it turns out, the network design for petabyte scale isn’t the same as the design for exabyte scale. There are significant differences in all three peer classes in our decentralized and distributed network. In this post, we will focus on what’s new and different when it comes to storage nodes. With the upcoming Explorer release, the public alpha that will allow storage node operators to join the network and share their excess hard drive capacity, you’re going to hear a lot about what it takes to be successful, so let’s dive in!

![null](/blog/img/i-m-doing-my-part.gif)

As we’ve referenced in a number of previous blog posts and communications,  distributed networks possess some key factors that have a huge impact on efficiency, durability and performance, related to how nodes operate. We’ve communicated extensively on our [design choices around using erasure codes](https://storj.io/blog/2018/11/replication-is-bad-for-decentralized-storage-part-1-erasure-codes-for-fun-and-profit/), and we’ve discussed [the impact of node churn](https://storj.io/blog/2019/01/why-proof-of--replication-is-bad-for-decentralized-storage-part-2-churn-and-burn/), particularly as it relates to bandwidth. Most of these articles have discussed these elements from the perspective of operating the network. As we approach the Explorer release, we’re turning the discussion around to look at things from the storage node operator perspective.

Of the three peer classes, the storage node has the biggest impact on data durability, performance, and ultimately the economic viability of the network. The key to the success of the network really comes down to our ability to synthesize the combination of economic incentives, technology controls and quality software to create mutually beneficial, long term relationships with our storage node operators. In short, we need to ensure that from a Byzantine Altruistic Rational framework perspective, the rational choice for storage node operator behavior is always consistent with altruistic node behavior.

#### Big Changes Across Peer Classes

While the V3 network essentially has the same three peer classes as the V2 network, there are some significant changes to the responsibilities of the peer classes, and there are many new functions that are entirely new or dramatically changed in the V3 network well beyond renaming farmer nodes to storage nodes, the Bridge to the Satellite and the client to the Uplink. It’s worthwhile to go through the changes that have the most impact on what it takes to be a successful storage node operator. The most significant changes that impact storage node operators fall into a few key areas.

#### The Onboarding Experience

The onboarding experience for a new node joining the network has some major improvements, but also a lot of room to grow. Key changes and points of interest: 

* **Installation** - We’ve really tried to streamline the installation process. We’ve dropped the GUI in favor of a simple CLI install in the alpha release. While we expect to release a storage node GUI in the future, our focus has been on building a more robust application with some of the features V2 operators cared about most.  
* **Configuration** - With the new storage node, configuration options are simple, with the minimum number of configuration steps.  
* **Proof of Work/Node ID** - The network is a distributed network. And while we love our storage node operators, the software trusts no one. Storage node Proof of Work is one of a few ways we ensure that only committed storage node operators join the network. Every storage node operator will have to spend at least a couple of CPU hours on average to find a network-valid node identity. 
* **Upgrades** - Upgrades were another sore point on the V2 network and we’ve simplified the upgrade process.  

#### Interacting with Satellites

There has been a complete overhaul of the technical interaction between the storage node and Satellite peer classes in the V3 network.

* **Discovery** - Satellite and node discovery are completely automated and redesigned to use an extremely lightweight messaging protocol.  
* **Kad and the DHT** - More than just a great name for a band, our Kademlia-base DHT has been completely reworked, from the messaging transport layer, to caching and lookup, to how metadata is stored (hint: not using Kademlia).  
* **Bandwidth Allocation Messages** - Accounting for billing and payment are much more secure, requiring signed messages with reconciliation of messages between peer classes.  
* **No More Contracts** - We’ve completely extracted the vestigial construct of storage contracts between Uplink and storage node peer classes. I still have nightmares about contracts on the previous, V2 network. 
* **Audit** - Audit on the V3 network is the real deal. If you want the deep down technical details, please go check out that section of the [V3 white paper](https://storj.io/white-paper). Suffice it to say, there is a statistical model in place that is designed to identify failures with storage nodes. It’s lightweight, efficient with bandwidth, and comprehensive.  
* **Reputation** - On the previous network, reputation was reduced to a composite score which was overly rigid. The V3 reputation function is based on a nuanced, multifaceted statistical model incorporating dozens of reputational factors.  
* **Node Selection Criteria** - Many of the reputation factors are also utilized as storage node selection criteria. Far more sophisticated than the reputation plus latency model of the V2 network, the V3 node selection criteria provides much better statistical data distribution and an optimal distribution of data and bandwidth across storage nodes.  
* **Containment Mode** - Completely new in the V3 network, Containment Mode isolates storage nodes from new storage and bandwidth utilization while an audit is pending. An audit cannot be skipped or avoided, a Satellite will continue to request a specific audit until a successful response or failure is returned.  
* **Disqualification** - Also completely new in the V3 network, storage nodes that fail audits, or drop below disqualification thresholds on one or more reputation factors, will be flagged. Disqualified nodes must restart the onboarding process with proof of work and a new NodeID.  
* **Data Repair** - Probably the most significant changes to the V3 network are the elimination of the [reliance on replication for reasons](https://storj.io/blog/2018/11/replication-is-bad-for-decentralized-storage-part-1-erasure-codes-for-fun-and-profit/)[we covered in detail](https://storj.io/blog/2019/01/why-proof-of--replication-is-bad-for-decentralized-storage-part-2-churn-and-burn/), and the introduction of data repair. These changes are extremely significant because, while this presents an additional opportunity for high-reputation node operators to earn more revenue, it’s also a significant cost and performance drag on the network when there is high storage node churn. This is one of the key drivers for the storage node operator requirements discussed below.  
* **Graceful Exit** - Another new function will make it possible for a storage node to exit the network “graciously,” without taking data with it or incurring data repair. We’ll be describing this more in an upcoming point release of our V3 white paper, as well as the upcoming blog post on the economics of running a storage node.  

#### Working with Uplinks

Having great storage node operators and a ton of available secure, performant, durable, and efficient storage capacity is great, but we’ve also made significant investments in making sure there’s demand to store data on the V3 network. To that end, we’ve made major improvements to the interaction between the storage node and Uplink peer classes.

* **S3 Compatibility** - [Adding S3 compatibility is a huge advantage](https://storj.io/blog/2018/11/s3-compatibility-is-key-to-breaking-into-the-cloud-storage-market/) for the V3 network and gives Uplink clients the ability to upload data directly to storage nodes not only with an S3 compatible interface, but with S3 equivalent or better performance as well. That depends on reliable, performant storage nodes to a certain extent. 
* **Native File Sharing** - The entire security and authentication mechanism for communication between peer classes has been completely re-architected as well, introducing entirely new mechanisms including the use of macaroons. One significant side benefit to this work is not only to enhance path encryption, but also to enable native file sharing by leveraging contextual caveats. 
* **File TTL** - No one is going to miss the storage contracts from the previous network, especially now that file uploads act just like any object storage platform - files persist until they’re deleted. You can set a TTL on any object, and when you combine that with macaroons and caveats, you get some really powerful and granular control. Oh, and we also rebuilt garbage collection to make sure your valuable storage capacity isn’t wasted on junk data. 

Of course, that’s not all that’s new and improved in the V3 network, those are just the main things to highlight for the new class of storage node operators who will be sharing storage and bandwidth on the network. We want to make sure new storage node operators have the context for the heavy emphasis on building a supply of reliable, long-term storage nodes. So, now that you have that context, let’s get into some of the specifics around what it takes to be a successful storage node operator.

#### Minimum Hardware Requirements

We’re publishing a set of recommended minimum and preferred requirements for V3 storage nodes. We didn’t publish requirements like these for the previous V2 network because of two really good reasons:

1. There was no way to enforce the requirements 
2. We didn’t have a good reason to recommend requirements 

Since the early days of the V2 network, we collected a ton of data on the actual network behavior. What we’ve found so far is that the telemetry, monitoring and measurement of the V3 network puts the capabilities of the previous network to shame. We’re not actually raising the bar for entry to the network from V2 to V3. We’re just being much more transparent on the types of nodes that will be most successful on the network - both in terms of economic rewards for storage node operators, as well as allowing the network to achieve durability, availability and performance levels equivalent to, or better than, the mega-cloud competition. So, what does it take to be successful?

#### Minimum Recommended Storage Node Requirements:

* A minimum of one (1) processor core dedicated to each storage node service 
* A minimum of 500 GB with no maximum of available space per node 
* 2 TB of bandwidth available per month; unlimited preferred 
* 5 Mbps bandwidth upstream 
* 25 Mbps bandwidth downstream 
* Online and operational 99.3 % of the time per month (MAX total downtime of 5 hours monthly)  

#### Preferred Storage Node Requirements:

* A minimum of one (1) processor core dedicated to each node service 
* A minimum of 8 TB and a maximum of 24 TB of available space per node 
* 16+ TB of unmetered bandwidth available per month; unlimited preferred 
* 100 Mbps bandwidth upstream 
* 100 Mbps bandwidth downstream 
* Online and operational 99.5% of the time per month 

Does this mean we can’t have a successful network comprised of Raspberry Pis with USB hard drives? Of course not! In fact, we have some really interesting blogs coming up on running storage nodes based on these types of lightweight devices. The reality is that we’ll have a wide range of participants on the network, from data centers to the aforementioned Pis. We’re trying to provide some guidance on how you can be most successful. While we’re in a guidance-providing mood, here are some other good things to keep in mind.

We’ve optimized the V3 network to provide the maximum amount of storage and bandwidth allocation based on the operation of a single node in a bandwidth-constrained environment. This means that running a single node per location (where one location = a discrete network with separate IP address and bandwidth/bandwidth cap) will yield the best results (highest reputation, most storage contracts from satellites and most earned STORJ tokens) for storage node operators. Operating multiple nodes may result in any combination of the following technical issues:  

* Operating multiple nodes within the same network may result in the less data and bandwidth utilization, as the nodes may effectively compete with one another for bandwidth. The resulting increase in latency may cause nodes to be unable to successfully respond to storage allocation requests or download requests. 
* Running multiple nodes on a network may also result in exhausting bandwidth caps. 
* Nodes with insufficient bandwidth may respond with insufficient speed to audit and uptime checks, which will be detrimental to their reputation score. 

Storage node operators that attempt to run multiple storage nodes on the same IP address or location will ultimately find they are less profitable than following the recommended deployment. Doing this will likely result in reduced reputation, and potentially disqualification. 

Why bother with these restrictions? At first pass, it seems heavy-handed, but we’ve been researching this for years and [the math just won’t budge](https://storj.io/blog/2019/01/why-proof-of--replication-is-bad-for-decentralized-storage-part-2-churn-and-burn/). Distributed and decentralized storage networks must [relentlessly optimize for bandwidth constrained environments](https://storj.io/blog/2018/11/replication-is-bad-for-decentralized-storage-part-1-erasure-codes-for-fun-and-profit/). These recommendations and rules are designed to maximize the health of the network and the profitability of storage nodes for storage node operators.

#### Long-term, Reliable Operation

Ultimately, the best thing for both the network and storage node operators is a large number of highly available and reliable storage nodes with plenty of bandwidth that are widely distributed and statistically uncorrelated. Of course there is plenty of room for different types of supply-side partners, including business networks and data centers. The more diversity there is, the better off the V3 network will be as whole.

#### A Brief Word or Two on Economics, Incentives and Terms and Conditions

This blog has focused almost exclusively on the rationale for the attributes of a successful storage node. There is a lot of information to share as we approach the Explorer release, and it doesn’t stop here. Stay tuned for the next upcoming episode of Storj Blog on reputation and node selection criteria. We want to be as transparent as possible so that our storage node operators know all of the factors that determine which nodes get preference for allocated storage and bandwidth. We’ll also be releasing a earnings estimation calculator in the coming week's so you can plug in the parameters of your storage rig and network to find out how much you can earn as a storage node operator - and yes, we’ll blog about that, too!
