---
title: Reputation Matters When it Comes to Storage Nodes
date: '2019-01-21T13:56:39-07:00'
image: /blog/img/reputation-on-storj-v3-network.png
categories:
  - engineering
authors:
  - John Gleeson
---
Joan Jett and William Shakespeare would have made absolutely terrible Storj V3 network storage node operators. Joan just doesn’t give a damn about her reputation, and Bill? The guy was great with words but not so good at math. But, I digress. Today on the Storj blog, we’re talking about the wholesale changes to reputation and node selection for the Storj V3 network. What’s new you ask? Everything!

#### Overcoming the Challenges of the Previous Network

Reputation and node selection are two areas where we’ve made some of the most significant changes between the V2 and V3 networks. With the previous V2 network, reputation was reduced to a composite score, which was overly rigid. The V2 reputation system was highly efficient, but to a fault. The single factor and point system for raising and lowering the score was targeted for manipulation as the reputation increased directly as a result of platform transaction success or failure. Without a logarithmic component to reputation increase and decrease, a number of attack vectors were introduced.

The previous node selection method was similarly limited, relying primarily on reputation plus latency. While this node selection model was efficient and optimized for performance, data was largely concentrated in geographic proximity to the upload client, even after the distribution of data across statistically uncorrelated nodes. This caused more remote regions of otherwise quality storage nodes to remain underutilized. 

The V3 reputation function is based on a nuanced, multifaceted statistical model incorporating dozens of reputational factors. Many of the reputation factors are also utilized as storage node selection criteria. Far more sophisticated than the reputation plus latency model of the previous network, the V3 node selection criteria provide much better statistical data distribution and an optimal distribution of data and bandwidth across storage nodes. 

#### The Life Cycle of a File

Before we provide details on the specific reputation factors and selection criteria, it is worth discussing the points in the life cycle of a segment of data where reputation and node selection criteria are most relevant. 

When a file is uploaded to the network, it’s first broken into 256 MB segments. The 256 MB segments are encrypted client side by the Uplink client, then broken up into 95 erasure-coded pieces. The Uplink client requests 95 storage nodes to which it will stream the pieces from the Satellite. The Satellite performs a statistical analysis of the nodes and then returns the list of 95 nodes to the Uplink client. The Uplink client attempts to upload the 95 pieces but stops after 80 of the pieces are uploaded. Even though the Satellite returns the best 95 storage nodes, the Uplink client further optimizes for the fasted 80. Of those 80 pieces, only 29 are actually needed to recover the file based on the Reed-Solomon erasure coding scheme.

Subsequently, when the Uplink client attempts to retrieve the segment while downloading the file, it requests the segment from the Satellite. The Satellite performs a statistical analysis of the nodes holding the segment pieces and returns a list of 35 nodes. The Uplink client requests the pieces held by the 35 nodes, but stops after receiving 29 pieces from the fastest 29 nodes.

It’s worth noting that by over-requesting nodes for upload and download, the Upload client is able to maximize the performance benefits of the bittorrent style parallelism, communicating directly with multiple peers. In addition to optimizing for performance, this technique is also optimizing to reduce coordination and the long tail effect. The network minimizes the amount of unnecessary bandwidth utilized for the over-requested pieces. 

The Satellite keeps track of all of the nodes storing the segment pieces, and keeps count of available pieces of the segment as storage nodes leave the network, are disqualified, or otherwise become unavailable. The number of remaining pieces continues as more nodes leave the network until the number of pieces reaches the repair threshold. This is the number of remaining pieces at which repair is triggered, in this case 35.

#### Repairing Data for File Durability

Data repair is probably the most significant new function on the platform that interacts with reputation and selection criteria on an ongoing basis, continuously optimizing storage. The data repair function rebuilds data as storage nodes abruptly leave the network, are disqualified, or otherwise become unavailable. 

When repair is triggered, the Satellite downloads 29 pieces from nodes based again on a statistical analysis of the remaining nodes. While the selection process for nodes for normal egress is biased for performance, repair traffic does not need to be fast. Repair traffic is optimized to select slower, but otherwise reliable nodes that do not receive high volumes of egress traffic. The Satellite re-encodes the segment from the 29 pieces and rebuilds 16 additional pieces. The 45 pieces of the segment are then uploaded to storage nodes optimized for both reliable storage on repair-oriented nodes and performance-oriented nodes. While the Satellite can re-encode pieces, the data is still private and secure because the Satellite can’t decrypt the segments since the Satellite never has the encryption keys.

