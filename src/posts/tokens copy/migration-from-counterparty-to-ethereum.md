---
title: Migration from Counterparty to Ethereum
date: '2017-03-23T12:42:00-04:00'
categories:
  - tokens
authors:
  - Shawn Wilkinson
---
Over the past couple of months I have been discussing the Counterparty platform with the Storj team and community. A consistent theme of these conversations is discontent with the functionality and usability of the platform:

<!--more-->

1.  The official Counterparty wallet software, Counterwallet, has had no major updates in over two years, and provides a confusing interface for new users.
2.  Last year, multisig ceased functioning because Bitcoin made raw multisig transactions non-standard. Tokens in multisig wallets were rendered inaccessible. There is still no concrete migration path for multisig wallets without direct miner intervention. This makes us worried that other features will cease to function in the future.
3.  Because Counterparty uses the Bitcoin blockchain for transactions, which is currently having issues with transaction backlog, our users have experienced extremely long transaction times (hours to days).
4.  Because Counterparty transactions create small inputs and are heavier than normal BTC transactions, users have [experienced extremely high fees](https://www.reddit.com/r/Bitcoin/comments/5xzmri/insane_fee_to_move_some_storj_from_counterwallet/) for transactions. For the February farmer payout we paid over $1,600 in transaction fees, or about 13% of total payouts. This is not sustainable or scalable.
5.  Our work on micropayment channels for Counterparty offers promising routes to addressing the problems above but is unlikely to be broadly useful. Micropayment networks require broad adoption to be effective and secure. It is unclear whether the Counterparty ecosystem can support a robust layer 2 network.
6.  The Counterparty ecosystem is small. Very few other organizations are using it at scale. To create our micropayment tools, we’ve had to fund large upgrades to the Counterparty protocol. It’s not sustainable to finance protocol upgrades while also developing our network and products.

Many community members and thought leaders have suggested migrating SJCX from Counterparty to the Ethereum ERC20 token standard. ERC20 tokens have been issued by a number of prominent projects including Augur and Golem, and have wide support in the Ethereum development community. Use of an Ethereum-based token offers clear solutions to the problems listed above:

1.  Development is extremely active. Features are added regularly and bugs are dealt with quickly.
2.  Ethereum transactions are usually confirmed in seconds to minutes.
3.  Ethereum fees are currently negligible.
4.  Future layer 2 solutions like [Raiden](http://raiden.network/) are promising, and explicitly support ERC20 tokens.  
    

Furthermore, the Ethereum platform provides many additional benefits: 

1.  The ERC20 standard provides out-of-the-box interoperability with a wide variety of wallets and tools.
2.  Ethereum’s smart contract platform can be leveraged to build a more robust and decentralized storage system.
3.  Future integration with Ethereum opens exciting opportunities to provide data services to smart contracts and [Dapps](http://ethdocs.org/en/latest/introduction/web3.html).
4.  We will participate in a larger community of protocol maintainers, sharing the burden of upgrades with many other engaged organizations. 

In a nutshell, we believe that a simple 1:1 conversion of Counterparty-based SJCX to ERC20 SJCX solves the quality of service issues and allows us to participate in a more active and robust development community. As a result, we will be migrating SJCX to a new Ethereum-based ERC20 token that we feel better serves the Storj ecosystem and its stakeholders.

Over the next few weeks I will be working with the community, the team, and the thought leaders to prepare a clear migration plan. As always, the process will be transparent and public. We understand that there will be lots of questions, so please keep an eye on our announcements for drafts and community hangouts to discuss the process and answer questions directly.  

We believe the technical migration process will be straight-forward. Farmers will use a simple tool to convert their tokens from the old to the new protocol, and then change their payment address in the Storj Share application. We welcome feedback, collaboration, and ideas as we go through this transition. 

**Sidenote**

Back in 2014, when the ecosystem was smaller and Storj couldn’t even afford a plane ticket, I drove up to Blacksburg, Virginia with Bo Shen, now founder of VC firm Fenbushi Capital, for a dev retreat. I got the chance to spend a lot of time with Vitalik Buterin, founder of Ethereum, and chat about our crazy idealistic decentralized platforms and where they might lead. A couple of interesting ideas came out of that meeting.

First, on the sage advice of Bo Shen, we both participated in each other’s crowdsales. Considering the growth of both tokens, that was a pretty good move. Second, Vitalik wrote a very insightful post about how one might build decentralized storage called [Secret Sharing and Erasure Coding: A Guide for the Aspiring Dropbox Decentralizer M of N](https://blog.ethereum.org/2014/08/16/secret-sharing-erasure-coding-guide-aspiring-dropbox-decentralizer/) which I highly recommend reading. Now that we plan on native Ethereum integration, that post is having a lot of impact. Third, I’ve never been that great at statistics, so Vitalik really helped us in the early days with some math that not only showed that decentralized storage is viable, but also that it could be even more durable than traditional centralized cloud storage platforms. Lastly, he left me with a sense that Ethereum was going to be a really strong and useful platform for Storj. Unfortunately, the Ethereum genesis block was created a year after we had a token and the ERC20 standard didn’t exist until late 2015, so there just wasn’t an opportunity to integrate from the start. But we have been watching Ethereum as it grew, successfully overcame The DAO hack, and launched the Ethereum Enterprise Alliance. Ethereum has clearly solidified itself as a great token platform, as well as highlighted some of the awesome advanced features that the blockchain can offer. We are excited for the future, and even more excited for our future with Ethereum. To Vitalik, a personal thanks. To the whole Ethereum ecosystem: it’s time, let’s go and decentralize the data and the world!

**Sidenote Two**

Thank you to Counterparty for supporting Storj throughout its early development stages! 

**Shawn Wilkinson  
CEO/CTO Storj Labs Inc.**
