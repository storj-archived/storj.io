---
title: Developers and V3 Network Make First Contact with Vanguard Alpha
date: '2019-04-10T01:15:00-04:00'
image: /blog/img/blog-vanguard.png
categories:
  - engineering
authors:
  - Brandon Iglesias
---
The [Vanguard 1 Satellite](https://www.nasa.gov/content/vanguard-satellite-1958) holds the record for being in space longer than any other man-made object. Launched by NASA in 1958, the satellite is expected to remain in orbit for more than 200 years into the future. Its durability and resilience has been the inspiration behind our Vanguard release. Just like the Vanguard 1 satellite, our team is working towards building a decentralized and distributed object storage solution capable of withstanding the test of time and outliving its creators.

Today, we are excited to announce the launch of our Vanguard alpha release! 

Since the Explorer release in February, we’ve been inviting storage node operators to join our network to build up the supply of available disk space and bandwidth. With the Vanguard release, we will begin inviting clients to create accounts on Tardigrade Satellites so they can start storing and retrieving data from the network. This is a major step toward the beta and production launches, and we [invite all developers to join the waitlist](https://storj.io/#waitlist) to get access to the new V3 network. 

#### What to expect during this release

Over the course of the next few weeks, we will be publishing a few blogs that outline various important parts of the alpha. The first two were published today—this post and [another post announcing the Tardigrade network](https://storj.io/blog/2019/04/introducing-tardigrade---decentralized-cloud-storage-from-storj-labs/), Storj’s network of V3 Satellites with service level agreements (SLAs). 

During the Vanguard alpha, clients will be limited to a single project, 25 GB of disk space and 25 GB of egress per month, and will not be charged for usage. Over the course of the alpha, we do expect those limits to increase as the network of storage node operators increases as well (it’s currently at about 1 PB of capacity). The purpose of this alpha is to allow clients to start integrating and using the network so that they can provide us with feedback ahead of our beta release in a few months. If you find a bug please report it [via email to our support team](mailto:Support@storj.io) and if you have ideas on how we can improve the network, please [submit them through our ideas portal.](https://ideas.storj.io/)

#### How to start using the network

We are excited for people to start building applications and interacting with the Tardigrade network programmatically so we are also publishing our first library, [libuplink](https://github.com/storj/storj/tree/master/lib/uplink). (We’ll be sharing more on libuplink this week.) This is a golang library that you can import into your applications to easily utilize the network. We expect to have several other language bindings in future releases. 

Clients will also have the ability to interact with the network via our Uplink CLI and S3 gateway. The Uplink CLI is a simple command line interface tool that allows you to do a wide range of commands that are typical for a storage service such as, make buckets, upload/download files, delete files and buckets, etc. The S3 gateway is a service that mimics the Amazon S3 API. What this allows you to do is start using the Tardigrade network with very minimal code changes. You will simply set up an S3 gateway and point your application’s Amazon S3 API calls at it instead of Amazon S3, the gateway will then convert those commands and send them to the network. 

#### It's not too late! Join the waitlist

As I mentioned, you can still join the revolution and get early access to store data on the network by signing up on our [developer waitlist.](https://storj.io/sign-up/) We have over 8,000 people on the waitlist already so please be patient—we will be sending invitations out slowly at first to make sure the network grows at a sustainable pace. Your invitation will come via an email with a link to the account creation page on the Mars Satellite. Please use the link we provide in the email to create your account because it will have a URL parameter with your registration token.

Thanks to our community members for supporting us through the various phases of our V3 alpha. Stay tuned. The best is yet to come!
