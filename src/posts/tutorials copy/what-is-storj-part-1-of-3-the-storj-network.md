---
title: 'What is Storj?  Part 1 of 3: The Storj Network'
date: '2016-06-30T11:10:00-04:00'
categories:
  - tutorials
authors:
  - Storj
---
_This is part 1 of a 3 part series. This part covers the core technology and the network, parts 2 & 3 will cover the toolsets and the people involved._

* * *

Storj (pronounced: storage) aims to become a cloud storage platform that can’t be censored, monitored, or have downtime. It is the first decentralized, end-to-end encrypted cloud storage platform.  

<!--more-->

Storj is made up of  a bunch of interlocking pieces working together to create a unified system. As people interact with various parts of this system, they get a different idea of what Storj is. A home user doesn’t need any knowledge of the Bridge or of the protocol in order to share storage space, and a developer doesn’t need to know anything about the home users in order to use the Storj API. Each person can have a drastically different experience while interacting with the same system. So what is Storj? It’s a protocol, a suite of software, and the people who design, build, and use it.

**The Storj Protocol**  

Storj’s core technology is an enforceable, peer-to-peer, storage contract. It’s a way for two people (or computers) to agree to exchange some amount of storage for money without knowing each other. We call the computer selling space the “farmer,” and the computer purchasing space the “renter.” The renter and farmer meet, negotiate an agreement, and move data from the renter to the farmer for safekeeping.

**Contracts & Audits**  

A contract has a set duration. Over this time, the renter periodically checks that the farmer is still available. The farmer responds with a cryptographic proof that it still has the file. Finally, the renter pays the farmer for each proof it receives and verifies. This process of challenge -> proof -> payment is referred to as an “audit,” as the renter is auditing the farmer’s storage. At the end of the contract period, the farmer and renter are free to renegotiate or end the relationship.  

While the core technology allows for any type of payment, some types are better suited than others. Traditional payment systems, like ACH or SEPA, are poorly suited to paying on a per-audit basis. They’re slow, hard to verify, and often come with expensive fees. The ideal payment method for the Storj Protocol is a cryptocurrency micropayment channel. It allows for extremely small payments that are immediately verifiable and secure, with minimal fees. This means that payments and audits can be paired as closely as possible.

Enforcement follows a simple tit-for-tat model: if the farmer fails an audit, i.e. is offline or can’t demonstrate that she still has the data, then the renter doesn’t have to pay. After all, he’s no longer getting the service he was paying for. Similarly, if a renter goes offline, or fails to make a payment on time, the farmer can drop the data, and look for a new contract from someone else. As long as both parties are following the terms of the contract, everyone ends up better off.

Pairing the payments directly to the audits minimizes the risk of dealing with a stranger. If the file gets dropped halfway through the contract, the renter only paid for the service actually performed, as proven by the audits. He needs to find a new farmer, but is not out any significant amount of money. If a renter disappears or stops paying a farmer, the farmer has received payment for all her previous services already. She’s only missing one audit payment, and the time it takes to find a new renter to buy that space.

**The Storj Network**

To enable renters and farmers to meet each other, the contracting and negotiation system has been built on top of a distributed hash table (DHT). A DHT is basically a way of self-organizing a bunch of nodes into a useful network. We’re using a modified version of an algorithm called [Kademlia](https://prestwi.ch/kademlia-and-colors/).

Instead of having a central server register every node and coordinate all contracts, the DHT lets farmers and renters broadcast their contract offers to a wide group of nodes. Interested nodes can easily contact the person who made the contract offer. That way farmers and renters can find any number of potential partners, and buy or sell storage space on a broad permissionless market.

To find a partner, a node can sign an incomplete contract and publish it to the network. Other nodes on the network can subscribe to certain types of contracts (i.e. types they might be interested in) and respond to these published offers. This model is called publish-subscribe or pub/sub. Nodes can easily determine what contracts they’re interested in, and forward on contracts to other nodes they think might be interested.

Together, the contracting system and the network form what we call the _Storj Protocol_. It’s a description of how nodes on the network behave, how nodes communicate with other nodes, how contracts get negotiated and executed, and everything else necessary to buy and sell storage space on a distributed system. Anyone can implement the Storj Protocol in any way they please. We’d love to see more people using it to build awesome apps and distributed systems.
