---
title: The High Price of Traditional Cloud Storage
date: '2018-11-26T09:37:30-07:00'
categories:
  - community
authors:
  - Shawn Wilkinson
---
Each year, the amount of data annually created roughly doubles. Cloud computing has emerged as a highly efficient and profitable enterprise where the largest companies on the planet are investing billions of dollars and Moore’s Law continues to hold.

In such an environment, wouldn’t you expect cloud storage prices to drop?

Unfortunately, the answer is no.

There are only three major cloud storage providers in the world outside of China: Amazon, Google, and Microsoft. While cloud storage prices initially dropped when Google entered the market, prices have essentially stagnated for the past five years, although the cost of hard drives have decreased by about 50 percent over that same timeframe [dollar-per-gigabyte](https://www.forbes.com/sites/tomcoughlin/2017/12/20/digital-storage-projections-for-2018-part-1/#41e9a3a13a20).

<img src="/blog/img/charts-storage-providers-timeline.png" alt="Price of cloud storage from 2010 to 2018" width="100%"/>

[Cisco estimates](https://www.cisco.com/c/m/en_us/solutions/service-provider/vni-forecast-highlights.html) that by 2021, there will be four internet-connected devices for every person in the world. That’s a lot of data, and it’s not even counting technology that isn’t connected to the internet like 4k cameras and other devices that create some of our biggest datasets. In spite of this proliferation of data, the cost to store data is remaining flat. That means those who are responsible for storing data (and paying to have it stored) are seeing their costs rise at the same rate as we create data. So if your storage bill is roughly 10% of your total costs, in 12-18 months, it will be closer to 18%, assuming all other numbers remain the same. This ratio can quickly become burdensome to small, open source projects or free services that we all use on a daily basis. 

![](/blog/img/awslol.jpg)

**Cost of Innovation**

One such case is [transfer.sh, a command line file transfer tool](https://transfer.sh/) created by Remco Verhoef. In an average month, transfer.sh is used more than 1,000,000 times to easily transfer files worldwide. The project started out as all projects do - Remco wanted to simplify his own life by making it easier to send file transfers from one place to another. His open source project quickly generated interest and users quickly grew. The service was free, but that meant that Remco was the one footing the storage bill. A few months ago, transfer.sh announced it could no longer afford its Amazon S3 bill and would shut down at the end of November. 

![S3 bill is too damn high](/blog/img/s3-bill-is-too-damn-high.jpg)

I’d never heard about transfer.sh at the time, but when it was announced the service would shut down for financial reasons, its passionate community quickly rallied to find a solution. I did some research and knew that Storj could help transfer.sh stay alive! I recently contacted Mr. Verhoef to discuss my findings, and  we’ve been working with the transfer.sh team to store their data on our internal infrastructure while we fine tune our new network for production launch.

“When I mentioned my plans to shut down transfer.sh, there where many people trying to help out, asking if I couldn’t transfer the domain to them, etc. But when I started transfer.sh, I didn’t want to create a site bloated with advertisements and timers all over. I just wanted to build something quick and cool to just fulfill one need, transfer files. For over 4 years, I paid about $150k to $200k in total, just to keep a free service, which I believed in, running. Now, with having Storj as a partner, we don’t have to put ads on the platform and can continue transfer.sh under my original vision. It also opens up new opportunities, like continued development, adding Storj as an extra storage layer into the open source transfer.sh codebase,” Remco says.

Once our new decentralized cloud storage platform launches in production, we will work with transfer.sh to migrate all its data from our servers to the Storj network. We are excited to be working with such an awesome tool and are happy we could help save it in time. 

**Flighting Big Cloud**

[Transfer.sh](https://transfer.sh)’s challenge highlights a larger problem many companies are facing. Use of data is growing at an exponential rate, hard drive prices are decreasing, but centralized cloud storage providers are not reducing their prices to match.  What can be done? 

We think that one clear answer lies in the fact that the vast majority of disk drives in the world are severely underutilized. 

Decentralized storage has the ability to empower the technology community in new ways. By creating a more affordable storage platform for companies, developers and individual users, we expect we will see many use-cases that were once deemed too expensive become a reality. Unlike centralized cloud storage providers, decentralized storage platforms don’t have to invest $600M in a new data center, pay for expensive fire suppression systems, or repave the data center parking lot. Those cost savings are passed along directly to users. 

And even with decentralized cloud storage being in the early days of its innovation cycle, it is still drastically more affordable than centralized solutions. As it continues to evolve, it is likely to drop in price, just like centralized cloud storage did in its early days. This will be hugely impactful for consumers and developers. If it were not for this new economic model made possible through decentralized storage, we might never see another massive drop in cloud storage costs. As our technological capabilities evolve, a paradigm shift is often necessary for the next wave of innovation to reach the shore. Our team at Storj is excited to see what cool use-cases the decentralization tide washes in.
