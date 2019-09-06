---
title: So You're a Storage Node Operator. Which Satellites Do You Trust?
date: '2019-08-05T09:40:50-06:00'
image: /blog/img/blog-satellite-discovery.jpg
categories:
  - engineering
authors:
  - Tikh Bana and JT Olio
draft: false
---
One of the most fundamental parts of a decentralized platform is that there is no single authority or owner. In a true decentralized ecosystem, everyone who participates is a critical contributor to the network. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/UWEyxnuFB_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

At production launch, the Storj network will allow anyone to operate a Satellite in addition to the Tardigrade Satellites operated by Storj Labs. Being a Satellite operator is a big commitment with very stringent uptime requirements, much more so than a storage node operator. If a storage node goes offline temporarily, data can still be recovered from other nodes. If a Satellite goes offline temporarily, the data stored by that Satellite could become unavailable. Satellites are also responsible for managing payments to storage nodes storing data for the Satellite as well. 

To understand how storage node operators and third-party Satellites (those not operated by Storj Labs) could best work together, we looked at many different options and surveyed 240 of our users to understand their priorities, needs, and concerns. The general feedback from our community centered on four things: 

1. **Higher payouts** - Participating in a decentralized ecosystem is largely driven by incentives. Higher payouts mean bigger incentives. For storage nodes, working with more trusted Satellites will ultimately mean more STORJ tokens earned.  
2. **Minimal effort** - Whether operating a storage node or a Satellite, community members want simple approaches that don’t require a ton of extra work.  
3. **Maintain control** - Storage node and Satellite operators both value their privacy and anonymity (as much as possible), and don’t want to work with just anyone.  
4. **Trust** - If participating in the network, community members want a way to know who to trust. Without guidelines to go by, they could be exploited or taken advantage of.  

Community feedback told us that we need to balance the privacy of storage node operators with the needs of Satellite operators. Storage node operators want to store data for more Satellites, but they are also concerned that third-party Satellites might not pay them, act ethically, or could create lots of work for them. There are also concerns that working with untrusted Satellites could expose storage nodes to attacks. 

Satellites need to have an easy way to recruit nodes to store data for them when the storage nodes might not even know they exist. They also need to be able to trust storage nodes, but luckily we already have a very extensive reputation system built out within the platform to identify trusted storage node operators. 

Keeping these two things in mind, there were three specific options we explored with these 240 community members: 

#### Opt out 

This is the model currently suggested by our white paper. In this model, storage node operators start out skeptical of untrusted nodes, but ultimately automatically store data for all Satellites. Storage nodes allow a small amount of resources (and thus exposure) to untrusted Satellites, but assuming the Satellite pays reliably, Storage Nodes would over time increase that Satellite’s resource allowance. Storage nodes (initially manually but ultimately automatically) would need to specifically opt out due to payment failures to avoid storing data for Satellites that fail to pay.

**Pros**

* Storage nodes connect to all Satellites by default meaning they will store more data, in theory.  
* Third-party Satellites have more storage nodes at their disposal. 
* Requires the minimum amount of effort initially.  

**Cons**

* Storage nodes are left very exposed to Satellites and prone for abuse. Bad actors could set up a Satellite just to gather data about all the storage nodes, and operators, on the network. Satellites only need to pretend to be good long enough to get personally identifiable information from a storage node such as notification preferences or wallet address. This, in our view, is a pretty big downside. 
* Storage nodes are more likely to store data for Satellites that are not trusted and do not pay storage nodes for the utility they provide on the network. Without additional improvements, every storage node must watch out for itself, and cannot benefit from the experience of other storage node operators working with other Satellites. 
* Storage nodes would need to be very thorough to see if Satellites are actually paying them for the work they provide on the network.  
* Until it is automated, which would not be immediately, this requires the most upkeep, as storage nodes would need to continually unsubscribe from all Satellites that join the network and want to send them data.  
* In a large network, even if storage nodes only provide a small allowance to untrusted Satellite operators, untrusted Satellite operators still have many storage nodes on which to store data. A malicious Satellite operator could start a new Satellite every month and store a significant amount of data without paying anyone. 

#### Opt in - Satellite operator request 

Satellites would recruit storage nodes by sending them requests asking them to store data. Storage nodes would then accept or decline that invite. Storage nodes would need to continually check back to see if they receive more invites. 

**Pros**

* Exposes storage node operators to less risk and intrusion than the opt out model.  
* Less work than opt out.  
* Storage nodes have more control over who they work with. 
* Easy to click a button and begin storing data for a Satellite. 

**Cons**

* Requires upkeep to track new Satellites that join the network.  
* The request section of the storage node operator dashboard, where they accept and decline requests, will likely become very convoluted and filled with spam. 
* Storage node operators would need to check their storage node operator dashboards regularly and spend time researching Satellites requesting that they store data.  
* Storage node operators may only opt in to store data for Storj Labs’ Tardigrade Satellites.   
* No easy way to store data for a larger number of Satellites.  
* Satellite operators must convince every storage node they want to work with to click the button if they haven’t already.  

#### Opt in - Storage node operator select

Satellite operators wait for storage node operators to add their Satellite, at which time they get a new connection. Storage nodes can manually add Satellites by address or through community-hosted lists. Satellites added to these lists would automatically be added to the storage nodes’ list of trusted Satellites. 

**Pros**

* Easier for storage node operators to opt in to a wider range of Satellites using lists. 
* Has a set-it-and-forget-it approach.   
* Better ensures that storage nodes do not store data for bad acting Satellites.  
* Storage nodes choose the Satellites they connect to.  
* Satellite operators only need to convince list hosts to add their Satellite to a list to get access to many storage nodes, instead of every storage node operator. 
* Shortest roadmap and the quickest we can get something to users! 

**Cons**

* New Satellite operators still do not get full access to the network automatically, unlike the original opt out approach. 
* Satellite operators must convince storage node operators and list hosts to add them via other means (there is no in-network messaging system). 

After weighing out all the pros and cons of the options, we decided Door #3, “Opt in - Storage node operator select,” would be the best approach. We believe it better balances the needs of Satellite operators with those of storage node operators.

#### A Twist!, by M. Night Shyamalan

![null](/blog/img/hewasdeadallalong.png)

This third choice had some unexpected ramifications to our network. We currently use Kademlia, a distributed hash table, to enable storage nodes to discover Satellites. With storage node operators selecting which Satellites they work with using addresses directly and trusted lists, we actually eliminate the need for Kademlia! Surprise! The only thing we used Kademlia for was node discovery (although if you read our white paper, it’s not actually a surprise), and node discovery now happens in a way that is better for users. The system remains just as decentralized but can operate in a much simpler and efficient way. 

In the next few weeks, watch for updates to our GitHub that will begin to make these changes. We will also be updating our white paper to reflect the dramatic implications of this product decision. In addition to changing the portions about node discovery and Kademlia, we’ll also be adding a section on Graceful Exit. When we push the Pioneer 2 update, the final beta milestone ahead of production launch, we will have this change implemented and begin letting non-Tardigrade Satellites join the network before production launch. Stay tuned for more details.
