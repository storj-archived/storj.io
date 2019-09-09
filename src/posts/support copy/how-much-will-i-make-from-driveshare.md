---
title: How much will I make from DriveShare ?
date: '2015-02-08T05:19:00-05:00'
categories:
  - support
authors:
  - James Prestwich
---
We’ve been asking ourselves that question a lot lately, and frankly, we don’t know. There’s no way to tell what the market will look like after the network launches. But we can help you make an educated guess.  

<!--more-->

Let’s start with your costs for a month. You probably already have a PC with a hard drive in it. If you’re reading this, you probably have an internet connection. So those costs are already sunk. However, you’ll want to leave your computer on for Storj, so you’ll have some electricity costs. And you may want to buy another hard drive or two, so that’ll cost you some money.  

Electricity is pretty simple. You use your computer normally, and leave it on the rest of the day for Storj. If you use 2 hours a day, Storj has to pay for the other 22 hours. A computer usually uses about 50 watts when idle. Storj will use a bit of processor time, and spin your hard drive, so lets bump that up to 75W. Run for a month, 22 hours a day, that’s 49.5 kWh. Power rates vary by location, but the US average is about $0.12/kWh. So a US user would pay only **$5.94** to run their Storj node for a month. That’s only $0.20 per day.  

So whatever storage you can sell to the network has to cover that $5.94. So we divide that by the number of Gigabytes you want to share to get your break-even rate. This is the minimum rate you can charge to the network, while covering your electricity costs.


That nice flex point around 1TB is a sweet spot for our model. The **break-even rate** there is $0.0059/GB/month. At that rate, we can add triple redundancy, some protocol overhead, and profits for you, and still maintain a competitive price. Adding storage to your machine lowers your break-even rate, increasing your potential profits.

Hard drives are a bit more complicated. If you buy a hard drive for Storj, you want it to pay for itself, right? And it’s gotta pay for itself before that pesky 3 year warranty expires. So let’s take the cost of a hard drive, say $80 for a 2TB drive, of $160 for a 4TB drive, and split it up over those 3 years. Each month we’ll pay off a little bit of the large expense. This is an extremely common accounting practice called depreciation. $80 for 3 years is **$2.22/month**. The 4TB drive is **$4.44/month**.

But hard drives also use electricity, so we have to account for that as well. A typical hard drive will draw around 20W. Over the course of a month at 22 hours/day, that’s 13.2kWh, which costs $1.58. So the full cost of each additional hard drive is **$3.80/month** for 2TB, or **$6.02/month** for 4TB. So it follows that if you’re charging above $6.02 / 4000 ≈ $0.0015/GB/Month, you should consider adding a new hard drive.

Electricity and storage rates are our costs. Our revenue comes from lending space to the network. Because we use erasure encoding, and our proof of storage algorithm requires tags, files are actually larger on Storj than on other networks. Amazon rents storage at $0.03/GB/month. Storj has to beat that, with larger file sizes, and split the money between our three redundant farmers. In practice, this means we can expect the price per GB that farmers charge to be somewhere between ¼ and ⅕ of that. That puts your revenue in the neighborhood of **$0.0060 to $0.0075/GB/month**.

So let’s look at a couple sample builds, like the 1TB home PC above. The cost of running this node is $5.94. It has 1TB to lend, at around $0.0070/GB/month. So for 1 month, the revenue would be $7. This give a monthly **profit of $1.06**. That’s viable, but not great.

How about a PC with 1TB free, and 3 additional 4TB hard drives. The cost of running this node is $5.94 + (3 * $6.02) = $24/month. This node has 13 TB of space to lend, at around $0.0070/GB/month. Monthly revenue is around $91, making an easy **$67 monthly profit**. At that rate, you can pay off your investment in the hard drives in just 7 months, and the rest is pure profit.

What about an enterprising user with a spare Raspberry Pi? You could easily hook up a few 2TB external drives, and take advantage of the Pi’s low power usage. At only 5W, the Pi’s electricity cost for a month is only $0.43. That’s an extra $5 monthly cost chopped off.

The space for useful and interesting implementations is huge. Individual PCs and Raspberry Pis are just the beginning. Just in the home there are NAS systems and consoles. Schools, offices, and other large networks could run farming nodes. We’ve even heard from a user who’s excited to farm on a fleet of limousines! If you have a use case you think we’d be interested in, let us know on our forums at [storjtalk.org](https://storjtalk.org).
