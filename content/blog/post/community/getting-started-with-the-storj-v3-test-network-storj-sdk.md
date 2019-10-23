---
title: Getting Started with the Storj V3 Test Network (storj-sdk)
date: '2019-01-10T13:55:31-07:00'
image: /blog/img/storj-v3-getting-started.png
categories:
  - community
authors:
  - Kevin Leffew
---
Storj is a decentralized object storage network where data is encrypted client-side, broken into pieces, erasure coded, and spread across a network of fault-tolerant nodes.

The goal for Storj’s V3 network is to provide developers with an object storage solution that is more secure, economical and performant than existing cloud storage options. This is made possible through protocol features like concurrency, parallelism, client-side encryption, and erasure coding (Reed-Solomon). 

<img src="/blog/img/audit-image-1.png" alt="The Storj test network (storj-sim) enables you to run all the components of the Storj platform (Satellite, Uplink client, and storage nodes) and test them on your local machine." width="100%"/>
<p style="text-align: center;">_The Storj test network (storj-sim) enables you to run all the components of the Storj platform (Satellite, Uplink client, and storage nodes) and test them on your local machine._</p>
<br>
The V3 network is designed to be compatible with existing bucket/object storage protocols (namely Amazon S3) and should be familiar for developers who have used these services in the past.

I built this guide mainly for non-native developers, or people who want to test out a local network, in a step-by-step, hand-held fashion.

For reference, a condensed walkthrough of each component exists on our GitHub wiki found here: <https://github.com/storj/storj/wiki>

Let’s get started!

### **Prerequisites**

Before configuring the storj-sim V3 testnet, you must have the following:

