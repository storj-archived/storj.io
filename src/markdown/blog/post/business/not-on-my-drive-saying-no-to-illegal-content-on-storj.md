---
title: 'Not on my drive: saying no to illegal content on Storj'
date: '2014-12-04T05:03:00-05:00'
categories:
  - business
authors:
  - Josh Brandoff
---
_NOTE: This post is for informational purposes only and does not constitute legal advice. Please do not act on this information alone; if you have any specific legal problems, issues, or questions, seek a complete review of your situation with a lawyer licensed to practice in your jurisdiction._

<!--more-->

As Storj grows in popularity, questions have arisen concerning the potential presence of illegal content on the network. Similar to the [Tor Project](https://www.torproject.org/eff/tor-legal-faq.html.en) \[1\], Storj has been developed to be a platform for free expression and privacy. It is **not** a platform designed or intended to be used to break the law.

**So what happens if someone tries to distribute illegal content through the Storj network?**

Imagine that there is a person named Roy. Roy has some illegal content that he wishes to upload to the network and publicly promote access to. Roy’s content is split into shards, encrypted and submitted to the Storj network. However, for Roy’s plan to work, he needs to (a) continue to pay cryptocurrency to keep those file shards on the network and (b) needs to distribute the decryption keys so others can download the shards and reconstruct the file from the network.

Since Roy knowingly uploaded illegal content, he could certainly be held responsible. In addition, any other persons or groups that shared the decryption keys and indicated they are used to access illegal content would also probably be in hot water.

**But what about DriveShare farmers who may have hosted a few encrypted shards of Roy’s file?**
  
DriveShare farmers receive encrypted shards from the network in an [automatic fashion](https://raw.githubusercontent.com/Storj/whitepapers/master/storj/Storj%20Whitepaper.pdf) \[2\]. Farmers cannot tell shards apart or piece them together as it is unlikely they would have all the requisite shards to do this. In addition, farmers would not necessarily know what algorithm was used to encrypt the shards as uploaders may decide to use their own encryption schemes. Finally, farmers would not have the decryption keys to any shards they received.

On top of all this, if Roy is apprehended and can no longer pay to support his content on the network, DriveShare software will automatically purge the shards as there is no longer an economic incentive to use limited hard drive space to hold them when other uploaders are paying for other shards. This is the same automatic process that would happen if any shard was no longer being paid for. Therefore, even if the keys to decrypt the content are publicly available online, the content itself would no longer be retrievable from the Storj network.

Since all this is happening in an automatic, encrypted fashion, we see the situation for the farmer as similar to someone running a Tor relay. The [Tor Project Legal FAQ](https://www.torproject.org/eff/tor-legal-faq.html.en) \[1\] indicates that, as of April 21, 2014 they (the project), “...aren’t aware of anyone being sued or prosecuted in the United States just for running a Tor relay. Further, we believe that running a Tor relay...is legal under U.S. law.” Tor’s listed [active sponsors](https://www.torproject.org/about/sponsors.html.en) \[3\] for 2014 include the US Department of State Bureau of Democracy, Human Rights and Labor (2013-2015). We find it doubtful the US Department of State would support such a project if running a relay would necessarily put you in legal hot water.

**Is there anything a farmer can do to prevent unencrypted illegal content on the Storj network without violating privacy?**
  
**Absolutely. We want to make sure farmers only ever receive sharded, encrypted content, so we plan to allow farmers to reject shards above a certain, standardizable size and to reject shards that do not have sufficient entropy. The entropy check helps assure the farmer that a shard being received is not in plain text while not requiring the shard to be encrypted in a particular fashion.

**What if a farmer wants to be more proactive? What if she wants to help prevent encrypted illegal content from being stored on the Storj network?**  


This can be made possible through **shard graylisting**.

Let’s imagine a woman named Jill. Jill is passionate about decentralization, security and privacy so she decides to support the Storj network by using DriveShare and becoming a drive “farmer.” However, Jill is also strongly against the distribution of illegal or exploitative content. So, in the same way Jill may use AdBlock to subscribe to rulesets to block advertisements she doesn’t like, she could use a similar service to subscribe to graylists for shards known to be associated with illegal content.

Let’s say Roy, our “malicious” uploader, has taken measures to protect his identity, but has still shared the download information and decryption keys for his content publicly online. If a non-profit or enforcement organization that monitors and reports illegal content on the Internet notices this, they can submit the [hashes](https://en.wikipedia.org/wiki/Checksum) \[4\] of both the file and corresponding shards to a public graylist and indicate that these shards are associated with illegal content. In fact, in true decentralized form, anyone could submit the hashes to multiple gray lists. The more folks verifying the shards are “bad,” the more trustworthy the graylists become. Trusted organizations can also lend their voice and support in validating such graylists.

Jill, our farmer, can then subscribe to the graylists of her choice and could even indicate only to trust a given graylist if it has been verified or validated by one or more entities she trusts. This decentralized, opt-in process empowers Jill to be proactive without forcing her to rely on a centralized graylist that could be abused, corrupted or simply not apply to her jurisdiction. Jill’s DriveShare software will then automatically reject a shard if its hash appears on the graylists she has subscribed to.

**So what’s the takeaway?**

Taken together, the techniques, approaches and strategies discussed in this post can provide the best of both worlds: maintaining privacy and security for individuals in a zero-knowledge framework while preventing folks from broadcasting illegal or exploitative content. We believe decentralized technologies can have a lasting, positive effect on society. However, such technologies can only flourish in the long-term if they work within and co-evolve with a  society’s legal and ethical norms.

**References**

\[1\] Tor Project, "The Legal FAQ for Tor Relay Operators", [https://www.torproject.org/eff/tor-legal-faq.html.en](https://www.torproject.org/eff/tor-legal-faq.html.en), 2014  
\[2\] S. Wilkinson, contributors: V. Buterin, T. Boshevski, “Storj: Peer-to-Peer Cloud Storage Network”, [https://raw.githubusercontent.com/Storj/whitepapers/master/storj/Storj%20Whitepaper.pdf](https://raw.githubusercontent.com/Storj/whitepapers/master/storj/Storj%20Whitepaper.pdf), 2014  
\[3\] Tor Project, "Tor: Sponsors", [https://www.torproject.org/about/sponsors.html.en](https://www.torproject.org/about/sponsors.html.en), 2014  
\[4\] Wikipedia, "Checksum", [https://en.wikipedia.org/wiki/Checksum](https://en.wikipedia.org/wiki/Checksum), 2012
