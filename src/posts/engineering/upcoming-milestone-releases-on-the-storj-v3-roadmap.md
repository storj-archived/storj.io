---
title: Upcoming Milestone Releases on the Storj V3 Roadmap
date: '2018-11-30T11:16:35-07:00'
image: /blog/img/product-roadmap.png
categories:
  - engineering
authors:
  - John Gleeson
---
The recent release of our [white paper](https://storj.io/white-paper) was a huge milestone in communicating with the community, our customers, and our partners about the direction and status of development on the new network. The white paper defines our long-term vision for Storj and lays out the foundation for the concrete implementation of the network. While the white paper includes extensive information about the network we are building, it doesn't give any indication about when development milestones will be achieved - which brings us to the announcement of our public roadmap.

Our public roadmap includes a series of alpha releases leading up to a beta release and ultimately, the production launch of our V3 network. The composition and sequence of the releases is designed to accelerate the launch of the production network with SLAs. This blog post provides some additional information about each of the most recent and upcoming releases.  Quick disclaimer - this document contains forward-looking statements about our product direction. The development, release, and timing of any features or functionality described for our products remains at the sole discretion of Storj Labs. The information herein is not a commitment to deliver any material, code or functionality, and should not be relied upon in making purchase decisions.

<!--more-->

### Mogul: Private Alpha for OSS Partners - Q3 2018

Release Description: The private alpha for OSS partners was our first V3 network release. With this release, we launched a private V3 network for these partners to evaluate the new network. Our Open Source Partner Program provides our open source partners with a share of the revenue generated when the end-users of their software store data on the Storj network. This alpha enabled them to test our Uplink command-line interface tool and S3 gateway. Storj hosts all of the satellites and storage nodes for this release.

Success criteria: The network has enough functionality for the OSS partners to test integrations and provide feedback about using the V3 network to store and retrieve data from the client side. Open source partners are able to begin initial R&D on developing connectors to the Storj V3 network.

### Sputnik: Public Alpha for Developers - Q4 2018

Release Description: The public alpha for developers was our second V3 network release and includes these major deliverables: the release of the V3 white paper; our public GitHub repo; the ability for community contributors to open tickets on GitHub about issues within the platform; the announcement of our product roadmap; and the ability for community members to run Captplanet, a local development and testing environment that includes all major platform components. Developers interested in contributing to the Storj project now have the V3 white paper to provide a roadmap for their code contributions and a local development environment against which to build and test. This is the current release.

Success criteria: The  white paper is released, the community is able to run Captplanet, the GitHub repo is ready for community contributions, and our roadmap is released. Community development contributors are able to review the code, run a local version of the V3 network, provide feedback on security, and contribute code to the project.

### Explorer: Public Alpha for Storage Node Operators - Q1 2019

Release Description: The public alpha for storage node operators will be our third major V3 network release. This release will allow people to download the storage node software and start sharing hard drive space on the V3 network. Initially, we will be gating the onboarding of new storage node operators based on our current wait list to maximize initial network stability.

With this release, we will begin to build the supply side of the V3 network. Throughout this phase of the alpha, we will be up- and downloading data to test the performance, stability, and durability of the files stored on the network. We will be paying storage node operators for storage space and bandwidth utilized during this testing as if we were operating the production network. Specific details on payments and earnings for storage node operators will be shared in the coming weeks.

From the start, storage node operators will begin to build reputation scores that will determine how much data they are given to store and how much bandwidth allocation they receive. Watch for more blog posts on the details behind reputation, payout calculations, and what it takes to be a successful storage node operator on V3.

Success criteria: The community is able to run storage nodes that store and deliver data, be compensated for storage and bandwidth utilization they provide to the network, and build a reputation for their storage nodes. Storj is able to build a supply of long-term, reliable and available storage nodes, as well as validate the assumptions around reputation and incentives.

### Vanguard: Public Alpha for Storage Uplink Clients - Q1/Q2 2019

Release Description: This public alpha for users interested in storing data on the V3 network will be our fourth major release. This release will allow developers to register for accounts on Satellites, create API credentials, and develop applications that use the Storj V3 network as their storage layer. Developers will be able to use the CLI, S3 gateway, and Libuplink developer library. Storj will also provide Ditto, a simple service that will mirror data on two different S3 compatible data stores.

Developers will be able to store and retrieve data from the storage node operators, although there will be caps on network utilization. One key factor for developers is that during the alpha releases, Storj may perform periodic data wipes as part of the release process. During the alpha releases, no important data should be stored on the V3 network, unless safe backup copies exist elsewhere.

During this public alpha, Storj will be able to test the performance and stability of the network. We will be measuring key performance indicators such as node uptime, node churn, file repair, and file durability. While developers will not be charged for data uploaded and retrieved during this alpha (within the previously mentioned cap), storage node operators will continue to be compensated.

Success criteria: The developer community is able to store and retrieve data on the V3 network. Storage node operators are able to build a reputation and earn STORJ tokens for contributing storage space and bandwidth to the network. Storj Labs is able to test payment services and continue to monitor performance, availability, and durability.

### Pioneer: Beta Release - Testing Billing and Payments - Q2/Q3 2019

Release Description: The beta release for testing billing and payments will be the last major release before the production launch of the V3 network. With the beta release, the V3 network will be feature-complete for the initial concrete implementation specified in the V3 white paper.

During the beta release, we expect developers to build and test applications in advance of the production release. Storj will continue to build a supply of long-term reliable and available storage nodes. We will continue to monitor and test billing and payment services, and continue to assess performance, availability, and durability. The beta release will continue for several billing cycles until the network achieves the availability and durability benchmark performance metrics established for the production network. At the end of the beta release, developers should expect the possibility of a final network reset that will wipe all test data.

Success criteria: The network is operational and payment and billing testing has been completed. The network is feature complete for reliable storage and retrieval of data.

### Voyager: Production Release - Q3 2019

Release Description: The production release will mark the transition of the V3 network to a paid service backed by SLAs for availability and durability.

Success criteria: The network achieves and maintains the availability and durability benchmark performance metrics established for the production network.

We are extremely happy with the progress we have made to date and the reception and feedback on the recent alpha releases. We currently have our sights set on the next major alpha release for storage node operators. Stay tuned for more information in future updates!