Due to the different modes of operation for which the Satellite is optimizing client uploads and downloads, in addition to repair uploads and downloads, a single-factor reputation and latency-driven node selection criteria do not provide sufficient flexibility for the different use cases.

One other important thing to consider is that in addition to optimizing for performance, efficiency, durability, etc., all of these interactions are taking place in an ecosystem of entirely untrusted nodes. We use the Byzantine Rational Altruistic model for nodes, assuming most nodes are rational, and only a few are Byzantine. A single-factor reputation system is extremely limited in its ability to put in place the controls, incentives, and verifications required to effectively drive rational nodes to altruistic behavior patterns, while simultaneously discouraging Byzantine behavior. The reputation service is the tie that binds the repair service with its corollary, the audit service. The statistical model is one of the key pieces that allow the V3 network to handle this complexity at exabyte scale.

#### The Details Behind the Statistical Model for Reputation and Node Selection

So now that you have the context, let’s take a look at how the factors are leveraged in the statistical model for reputation and node selection. These reputation factors are the elements that impact the amount of data stored and bandwidth utilized by a storage node. Each of the factors below share a common set of attributes:

* **Frequency** - How frequently is the reputation factor updated 
* **Timing** - When is the reputation factor updated in the node's lifecycle on the network 
* **Duration** - The amount of time required to establish or update the reputation factor 
* **Location Issued** - The entity on the network that assigns or establishes the reputation factor 
* **Where Stored** - Where the artifact or data associated with the reputation factor is stored 
* **Artifact** - The description of the data or object that is used to validate the reputation factor value 
* **Value Range** - The minimum possible and maximum possible values that are used to evaluate the reputation factor 
* **Tardigrade Minimum** - The minimum possible values that are used to evaluate whether a node will be allowed to store data for a Tardigrade Satellite 
* **Reputation Factor Score Unit** - The unit of measure for the reputation factor 
* **Disqualification Threshold** - The threshold at which a storage node will be moved to disqualified state based on a given reputation factor 

The reputation factors that are included in the reputation and node selection statistical model are: 

