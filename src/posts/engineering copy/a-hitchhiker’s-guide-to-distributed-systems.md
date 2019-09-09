---
title: A Hitchhiker’s Guide to Distributed Systems
date: '2018-03-26T15:59:00-04:00'
image: /blog/img/panic.jpg
categories:
  - engineering
authors:
  - JT Olio
---
_By JT Olio, Director of Engineering_

Hello, I'm [JT Olio](https://www.jtolio.com/)! I’m excited to have the opportunity to introduce myself to you as Storj’s new Director of Engineering. This will be my fourth time building a distributed storage system, and each time I’ve been faced with new challenges and learned new things.

Distributed systems are so cool. They’re a complex intersection of security, mechanism design, performance, game theory, engineering, distributed systems research, economics, and so much more. If you like working on hard problems, the amount of puzzles to solve is fractal and never ending. Each system I've worked on has been like scaling a new mountain, and I'm especially excited for this latest one.

**From Mozy to Space Monkey and beyond**

I cut my teeth on distributed systems starting in 2005 at [Mozy](https://www.mozy.com/), one of the original online backup services. In a world before Amazon Web Services, selling people on cloud-hosted backup was hard! Potential sales partners were extremely skeptical about letting some other company manage all of their most important data.

Because cloud platform providers like Amazon Web Services and Google Cloud Platform didn't exist yet, we had no choice but to manage our own data centers. And as we quickly grew into petabytes and petabytes of data, we hit smack into a really interesting problem. Suppose you have a data center full of hard drives with a five year mean time between failures and a 0.05 percent daily failure probability. If you have 10,000 hard drives, five drives will fail every day. A common solution is to have a large staff of data center operations folks running around and replacing drives, but this is costly in a number of ways.

At Mozy, we were able to manage huge data centers with skeleton crews because of architectural decisions we made. Data came in, we split it up with erasure encoding, and then distributed those shards to storage nodes in our data center. If a drive failed, it was no big deal! There was no urgency to replace it as the distributed network we built managed the hardware failure for us. If this sounds familiar, yep! Mozy and Storj have surprisingly similar architectures.

My next distributed storage gig was at [Space Monkey](https://www.spacemonkey.com/), where I was the second employee hired. In 2012, Space Monkey [won best startup at the LAUNCH Festival](http://www.launch.co/blog/launch-festival-2012-winners.html) (yep! That's me in the very center). In 2013, we launched a [successful Kickstarter](https://www.kickstarter.com/projects/clintgc/space-monkey-taking-the-cloud-out-of-the-datacente) (back in the days before token sales), and in 2014, we were acquired by Vivint Smart Home. At Space Monkey, we created a distributed object storage layer across every continent except Antarctica by linking our Space Monkey hardware together via a state of the art protocol of our own creation. We supported low overhead, high throughput, structured streaming object storage for an active user base on a globally distributed storage system.

The visionaries at [Vivint Smart Home](https://www.vivint.com/) saw our potential, as the amount of storage demand they had was increasing dramatically. After our acquisition, we soon pivoted toward video storage. We took the lessons we learned from the Space Monkey file storage product and made a new home security video storage platform. I'm not sure I can share full numbers, but let's just say Vivint gave our distributed system 70 times larger scale. Our distributed streaming video storage system now powers nearly all home security video clips that Vivint's home security system records, with enough incoming video data that Vivint stores significantly more footage than YouTube does every second.

**Why Storj**

This history brings us to today, the first day of my second week as Director of Engineering at Storj. I am so lucky to have had these past experiences, and can’t wait to take some of the lessons I've learned from these previous projects and bring them to the masses. I'm excited about where Storj is today but I'm even more excited about getting to join the ride to [exabyte scale](https://storj.io/blog/2018/01/getting-from-petabytes-to-exabytes-the-road-ahead/).

To get to exabyte scale, we need to have a laser focus on the user experience. As we move towards mass adoption, we need greater decentralization, top-flight security, rock-solid reliability, yes, but we also need a dramatic increase in performance, functionality, and features. We don't want to be the electric car that people bought 10 years ago just because they were excited about electric cars, even though they only went five miles. We will be the Tesla of storage—better because it's decentralized, but better in all the other ways, too.

One obvious difference between Storj and my past gigs is our token economy. Tokens allow us to pay farmers to innovate on finding the most efficient storage solution. With Space Monkey, we had dedicated hardware that fixed the costs of what farmers could do. With Storj, we’re essentially paying people to come up with the most efficient ways to store data and they’re massively incentivized to do just that.  We probably could have built a system like Storj using Chuck E. Cheese tokens or U.S. dollars, but the cool thing about having a utility token is that as the value of our marketplace rises, the more valuable our token is. It’s a cool way to give back to the people who believed in us in the beginning.

As Director of Engineering I wear a number of hats. With my more than decade's worth of production distributed systems experience, I'm of course always excited to dive deep into our technical details as needed, but fundamentally, being Director of Engineering really means my top priority is our people. Shawn and company have built a fantastic team and it is my job to shine the spotlight on them and block and tackle obstacles in the way. In my view, managers might fail, but teams succeed. I will count myself lucky if I get to say I helped in getting this excellent team to our upcoming position of dominance.

You'll be hearing more from me soon about what the team has cooking, but until then, if you're passionate about distributed systems and solving hard problems, come join us! If you're ever in Salt Lake City, make sure to hit up our [Distributed Systems Meetup and Reading Group](https://www.meetup.com/Utah-Distributed-Systems-Meetup-and-Reading-Group/)!  
  
_Read more from JT at [jtolio.com](https://www.jtolio.com/)._
