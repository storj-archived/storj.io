---
title: The Storj V3 Developer Library Has Arrived
date: '2019-04-18T11:04:18-06:00'
image: /blog/img/blog-dev-library.jpg
categories:
  - engineering
authors:
  - Kevin Leffew
---
Since the start of the new year, our team here at Storj Labs has made major progress toward the production launch of the V3 network. In February, [we launched the V3 Explorer alpha release](https://storj.io/blog/2019/02/announcing-the-storj-v3-explorer-release/), which enabled anyone with underutilized hardware or bandwidth resources to join the Storj network and start earning STORJ token in exchange for their contributions.

Since the Explorer launch, we have been letting small groups of storage node operators onto the network each day. As of today, our network is looking rather healthy! 

As part of the Vanguard alpha release, Storj is incorporating a number of new updates to the V3 network. These improvements will allow developers to register for accounts on Satellites, generate API credentials, and start developing applications that use the Storj V3 network as their storage layer. 

As part of this release milestone, developers will be able to interface with the network through the Uplink CLI, the S3 gateway, and most notably, the Libuplink developer library!

The Libuplink developer library is written for the Go language, and will allow Storj partners and clients to start to integrate with the Storj object store programmatically. We’ve created this library to make it as easy as possible for developers to leverage decentralized object storage in their applications. 

There are more than a number of reasons why you may wish to utilize decentralized storage over legacy alternatives, namely:

* Better performance 
* Simple, and economical pricing 
* Ease of integration 
* Client-side encryption and key-based ownership of object data 

Libuplink contains a number of interesting components, including pre-written code and subroutines, classes, values or type specifications, message templates, configuration walkthroughs, and [great documentation](https://godoc.org/storj.io/storj/lib/uplink).

The most exciting part about Libuplink is how easy it is to switch from AWS to a more economical, decentralized, and fault-tolerant alternative. 

If you are currently using Amazon S3, you can connect directly to Storj through an S3 gateway hosted alongside your application server. This means that switching to the decentralized cloud and reaping the cost, performance and privacy benefits is as easy as changing two lines in your config file! No new code needed! [The walkthrough for the Gateway can be found on our documentation page](https://github.com/storj/docs).

However, the better option (from a performance/economic perspective) is to use the Libuplink developer library. 

Here are all the details you need to know regarding the various capabilities of libuplink, so you can start connecting your application’s object storage to the decentralized cloud!
<br>
<br>
#### The Libuplink API

An Uplink is an entry point into the Storj network. It connects to a specific Satellite and caches connections and resources, allowing users to create sessions. At its core, Libuplink is a Go library that you can use to programmatically interact with the Storj network. 

The Storj network is a distributed object store, and our API is CRUD based. Libuplink allows you to do cool things like programmatically create projects, specify default encryption parameters, add buckets to projects, and much more. 

An object is simply a sequence of bytes with associated metadata. Objects have both a “path” and a “size,” and are comparable to a “file” in a conventional filesystem.

The Libuplink Go library consists of various Go types and methods that will allow you to create buckets, upload objects, list buckets/objects, and delete them, programmatically. A Go method is a function with a special receiver argument. For more information about methods in Go, check out the [Go developer documentation on the official Golang website](https://golang.org/doc/).

To get started, a user will create an Uplink configuration, associate a project with it, and then begin to structure object/bucket stores associated with that project. We will go through some sample code in a minute, but for now, let’s touch on some of the more useful Go methods.

These methods are described in detail on our [LibUplink repo](https://github.com/storj/storj/tree/master/lib/uplink), here is a sample of the more useful ones, as found in their associated package:

**uplink.go**

1. `NewUplink` creates a new Uplink 
2. `OpenProject` returns a project handle with the given API key 

**project.go**

1. `CreateBucket` creates a new bucket if authorized
2. `DeleteBucket` deletes a bucket if authorized 
3. `ListBuckets` will list the buckets that a user is authorized to see 
4. `GetBucketInfo` returns info about the requested bucket if authorized 
5. `OpenBucket` returns a bucket handle with the given EncryptionAccess information 
6. `Close` closes the project

**bucket.go**

1. `OpenObject` returns an object handle, if authorized
2. `UploadObject` uploads a new object, if authorized
3. `DeleteObject` removes an object, if authorized
4. `ListObjects` lists objects a user is authorized to see
5. `Close` closes the bucket session

**object.go**

1. `DownloadRange` returns an object’s data. A length of -1 will mean (Object.Size - offset) 

In the near future, additional library language wrappers will be released, allowing you to programmatically interface the Storj network with other programming languages. The first language bindings that we are planning to release are for C, Java (Android), and iOS - with additional language bindings planned through community bounties.
<br>
<br>
#### Getting Started

To get started, the first thing you will need to do is select a Satellite and generate an API key. Also, check out this [walkthrough of the Satellite GUI for the Tardigrade Network](https://storj.io/blog/2019/04/starting-your-first-project-on-the-tardigrade-cloud-storage-network/).

Now that we have created a project and generated an API key, let’s get started with some code! We are going to write a Go program with functions that will upload a file to a project that we created on the Satellite in the previous walkthrough. The full code for this walkthrough can be found on [GitHub](https://gist.github.com/kaloyan-raev/d4a857f09f2ab3e3d83d6ed72858a579).

First, we need to list the package and import dependencies related to the Uplink. Every Go program must be a part of some package, and because this is a standalone executable Go program, we must first make a `package main` declaration, and import some additional package dependencies as well. Write:

```
import (

"bytes"

"context"

"fmt"

"io/ioutil"

"log"

"storj.io/storj/lib/uplink"

"storj.io/storj/pkg/storj"

)
```
<br>
<br>

Let’s define our constants that we have pulled from the Satellite. In Go, constants are declared like variables, but with the `const` keyword. These constants include constants for our API key, Satellite address, bucket name, upload path, and encryption key. The following values are fillers for what you would be using in real life. 

In this example, `satellite` will define the Satellite URL, 

* `myBucket` will be an example bucket, created on the satellite in the [previous walkthrough](https://storj.io/blog/2019/04/starting-your-first-project-on-the-tardigrade-cloud-storage-network/), ie. `uplink mb sj://example-bucket` 
* `myUploadPath` will take the path 
* `myData` will be the data that you are uploading 
* `myAPIKey` will be the API key generated previously in the [previous walkthrough](https://storj.io/blog/2019/04/starting-your-first-project-on-the-tardigrade-cloud-storage-network/) 

Write: 

```
    const (

    myAPIKey = "change-me-to-the-api-key-created-in-satellite-gui"

    satellite       = "mars.tardigrade.io:7777"

    myBucket        = "my-first-bucket"

    myUploadPath    = "foo/bar/baz"

    myData          = "one fish two fish red fish blue fish"

    myEncryptionKey = "you'll never guess this"

)
```
<br>
<br>

Next, let’s define a function, `WorkWithLibUplink`, that uploads data to a specified path in a bucket, ingesting a Satellite address, encryption key, and API key, bucket name, upload path, and data to upload as parameters.

```
// WorkWithLibUplink uploads the specified data to the specified path in the

// specified bucket, using the specified Satellite, encryption key, and API key.

funcWorkWithLibUplink(satelliteAddress string, encryptionKey *storj.Key, apiKey uplink.APIKey,

    bucketName, uploadPath string, dataToUpload []byte) error {

    ctx := context.Background()
```
<br>
<br>

Now, let’s get started and upload an object programmatically. To do so, we will need to initialize our Uplink and open a project and bucket that we are working with. Write:

```
    // It is temporarily required to set the encryption key in project options.

    // This requirement will be removed in the future.

    opts := uplink.ProjectOptions{}

    opts.Volatile.EncryptionKey = encryptionKey

  

    // Open up the Project we will be working with

    proj, err := upl.OpenProject(ctx, satelliteAddress, apiKey, &opts)

    if err != nil {

        return fmt.Errorf("could not open project: %v", err)

    }

    defer proj.Close()

  

    // Create the desired Bucket within the Project

    _, err = proj.CreateBucket(ctx, bucketName, nil)

    if err != nil {

        return fmt.Errorf("could not create bucket: %v", err)

    }

  

    // Open up the desired Bucket within the Project

    bucket, err := proj.OpenBucket(ctx, bucketName, &uplink.EncryptionAccess{Key: *encryptionKey})

    if err != nil {

        return fmt.Errorf("could not open bucket %q: %v", bucketName, err)

    }

    defer bucket.Close()
```
<br>
<br>

Now that we have finished setting everything up, let’s write some code to upload an object!

```
// Upload our Object to the specified path

    buf := bytes.NewBuffer(dataToUpload)

    err = bucket.UploadObject(ctx, uploadPath, buf, nil)

    if err != nil {

        return fmt.Errorf("could not upload: %v", err)
```
<br>
<br>

To download it, let’s add another method to call the file back. We want to download the whole file, so let’s specify the range from 0 to -1. We will also want to read everything from the stream. Write:

```
    // Initiate a download of the same object again

    readBack, err := bucket.OpenObject(ctx, uploadPath)

    if err != nil {

        return fmt.Errorf("could not open object at %q: %v", uploadPath, err)

    }

    defer readBack.Close()

  

    // We want the whole thing, so range from 0 to -1

    strm, err := readBack.DownloadRange(ctx, 0, -1)

    if err != nil {

        return fmt.Errorf("could not initiate download: %v", err)

    }

    defer strm.Close()

  

    // Read everything from the stream

    receivedContents, err := ioutil.ReadAll(strm)

    if err != nil {

        return fmt.Errorf("could not read object: %v", err)

    }

  
    if !bytes.Equal(receivedContents, dataToUpload) {

        return fmt.Errorf("got different object back: %q != %q", dataToUpload, receivedContents)

    }

    returnnil

}
```
<br>
<br>

Now that we have defined our primary functions, let’s write a main function that ingests the const parameters to wrap everything up. Write:

```
funcmain() {

    varencryptionKey storj.Key

    copy(encryptionKey[:], []byte(myEncryptionKey))

  

    apiKey, err := uplink.ParseAPIKey(myAPIKey)

    if err != nil {

        log.Fatalln("could not parse api key:", err)

    }

  

    err = WorkWithLibUplink(satellite, &encryptionKey, apiKey, myBucket, myUploadPath, []byte(myData))

    if err != nil {

        log.Fatalln("error:", err)

    }

  

    fmt.Println("success!")

}
```
<br>
<br>
Congrats! You have now written a basic Go program with functions that upload a file from the Tardigrade Network and download it back to your machine!

Finally, Go has the ability to automatically generate documentation for packages we write in a similar way to the standard package documentation, called GoDoc. The documentation for the entire libuplink API is located here: <https://godoc.org/storj.io/storj/lib/uplink>

Now go on, code, and decentralize all the things!
<br>
<br>
For the full file, visit [GitHub](https://github.com/storj/storj/wiki/Libuplink-Walkthrough), or see below:

```
// Copyright (C) 2019 Storj Labs, Inc.
// See LICENSE for copying information.

package main

import (
    “bytes”
    “context”
    “fmt”
    “io/ioutil”
    “log”

    “storj.io/storj/lib/uplink”
    “storj.io/storj/pkg/storj”
)

const (
    myAPIKey = “change-me-to-the-api-key-created-in-satellite-gui”

    satellite       = “mars.tardigrade.io:7777”
    myBucket        = “my-first-bucket”
    myUploadPath    = “foo/bar/baz”
    myData          = “one fish two fish red fish blue fish”
    myEncryptionKey = “you’ll never guess this”
)

// WorkWithLibUplink uploads the specified data to the specified path in the
// specified bucket, using the specified Satellite, encryption key, and API key.
func WorkWithLibUplink(satelliteAddress string, encryptionKey *storj.Key, apiKey uplink.APIKey,
    bucketName, uploadPath string, dataToUpload []byte) error {
    ctx := context.Background()

    // Create an Uplink object with a default config
    upl, err := uplink.NewUplink(ctx, nil)
    if err != nil {
        return fmt.Errorf(“could not create new Uplink object: %v”, err)
    }
    defer upl.Close()

    // It is temporarily required to set the encryption key in project options.
    // This requirement will be removed in the future.
    opts := uplink.ProjectOptions{}
    opts.Volatile.EncryptionKey = encryptionKey

    // Open up the Project we will be working with
    proj, err := upl.OpenProject(ctx, satelliteAddress, apiKey, &opts)
    if err != nil {
        return fmt.Errorf(“could not open project: %v”, err)
    }
    defer proj.Close()

    // Create the desired Bucket within the Project
    _, err = proj.CreateBucket(ctx, bucketName, nil)
    if err != nil {
        return fmt.Errorf(“could not create bucket: %v”, err)
    }

    // Open up the desired Bucket within the Project
    bucket, err := proj.OpenBucket(ctx, bucketName, &uplink.EncryptionAccess{Key: *encryptionKey})
    if err != nil {
        return fmt.Errorf(“could not open bucket %q: %v”, bucketName, err)
    }
    defer bucket.Close()

    // Upload our Object to the specified path
    buf := bytes.NewBuffer(dataToUpload)
    err = bucket.UploadObject(ctx, uploadPath, buf, nil)
    if err != nil {
        return fmt.Errorf(“could not upload: %v”, err)
    }

    // Initiate a download of the same object again
    readBack, err := bucket.OpenObject(ctx, uploadPath)
    if err != nil {
        return fmt.Errorf(“could not open object at %q: %v”, uploadPath, err)
    }
    defer readBack.Close()

    // We want the whole thing, so range from 0 to -1
    strm, err := readBack.DownloadRange(ctx, 0, -1)
    if err != nil {
        return fmt.Errorf(“could not initiate download: %v”, err)
    }
    defer strm.Close()

    // Read everything from the stream
    receivedContents, err := ioutil.ReadAll(strm)
    if err != nil {
        return fmt.Errorf(“could not read object: %v”, err)
    }

    if !bytes.Equal(receivedContents, dataToUpload) {
        return fmt.Errorf(“got different object back: %q != %q”, dataToUpload, receivedContents)
    }
    return nil
}

func main() {
    var encryptionKey storj.Key
    copy(encryptionKey[:], []byte(myEncryptionKey))

    apiKey, err := uplink.ParseAPIKey(myAPIKey)
    if err != nil {
        log.Fatalln(“could not parse api key:“, err)
    }

    err = WorkWithLibUplink(satellite, &encryptionKey, apiKey, myBucket, myUploadPath, []byte(myData))
    if err != nil {
        log.Fatalln(“error:“, err)
    }

    fmt.Println(“success!“)
}
```