* **Proof of Work** - The amount of CPU on average required to generate a node identity that Satellites will approve for receiving data. Proof of work is a mathematical challenge that must be solved by a storage node prior to joining the network.  When proof of work is complete, the result of the proof is  hashed and a NodeID is generated.  The NodeID includes proof of the degree of difficulty of the proof of work effort in the NodeID generation. 
* **Node Vetting** - The process by which new nodes that have not yet passed many audits are given extra redundancy to allow them to build a history of successfully passed audits. Nodes are scrutinized more during the first 30 days, as the longer a node is on the network, the higher the probability it will continue to be on the network. 
* **Audit Failures** - The count of failed audits since NodeID creation. 
* **Incomplete Delivery** - The count of bandwidth agreements below standard piece size for a Node. This measures the frequency with which a node is selected for a piece upload or download, but for which the entire file is not transferred. Typically, this occurs when the node has the highest latency in a segment transfer cohort, and a sufficient number of other nodes respond and complete the transfer. 
* **Uptime Check Failure** - The count of Kademlia pings to which a node does not respond.  Nodes are pinged by satellites prior to every file transfer.  
* **Latency** - Latency is measured via ping response time to a Satellite.  Latency is a much less significant part of the node selection and reputation algorithm.  
* **PUT Selection Count** - The count of times a NodeID is sent to Uplinks for PUT requests/uploads. 
* **Successful Put (Count)** - The count of successful PUT requests to upload a piece to a node; note that piece upload events also generate data across multiple factors. 
* **Successful Get (Count)** - The count of successful GET requests to download a piece to a node; note that piece download events also generate data across multiple factors. 
* **In Containment Mode (State)** - Value stored about a node when it has been sent an audit request and it has not responded within a predetermined time; The audit will repeat until a successful response is received; If no response is received before the deadline, the audit request will expire and the node will be disqualified from doing business with that Satellite. 
* **Available Storage** - Amount of available storage space shared per node. 
* **Invalid Bandwidth Report (Count)** - The count of bandwidth agreements that a storage node has attempted to submit to a Satellite that are rejected as invalid for any reason.  
* **Node Age** - Age of storage node in count of days since NodeID creation; effectively total time on the network, at or above minimum SLA. 
* **Repair Egress Request Success Count** - The count of pieces downloaded from a node for file repair transactions. 
* **Repair Egress Request Failure Count** - The count of times a storage node fails to respond to a request by a Satellite for a piece to initiate file repair. 
* **PUT Selection Count** - The count of all requests by Uplinks to upload a piece to a storage node. 
* **PUT Selection Success Count** -The count of times a storage node successfully responds to a request by an Uplink to upload a piece. 
* **PUT Selection Request Failure Count** - The count of times a storage node fails to respond to a request by an Uplink to upload a piece.  
* **PUT Selection Success Count Ratio** -  PUT selection request count divided by PUT selection request failure count. 
* **GET Selection Count** - The count of all requests by Uplinks to download a piece to a storage node. 
* **GET Request Failure Count** - The count of times a storage node successfully responds to a request by an Uplink to download a piece.  
* **GET Selection Success Count** - GET selection request count divided by GET selection request failure count. 
* **Get Selection Success Count Ratio** - GET selection success count divided by GET selection count. 
* **Total Audit Count** - The total count of audit requests made to a storage node. 
* **Audit Success Count** - The count of audit requests made to a storage node to which the node successfully responds.  
* **Audit Failure Count** - The count of audit requests made to a storage node to which the node does not respond successfully. 
* **Audit Success Ratio** - Audit success count divided by total audit count. 
* **Total Uptime Count** - The count of requests for Kademlia uptime pings, which are issued every time the overlay cache successfully or unsuccessfully connects to a node and every time a node is selected for an audit. 
* **Uptime Success Count** - The count of successful responses to Kademlia uptime pings.  
* **Uptime Success Ratio** - The count of successful responses to Kademlia uptime pings divided by the total number of pings.  
* **Escrow Amount Percentage** - Percentage of months of escrow withholdings completed. 

As is clear from the list above, there is a lot more to reputation and node selection in V3 than there was in V2.  In addition, we will be incorporating additional factors into the node selection and reputation models, including more information on the storage nodes, such as geography.

Transparency around the reputation factors on the new V3 network is very important for us for two main reasons. First, it reinforces the node characteristics that we need for stable, performant and durable object storage - high availability, sufficient storage and bandwidth, long tenure on the network. Second, it provides visibility into enforcement mechanisms in place that correspond to the economic incentives on the network. Essentially, the design is a set of incentives, checks and balances to ensure that the most economically rewarding behavior on the network - the rational behavior - is the same as the altruistic behavior.

Each of the reputation factors - individually and in combinations - are continuously analyzed for failure of thresholds. When failure conditions are detected, there are two enforcement paths:

* **Containment Mode** - If a node fails to respond to an audit request where the Satellite requests a specific data range of a specific stripe within a piece, that node will be placed in containment mode until it responds to that specific audit request. When a node is in containment mode, the node will not be allocated any additional data, egress bandwidth or repair bandwidth. The node will be issued no payments while in containment mode. The only way to exit containment mode is to respond successfully to the specific audit request. 
* **Disqualification** - If the statistical analysis detects failure conditions such as audit failures, insufficient uptime, or other conditions indicating the node is unreliable, the node will be disqualified. When a node is disqualified, there are a number of economic and practical consequences, most importantly the node identity is permanently invalidated. All data is removed from the node and the storage node operator must start over with proof-of-work and a new identity.

The important takeaway is that reputation and node selection criteria are far more sophisticated in the V3 network than in the previous V2 network. The reputation factors and enforcement mechanisms are designed to maximize the economic value of operating a good, quality storage node for the storage node operator. The cost of trying to cheat or game the system is much higher than economic reward, in the event the cheat was successful. 

In an upcoming blog post, we’ll explore the economics of operating a storage node - how much nodes can make given the characteristics of the node and network environment within a given set of assumptions about the level of use and the types of use on the network. That post will share some sample scenarios and will be published with a calculator for evaluating the economics of operating a storage node. Before we get to that, we can only offer this general advice when it comes to storage nodes - plug it in, turn it on, keep it running at all times, and don’t mess with it.