* The latest release of **Git** (<https://git-scm.com/downloads>)
* **Go,** at least version 1.11 (<https://golang.org/doc/install>)
* The **AWS CLI** tool (<https://docs.aws.amazon.com/cli/latest/userguide/installing.html>)

### **Getting Started**

We will begin by opening a new terminal window, cloning the storj directory from GitHub, and installing it by entering:

```
$ git clone https://github.com/storj/storj.git storj
$ cd storj

$ make install-sim
```

This will install the `storj-sim` `satellite` `storage node` `gateway` and `uplink`binaries to wherever Go is configured to output binaries on your system. By default, this is ~/go/bin. The folder must be outside of the GOPATH. Otherwise you will see errors. 

Next, run the setup:

```
$ cd ~/storj/go/bin

$ storj-sim network setup
```

You should see an output showing the generation of the identity certifications for the Satellite, as well as 10 storage nodes, and the Uplink. 

The terminal output should look like this:

<img src="/blog/img/alpha-walkthrough-image-1.png" alt="As shown above, the config is generate certificates for the storage nodes. The public key of the node’s certificate authority determines its node ID (which is is the hash of the public key and acts as a proof-of-work threshold)." width="100%"/>
<p style="text-align: center;">_As shown above, the config is generate certificates for the storage nodes. The public key of the node’s certificate authority determines its node ID (which is is the hash of the public key and acts as a proof-of-work threshold)._</p>
<br>
You have now configured a Storj test network with the default configuration — which generates one Satellite and 10 storage nodes. For a deeper dive into the various peer classes and their functions, review section 4.2 in the \\[Storj V3 white paper](storj.io/white-paper).

* You might also want to take a look at the config by navigating to the root directory `--config-dir` where all the configs are specified. 
* You can use vim to tweak the default configuration settings. You can also see what is being overwritten on the command-line level with `storj-sim -x network run`. Just look for the lines containing “running”.

Now that the configuration has been completed, we can fire up the test network with:

```
$ storj-sim network run
```

This will start a Satellite and connect it to the 10 local storage nodes.

The function of the Satellite is to participate in the node discovery system, cache node address information, store per-object metadata, maintain storage node reputation, aggregate billing data, pay storage nodes, and perform audit and repair.

A technical overview into the “audit and repair” process can be [found here](https://medium.com/@storjproject/decentralized-auditing-and-repair-the-low-key-life-of-data-resurrection-810607644d5d).

Observe the output for the gateway generation and take note of its output. You should see something similar to what is shown below:

<img src="/blog/img/alpha-walkthrough-image-2.png" alt="The ‘network run’ command will boot up the satellite and ten storage nodes." width="100%"/>
<p style="text-align: center;">_The ‘network run’ command will boot up the satellite and ten storage nodes._</p>
<br>

The test network assigns ports in the following way:

* Gateways start from port `9000`
* Satellites start from port `10000`
* Storage nodes start from port `11000`

### Using the Minio Browser GUI interface

To navigate to the Minio interface, copy and paste the URL for the gateway into your browser (in this case the above output, labeled `Endpoint`, shows `127.0.0.1:9000`)

<img src="/blog/img/alpha-walkthrough-image-3.png" alt="Navigating to the Minio interface will prompt a login screen, asking for the key credentials" width="100%"/>
<p style="text-align: center;">_Navigating to the Minio interface will prompt a login screen, asking for the key credentials._</p>
<br>

By default, in the local testnetwork, the access key and secret key should look something like:

```
Access Key: 6df732f526a47edb5088
```

And

```
Secret Key: b265c61f0fd3b9beb017
```

Type the access and secret keys into the prompt. You are now logged into the Minio interface. 

Through Minio, we are able to create buckets, upload objects into buckets, delete objects/buckets, and create streamable links with configurable expiration dates for the objects we have uploaded.

The gif below shows the GUI process of creating a bucket, uploading a video to the bucket, and generating a streamable link for it:

<img src="/blog/img/alpha-walkthrough-image-4.gif" alt="GUI process of creating a bucket" width="100%"/>
<br>

### Configuring the Uplink

With Captplanet running in another terminal window, let’s walk through the steps of configuring the Uplink client.

In the V3 network, an Uplink represents any application or service that implements _libuplink_ and wants to store and/or retrieve data. The Uplink [performs encryption](https://storj.io/blog/2018/11/security-and-encryption-on-the-v3-network/), [erasure encoding](https://storj.io/blog/2018/11/replication-is-bad-for-decentralized-storage-part-1-erasure-codes-for-fun-and-profit/), and coordinates with the other peer classes on behalf of the customer/client. 

You can think of the Uplink as an ‘access point’ for your all of your object data.

Set up your Uplink by navigating to the go/bin directory and running the following command in a new terminal window. This will configure your Uplink to communicate with the Storj Satellite bootstrapped in the storj-sim:

```
$ uplink setup --satellite-addr 127.0.0.1:10000 --enc-key [securekey]
```

You can now run Storj CLI commands on the local network instance. In this guide, all the text string inside the brackets “\[ ]” can be replaced with your own naming convention.

Let’s see if the bucket you created through the Minio GUI is still there! Run:

```
$ uplink ls
```

Next, try creating another bucket through the Uplink, and upload a file to it. We will use this object in the next section!

Here are a few commands to get started:

**Create a bucket:**

```
$ uplink mb sj://[bucket-name]
```

**Upload an object:**

```
$ uplink cp ~/Desktop/[file-name.extension] sj://[bucket-name]
```

**List the object in the bucket:**

```
$ uplink ls sj://[bucket-name]/
```

**Download the object to your machine:**

```
$ uplink cp sj://[bucket-name]/[file-name.extension] ~/Desktop/[file-name.extension]
```

We can also delete the object and bucket using the command below —  but be sure
to save an object or two for the next section!

**Delete an object:**

```
$ uplink rm sj://bucket-name/file-name.extension
```

**Remove a bucket:**

```
$ uplink rb sj://bucket-name
```

And that’s it for the Uplink client! We have successfully configured the client and walked through the basic commands for interacting with the sj://bucket/object store.

Next up, we will reconfigure the AWS command line interface to communicate with a Storj Satellite and upload files through the S3 gateway.

### Configuring the AWS Command-line to Communicate with the S3 Gateway

When we ran the command 

```
$ storj-sim network run
```

An S3 gateway was bootstrapped, and the terminal outputted a sample access and
secret key, which we used in the Minio section (see below):

<img src="/blog/img/alpha-walkthrough-image-5.png" alt="Starting Storj S3-compatible gateway" width="100%"/>
<br> 
We can also use these credentials to point the AWS command line tool toward a Storj Satellite. 

Now, with the AWS command line installed on your machine, open up a new terminal window, and run:

```
$ aws configure
```

You will be prompted for the access key and secret key generated by the gateway. Enter these into the terminal prompt, and leave the region name and output format blank. 

Here as an example using the default keys:

```
AWS Access Key ID []: [insecure-dev-access-key]

AWS Secret Access Key []: [insecure-dev-secret-key]
```

We have now successfully connected to the AWS command line. Let’s try a few commands:

```
$ aws s3 --endpoint=http://127.0.0.1:9000/ ls
```

This will show us if we have any existing buckets in the environment (if you created buckets in the GUI/Uplink sections, these will be listed).

To make a new bucket, run:

```
$ aws s3 --endpoint=http://127.0.0.1:9000/ mb s3://demobucket
```

Next, let’s upload a file to that bucket and generate a presigned URL to stream that file from the browser:

```
$ aws s3 --endpoint=http://127.0.0.1:9000/ cp ~/Desktop/your-large-file.mp4 s3://bucket-name

$ aws s3 --endpoint=http://127.0.0.1:9000/ presign s3://bucket-name/your-large-file.mp4
```

This will generate a URL and will allow live video streaming from your browser (or a VLC).

Below is an example using a video of a rocket taking flight, shown in the gif:

<img src="/blog/img/alpha-walkthrough-image-6.png" alt="Storj streaming video" width="100%"/>
<br> 
<br> 
<img src="/blog/img/alpha-walkthrough-image-7.gif" alt="Woah!" width="100%"/>
<p style="text-align: center;"> _Woah!_ </p>
<br>

#### Running Tests

`storj-sim network test <command>` can be used to run tests.

`storj-sim` will start up the network and once it's up and running it will execute the specified `<command>`.

The information about the network is exposed via environment flags. All the flags start with a prefix and an index.

* Address: `STORAGENODE_0_ADDR`, `SATELLITE_0_ADDR`, `GATEWAY_0_ADDR`
* Keys: `GATEWAY_0_ACCESS_KEY`, `GATEWAY_0_SECRET_KEY`
* Directory: `STORAGENODE_0_DIR`, `SATELLITE_0_DIR`, `GATEWAY_0_DIR`

For a real-world example you can check out:

<https://github.com/storj/storj/blob/master/scripts/test-sim.sh> and <https://github.com/storj/storj/blob/master/scripts/test-sim-aws.sh> 
<br>

#### **Conclusion, and Clean Up**

We have successfully walked through the configuration process for `storj-sim`.
In the production network, the Satellite, storage nodes, and Uplink are all run
on separate machines, but for the purpose of this walkthrough, all three
components are in parallel.

Finally, to clean up your local environment and remove all traces of this demo
from your computer, run:

```
$ storj-sim network destroy$ rm -r $HOME/storj

$ rm -r $HOME/.storj
```

That’s it! :)

_This walkthrough was produced for a version of storj-sim released (01/08/2019). The walkthrough may become out of date as Storj marches toward production launch._

* _Overview of the roadmap here:_ [_https://storj.io/blog/2018/11/upcoming-milestone-releases-on-the-storj-v3-roadmap_](https://storj.io/blog/2018/11/upcoming-milestone-releases-on-the-storj-v3-roadmap)
* _Full network overview here:_ [_https://storj.io/white-paper_](https://storj.io/white-paper)
