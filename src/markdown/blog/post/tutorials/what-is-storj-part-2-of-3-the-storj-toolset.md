---
title: 'What is Storj?  Part 2 of 3: The Storj Toolset'
date: '2016-07-11T11:19:00-04:00'
categories:
  - tutorials
authors:
  - Storj
---
*This is part 2 of a 3 part series. The previous post covered the core technology. This post discusses the toolset we've built around it. The last part will introduce the people involved.*

<!--more-->


----

The protocol contains all the tools necessary to securely make storage contracts, but it’s missing a lot of things. It functions, but it’s not useful yet. To be useful to a renter, the system needs availability, bandwidth, and any number of other commitments in the form of a Service Level Agreement (SLA). The farming software needs management features to avoid using excessive resources and automation features to effectively deploy to multiple hosts. Instead of trying to fit all these features into the core protocol, we’ve opted to address them in an additional software layer. To make this network useful and easy to interact with, we’re releasing two tools: *Storj Share* and *Bridge*.

#### StorjShare

StorjShare is the reference farming client. It allows users to easily setup and run a farm on any machine. StorjShare is available as a command-line interface (CLI) for more advanced users and to enable automation. The CLI allows the user to set parameters like the amount of storage space to share, storage location, and a payment address. It also handles contract negotiation, audit responses, and all other network communications.

We’re also releasing a StorjShare graphical user interface (GUI) in order to streamline the farming process for our non-technical users. Anyone can download the StorjShare GUI, fill in a few fields, and join the network. The GUI is a wrapper around the CLI which does all the heavy lifting. After initial setup, the user rarely needs to interact with the StorjShare GUI. They should be able to set it up, minimize it, and let it run in the background.

If the user opts in to data collection, StorjShare will also collect system telemetry. This data might include hard drive capacity and level of utilization as well as information about network connection quality. The telemetry data gets sent back to Storj Labs so that we can use it to improve the network and our software. In the future, StorjShare could even enable people to opt in to special services and programs. For example, we would love to give people the ability to share their hard drive space for free with organizations they support (like the Internet Archive or Project Gutenberg). There are any number of interesting possibilities.

#### Bridge

To help renters use the network, we’ve also created Bridge. Bridge is designed to be deployed to a production server to handle contract negotiation, auditing, payments, availability, and a number of other needs. Bridge exposes these services and, by extension, storage resources via an Application Programming Interface (API) and client. The client is designed to be integrated into other apps, so that any application can use a Bridge server to store data on the Storj network without having to be a part of the network.

As its name implies, Bridge is a centralized bridge into the decentralized Storj network. Its goal is to allow traditional applications to interact with the Storj network like they would with any other object store. It distills all the complexities of p2p communication and storage contract negotiation to push and pull requests. Unlike most object stores, Bridge doesn’t deal directly in objects, but rather in references to objects. It stores pointers to the locations of the objects on the distributed network, as well as the information necessary to audit those objects. Ideally, no data will transit through Bridge, but rather will be transmitted directly to farmers on the network.

The Bridge Client handles all the client-side work to use the network effectively. It encrypts files as they enter the network, preserving privacy and security. To ensure availability, it shards files, applies erasure coding, and spreads the shards across multiple farmers. The client then communicates with the Bridge to manage each of the shard locations on the network, and helps the user manage their encryption keys locally. While the initial implementation of the Bridge Client is a Node.js package, the end goal is to have it available in many other languages.

#### The Storj API

Our core service is an object store, similar to Amazon S3. This object store is managed by a set of public Bridge nodes. We maintain the infrastructure to negotiate contracts, manage payments, audits, etc. Our customers interact with our Bridges via the Bridge Client, and never even have to know they’re using a distributed network. The API is designed for usability, so everything complicated gets handled behind the scenes to provide a smooth, extensible development experience.

We use our extensive knowledge of the network to provide the top-notch quality of service. The decisions our Bridge makes are based on historical interactions with countless farmers. We use data about their performance, as well as their self-reported telemetry data, to intelligently distribute data across the network. We optimize for high uptime as well as fast retrieval.

Account management features are available via the Bridge Client, or via our beautiful webapp. Again, the function of the GUI is to make the experience as smooth as possible. We believe that user experience (UX) is tragically neglected by most developer-oriented services, and because of this, we’re designing the product with simplicity and usability in mind. Instead of offering a wide range of cloud computing and storage services, we aim to offer a single elegant user experience.

With the Storj API, we’re trying to build the ideal tool for developers like us: people who care about time-to-prototype, high-quality code, and rapid iteration. We want to provide tools and support to small teams, rapidly-scaling products, and individual developers. We understand that every developer actually works for herself, and the projects she cares about. This is a labor of love for us. We want to build an object store that gets out of the way so that developers can concentrate on building the projects they love.
