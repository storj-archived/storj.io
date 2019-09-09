---
title: IP Filtering Keeps Data Distributed
date: '2019-06-25T16:36:16-06:00'
categories:
  - engineering
authors:
  - Stefan Benten
draft: false
---
One of the most enjoyable challenges we face when creating a decentralized platform is building programmatic functionality into the system that would not be needed in a legacy, centralized solution. In a decentralized cloud storage service, many of the core components that would be managed by a centralized solution need to be offloaded to various parts of the network, be it the Satellite, Uplink, or storage node. This includes encryption key management, node vetting, file repair, and storage node selection. 

Part of the node selection process aims to ensure data stored on the decentralized network is thoroughly distributed across the network of storage node operators. For data stored on the Storj network to be truly distributed, we need to look at how data is stored on various geographical scales. This has been a big part of our V3 network testing. A decentralized cloud storage platform isn’t worth much if it’s storing all the data on the same node— if that node goes down, it means the file is lost. 

Let’s talk hypothetically for a moment and say your entire file is stored in a single city. If the power goes out in that city, or a natural disaster strikes, your data will be lost. 

Another hypothetical situation to think about: what if all of your data is stored in the same region? In this scenario, you could potentially lose access to your data in the event of an outage for any reason, whether it’s a utility outage, natural disaster, or state-sponsored “service interruption.” 

With today’s v0.14.3 release, we’ve implemented a feature called IP filtering, which will ensure that no file pieces corresponding to the same file are stored in the same geographical area, based on logical subnets. 

Taking this approach ensures the network (and the data stored on it) remains decentralized with a wide geographical distribution. On the previous network, nodes were selected for new data storage on a per-node basis. Selecting nodes based on logical subnets means having more or fewer nodes in the same location won’t cause more or less data to be stored. A single 40 TB node would receive the same amount of data as 10, 4 TB nodes on the same IP address. 

If you’re storing data on the V3 network, or working on an integration, this means you’re much less likely to lose data. If you’re a storage node operator, this means that you won’t receive any more (or less) data if you’re running one, two, or 100 nodes from a single location. 

To maximize STORJ token earnings in the long run, storage node operators should be focused on maintaining a single node with consistent availability to maximize their reputation ahead of the beta and production launches. Nodes with high reputations will be chosen to store and return more data, which will result in them earning more STORJ tokens in the long run. If your node goes down for whatever reason, it’s not a major problem. Just reconnect as soon as possible to keep your reputation high. 

If you have multiple hard drives storing data on the network, the recommendation is to run one node per hard drive. 

If you haven’t joined the network as a storage node operator, and you have excess hard drive space and bandwidth to share, [join the network and start earning STORJ tokens](https://storj.io/sign-up-node-operator/). It’s not too late to join. We’re just getting started!
