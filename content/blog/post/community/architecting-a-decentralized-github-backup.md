---
title: Architecting a Decentralized GitHub Backup
date: '2019-10-18T12:46:02-06:00'
image: /blog/img/decentralizing-github.png
categories:
  - community
authors:
  - Kevin Leffew
draft: false
---
GitBackup is a tool that backs up and archives GitHub repositories. The tool is in the process of backing up the entirety of GitHub onto the Storj network, which currently stands at 1-2 PB of data. As of today, October 18, 2019, the tool has currently snapshotted 815,200 repositories across more than 150,000 users.

GitHub is the largest store of open source code in the world, with 20 million users and more than 28 million public repositories as of April 2017.  

We believe that this reservoir of free and open source code acts as a digital version of a public good, similar to a developers’ library—a library that empowers software engineers to access the collective knowledge around open source code, development patterns, and free software.

While GitHub is a wonderful service, it’s owned by an agenda-driven global corporation and is thus prone to downtime, blockage, and censorship by a single point of failure. 

Furthermore, on July 25, 2019, for example, a developer based in Iran wrote on Medium about how GitHub blocked his private repositories and prohibited access to GitHub Pages. Soon after, GitHub confirmed that it was blocking developers in [Iran](https://en.wikipedia.org/wiki/Iran), [Crimea](https://en.wikipedia.org/wiki/Crimea), [Cuba](https://en.wikipedia.org/wiki/Cuba), [North Korea](https://en.wikipedia.org/wiki/North_Korea), and [Syria](https://en.wikipedia.org/wiki/Syria) from accessing private repositories. 

If we want to guarantee the preservation of the work of hundreds of thousands of open source developers, we need to act now! 

Let’s download it all!

We’re currently using gharchive.org to get a list of GitHub usernames that have had a public action since 2015. So far the 815,200 repositories we’ve backed up constitutes about 80 TB of data. We anticipate that the entirety of public GitHub repos is about 1-2 PBs so we still have a way to go

If you want to backup your codebases’ repository (or all of GitHub) to the decentralized cloud, check out the tool, found here:

<http://gitbackup.org/>

- - -

Gitbackup was built by Shawn Wilkinson in collaboration with a number of Storj Labs’ engineers and community members. The tool was demonstrated on October 11 at Devcon V (Osaka, Japan).
