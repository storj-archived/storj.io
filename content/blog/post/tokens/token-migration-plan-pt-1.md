---
title: Token Migration Plan Pt.1
date: '2017-04-19T12:59:00-04:00'
categories:
  - tokens
authors:
  - Storj
---
We have an exciting integration in the works, and with any luck, we’ll need to find more farmers to keep up with the greater demand. The development team is working long nights and weekends to create the tools and protocol upgrades necessary to handle the expected increase in demand.

<!--more-->

In the meantime, it’s time to release our plans for migrating the SJCX token from the Counterparty to Ethereum’s ERC20 standard. This article serves as part two of “[SJCX Transparency Plan Pt.1](http://blog.storj.io/post/150203056528/sjcx-transparency-plan-pt1),” as it describes the next steps we will take to implement a fair and transparent plan for SJCX. We have been collaborating with [CoinFund](https://coinfund.io/), considered the industry leader in crypto-economics, to develop this plan. Over the next few weeks we will provide additional details, and publicly release much of the data and information we used to create this plan.

**Token Migration**

Our new Ethereum token will be created via a standard ERC20 contract. This contract will be reviewed by independent auditors several weeks in advance of the conversion period, and the full code of the contract and webapp will be released under a free software license.

Existing SJCX tokens will be migrated from Counterparty to the Ethereum platform via a web app. Users will generate a new Ethereum address via a supported wallet of their choice, and submit that address via the web app. The application will generate a new Counterparty deposit address. Users will then send their old SJCX tokens to the deposit address, and the web app will issue an equal amount of new tokens to the user’s Ethereum address. The old SJCX will then be burned. Note: We are working on the migration process with exchanges, but recommend users take control of their own funds and migration process for safety. The webapp will be be released on June 20 and available for at least 90 days.

The non-technical properties of the token will remain the same. The total supply of the token will remain fixed at 500,000,000, and all SJCX tokens will be convertible on a one-to-one basis. Storj Share, Bridge, and the protocol standard will be updated to require new payout addresses. We expect to have this migration completed within the token migration period.

To minimize risk, Storj Labs will migrate its token holdings via a separate mechanism. Rather than being issued via the webapp, the tokens will be verifiably burned first, and the total converted will be written directly into the new ERC20 smart contract.

**The Future of SJCX**

We have been working with [CoinFund](https://coinfund.io/) to design a fair, transparent way to address the large volume of tokens held by the company. We’ve developed a plan that takes a few big steps in that direction. As part of this plan, before the Token Migration, we will be doing a Token Sale. At the same time, we will place the majority of tokens held by the company in a time-locked smart contract, rendering them provably inaccessible. We are also exploring proposals to burn a number of these tokens.

Analyst predictions estimate the cloud storage market could surpass $65 billion by 2020 (source: [MarketsandMarkets Research](http://www.marketsandmarkets.com/PressReleases/cloud-storage.asp)). Now that we have a fully functional distributed and decentralized cloud storage platform, we believe this will give us the means to tackle this massive market head-on by building more tools and integrations. [Our high level roadmap was described in the previous post](http://blog.storj.io/post/159566947133/storj-new-protocol-new-opportunities).

As always, we intend to be open about the tokens held by the company. We will be publicly discussing the process that led us to these decisions. The total supply of tokens will not increase. Proceeds from the sale will be used to finance continued development of the Storj network and related tools and services. This token sale will open on Friday, May 19th, and close 1 month later. Tokens will be priced relative to the active market. Additional details and exact terms will follow.

As always, thanks for your support! We are all excited to see what the future holds.  

* * *

**Update 1:** The community has asked us to prepare some models around distribution. We will begin working on that. 

**Update 2:** Previously we stated “30 day volume-weighted average price as of April 19th.” Based on community feedback, we will choose a price closer to the spot price to be more fair to existing token holders.
