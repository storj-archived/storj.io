---
title: Storj Bytes Community Newsletter Q4-2017
date: '2017-12-20T14:37:00-05:00'
categories:
  - business
authors:
  - Storj
---
Our community commitment to transparency and communication is of the utmost importance to us. As such, we are excited to be issuing our second quarterly newsletter—and the last one of this year! This past quarter has been filled with news about hires on the engineering and marketing teams, technological advances with SIP09, our successful [town hall event](https://www.youtube.com/watch?v=Tsa1ExBqTdc) where we presented our technological roadmap and answered community questions, and so much more. This newsletter will highlight what we’ve accomplished this quarter and what we can look forward to in the next quarter. 

<!--more--> 

If you are new to [Storj Bytes](https://storj.io/newsletter/2017/storj-q3.pdf), please check out our last newsletter.  Storj Bytes is your resource for the latest product and technology updates and a look ahead at our roadmap. It also details community feedback and how we’re integrating it into our work.  

**TECHNOLOGY IMPROVEMENTS  
**_SIP06 has improved our network_

In our last newsletter, we explained how [SIP06](https://github.com/Storj/sips/blob/master/sip-0006.md) works and why we implemented it two months ago. Now we would like to update you on how it has significantly improved the network. Prior to SIP06, the load of Farmers on the Bridge was high: Each time the Bridge sent a contract for each shard upload, more than 1000 Farmers relayed this contract, and then the Bridge had to deal with the same number of OFFER messages. This congested the network and instantiated an overhead for the Bridge. As a result, farmers faced increased timeouts and error messages and were often unsuccessful in storing shards.

A second significant issue prior to SIP06 implementation was an uneven shard distribution. The first node that sent an OFFER message to accept a contract would receive the shard from the Bridge. The way the network was organized, U.S.-based farmers received the majority of shards, while Farmers in Europe struggled to get any contracts. From the Clients´ perspective, upload and download speeds were slow because they Clients were not utilizing the whole Storj network—just the U.S. Farmer bandwidth.

SIP06 solves both major problems described above by reducing the CPU load on the Bridge and Farmers.Clients are now receiving fewer error messages and can also upload more files. The shards are distributed ¨more evenly over the world, giving Clients maximum upload and download speeds. The Storj network has increased to 20PB as a result of SIP06!

**STORJ NOW**  
_The STORJ token is now accepted as a form of payment. _

As a big part of our initiative to create more utility for the STORJ token, we’ve released a dramatically improved billing feature that accepts STORJ as a form of payment for storage space. This is only our first step to implementing many other features and requests so that the token can possibly be used in the future to buy other goods like swag. The community has been a great driver to push this feature—and we’re excited to finally put it into production. If you’re not sure where to see the STORJ token as a form of payment, log into the [dashboard](https://app.storj.io/login) and navigate to the billing page. You should see it in the bottom right-hand corner.

![](img/strjb.png)

**STORJ FORWARD**  

_Below are forward-looking statements about our product direction. The development, release, and timing of any features or functionality described for our products remains at the sole discretion of Storj Labs. The information herein is not a commitment to deliver any material, code or functionality, and should not be relied upon in making purchase decisions._

_Storj will offer discounts to users who use the STORJ token for payments_

As a way of giving back to the community and to increase the utility and velocity of the token, we will be releasing a discount program to complement the new billing feature. This program will benefit users who pay with the STORJ token by providing them with discounted pricing. This is our first initiative of many where we will provide added benefits to our community members who pay with STORJ.

_Documentation will be project-oriented and informative so developers, Farmers, users and partners can get onboarded _

Documentation and UI/UX is critical to our community growth and overall on-boarding experience for developers, Farmers, Storj partners, and users. During the town hall meeting, we gave a sneak peek of some ideas we’ve been working on to enhance your overall user experience. We’ve dedicated resources this quarter to design some UI/UX flows, and starting January 2018, Storj will have a dedicated team to work on documentation and UI/UX improvements. All of January 2018 will be spent on internal research for tools and UI/UX flows to assist in creating a blueprint for how the community will be onboarded. By February/March 2018 you should start to see changes. As these changes happen, we will be soliciting feedback to improve your experience.

_SIP09 accounts for the Bridge’s bandwidth usage and creates a reputation metric between a Client and Farmer on successful transfers_

[SIP09](https://github.com/Storj/sips/blob/master/sip-0009.md) intends to solve two things: Create a reputation metric of Farmers who store shards and account for the Bridge’s bandwidth usage. SIP09 is the initial building block for creating Farmer metrics. It allows us to see if a Farmer was successful in providing a shard for download. As it stands, when the Bridge assigns a mirror shard to the nodes with the fastest response time to the Bridge’s request, the winning Farmer will receive a payout for answering to this request. Whether or not the shard has actually been transferred is irrelevant. As such, this inflates some Farmers’ payouts every month. To address this problem, SIP09 allows the Bridge to create a Storage Event—a JSON object that provides a unique token ID, each time a shard is upload or download as requested. The Client will then send an Exchange Report, consisting of a JSON object that has key information on uploads and downloads, on the SUCCESS or FAILURE of the transfer. Each Exchange Report must have a corresponding Storage Event, otherwise the transfer will not be considered. The Farmers’ report can help confirm whether the Client was able to send the transfer. A SUCCESS report positively affects Farmer reputation, and vice versa for a FAILURE report.  

The overall intention of accounting for the Bridge’s bandwidth usage is to keep Clients accountable for downloads. By doing so, Farmers can receive the appropriate payout for providing the bandwidth for these downloads. The Exchange Report has a unique token value that comes from the Storage Event. The Storage Event object will include the Client and Farmer pair and the hash of the shard. The Exchange Report is signed by the Client and Farmer. If both Exchange Reports indicate a success rate on a download, the Client will pay the Farmer. However, if the Farmer and Client-signed Exchange Reports differ or the Client claims the download was unsuccessful, we can search the Exchange Reports for validation by indexing with the unique token. Another option, in conjunction with evaluating the Exchange Reports, is to investigate the Client and Farmer behavior to determine whether the file download was successful.

In summary, the aim of SIP09 is to generate accurate transaction events by strongly correlating the Client, Bridge, and Farmer reports. This will improve the interaction between the Client and Farmer. The Exchange Reports are also central for eventually creating incentives to reward reliable Farmers. From there, we can create Farmer reputation metrics based on successful transfers, so that shards can move towards the more reliable parts of the network. We are currently working on this protocol and hope to release it by next quarter.

**STORJ COMMUNITY**  
_Storj bounty program will be launched in January 2018_

The Storj bounty program is under development and should be launched in January. We are currently creating a developer support program where developers working on bindings to the libstorj library will get proper support from our engineers. In addition, translations, events, blogs, and much more will be added to this program in stages. Each project submitted will go through a submission and review process. This will ensure all projects will be fairly evaluated. People participating in the bounty program will have to follow our Code of Conduct that will be posted on Rocket.Chat and on the program’s website. Failure to comply will result is dismissal of any future participation in the program.  

_Storj community website section in development_

With over 12k members in [Rocket.Chat](https://community.storj.io/) and 145k community members total, it’s about time there’s a portion of the website dedicated to you! Starting January 2018,  Storj will be committed to working on a community section of the website. This will be your go-to-area to see community updates, newsletters, community-featured blogs, and other community programs. It’s our goal to make this portion of the website inclusive. We will update content weekly, and offer opportunities to contribute by being a guest writer for blogs and tutorials, and/or by participating in other projects.

_**Thanks for a great year!**_

We are pleased to be capping off a very successful 2017. With our Token Sale, the public launch of the Storj platform, user growth on both the Farmer and Client sides of the network, and expansion of the internal Storj team, we are so proud of the progress we have made this year. We thank you, our community, for the continued support you’ve given us throughout 2017 and are looking forward to more advances for 2018!

While 2017 was wildly successful for Storj, we feel even more confident about the milestones we will achieve in 2018. We expect continued product improvements, increased use of the network, new partnerships and much, much more.

This past year saw the benefits of decentralized applications take hold in the developer-community. Developers, companies and individual consumers began to see the need for decentralization in a world where we depend so much on data and highly value privacy. We believe in 2018 the demand for decentralization will grow even more, and Storj, in building the foundation to a decentralized world, will be poised to capture the vast majority of the market!
