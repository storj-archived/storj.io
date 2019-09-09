---
title: How To DDoS Yourself
date: '2016-09-30T11:47:00-04:00'
categories:
  - tutorials
authors:
  - Storj
---
We've been dealing with some backend issues recently. Something has been making our Bridge servers hang, which caused even simple requests to time out. This impacted everything from user registration to file retrievals. These time outs manifested as “`502 - Bad Gateway”` errors from our API as the servers accepted connections, and then failed to do anything with them. We spent a lot of time and effort tracking down the root of the issue. Turns out one overlooked variable assignment caused it all.

<!--more-->

When we first noticed the issue, we figured it was somehow load-related. So we added a few more Bridge servers, to spread the load a bit. Contrary to our expectations, scaling up the backend made the issues worse. Every additional node we added exacerbated the problem. And when we cut out every server but one, the problem almost went away. This is the point where we scratched our head and decided it must be architectural rather than load-related. As it turns out, we should have stuck with our initial hunch. It was load. We just didn't understand the load.

**Background**

We use Kademlia for message routing, and a distributed publish/subscribe system called Quasar, based on this [paper](http://research.microsoft.com/en-us/um/people/saikat/pub/iptps08-quasar.pdf). Kademlia has an adjustable timeout which is 5 seconds by default. When a node sends out a message, it waits 5 seconds. If it doesn't hear back within that time, it assumes there won´t be a response. Then it moves on with its life. No node ever has to rely on another node, so they can afford to drop a few calls. In production, we increased the default timeout to 30 seconds. This let us better serve nodes that are behind NATs or otherwise hard to reach, as we don't want to exclude nodes with a little extra latency.

Similarly, Quasar messages have a built-in time to live (TTL). Messages are relayed from node to node until they expire. Once the TTL has passed, the messages are dropped. This keeps stale messages from hanging around the network. When a node receives a Quasar message, it checks to see if it has expired, and then forwards it to 3 other nodes, which in turn proceed to do the same. So 3 nodes reach 9 nodes, which then forward the message on to 27 nodes and so on. The message propagates outwards, reaching more nodes with every relay until its TTL is up.

As nodes relay the message, they also add their node ID to it. This ensures that nodes don't just send a message back to a node that relayed it in the first place. If Alice wants to publish a message, she'll send it to Bob, who will relay it to Charlie. Charlie should never send the same message back to Alice or Bob. He should only send it onward. Unfortunately, this also means that the message grows just a bit with every hop, but usually not enough to make a difference. Unless of course a few hundred nodes relay the message in a row.  
  
Because nodes aren't aware of each other's actions, there can be some overlap in messages. Charlie might receive the same published message twice - once from Alice and once from Bob - because neither can know that Charlie already heard the news from someone else. Charlie  will forward the first copy of the message on to Dinah, Edward, and Frederick, and discard the second copy he receives. However, Charlie still must expend the processing resources to receive and evaluate the message both times.  
  

**The Problem**

Now that we've covered the groundwork, here's where things got out of hand: When we set up Quasar, we had it use Kademlia's timeout for Quasar's time to live. This means that when we increased Kademlia's timeout to help nodes with high latency, we also increased Quasar's TTL. That one reuse caused all the problems. Assuming it takes 2.5 seconds (which is a rather long time) for a group of nodes to relay a Quasar message, the default 5 second timeout allows each message to reach 9 nodes. Instead of 5 seconds, Quasar messages were being bounced around for 30 seconds, and being relayed up to 531,441 times. And when we were scaling up the backend to try to compensate for the 502 errors, we discovered that some messages in the network were being broadcast with a 60 second time to live. This means that Quasar messages were living 12 times longer than expected, and being relayed up to 282,429,536,481 times.

We currently only have about 2000 active nodes in the network. So each one was receiving the same message from hundreds or thousands of different sources. Each publish message sent out was being repeatedly broadcast through every possible route in the network, as nodes exhausted their contact books, and each time the message got relayed, it got bigger. To make things worse, every time we added a new Bridge server to the backend, or increased the timeout, we added exponential amounts of messages to the network, thus increasing the amount of work each Bridge server had to do. It took us a while to realize that our attempt to spread the load and mitigate the issue was instead exponentially increasing the amount of load we had to spread. We unintentionally DDOSed ourselves.

**The Solution(s)**

We're making a few changes to address the issue. We want to fix our backend, but we're even more concerned with ensuring that this kind of message propagation can't be used as an attack on network nodes.

1.  Quasar's TTL will not be set by Kademlia's timeout anymore. This was an oversight in the first place, although it's difficult to say how long it would have taken to discover this attack if we hadn't accidentally pulled it off ourselves. So let's call it a wash.
2.  Kademlia's timeout in the production level will be decreased to a more reasonable level. We set it so high because of quality of service issues in the first place. Now that the network is no longer effectively DDoSing itself, we can lower them again.
3.  Nodes will not rebroadcast publish messages if the TTL is too long. If an incoming message's TTL is longer than the node would set for a new message, the node will drop it. This prevents attackers from setting long TTLs and relying on other nodes to relay them ad nauseam.
4.  Our network nodes will be broken out of our API. Instead of having one service running Kademlia messages and API requests, these will be two separate services that communicate with each other. This ensures that problems with the network nodes will not affect simple API features like user registration and account management.
5.  Billing, auditing, and other services will be separate from the Bridge API. This ensures that problems with the API will not affect other important services, and makes each service simpler and more maintainable.

These steps should address the ongoing quality of service issues, prevent attacks on the network, and make it easier to track down issues in the future. As always, we love feedback via [Slack](http://slack.storj.io/) or by email at [hello@storj.io](mailto:hello@storj.io).  
  
Happy hacking!
