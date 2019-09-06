---
title: 'ETHWaterloo Hackathon Second Place Winner for Storj Challenge: BIT'
date: '2017-11-03T14:14:00-04:00'
image: /blog/img/bit1.png
categories:
  - tutorials
authors:
  - Storj
---

The Basic Identity Token (BIT) team participated in the recent ETHWaterloo hackathon, winning second place with their entry in our Storj Challenge competition, which was part of this hackathon. This blog will share some background on the BIT team and the app they built on top of Storj.

<!--more-->

**BIT’s inspiration is to increase accessibility to blockchain-based DApps**

This year’s ETHWaterloo Hackathon ran from October 13-15. Here, four young hackers from the Waterloo region met up to form the BIT team, aiming to build an awesome app for the Storj Hackathon challenge. The team brought together people from diverse backgrounds - two University of Waterloo students: Jonathan Tsang (a computer science major with experience in game and web development) and Kaustav Haldar (a psychology major with a keen interest in ethereum solidity and blockchain applications), and two software engineers: Eddy Guo (interested in Node.js and Javascript programming) and Steve Veerman (CTO of Flexfinity, with experience in marketing and IT consulting). After some general discussions to refine their approach, the BIT team conceptualized the integration of identity into blockchain applications, namely decentralized apps (DApps).

**BIT allows users to easily access DApps**

BIT makes DApps more consumer-friendly by providing access to the apps through their Facebook login. This simplification is the key to making blockchain-based platforms like [Storj](http://www.storj.io) and [Toshi](https://www.toshi.org/) accessible to the average person, who is likely unfamiliar with the complexities of blockchain technology. The BIT DApp login process automatically associates a user-provided wallet address with an identity token, which BIT generates by verifying the user´s identity through personal information from their Facebook profile.

One advantage of using BIT is that it contributes to reducing distributed-denial-of-service (DDoS) attacks and spam by using Ethereum’s core blockchain technology. This can best be explained by comparing this process to how we currently surf the internet. Users can access any website on the internet by entering the URL in a browser to render the web page. Malicious users may want to hinder traffic on sites by performing a DDoS attack, resulting in an overload of the web server which may lead to a crash of the site. Traditional websites are vulnerable to such attacks because they lack identity authentication to validate who is a legitimate user versus a spammer or user with malicious intent. BIT, on the other hand, allows decentralized websites and apps to integrate identity validation, eliminating the threat of DDoS attacks.

**BIT technological stack includes Storj**

BIT is built primarily using JavaScript and Node.js, and leverages smart contracts written in Solidity. The BIT team also implemented a variety of libraries, such as Storj’s node bindings  library and Toshi’s “headless bot client”.

**BIT helps user retention with DApps**

Blockchain and virtual token-based ecosystems are growing at an astonishing rate. However, the current barrier to entry is too high for a non-technical mainstream user, as this innovative technology based on complex cryptographic concepts is not easily assimilated.  Regardless, many people rush into the space with little technical knowledge and can easily get discouraged from further participating.  BIT removes this obstacle by providing people access to DApps via authentication, resulting in high user retention when using BIT-enabled DApps.

**BIT authenticates user identity information**

BIT prides itself to be very user-friendly. On almost any internet connected device, one can already connect to Facebook. BIT prompts the user to input an ERC20 compatible wallet address and then requests access to their personal information from their Facebook account. If approved, the user can access DApps like Storj, and gain access to perform actions within the app, such as uploading a file.

With BIT, people can take full advantage of blockchain technology using only a Facebook account. As shown by the BIT experimental features developed during the ETHWaterloo Storj Challenge, people can gain access to Storj to store files on the decentralized network, or to use DApps like Toshi.

The following is an end-user example of how someone would use the BIT app:

**Step 1:  **Use Facebook to log into BIT

![image](/blog/img/bit2.png)

**Step 2:**  Authenticate your profile. After this, BIT retrieves your email address and other personal informations to create your unique ID token.

**Step 3:** Input your address from [MyEtherWallet](https://www.myetherwallet.com/) or another ERC20 compatible wallet.

![image](/blog/img/bit3.png)

After completing these three simple steps, you can access Storj or Toshi. Here is a code snippet of how BIT accesses Storj to upload a file:

> const storj = new libstorj.Environment({
> 
>        bridgeUrl: ‘https://api.storj.io',
> 
>        bridgeUser: ‘<email>‘,
> 
>        bridgePass: ‘<passcode>’,
> 
>        encryptionKey: ‘anana abandon abandon abandon
> 
> abandon abandon abandon abandon’,
> 
>        logLevel: 0
> 
>    });

**BIT improvements include UI and intuitiveness:**

There are two major areas BIT should address in the future: First, the user interface front-end should be overhauled to ensure it is fully functional and user-friendly. React has already been implemented in some parts of the GUI, but more improvements should be made to further improve intuitiveness. Features for the identity verification modules of the app also need further refinement. Currently, the name and email address is received from the identity token, but much more could be done to create an identity with useful applications. One such feature would be to make uploading and accessing files with Storj easier for the user. The integration would allow users to create a folder to upload and download files using their BIT accounts. This would help position BIT as a central hub of browsing where users can easily find all their files. Also, optimizing the Toshi integration for user login would add another convenient way to validate identity for BIT. The Storj and Toshi integrations are starting points to develop BIT into a comprehensive focal point for browsing DApps in web3.0.

**Dapp Standard login tool**

The BIT authentication feature is a great addition to any size DApp because it lets us scale up to more users through better accessibility, provided by allowing people to login to any DApps with their facebook identity. This lowers the barrier to entry into blockchain technology, driving adoption of the cryptocurrency ecosystem.

**BIT wants to enable more social media networks**

When creating the BIT project, a lot of people asked us why we chose to use Facebook, considering that it is widely seen as insecure and almost the exact opposite of a blockchain ledger. In our project, we implemented Facebook authentication as a proof of concept, making it possible to log in to all the features of a blockchain app with only a Facebook identity. In the future, we would like to implement all the most popular social media accounts for BIT authentication, including Twitter, Snapchat, WhatsApp, and more. All these apps have large user bases that most likely already include people interested in blockchain.

**Ending Remarks**

The crypto space is a new, emerging frontier. [ETHWaterloo](https://ethwaterloo.com/) was just the beginning - we are the early adopters of this new tech and there is much more to come. To assemble 300 talented crypto-programmers, and organize them into teams to work on Ethereum related hacks, is sensational. We have never seen anything like it before.

Our BIT app was a challenging project, but in the end we pulled it off together, as a team. ETHWaterloo was one of the harder hackathons we've participated in because of its focus on Ethereum programming.  Despite this obstacle, all of us had an amazing experience, and we hope to attend the again in the near future.

**All code for our project can be found here:**

[https://github.com/kaustavha/ethwaterloo-bit](https://github.com/kaustavha/ethwaterloo-bit)

**From left to right:** BIT team courtesy of  @benarnon  on instagram

![image](/blog/img/bit4.jpg)

Jonathan Tsang, Steve Veerman, Kaustav Haldar, Eddy Guo
