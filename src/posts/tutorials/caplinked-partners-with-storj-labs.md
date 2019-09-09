---
title: CapLinked Partners With Storj Labs
date: '2017-10-11T13:43:00-04:00'
image: /blog/img/clnk.png
categories:
  - tutorials
authors:
  - Storj
---

Data centralization behind corporate firewalls has long been the canonical pattern of how enterprises manage and store information. Unfortunately, this type of system architecture has some well documented security shortcomings. With recent technological advances, hackers are better equipped to breach company private firewalls. However, companies struggle to keep pace and adapt their data infrastructure to an architecture that makes it arduous for hackers to obtain data.    

<!--more-->

Blockchain technology and data decentralization are advances we at CapLinked believe to be ground-breaking technologies that will protect confidential, proprietary files. Storj is a pioneer in this arena that is changing the landscape of data management. Storj’s decentralized, end-to-end encryption cloud storage is secure, reliable, and efficient. CapLinked is excited to partner with Storj Labs to provide an unprecedented level of data security by combining CapLinked’s access management and security capabilities with Storj’s decentralized and encrypted storage.  

CapLinked provides secure enterprise sharing of confidential and proprietary information. Our SaaS platform and API allow users to protect, track, and recall access to files. We let users securely apply custom and dynamic watermarks to documents, implement digital rights management, and share these assets across an organization. Our platform is frequently used in mergers, licensing deals, financings, audits, and other projects that involve sharing data and other content between companies.

As an enterprise with an active customer base, we want to ensure that any platform we partner with will not go stale. Storj's vast Github repository of open source code and constant engagement on Github shows us this is an active project that continues to gain momentum. Furthermore, their active community of over 10,000 members and growing shows us that their health as a company is strong. Along with recent new hires, we know Storj will continue to evolve the product. These metrics tell us that anyone can confidently build applications on top of the Storj data layer and get proper support.

As a demonstration of how easy it is to integrate with Storj, I built an application that applies custom watermarks using the CapLinked API to documents stored in Storj buckets. I wrote a [Storj document watermarker](https://github.com/caplinked/storj-document-watermarker) as a NodeJs module using the [storj.js](https://github.com/Storj/storj.js) library. Storj's installation and usage guides were easy to navigate and follow, and well versed for a multitude of different platforms and API SDK flavors. Here are the steps I took to get this project up and running:

Step 1 - Obtain API credentials from Storj and Caplinked  
Step 2 - Install the [Storj library](https://github.com/Storj/libstorj) on my development machine  
Step 3 - Use Storj’s CLI (command line interface) to create buckets and upload files  
Step 4 - Make API calls to pull files from Storj  
Step 5 - Invoke CapLinked’s API to apply watermarks to files

Users of this custom watermarker can simply supply both Storj Bridge and CapLinked API credentials to start watermarking documents stored in Storj. (CapLinked API credentials are available upon request at the [CapLinked developer portal](https://developer.caplinked.com/).)

Please try out the watermarker and let us know what you think. I hope to hear from you- dev@caplinked.com.

Arons Lee  
CTO of CapLinked  
[arons@caplinked.com](mailto:arons@caplinked.com)  
[www.caplinked.com](http://www.caplinked.com/)  

**About Arons Lee, Chief Technology Officer at CapLinked:**
Arons is an entrepreneurial minded full-stack developer and engineering architect who loves to build cutting-edge applications. He has an educational background in Computer Science / Electrical Engineering and has previously worked for Yahoo in addition to various startups in the Los Angeles area. Arons has personally overseen the development and expansion of the CapLinked API and SDKs. Arons enjoys to frequent tech workshops and conferences, contribute to the developer community, and sharpen his single-digit golf handicap.
