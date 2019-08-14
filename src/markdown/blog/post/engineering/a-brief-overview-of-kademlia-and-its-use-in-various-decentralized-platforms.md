---
title: A brief overview of Kademlia and its use in various decentralized platforms
date: '2019-02-14T04:28:00-07:00'
image: ''
categories:
  - engineering
authors:
  - Kevin Leffew and Dylan Lott
---
Kademlia is a distributed hash table implemented in a number of modern decentralized protocols including Ethereum, BitTorrent, Swarm, IPFS and the Storj network.

Kademlia provides a way for millions of computers to self-organize into a network, communicate with other computers on the network, and share resources (e.g. files, blobs, objects) between computers, all without a central registry or lookup run by a single person or company.

Kademlia was designed by Petar Maymounkov and David Mazières in 2002, and is often said to have kickstarted the adoption of the [third generation of flat-hierarchy computing protocols](https://en.wikipedia.org/wiki/Kademlia#System_details), as it is immensely more reliable and efficient than both centralized and flood-based approaches for node discovery and routing.

The distributed nature of Kademlia means that there is no absolute truth where NodeIDs are mapped to their address (i.e. — the routing table is _distributed_), so each node must keep this mapping for a subset of the nodes on the network in its own routing table.

Kademlia-based networks are highly resistant to denial of service attacks and the loss of a group of nodes as the protocol simply routes around the unavailable nodes. This enables a distributed system that creates resiliency against attacks, downtime, and [central points of failure](https://storj.io/blog/2018/11/the-benefits-of-decentralization-go-far-beyond-ideology/).

Kademlia’s big breakthrough was to minimize internode messaging through its use of XOR metric (described in succeeding section) as a means to define distance between points in the key space.

Thus, if the distance is expressed as log2(n) nodes, this means that for a network with 10,000,000 Kademlia nodes, only about 20 hops would be necessary at most for communication with any subset of nodes.

<img src="/blog/img/kademlia-locating-a-node-by-its-id.png" alt="The shortest distance between two points is not always a straight line." width="100%"/>
<p style="text-align: center;">"[The shortest distance between two points is not always a straight line](https://metaquestions.me/2014/08/01/shortest-distance-between-two-points-is-not-always-a-straight-line/)." Image Source: [Maymounkov, et al](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf).</p>
<br>
<br>
Another advantage of Kademlia is that the protocol naturally prefers long-lived nodes over newer entrants. The figure below (pulled from the Kademlia paper) illustrates the fact that the longer a node has been alive, the more likely it is to remain online into the future. 

This preference toward node ‘liveliness’ plays naturally into our distributed storage system where node-churn leads to a scenario where [repair costs must be minimized](https://storj.io/blog/2019/01/why-proof-of--replication-is-bad-for-decentralized-storage-part-2-churn-and-burn/).

<img src="/blog/img/kademlia-probability-of-remaining-online-another-hour-as-a-function-of-uptime.png" alt="Kademlia - probability of remaining online another hour as a function of uptime" width="100%"/>

<p style="text-align: center;">_Image Source: Image Source: [Maymounkov, et al](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf)._</p>
<br>
<br>
The process of joining a Kademlia network requires discovery of only one peer, whereby the node then broadcasts its appearance. The initiator then collects the NodeID from each response and adds it to its own peer table. (This is where the term ‘distributed hash table’ comes from.)

This leads to a third advantage, where Kademlia’s usage of parallel and asynchronous queries prevents timeout delays or ‘retrieval hold-ups’ from failed nodes which have dropped off or left the network.

- - -

Next, I will quickly run through the essential components of the Kademlia network:

#### Kademlia NodeIDs

Kademlia treats each node on a network as a leaf on a [binary tree](https://www.geeksforgeeks.org/binary-tree-data-structure/). Generally, each Kademlia node has a 160-bit NodeID (SHA-1), and its position is determined by the shortest unique prefix of its ID. 

To assign key-value pairs to particular nodes, Kademlia relies on a notion of distance between two identifiers. Given two 160-bit identifiers, x and y, Kademlia defines the distance between them as the XOR. 

From a node point of view, the tree is divided into series of successive sub-trees where the 160th subtree contains the individual node. The Kademlia protocol ensures that each node knows of at least one node on each of its sub-trees. With this guarantee, a node can locate any other node by its ID.

#### Routing Tables and K-buckets

The routing table is a binary tree whose leaves are k-buckets. The structure of the Kademlia routing table is such that nodes maintain detailed knowledge of the address space closest to them, and exponentially decreasing knowledge of more distant address space. 

The symmetry is useful since it means that each of these closest contacts will be maintaining detailed knowledge of a similar part of the address space, rather than a remote part.

K-buckets are a list of routing addresses of other nodes in the network, which are maintained by each node and contain the IP address, port, and NodeID for peer participants in the system. They prefer the longest-lived nodes, which means that one cannot overtake a node’s routing state by flooding the system with new nodes (thus preventing certain types of DDOS attacks).

The routing table size is asymptotically bounded by `O(log₂(n/k))` where n is the actual number of nodes in the network and k is the bucket size, so larger bucket implementations slightly reduce the total number of buckets in the routing table.

#### Inter-Peer Messaging

Decentralized protocols like Kademlia require that peers speak the same language so that they may find each other, recognize one another’s position, and exchange messages. 

The Kademlia protocol consists of four Remote Procedure Calls (RPCs):

1. **PING**: probes a node to see if it’s online 
2. **STORE**: instructs a node to store a key-value pair 
3. **FIND_NODE**: returns information about the k nodes closest to the target id 
4. **FIND_VALUE**: similar to the FIND_NODE RPC, but if the recipient has received a STORE for the given key, it just returns the stored value 

#### Kademlia in Storj

The Storj V3 network is the highly anticipated next release of the Storj distributed and decentralized object storage platform. 

The new network utilizes a modified version of Kademlia as the primary source of truth for DNS-like functionality for node lookup, even though the key/value storage aspects of Kademlia aren't needed for the network.

When building out the previous Storj network, we focused heavily on our implementation of Kademlia, and even built out a [filesystem concept around the protocol](https://storj.io/blog/2016/09/introducing-kfs-a-local-file-store-inspired-by-kademlia/). We quickly became aware of a few of the performance limitations of using modified k-buckets in a distributed storage network and worked around these in Storj V3.

Using Kademlia solely for node lookup eliminates the need for some other functionality Kademlia would otherwise require, such as owner-based key republishing, neighbor-based key republishing, storage and retrieval of values, and so forth.

In addition, in order for the node communication to be [secure and offer complete privacy](https://storj.io/blog/2018/11/security-and-encryption-on-the-v3-network/), each peer must communicate with one another in an encrypted language that only intended participants understand (as to avoid eavesdroppers and man-in-the middle attacks).

For this reason, we have implemented a number of the [S/Kademlia extensions](https://ieeexplore.ieee.org/document/4447808) to enable a secure key-based routing protocol where appropriate.

S/Kademlia also provides a base layer of protection against certain attacks against distributed systems, specifically:

1. **Sybil Attacks**— where a user generates an extreme number of arbitrary identities (NodeIDs) to flood the network. 
2. **Eclipse Attacks** — where an attacker attempts to isolate a node or set of nodes in the network graph by ensuring that all outbound connections reach malicious nodes. 

The S/Kademlia extensions prevent sybil attacks on the address space by creating a minimum work threshold for node generation. Rather than the proof of work implemented in Bitcoin (and similar consensus protocols), storage NodeID generation requires trailing bits of 0s. This allows us to continue to use Kademlia XOR routing.

This slows down the process of adding new nodes and requires an expenditure of compute for NodeID generation, but the result of that work is incorporated into the NodeID. This allows us to continue to use XOR routing without adding extra steps to verify that a NodeID has completed the work.

In defining the V3 network specifications, we consulted closely with Kademlia author Petar Maymounkov, who is also listed as a contributor to the [V3 white paper](https://storj.io/white-paper) (specifically for his work around [section 4.6.1](https://storj.io/storjv3.pdf#page=35)).

Storj protects itself from eclipse attacks by using public key hashes as NodeIDs, signatures based on those public keys, the node vetting process, and multiple disjoint network lookups as prescribed by S/Kademlia and Maymounkov’s contributions.

#### Overcoming Kademlia’s Limits in Storj V3

There are a small set of limitations that we had to design around to create a globally scalable, highly performant, distributed object storage layer.

First, DHTs such as Kademlia require multiple network round trips for many operations, which makes it difficult to achieve millisecond-level response times. 

The overlay cache on a Storj Satellite keeps track of the most recent online nodes. If they’re not found in the overlay cache, then we mark that the nodes must be offline, and therefore the erasure shares are gone, leading into [the data repair process](https://storj.io/blog/2018/12/decentralized-auditing-and-repair-the-low-key-life-of-data-resurrection/).

Interestingly, the storage nodes themselves are decoupled from the DHT caching layer, in the sense that they can communicate and organize without ever coming into contact with a Satellite. However, for client upload/download to occur, they need the coordinating agent (the Satellite) to step in and communicate with them.

With each Kademlia FIND_NODE RPC shared on the overlay, the message includes the storage node’s available disk space, per-Satellite bandwidth availability, and any other metadata the network needs. The node discovery cache will collect this information provided by the nodes, optimizing the lookup speed. 

The participating storage node then performs an extensive vetting process with the satellite to ensure the availability of the resources it has advertised. This process sets the [baseline reputation for the storage node](https://storj.io/blog/2019/01/reputation-matters-when-it-comes-to-storage-nodes/), and factors into [earning potential](https://storj.io/blog/2019/01/sharing-storage-space-for-fun-and-profit/).

Thus, a node that enters the routing tables is considered ‘vetted’ by the network, and lookups only progress through vetted nodes. 

This ensures that only nodes with verified disk space have the ability to enter and participate in the routing layer, while also adding insight into the networks capacity and also protecting against attacks.

#### Kademlia Usage in the Ethereum Protocol

The node discovery protocol in Ethereum’s blockchain network stack is based on a slightly modified implementation of Kademlia. 

Ethereum utilizes the Kademlia’s XOR metric and the k-bucket struct, and similar to Storj, lookup is mostly used to discover new peers. 

In Ethereum, the client stores information about other nodes in two data structures. The first is a long-term database, called db, which is stored on disk and persists across client reboots. The second is a short-term database, called table, which contains Kademlia-like buckets which are always empty whenever the client reboots.

Notably, Ethereum’s initial Kademlia implementation was [vulnerable to the eclipse attack](https://eprint.iacr.org/2018/236.pdf), whereby an attacker generates a set of Ethereum NodeIDs, and then uses a coordinated strategy to cheaply launch eclipse attacks from two host machines, (each) with just a single IP address.

Storj is able to avoid this because of the aforementioned [4.6.1](https://storj.io/storjv3.pdf#page=35) and S/Kademlia extensions, where the Satellite vetting process and Proof-of-Work certificate generation makes the cost of NodeID generation non-trivial for potential attackers.

#### Kademlia Usage in InterPlantary File System Protocol

The InterPlanetary File System (IPFS) also uses Kademlia, with Coral DSHT and S/Kademlia extensions. In IPFS’s implementation, the NodeID contains a direct map to IPFS file hashes. Each node also stores information on where to obtain the file or resource.

A number of projects are looking to utilize the Storj network as an object store for IPFS. One of the more notable is RTrade, which is building out a [Storj-backed IPFS node](https://gateway.temporal.cloud/ipfs/QmeFisZdZuHmnwaXEUBCaMJmoHQLLPn3DJfNiYwdCug5iG) to ensure the availability and durability of its IPFS files.

#### Kademlia Usage in the Swarm Protocol

The primary objective of Swarm is to provide a sufficiently decentralized and redundant store of Ethereum’s public record, in particular to store and distribute dApp code and data, as well as blockchain data.

Participants in the Swarm network are identified in the Kademlia DHT by the hash of the Ethereum address of the Swarm base account. This serves as their overlay address, the proximity order bins are calculated based on these addresses.

Rather than large object storage, Swarm is best suited for smaller data bits associated with Ethereum smart-contracts. 

Swarm uses a max 4k shard size, and a TB is roughly 1,000,000,000 kbs. Thus, for a larger object, say 1TBs, to be uploaded to Swarm, it would require 250,000,000 nodes (which is only slightly less than the population of the United States).

In comparison, Storj is better suited for storing large objects, as we just need to find enough nodes to cover the erasure shares.

Swarm also implements a concept known as the _neighborhood of responsibility_ which employees a novel [redundancy strategy](https://swarm-guide.readthedocs.io/en/latest/architecture.html#redundancy) to ensure availability given node churn. From our experience operating the previous Storj network, we learned that shard replication can be an [inefficient way to ensure file durability](https://storj.io/blog/2019/01/why-proof-of--replication-is-bad-for-decentralized-storage-part-2-churn-and-burn/), especially in an environment with node churn and upstream bandwidth constraints.

#### Conclusion

One of the best ways to learn more about Kademlia is to see it in action. You can [join the Storj network](https://storj.io/sign-up-farmer) to share unused storage and bandwidth and operate a node on our network.

Hopefully this post acts as a good overview of Kademlia and its application in modern distributed platforms. Kademlia and the XOR metric is a great and efficient tool that is utilized in modern networks Storj V3, Ethereum, IPFS, and Swarm for lookup, routing, and node discovery.

- - -

_Have any comments, or a code change you think would make Storj better? Please send a pull request along. All of our code for the Storj V3 network is open source, and you can check out our current Kademlia implementation through [our repo on GitHub](https://github.com/storj/storj)._

_You can learn more about Kademlia usage in Storj by checking out our [V3 Network White Paper](https://storj.io/white-paper)._
