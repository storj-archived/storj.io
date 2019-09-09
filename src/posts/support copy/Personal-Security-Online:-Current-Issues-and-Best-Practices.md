---
title: 'Personal Security Online: Current Issues and Best Practices'
date: '2014-09-22T15:21:00-04:00'
categories:
  - support
authors:
  - Nicola Minichiello
---
Online credentials theft and privacy issues are matters that are increasingly becoming hot topics of discussion throughout the media. Not a week goes by without a story of a hack or a leak that breaks loose on the news, giving enormous frustration and concern in the impacted users, and instigating fear in those unaffected.

<!--more-->


On the one hand, we have issues with online credentials being stolen by hackers to access private data usually for profit; while on the other hand, government entities have the authority to request access to personal information stored online through subpoenas to cloud service providers, social networks, messaging and mobile networks. Below are three such recent events and discussions. We want to make sure the public is aware of what Storj and its platform can do to protect data privacy and want to suggest best practices on how to secure your online credentials.

**Edward Snowden on Encryption**

Last year Edward Snowden held a press conference of sorts on The Guardian's website \[1\], taking written questions from readers and typing out his answers online. We were most intrigued by his response to a question about encryption. Snowden's response: "Encryption works. Properly implemented strong crypto systems are one of the few things that you can rely on. Unfortunately, endpoint security is so terrifically weak that NSA can frequently find ways around it."

**Celebgate**

What appeared to be private, explicit photos of more than 100 celebrities were published online over Labor Day weekend, 2014, in a mass attack dubbed "Celebgate". The photos were first posted on the forum 4chan and then were circulated on the subreddit /r/TheFappening. The photos allegedly came from the victims' iCloud accounts. Apple said the hack was caused "by a very targeted attack on user names, passwords and security questions" and not a breach of its systems. The incident has since sparked a discussion about cloud security. Most likely at fault in this case were bad practices in choosing account credentials by the affected users, together with an easy way for hackers to figure how to access their iCloud accounts \[2\].

**5 Million Google Online Credentials Leaked**

Almost 5 million usernames and passwords purportedly for Google accounts were uploaded to a Russian forum by hackers on September 9, 2014 \[3\]. Google denied there was evidence of their systems being hacked, the leak was due to poor security practices by their users \[4\]. Most people don’t take great care when selecting a password to secure their online accounts. The ongoing use of weak, dictionary-based passwords that are leaving us vulnerable is also highlighted in a blog post from LastPass which takes a look at the reality of our bad password practices with an excellent infographic \[5\].

**Storj, MetaDisk and DriveShare: A Recipe for True Data Privacy** 

Storj is working hard to solve data security issues with the help of its own web app, MetaDisk, and client app, DriveShare. It is the first decentralized end-to-end encrypted cloud storage provider that uses blockchain technology and cryptography to secure online files. There is no need to trust a corporation, their vulnerable servers, or their employees with your files. This completely removes trust from the equation. To best protect your files, they are encrypted client-side on your computer before they are uploaded. Furthermore, each file is split up into chunks which are first encrypted and are then distributed for storage across the Storj network. The network is comprised of DriveShare nodes run by users around the world who rent out their unused hard drive space in return for Storjcoin X (SJCX).

Client-side encryption ensures that all data, including file names and metadata, is encrypted before a transfer takes place and also serves as a tamper-proof mechanism. If your file is somehow manipulated while stored, a cryptographic hash function will prove that the tampered file is not the original file. Because all data can be verified, malicious entities cannot spy on, counterfeit, or modify such data. Even if someone was able to access a DriveShare node, it would be mathematically impossible to crack the encryption algorithms and figure out what is being stored.

The decentralized aspect of Storj means that there are no central servers to be compromised, and because of the use of client-side encryption, only the end users have access to their unencrypted files and encryption keys.

