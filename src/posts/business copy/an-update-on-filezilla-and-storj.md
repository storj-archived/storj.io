---
title: An Update on FileZilla and Storj
date: '2018-03-28T16:04:00-04:00'
image: /blog/img/sfz.png
categories:
  - business
authors:
  - Jodi Smith
---
The FileZilla Project has been busy. In the last few months, the open source FTP application has added new integrations, including one with Microsoft for Azure integration with FileZilla Pro. We talked to Roberto Galoppini, Director of Strategy for [FileZilla](https://filezilla-project.org/), about what makes the Storj relationship special. 

<!--more-->

**How is Storj different from your other cloud partners?**

Through this integration we can utilize Storj as a traditional FTP server. Storj is the only service we integrate with that enables us to provide our end users with a cloud FTP service that is truly private. The team is still making improvements to improve performance and reliability, but people using Storj don't have to be scared they are sharing their information with the NSA or anyone else. That’s why this relationship is special to us. It’s a unique service that FileZilla users can't get from anyone else. Thanks to the integration the teams have been working with, for the end-user, connecting to Storj feels no different than using FTP. They can also make some money through Storj if they become farmers on the Storj network. 

**How is FileZilla Pro different from FileZilla, and what kind of integration will we see between FileZilla and Storj?**

We have two products. One is FileZilla. It’s a free—as in beer, and as in speech—open source FTP client that has a huge user base. We have one hundred million downloads per year, and that’s only about FTP. Why are we able to talk to Storj through FileZilla? We've created a tool that uses the [libstorj](https://github.com/Storj/libstorj) library to connect to the Storj service to transfer files. The FileZilla program can talk to this tool and translates its replies into FileZilla's internal data structures that are used for all supported protocols.

[FileZilla Pro](https://filezillapro.com/) is sold to people who want to use FTP as a protocol and integrate with non-FTP protocols, like Amazon S3, Azure, and very soon Google Cloud, and not too far from today, OpenStack as well. We are on a roadmap where nearly every month we add a new protocol, for people who don’t need just an FTP client—they want a “Swiss army knife” to access different cloud providers’ services, and the more protocols supported, the better. So today, if someone is using Amazon S3 through FileZilla, it doesn’t feel different from using an FTP server. We keep the consistency in the user interface and procedures, so that transferring files with any of the supported protocols will offer the same look and feel.

**How seamless will the experience be for Storj users? Will they have to set up an account separately?**

Right now, it’s seamless if they are already part of the Storj user base. For people not yet part of the Storj network, in phase two of our integration there will be tighter integration between FileZilla and Storj, so people who choose to use Storj will be provided with a very easy way to create an account. Today, they need to go to the Storj site, create an account, and come back. The idea is to make this much easier so that even new users can try Storj.

**For FileZilla as an open source platform, how do you view the Storj relationship as a way to financial sustainability?**

The relationship is aimed at benefiting all stakeholders: our users will get access to an innovative and secure cloud service, plus a way to monetize their free disk space and bandwidth; Storj will tap into a large user base, and we'll get rewarded for promoting it among our users. Everyone wins!

**What’s your take on the decision to re-architect the Storj network?**

Both Storj and FileZilla want to make sure the partnership can be enabling. FileZilla and Storj have an agreed baseline against which we want to measure the performance. I believe that it won’t take too long, hopefully before the summer to reach that. When your team will be happy with results, we will be happy too. At this point we are going to market strongly the partnership.

**Anything else you would like to add?**

Yes, about the new CEO of the company. For the record, I have been trying to help Storj to find a CEO, and have shared some names occasionally. Being part of this open source business world for a while, I am very happy to see that Ben Golub took the role. Given his background in storage and open source and startups, I am sure it will be a great addition to the company. I can’t wait to start seeing the results of this new position filled finally.

_By Jodi Smith_
