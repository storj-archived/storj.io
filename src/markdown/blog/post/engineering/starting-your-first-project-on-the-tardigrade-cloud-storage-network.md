---
title: Starting Your First Project on the Tardigrade Cloud Storage Network
date: '2019-04-15T11:10:49-06:00'
categories:
  - engineering
authors:
  - Tikh Bana
---
We are excited to welcome the first developers onto the new Tardigrade decentralized cloud storage network! As part of our [Vanguard alpha](https://storjlabs.aha.io/published/01ee405b4bd8d14208c5256d70d73a38?page=3), developers will now be able to upload data in a truly distributed, secure and cost-effective way, without sacrificing performance, resilience or uptime. 

A primary goal of ours has been to give our developers and community members a simple and straightforward experience when storing data on the network. A lot of effort went towards making it very easy to begin storing data on [the Tardigrade network, Storj’s Satellites that are backed by service level agreements (SLAs)](https://storj.io/blog/2019/04/introducing-tardigrade-decentralized-cloud-storage-from-storj-labs/). Our community of developers (as well as our own experiences) have told us that starting up a project on many of the existing, legacy cloud storage services is extremely complicated. Our goal is to take the good, familiar parts of current storage services—from the same CLI commands to the better parts of other web dashboards—and turn them into a truly simple cloud storage service.

We redesigned our network from the ground up to emphasize simplicity and ease of integration for developers interfacing with the network. A significant part of the straight-forward experience is our Tardigrade Satellite web interface, which acts as our storage web dashboard. It provides an intuitive web experience to our developers for managing projects, user access, API keys, and billing. 

<img src="/blog/img/gui1.png" width="100%"/>

#### Selecting a Satellite

Selecting a Satellite is where the experience begins. It’s a bit of a different onboarding experience than you’re used to, but here’s a simple way to think about it. 

Selecting a Satellite is kind of like selecting a data center region. You select a certain region for purposes such as performance and latency. The same goes for a Satellite. Tardigrade Satellites come with guaranteed SLAs and high-reputation storage nodes. In the future, there may be Satellites that are not Tardigrade Certified, as all Storj software is open source. Selecting a Tardigrade Satellite provides users with the reassurance that their data is safe. 

The main difference between Satellites and data centers is that Satellites do not store any actual user data. Instead, they keep track of your files and projects, maintain reliability and redundancy of files, and manage access to projects and files. 

We will have three Tardigrade Satellites to start. These Satellites will come with guaranteed SLAs. In the future, Storj will operate more Satellites, along with other members from our open source community. [Read more about Tardigrade Satellites in our blog from a few days ago](https://storj.io/blog/2019/04/introducing-tardigrade---decentralized-cloud-storage-from-storj-labs/)!

#### Creating a project

Once you’ve created an account on a Satellite, you’re ready to get started. The next step is creating a project. 

Our team was annoyed while trying to manage [multiple projects/apps in AWS](https://winterwindsoftware.com/managing-separate-projects-in-aws/).  So we scratched our own itch and enabled developers to utilize projects within user accounts to streamline this process. You simply click “Create Project” in the top right corner to get started. Within your project, you can invite team members, specify roles, manage billing (each project can have unique payment methods), and manage API keys for any applications or users you wish to share access with.  

We try to make onboarding as simple as possible. Once you’ve made your account you can create your project in seconds. Our platform abstracts the minutiae and annoyances associated with traditional providers. As you create additional projects on the Tardigrade network, you can come back here to easily access each of them, by simply toggling between projects in the main navigation. 

<img src="/blog/img/gui2.png" width="100%"/>

#### Generating API keys

You’ve made a project and you’re ready to start uploading files. What’s next?

You’ll need to create an API key. An API key gives access to the project to create buckets, upload files to the network, and read them when they are needed. Once you’ve created your API key, you’re ready to interact with the network. 

<img src="/blog/img/gui3.png" width="100%"/>

#### Coming Soon: Enhanced Identity and Access Management Features

In the next phase of our alpha release in a few months (which is named Beacon), we will be further building out our identity and access management (IAM) features. This will enable users to have much more flexibility around how they share objects, buckets and project access with applications and other users. To do this, we will utilize macaroons, which allow you to add restrictions on usage like when, where, by who, and for what purpose a target service should authorize requests. [Read more here.](https://theory.stanford.edu/~ataly/Papers/macaroons.pdf)  

Users will be able to specify things like:

- Require that the requester be a certain user to be granted access to a file. 
- Require that the requester is a current member of the project. 
- Restrict the type of access to allow only specific project administration tasks like reading, writing, directory listing, file creation, file deletion, bucket creation, bucket deletion, or some combination of these. 
- Restrict the buckets and/or paths that can be accessed (implying, also, that the access type is limited to file accesses).  
- Restrict access to a single file, or everything with a given path prefix. In both cases, paths will be given in their encrypted form, as the Satellite cannot decrypt them. 
- Restrict access to a particular period of time. 
- Require that API calls originate from a particular internet address or range of addresses. 
  
As we make progress on our identity access management features, we will be sure to provide updates. Be on the lookout for these features in our next release, Beacon, which is expected this quarter. If you have any thoughts or ideas that would aid us in building this, [please share them in our ideas portal.](http://ideas.storj.io)

#### Using the Uplink CLI or S3 Gateway

Once you’ve created an API key, you’re now ready to start uploading files to the Tardigrade network! 

To start, you will not be able to perform tasks such as creating buckets or uploading and downloading objects on the web dashboard. To interact with the network, you must use our Uplink CLI to upload and download files, create and remove buckets, generate file URLs, manage file permissions, and perform other related tasks. 

The commands should also look pretty familiar:

<img src="/blog/img/gui4.png" width="100%"/>

Another option is to use our S3 Gateway, which provides an S3-compatible, drop-in interface for users and applications that need to store data but don’t want to bother with the intricacies of distributed storage directly. We’d recommend using this CLI for users experienced with S3, as it feels similar to using S3, with the benefits of our distributed storage service!

<img src="/blog/img/gui5.png" width="100%"/>

#### Manage project members 

Ready to add members to your project? Simply click the ‘Team’ link in the sidebar. You can invite team members by email. This will give them access to the same Satellite dashboard you’re using. Once invited, they will receive your invitation, explaining the service, and what they can do. 

In the public alpha, we will only have one role - Admin. However, as IAM features evolve, this will have implications to the team roles you can select as well. 

<img src="/blog/img/gui6.png" width="100%"/>

#### Buckets and usage

As you continue to use Tardigrade storage, you will be able to keep track of your usage and charges from the Satellite dashboard. You will not be able to create buckets and upload objects directly from the dashboard because there is no client-side encryption from the browser yet. However, creating buckets may be a feature in the future. To start, you can view usage costs per project and also the usage break down by buckets per project. You will also be able to see a final invoice at the end of the billing cycle. 

During our public alpha, users will receive 25GB of free storage. However, we are also giving the first 10,000 developers 1TB of free storage for the first 30 days during our production release. [Join the waitlist here](http://tardigrade.io/waitlist).  

<img src="/blog/img/gui7.png" width="100%"/>

#### Next steps

We can’t wait for you to try the Satellite dashboard! We look forward to all of the feedback and ideas you have for the Tardigrade experience. If you have any suggestions, please don’t hesitate to share them on our Ideas portal. If you are interested in helping us with user testing and user interviews, we’d love to hear from you, too. Feel free to [email me](mailto:atikh@storj.io) and let me know what you’re interested in and what you do. :)

If you are not part of our public alpha, please [join our developer waitlist for early access](https://storj.io/sign-up/).
