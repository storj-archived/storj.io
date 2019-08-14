---
title: Taking Payments to The Next Level with Raiden
date: '2018-12-11T13:18:27-07:00'
image: /blog/img/raiden-blog_next-level.png
categories:
  - tokens
authors:
  - Shawn Wilkinson
---
At Storj, we are building a next-generation decentralized cloud storage platform. We make decentralization possible by enabling anyone to rent out their extra hard drive space, similar to how you would rent out an extra room on Airbnb, or your car on Turo. One of the challenges we face is implementing a payments system that is accurate, timely, and can scale to millions of users.

In October, our CTO Philip Hutchins published an article in Forbes about [creating scalability on the Ethereum blockchain](https://www.forbes.com/sites/forbestechcouncil/2018/10/02/creating-scalability-on-ethereum/#504c0b655226), which detailed some of the difficulties and challenges we've experienced sending token payments to our hundreds of thousands of storage node operators. Every month, Storj pays the nodes for the bandwidth and storage capacity provided. At the time of peak usage of our V2 Storj network ([we are currently working on a ground up rewrite called V3](https://storj.io/white-paper)), we were sending payments to over 150,000 nodes in more than 180 countries and territories. The current version of the Ethereum network can processes about 15 payments per second, meaning if the network only handled our STORJ payments, it would have taken the entire Ethereum network over four hours to complete all those transactions. At the peak of our payment processing, our transactions accounted for about 8% of all Ethereum transactions.

The transaction fees associated with these payments also had a major impact on our business. The [Ethereum network fees reached a peak of $5 a transaction](https://bitinfocharts.com/comparison/ethereum-transactionfees.html), which, when multiplied by the number of payments (150k), amounts to a total of $750,000 in fees. We prefer not incurring the equivalent of one and half 2018 Lamborghini Aventadors in fees just because we have a particularly busy month in Ethereum.

Thankfully, with the creativity and hard work of many at Storj, we were able to get by.  Overcoming this obstacle also required the Storj community to exhibit understanding  and patience, especially during peak saturation times when several payments were delayed  until transaction fees became  reasonably low enough for us to initiate  payouts. Although the endeavor was ultimately successful, this is  a process  that no one is eager  to repeat going forward.

Although this solution is in place, we're not out of the dark yet. We foresee both  rapid growth of the Storj network and inevitable periods of peak level Ethereum fees on the horizon. These conditions can once again interfere with our ability  to process payments in a timely and efficient manner (and frictionless payouts are a core feature  of our network). With that in mind, the Storj Strategy Team (whose mission is: _solving tomorrow's problems today_), undertook development of  our next-generation payment system.

**Exploring Micropayments**

After extensive research, we found that a micropayment-based approach  holds the most potential for success. Micropayments are a way to pay for many small transactions between parties. A nice example of this is  buying a drink at a bar. You allow the bartender to swipe your credit card, and you get your beer. Then, when your friends arrive, and you buy  3 beers for them, and then 5 more for the next wave of friends, the drinks are tallied, but the transaction is deferred. So by agreeing to this open tab, which you will later close with one transaction, multiple purchases which occurred over a period of several hours are conveniently reduced to a single transaction. In terms of the Storj network, this means we will keep track of numerous payments _off-chain_, and then sum them into an **on-chain** transaction that is of course trustless and resistant to fraud.

During our research, we learned that here are many talented teams working on solutions around blockchain-based micropayments, including L4, Lightning Network, and Raiden. When we began evaluating the different platforms as a possible solution for our particular concerns, we were profoundly impressed by all of their work

The Raiden platform stood out because it was furthest along in development, and allows us to easily pay in our native STORJ tokens (the token used for all node storage and bandwidth payments). We were honored to meet the Raiden team at the Web3 Summit and Devcon 4 this year. We are quite grateful for their development support and educational assistance, as well as their feedback and help so far.

**Scaling Tests**

As we stated before, we've already successfully sent as many as 150,000 payments a month on the current Storj network (V2). So we decided it made sense to begin testing Raiden with 1,000 payments, then ramp up to 10,000, and finally 100,000 payments, which approximates the scale that we previously established. The scripts we used for these tests can be found [here](https://github.com/stefanbenten/raiden-on-storj/) and we invite anyone who needs to process massive volumes of payments to check them out. We hope our efforts will be in some way helpful to you.

<img src="/blog/img/raiden-node-payment-channel.png" alt="Payment Channels with Raiden" width="100%"/>

For our initial round of tests, we set up two Raiden nodes, created and funded a micropayment channel between them, and then used these nodes to send a defined number of payments  to completion. We found that, after this process was finished, we could send a payment between the nodes at an average rate of about one every 1.5 seconds. Here are the raw results:

* **1,000 payments** in 25 minutes
* **10,000 payments** in 4 hours and 11 minutes 
* **100,000 payments** in 44 hours and 30 minutes

Although we encountered some issues early on in our tests, we made fairly simple adjustments, and were able to scale our throughput up to production-level on the current network.

**Next Milestones**

This demonstration proves we can send 100,000+ payments over a single channel with minimal friction. Moving forward, we will open channels and send payments to 100,000 active nodes. This test will be significantly more challenging, and we look forward to the lessons we'll learn. Future posts will examine these additional tests, and the high-level design for implementing Raiden in the Storj payment system.

Our goal is to provide quick, reliable, and cheap payments for everyone in the Storj ecosystem. While micropayments as a technology is still in its early stages, it looks like a promising solution. We are extremely grateful for the Raiden team's help and support as we accelerate toward a decentralized future.
