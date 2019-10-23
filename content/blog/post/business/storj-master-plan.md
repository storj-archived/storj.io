---
title: Storj Master Plan
date: '2016-10-05T11:49:00-04:00'
categories:
  - business
authors:
  - Shawn Wilkinson
---
The plan that will take Storj and Storj Labs Inc. from zero users to a next generation storage platform for the web consists of four stages:

<!--more-->

1.  Build an object storage platform for developers and businesses.  
    
2.  Build a marketplace for Storj based apps, where developers offer applications that allow users to own their data.  
    
3.  Use cryptocurrency tokens (SJCX) as an incentive to have renters and farmers work together.  
    
4.  Remove the human, automate everything, and eliminate trust wherever possible.  
    

Let´s take a closer look at how Storj is planning to accomplish each one of these goals.

**Developers build applications**  
When you download the latest cat picture sharing app, most likely you won’t know or care about where the application data is actually being stored. Developers make the decision on data storage for the many applications their users rely on. Traditionally, developers have predominantly used centralized cloud storage options on platforms such as Amazon AWS, Google Cloud, and Microsoft Azure.

We are building Storj to be a better data storage option for developers’ applications than traditional centralized cloud storage solutions. Some of the main benefits are:

*   **User/device encryption by default** \- Traditional cloud storage can be compromised by hacking the cloud storage provider’s servers or by exposing the developers’ keys. In contrast, data stored on Storj is encrypted/decrypted on the user's own device. No one else should have access to the data for the application to function, other than the user.   
    
*   **Increased performance** \- Storj operates on a P2P network allowing users to connect to multiple peers, so files can be stored and retrieved faster on this distributed network than would be possible using the traditional nearest data center.   
    
*   **More uptime** \- Because Storj is a distributed and decentralized network, there is no central point of failure like in traditional centralized cloud storage networks. This means more access to your data when you want it.  
    
*   **Better prices** \- Storj doesn't have to build a $600M data center to serve users. Instead, we use excess storage resources from real people like you and me. This means savings for developers, which they can pass on to the user or use to build better features.   
    
*   **Better privacy** \- Storj operates a zero-knowledge system which does not need to know anything about the data stored on the network in order to be able to operate. This means the USER’s data stays private, and properly built applications can take advantage of this as well.   
    
*   **Open source and free software** \- We believe our code should be open so it can be verified, and developers can modify it to fit the problems they are trying to solve.  
    

_These are just some points that make Storj a better option than the traditional cloud._

The first step is to make Storj easy to integrate and use for developer applications. This makes developers’ lives easier, and allows them to pass along the cost savings, security, privacy, and performance features to their users.

**Connect the apps, with users in control**  
If you store your pictures on something like Dropbox, can you then download them again from your iCloud photos app? Well the answer is no, because Dropbox controls that information. We want to put the control back in the user’s hands. Imagine a world where you can store your data in one of your applications, and retrieve that same data from any of your other applications at your discretion. That's the power of a unified storage layer with the users in control. Even with information sharing between applications, the process is very secure because the data is encrypted with keys only the user controls. Plus, only the user can approve information sharing between applications.

Now a good question would be: “Why would applications give up their current control of user data?” While this practice would keep users inside their application and nowhere else, the answer is pretty simple: user base. Consider an App 1 with features A and B, App 2 with features C and D, and App 3 with features A and E. They each have a user base of 5,000 users. App 1 and App 2 implement Storj as their backend and use its standards for storage, user accounts, and authentication. Now all their combined 10,000 users have access to features A, B, C and D in both applications with minimal effort. App 3 just can’t compete with the combined user base and features of Apps 1 and 2.

If this sounds familiar, that's because it already exists in some closed personal cloud implementations like iCloud and Google Drive. Unfortunately, Apple and Google control access to this data, when it should be the users themselves instead.

**Connect renters and farmers, creating a self-sustaining ecosystem  
**Renters pay farmers in SJCX to store their data in the network. Farmers will use SJCX to cover their costs, and it will also be used in various ways to support/organize the network and prevent spam. We envision that as the network progresses, applications will support direct usage of SJCX, making it easier for farmers to spend their SJCX. This creates a self-sustaining ecosystem where SJCX is recycled back into the network instead of being sold.

Since the only source of farmer's income is through renters, we also envision farmers working closer with renters to increase the amount of data and data usage in the network. For example, if a renter uploads a series of very popular files, some farmers might even pay that renter to ensure they get an early copy of the data, as they will earn much more money from the many users that will request to download that data soon after. Another example could be farmers cooperating with renters to promote data downloads to third parties, as getting more views for the renters’ content results in more income for the farmers. This would be a special use case and not the rule, but because Storj is an incentivized open market, farmers and renters are free to work together in unique ways. This collaboration can open up some novel methods of content distribution.

**Automate everything, and remove the human**  
Unfortunately, humans are usually the weakness of any system. People make mistakes, so we must replace them with public, auditable, and transparent systems that function logically. With the advent of Bitcoin and blockchain technology we finally have a great example of how to build these systems. While public, auditable, and transparent systems are great, they rarely scale easily. For example, Bitcoin can only handle five to seven transactions per second, while the centralized VISA system can handle an average of 2,000 transactions per second. However, there are some ideas on [how this could be solved](https://lightning.network/), but there is still lots of work left to do.

We want to automate as much of the Storj network as we can and rely on trustless technologies as much as possible. This will take time, and while it may be impossible to make any system fully trustless, we will try to get it as close as we can. The litmus test is that the entire Storj team should be able to take a trip to the Moon (where internet connectivity is lacking), and the network should still continue to function and thrive. This is actually already implemented now, as it is still possible to retrieve data from the underlying P2P network even with the Storj Labs Inc. bridge services offline, as long as the application has the extra logic to handle that case.

Other than just automating to ensure better privacy, security, and robustness, we need to accommodate future use cases. Right now we assume that you are a human signing up for the service. Going forward, we might need to be more open minded. For example, in the future your smart fridge is not going to be able to swipe a credit card to pay its data needs. It should be able to create an account on Storj, and use that storage space without human interaction. As long as the smart fridge pays like the rest of us (though cryptocurrency), everything should be fine. This automation will enable Storj to be used for Distributed Autonomous Organizations and IoT.

We should always remember that Storj was named after the [futuristic StorJ concept](https://bitcointalk.org/index.php?topic=53855.msg642768#msg642768) by Bitcoin Core developer Gregory Maxwell. He described a vision of a cloud storage system that was run by many trustless autonomous AIs. This sparked the vision and name that is Storj today. We want that future now, but we understand that we will get there one building block at a time.

So let´s recap how Storj will be building the next generation storage platform for the web:

*   Developers build apps using Storj as the data layer.  
    
*   Connect the apps on a marketplace, with users in control.  
    
*   Use cryptocurrency to create a self-sustaining ecosystem with market efficiencies.  
    
*   Transition to a fully automated and trustless system, which will form the base layer for IoT and decentralized autonomous organizations.  
    
*   Activate a friendlier version of Skynet.  
    

**Shawn Wilkinson**  
CEO/CTO of Storj Labs Inc.
