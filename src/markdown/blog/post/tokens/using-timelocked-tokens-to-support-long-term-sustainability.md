---
title: 'Using Timelocked Tokens to Support Long-term Sustainability '
date: '2018-12-10T08:42:28-05:00'
image: /blog/img/timelock.png
categories:
  - tokens
authors:
  - Ben Golub
---
As stated in our [previous post](https://storj.io/blog/2018/12/introducing-the-storj-token-balances-and-flows-report/), a number of different ecosystem participants must have long-term confidence in the STORJ token for the network to achieve its potential. We want storage node operators to operate their nodes for a long period of time. We want users to feel comfortable buying long-term storage with STORJ tokens and, we want to encourage demand partners and Satellite operators to build long-term businesses around STORJ tokens. As a result, we think it is important to build a degree of long-term predictability into the flows of STORJ tokens.

We have previously discussed the major reserves and flows of STORJ tokens, and the policies, procedures, and governance around those flows.

This post is about the largest reserve of STORJ tokens, the 245 M STORJ tokens currently in a 6-month lockup. That lockup ends mid-December of this year. Previously, every time this tranche of tokens came unlocked, we relocked the entire set for another 6 months. The lock is cryptographically enforced. In other words, once we lock a tranche of tokens, nobody (including Storj Labs) can use or transfer them until the lock expires. 

**When the current lock expires, rather than lock up the entire 245 M for an additional 6 months, we are going to implement a longer-term and more nuanced lockup. In essence, we are replacing the current 6 month lockup with an 8 quarter rolling lockup.**

We will break our current long-term reserve of 245 M tokens into 8 different tranches of 30.625 M tokens each. These tranches will have lock expiration dates spaced 1 quarter apart over 8 successive quarters. This will set a cryptographically-enforced maximum on the number of tokens that could be unlocked or put into circulation in any given quarter over the next 2 years.

Furthermore, we are committing today that when tranche 1 becomes unlocked (at the end of Q1 2019), we will relock it, so that the new lock will expire 3 months after tranche 8 unlocks. 

In other words, Tranche 1 (with 30.625M STORJ) will be locked until the end of Q1 ‘19. Tranche 2 (with 30.625 M STORJ) will be locked until the end of Q2 ‘19. Tranches 3-8, all also 30.625M, will unlock—respectively—at the ends of Q3 ’19, Q4’19, Q1 ’20, Q2 ’20, Q3 ’20, and Q4 ’20. 

**When the Tranche 1 unlocks at the end of Q1 ’19, we will relock it until the end of Q1 ’21. So no tokens will be unlocked for at least 6 months.**

Our expectation is that the same pattern will hold for successive quarters. However, should we, in our sole discretion, ever anticipate a need to utilize any of these long-term reserve tokens, we will provide advanced written notice (e.g. at the prior quarter town hall.)

To make this clearer, the table below shows the situation with various tranches as it will exist at our Q1 town hall, how we guarantee it will look at the Q2 ’19 town hall, and how we expect it to look for the next several quarters if we don’t announce a need for transferring tokens from the long-term reserve.

**PATTERN IF NO TOKENS ARE UNLOCKED OVER THE NEXT 6 QUARTERS**

<img src="/blog/img/lock1.png" alt="Token relock example over 6 quarters" width="100%"/>

If we ever do determine that we need to transfer tokens from our long-term reserves, we will provide advanced notice (e.g. at the prior town hall meeting.) In the example below, let’s say that we determine that we want to transfer 15 M tokens from long-term into operating reserves at the end of December of 2019. To do so, we would first need to announce this in advance, preferably at the October 2019 town hall. When the next tranche time lock expires in December 2019, we would transfer 15 M tokens into our operational cold wallet, and then relock the remaining 15.6 M tokens for an additional 8 quarters. Assuming we don’t have further need, the original pattern would continue in subsequent quarters.

**SAMPLE: ILLUSTRATING IF WE WISH TO UNLOCK 15M AT THE END OF 2019**

<img src="/blog/img/lock2.png" alt="Token unlock example" width="100%"/>

We hope that this will help prevent sudden and unexpected changes to the supply of STORJ tokens in circulation, while giving us the flexibility to tap into long-term reserves if there is a market need to do so (e.g. if there is a sustained imbalance between amount of STORJ tokens paid to storage node operators and the amount of STORJ tokens received from customers vs. fiat currency). 

As always, we appreciate the community’s feedback and support!

## Tracking

In the process of adopting this new structure, we will move from having one address associated with all 245 M STORJ timelocked tokens to having multiple addressees. We will publish all of these addresses concurrently with doing the relock. The actual transaction should be auditable by seeing the activity at [ethplorer.io/address/0xf5fc2d6bbf2b58c38e96fb3a8e0779cd0b1d1f70](https://ethplorer.io/address/0xf5fc2d6bbf2b58c38e96fb3a8e0779cd0b1d1f70#pageSize=100). 

## Disclaimer

_The STORJ token is intended to facilitate the provision and receipt of data storage and related services through Storj Labs’ software application, which serves as a user interface and development platform on the network. The STORJ token is not intended to be a digital currency, security, commodity or any other kind of financial instrument._

_The contents of this publication contain a high-level overview of the network and the STORJ token and is subject to change as Storj Labs refines its plans. Changes to the network, the STORJ token, and the policies referenced in this post are entirely within the discretion of Storj Labs and could result from commercial, technical or legal issues, among others._