Cloud storage can only be as secure as the user - if you give your password away, then the cloud storage can’t do much to protect your data. In MetaDisk’s case, there won’t be a password but instead a “hash” and a “private key” for each file. The hash is like a unique identifier for a file, so you can locate it by searching the string of characters that compose your hash (i.e. a07b4fdd12a56a7a78e61ce12b1a...). In addition, each file will have a private key that will allow you to decrypt the file and access its content. Users can share their hash and private key to unlock their files to people they trust or simply because they want their files to be publicly available to everyone. In cases where users want to keep their data private, they must pay great attention to storing their hashes and private keys securely, away from prying eyes, [malware](https://support.google.com/accounts/answer/1626737?hl=en&ref_topic=2402524), and [spyware](http://en.wikipedia.org/wiki/Spyware).  
  
**Best Password Practices**
  
**Below are some simple rules to allow you to be more careful with your credentials.**

_Change your password on a regular basis_ and _do not reuse_ the same password across websites or accounts. If you reuse the same username and password across websites, and one of them gets hacked, your credentials could be used to log into your other accounts. Attackers could also use malware or [phishing](https://support.google.com/accounts/answer/75061?hl=en) schemes to capture login credentials.

_No Dictionary Words, Proper Nouns, or Foreign Words_: password cracking tools are very effective at processing large quantities of letter and number combinations until a match for the password is found. Therefore users should avoid using conventional words as passwords. By the same token, they should also avoid regular words with numbers tacked onto the end and conventional words that are simply written backwards, such as “nimda”. While these passwords may prove to be difficult for the lay person to figure out, they are no match for the brute-force attacks of password cracking tools.  
  
_No Personal Information_: One of the frustrating things about passwords is that they need to be easy for users to remember. Naturally, this leads many users to incorporate personal information into their passwords. It is alarmingly easy for hackers to obtain personal information about prospective targets as happened in the Celebgate case above. This means that the password should not include anything remotely related to the user’s name, nickname, or the name of a family member or pet; nor easily recognizable numbers like phone numbers, addresses, or other information that someone could guess by picking up your mail.  
  
_Length, Width, and Depth_: _Length_ means that the longer a password, the more difficult it is to crack. Simply put, longer is better. It is generally recommended that passwords be between six and nine characters. Greater length is acceptable, however shorter passwords should be avoided. _Width_ is a way of describing the different types of characters that are used. Don’t just consider the alphabet. As a general rule the following character sets should all be included in every password:

*   uppercase letters such as A, B, C
    
*   lowercase letters such as a, b,c
    
*   numerals such as 1, 2, 3
    
*   special characters such as $, ?, &
    
*   alt characters such as µ, £, Æ
    

_Depth_ refers to choosing a password with a challenging meaning – something not easily guessable. Stop thinking in terms of passwords and start thinking in terms of phrases. A good password is easy to remember, but hard to guess. Examples of a mnemonic phrase may include a phrase spelled phonetically, such as “ImuKat!” (instead of “I’m a cat!”) or the first letters of a memorable phrase such as “qbfjold*” = “quick brown fox jumped over lazy dog” \[6\].

**Password managers**  
**There are many password managers available out there: free, paid, and even open source. We have had some discussion about them on [StorjTalk](https://storjtalk.org/index.php?topic=1545.0.html). The most recommended password managers by our users are listed below, but they are not intended to be a comprehensive list nor the only ones available, so always do your research first.

*   [LastPass](https://lastpass.com/): free for desktop, paid for mobile, available for Mac, Windows, Linux, Android and iOS. Syncing password database is possible across desktop and mobile.
    

*   [KeePass](http://keepass.info/): free and open source, available for Windows, Mac, Linux and “unofficial” ports for Android & iOS. A bit techy for non technical users, it can run from a USB stick or external HD but desktop to mobile sync is not easily achieved.
    

*   [1Password](https://agilebits.com/onepassword): paid, available for Mac, Windows, Android and iOS. It offers to host your encrypted password database on a local disk, cloud, usb stick, etc. User friendly with password syncing across devices including desktop to mobile.
    

The above password managers can be used to store your files’ hashes and private keys. You can use them to create “Secure Notes” where you can save all your hashes and keys, and recall them when needed, on occasion. Some are more secure than others as they don’t sync to a central server which could be hacked. Some people believe that open source password managers are better. Make your own judgment and find one that works for you in terms of ease of use, security features, and budget.

**Security Suites**
**We also recommend a complete security suite with antivirus and internet protection, not only on desktop or laptop computers, but also on smartphones. Internet protection software and an antivirus will stop any known malware from infecting your computer when browsing the web or installing applications downloaded from “not so well known” sources. Don't forget to keep your security suite up to date by downloading the latest virus definitions regularly because new viruses and malware are released every day. Once again, do your own research and see which product suits you and your system best. A quick Google search for “antivirus” or “internet security” will present you with numerous options.

**References**

\[1\] The Guardian, “Edward Snowden: NSA whistleblower answers reader questions”, [http://www.theguardian.com/world/2013/jun/17/edward-snowden-nsa-files-whistleblower](http://www.theguardian.com/world/2013/jun/17/edward-snowden-nsa-files-whistleblower), June 17, 2013  
\[2\] The Next Web, “This could be the iCloud flaw that led to celebrity photos being leaked“, [http://thenextweb.com/apple/2014/09/01/this-could-be-the-apple-icloud-flaw-that-led-to-celebrity-photos-being-leaked/](http://thenextweb.com/apple/2014/09/01/this-could-be-the-apple-icloud-flaw-that-led-to-celebrity-photos-being-leaked/), September 1, 2014  
\[3\] The Next Web, “4.93 million Gmail usernames and passwords published, Google says ‘no evidence’ its systems were compromised”, [http://thenextweb.com/google/2014/09/10/4-93-million-gmail-usernames-passwords-published-google-says-evidence-systems-compromised/](http://thenextweb.com/google/2014/09/10/4-93-million-gmail-usernames-passwords-published-google-says-evidence-systems-compromised/), September 10, 2014  
\[4\] Google Online Security Blog, “Cleaning up after password dumps”, [http://googleonlinesecurity.blogspot.co.uk/2014/09/cleaning-up-after-password-dumps.html](http://googleonlinesecurity.blogspot.co.uk/2014/09/cleaning-up-after-password-dumps.html), September 10, 2014  
\[5\] LastPass, "The Scary Truth About Your Passwords: An Analysis of the Gmail Leak", [http://blog.lastpass.com/2014/09/the-scary-truth-about-your-passwords.html](http://blog.lastpass.com/2014/09/the-scary-truth-about-your-passwords.html), September 16, 2014  
\[6\] Symantec, “The Simplest Security: A Guide To Better Password Practices”, [http://www.symantec.com/connect/articles/simplest-security-guide-better-password-practices](http://www.symantec.com/connect/articles/simplest-security-guide-better-password-practices), January 17, 2002
