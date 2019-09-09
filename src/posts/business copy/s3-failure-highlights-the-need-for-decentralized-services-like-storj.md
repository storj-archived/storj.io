---
title: S3 Failure Highlights the Need for Decentralized Services like Storj
date: '2017-03-07T12:33:00-05:00'
categories:
  - business
authors:
  - Shawn Wilkinson
---
Amazon S3, the world's largest cloud storage platform, went offline last week, taking down a large percentage of internet services with it. Trello, Quora, Heroku, and Slack are just a handful of the many services that were affected. It was [also reported](https://techcrunch.com/2017/02/28/amazon-aws-s3-outage-is-breaking-things-for-a-lot-of-websites-and-apps/) that even IoT connected thermostats and lightbulbs stopped working. We now know the cause of the outage to be a mistyped command during routine server maintenance. My heart goes out to the engineer that committed that error (as an engineer I’ve definitely made mistakes like this), but this unfortunate outcome simply should not have been possible.   
  
<!--more-->

![image](https://78.media.tumblr.com/40112d8c7a9c2bafaaab12f21641176a/tumblr_inline_omghc0kKx21sh4oh9_500.gif)

  
As the world becomes more and more connected, and we become more reliant on platforms like S3, we will face increasingly negative impacts in our lives when they fail. What might be a minor inconvenience today, like not being able to change the temperature on your Nest, might be your [connected self driving car slamming into a highway construction barrier](https://bgr.com/2017/03/02/tesla-crash-video-texas/) because it lost access to a data feed tomorrow. While these types of terrible failures may be far in the future, that is clearly the direction we are headed, and the impact that these kinds of service failures have today is very real. No one would build a piece of critical infrastructure like a bridge, only held together with a single bolt whose failure could bring the whole structure tumbling down. And we shouldn’t build internet infrastructure with single points of failure either.  

We built Storj because we wanted to create a more robust, distributed system for object storage. After all, the cloud is just someone else's computer, so why does it have to be Amazon´s? Though there are still some problems to solve to improve security, privacy, durability, and ease of use, Storj is now fully functional: We have resolved all the fundamental problems, while continually optimizing the code to find the best solutions.

Because Storj doesn’t host infrastructure, but instead uses a distributed and decentralized network of devices, we offer a very special value proposition that no other traditional storage network can offer. **Should our object storage service fail completely, users would still be able to retrieve their data.** This is possible today as long as the application keeps copies of network locations and authorization keys. We are working on building this into our various tools and libraries by default, so every application will have this functionality without requiring any additional developer/user effort. For extra safety, the encrypted shards of data are distributed redundantly on different types of hardware and networks which are located in many different countries, keeping [crazy singular failure events](http://www.datacenterknowledge.com/archives/2015/08/19/lightning-strikes-google-data-center-disrupts-cloud-services/) from disrupting functionality.  

  

![image](/blog/img/tpgrfy.png)

  

The future is bright with innovation, but let's make sure we build those innovations on platforms that really can’t fail, rather than those that just promise not to. Let´s provide services that don’t cease to function due to a single error, but keep functioning perfectly even when the entire system has failed. This is the promise of decentralized, distributed, and crowd-sourced platforms and one we are turning into reality here at Storj.

  
Shawn Wilkinson  
CEO/CTO of Storj Labs Inc.
