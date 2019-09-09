---
title: S3 Compatibility is Key to Breaking into the Cloud Storage Market
date: '2018-11-13T12:45:02-07:00'
categories:
  - business
authors:
  - John Gleeson
---
Suppose you want to take a unique and disruptive approach to cloud storage and launch a new product into the established market. Where do you start? Sure, you want to be half the price of the most dominant provider. You’ll also want to be just as reliable, as well as faster and much more secure. But once you’ve checked all those boxes, what’s really going to move the needle in terms of adoption? As it turns out, it’s not more differentiation. It’s compatibility. As such, compatibility was a huge priority for us as we planned the build-out of our new decentralized cloud storage network.

<!--more-->

To aggressively compete in the wider cloud storage industry and bring decentralized cloud storage into the mainstream, ease of adoption and a frictionless transition from existing solutions are non-negotiable. Until a native decentralized cloud storage protocol becomes widely adopted, Amazon S3 compatibility affords a graceful transition path for migrating from centralized providers. 

Today, the most widely deployed public cloud is Amazon Web Services. The cloud computing giant’s first product was Amazon S3 and most cloud storage products provide some form of compatibility with the platform’s application program interface (API) architecture. If new players hadn´t done this, they would have always struggled to grow and achieve adoption. 

At a bare minimum, S3 compatibility alleviates many migration costs for users currently storing data on a centralized cloud provider. It also provides a familiar integration pattern for what might otherwise be new architectural territory. S3 compatibility makes it extremely easy for developers to incorporate Storj as a storage layer, enabling migrations in minutes instead of days. 

Migrating from one S3-compatible storage provider to another is usually as easy as changing a few lines of code, and swapping out API credentials and the endpoint address. This is one of the most compelling things we’ve observed when deploying our new V3 network with partners. 

“Amazon S3 interfaces are the de facto standard for Plesk as a WebOps platform and server control panel in regards of backing up your server or website. Having solutions that are compatible and easily integrate as a Plesk Extension is key for our team and the customers,” said Lukas Hertig, SVP of Business Development and Strategic Alliances at [Plesk](https://www.plesk.com/). “Our software runs on more than 380,000 servers across 3,000+ hosting providers and all hyperscale cloud platforms, supporting over 11 million websites worldwide. An easy path to integrate into Plesk eliminates a massive amount of work when enabling new technologies to our customers like the Storj platform."

Using Minio’s S3 compatibility layer, the Storj gateway provides an S3-compatible, drop-in interface for developers with applications that need to store data, but who don’t want to bother with the complexities of distributed storage directly. Developers can even use the AWS CLI directly with the Storj gateway.

The Storj S3-compatible gateway acts as a compatibility layer between a service or application and the Storj network. Unlike the cloud-hosted gateway offered by most centralized data storage providers, the Storj gateway runs as a service co-located wherever data is generated, and communicates directly with storage nodes, avoiding central bandwidth costs. 

This architecture is ideal for use cases where data is generated at the edge - backups of on-premise databases, storage infrastructure, servers, or large files such as videos - where the local gateway can provide efficient use of bandwidth as well as the performance boost from the parallelism of the peer-to-peer file transfer.

While providing an S3-compatible gateway makes initial migrations simple, most organizations will eventually want to natively integrate with their cloud storage network. Developers who build on top of our platform would want to take advantage of all the capabilities made possible through our CLI and developer library, which allow apps to talk directly to the network without the intermediary gateway. The CLI and developer library provide similar ease-of-development commands and bindings that are consistent with common languages. 

Overall, delivering an S3-compatible gateway is key to driving initial adoption of our network. By providing a familiar interface with low switching costs, we’re able to reduce the adoption barriers that impede the adoption of decentralized storage.
