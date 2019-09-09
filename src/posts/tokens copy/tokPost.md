---
title: Why SJCX? Why not Bitcoin?
date: '2015-02-20T15:23:00-05:00'
categories:
  - tokens
authors:
  - James Prestwich
---
There’s a lot of public discussion of appcoins like SJCX. We like to keep out of economic and technological debates, and focus on developing the platform. We chose to implement SJCX as a CounterParty token for a variety of reasons, and we want to explain just one compelling reason we plan to use SJCX as the fuel of the network: the Storj platform, as presently designed, cannot run on Bitcoin. Bitcoin is just too valuable.

<!--more-->

Let’s back up a step. The core of the Storj platform is the heartbeat. Renters challenge a farmer to prove that he or she is still storing a certain file chunk. In exchange for the proof, the renter adds a small payment to an open micropayment channel. If the proof or the payment is late or incorrect, the channel is closed, and the contract is terminated. The renter and the farmer must trust each other for at most one heartbeat interval.  

We’re examining a variety of options for chunk size and heartbeat interval, but most of our testing has been on 32 MiB \[1\] chunks, and intervals of 5 minutes. That means every 5 minutes farmers verify every chunk they have stored. We’ve successfully scaled this up to 100 GiB \[2\] already, and we are optimizing and tweaking to scale up another order of magnitude in the near future. That 100 GiB is split into 3200 contracts, which is equivalent to 3200 proofs every 5 minutes. That’s 921,600 proofs per day, or 27,648,000 proofs every month, just to verify 100 GiB.  

We estimate the electricity costs of a home farmer with one hard drive to be around $6/month. For this home farmer the break-even rate is $0.00000022 per proof. Large-scale farmers will have even lower costs. So here’s the problem: 1 BTC, as of this writing, is worth $223.94 on Coinbase. This puts 1 satoshi at $0.00002239. Therefore 1 proof cost 0.097 satoshis.  

What happens when we bump the data storage up? Say to a reasonable home farming rig with 2TiB. The cost of the proof is lowered about 20 times, to just .0047 satoshis. So if we were to use BTC as form of payment, this would introduce a huge error into the payment process, requiring farmers to trust renters over long periods as the micropayments approach 1 satoshi. We can scale up the proof time window, but we’ll have to go up to 24 hours to make proofs cost just 1.36 satoshis, and even that introduces significant payment errors. What about farmers with 4, 8, 16 or more TiB rigs? Their cost-per-proof will be even lower. What if Bitcoin’s price rises?  

A renter could cheat the system with no consequences by exploiting this transactability problem. Because there is no incentive not to, cheating in this manner would likely become endemic. We need to be able to pay farmers accurately and immediately to minimize risk and trust within the network. Therefore we need to ensure that we can transact in the range of a hundredth of a satoshi.

Bitcoin is simply too valuable to support micropayment channels operating at this scale without a fork to increase the precision of units. Because it grows less usable as its value increases, SJCX will be capped by market forces at a suitably transactable value (incidentally, this is one reason we say SJCX is not an investment). Bitcoin’s price is determined by an entirely separate set of forces, so a floating rate of conversion to and from BTC is necessary to ensure that renters can and do always pay the correct amount for farmer’s services.

So in conclusion, SJCX is not intended to be a store of value, a valuation of the network, or a general-purpose competitor to Bitcoin. SJCX isn’t just a vanity coin, and it can’t just be replaced by Bitcoin. It’s a necessary measure to ensure that our network can function with low trust and high precision.  

**References  
**  
\[1\] Mega Binary Byte. 1 MiB = 220 bytes, or about 1.04 MB.  
\[2\] Giga Binary Byte. 1 GiB = 230 bytes, or about 1.07 GB.
