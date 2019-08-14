---
title: Development Update 2
date: '2015-03-13T05:25:00-04:00'
categories:
  - engineering
authors:
  - Storj
---
**Dear Storj supporters,**  
Time has come for our March update on development and the progress we are making in defining the Storj platform architecture.  

<!--more-->
  
**Development updates**  
  
**[Platform Architecture](http://storj.us8.list-manage.com/track/click?u=edba9fc4ce8b9095a31859cba&id=75f61d6fe7&e=813daa4cbf)**  
After concentrating on farming software we are taking a step back to define in detail all the interlocking components of the Storj platform, including: contract formats, contract negotiation and how different pieces interface together.  
  
We decided to use the Swift multiparty transport protocol ([libswift.org](http://storj.us8.list-manage2.com/track/click?u=edba9fc4ce8b9095a31859cba&id=e4e1269b51&e=813daa4cbf)), i.e. ‘bittorrent at the transport layer’. It has many benefits and will also help make Storj more suited to streaming. Libswift is also one of the technologies used by [Tribler](http://storj.us8.list-manage1.com/track/click?u=edba9fc4ce8b9095a31859cba&id=ab2e44d9e7&e=813daa4cbf), a project aiming to mix torrent and torrent-like technology with onion routing to allow more anonymity.  
  
We are also looking at allowing contracts to specify verification schemes, depending on overhead. Current farming software can support Swizzle or Merkle, but we’re also looking at Meta Schemes like RSA’s HAIL. Initially we will probably pair that with the Telehash messaging network for bid broadcast and contract negotiation. Our end goal is for the basic Storj platform to be a low-level, decentralized marketplace for data.  
  
Expensive data transfer compared to cheap heartbeat can be competitive for archival storage, as opposed to cheaper data transfer, and more frequently, more expensive heartbeat, (e.g. CDN). By allowing for a marketplace this opens things up for heterogeneity and different competitive niches to exist.  
  
Storj software components will be as modular as possible, so people could swap in better file shard construction algorithms, different version contracts can support different verification schemes.  
  
Work is ongoing with the documentation and we are periodically adding new drafts on GitHub. Once it becomes comprehensive and detailed it will be the basis for a technical roadmap, which future tests and test groups will fall into. Having a solid architecture and roadmap will allow us to better coordinate and grow the core development team and ensure sustainable development on the platform.  
  
[**Technical Roadmap**](http://storj.us8.list-manage.com/track/click?u=edba9fc4ce8b9095a31859cba&id=20634a353d&e=813daa4cbf)  
This relies mostly on the progress of ideas we have covered above. The next step is releasing the downstream-farmer 1 GB update and let our testers try it out as part of Test Group A. While we work on the roadmap, allowing for round-trip file testing will most likely be the next hallmark.  
  
We are also thinking to implement a MVP v1 contract in the network, future versions will support more flexibility.  
  
The roadmap will give the community and developers a better idea of where we are, what is being worked on, and where we’re going. This will make it easier for people to jump in and offer help, grow the project, and accelerate development.  
  
Patience: we had a lot of rapid progress and made a big push but it’s important to remember we’re building a platform and it’s imperative to do it in a solid fashion. It is necessary to invest time now to make things better and speed up development later.  
  
[**Contribution Guidelines**](http://storj.us8.list-manage2.com/track/click?u=edba9fc4ce8b9095a31859cba&id=0802f904f6&e=813daa4cbf)  
As part of architecture and roadmap push, we’ve also put together some initial contribution guidelines for people looking to commit. It’s important to maintain a high-quality codebase, so that developers who want to contribute and/or submit prs need to follow the guidelines.  
Storj’s Codebase is mostly Python with a rapidly growing C/C++ base that can interface to Python, so developers highly proficient in one or all of these languages are welcome to start pitching in:

*   First on helping to formalize the architecture and roadmap.
*   Then on building the platform, of course.

Those with experience in distributed systems and cryptography, and the ones with solid programming skills are encouraged to contribute.  
  
**Texas Bitcoin Conference - Austin, TX - March 27-29, 2015**  
Storj will be participating to the [Texas Bitcoin Conference](http://storj.us8.list-manage1.com/track/click?u=edba9fc4ce8b9095a31859cba&id=4a3b7a0eb5&e=813daa4cbf) in Austin, Texas. We will have a booth and Shawn Wilkinson, our founder and lead developer, will host a speech.  
  
If you are planning to attend you are invited to come and see us, we will be pleased to answer any questions you may have. We will also have some big announcements to release.  
  
Storj was a Texas Bitcoin Conference [Hackathon Winner](http://storj.us8.list-manage.com/track/click?u=edba9fc4ce8b9095a31859cba&id=ea4e2921f9&e=813daa4cbf) in 2014.  

**Storj Upgrade Party**  
We will soon be releasing the next version of downstream-farmer, we will host a Storj Upgrade Party. The announcement together with a date and time will be through our newsletter and all of our channels. Stay tuned!

  
Have a great day,  
**The Storj Team**
