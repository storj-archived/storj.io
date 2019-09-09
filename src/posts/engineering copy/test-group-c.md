---
title: Test Group C
date: '2016-06-22T11:06:00-04:00'
categories:
  - engineering
authors:
  - Storj
---
**Dear Storj Supporters,**

We’re delighted to announce Test Group C (TGC) - the last test group before a full launch later this summer. 

<!--more-->


Test Group A generated usable data on network latency, disconnects, uptime, and other factors. Test Group B allowed us to assess farmer contributions, particularly uptime statistics and the total storage capacity of the network. TGC will test real world network conditions and we will reward TGC participants with a total of 1,000,000 SJCX for contributing storage capacity and telemetry data to the network over the next few months.


TGC is designed to simulate real world conditions that Storj Labs will face once the network is launched. TGC will measure network performance using real data that is uploaded by developers. Storj Labs will be tracking the following performance metrics of these Storj software modules:

*   **CLI metrics:** Upload Speed, Download Speed, Preprocessing Time, Cleanup Time, Response time for API requests  
    
*   **Bridge metrics:** Requests per minute, Offer Response Times, Consign Token Generation Times  
    
*   **Farmer metrics:** Read/Write/Seek Speeds, Host Load, Response Times For Network Queries, GBh Speeds   
    
*   **Audits metrics:** Response Times, Amount of Data Processed, Time to Run Audit, Passes vs Fails, Number of Audits per Farmer 

**Rewards**

Storj Labs will allocate the 1,000,000 SJCX to farmers based on their actual contributions to the network. This system forms the basis of all payments we will make to farmers in the live network. Farmers will be compensated for the following:

*   Storing data  
    
*   Transferring data  
    
*   Sending telemetry data

**Payout Methods**

We’ve been developing real Counterparty micropayment channels for TGC. Right now we’re working on testing it, and integrating it into Counterparty core. The micropayment code will be pushed out later in  TGC, when we’re satisfied with the tests, and have had a chance to integrate it.  
In the meantime, we’ll be sending payments as a batch each month. We have a working batch-send tool, helpfully developed by Let’s Talk Bitcoin, which was used for Test Group B. Counterparty has no concept of dust, so we can make payments of any size with sendmany. We will make batch payments until micropayments are implemented and thoroughly tested.

**SJCX = reputation points, and license key**

Maintaining a minimum SJCX balance may impact payouts to farmers.

*   1,000 SJCX or more = Full Rewards  
    
*   999 SJCX or less = Potentially Less Rewards

**Timeline**

Stay tuned for further announcements, and be sure to leave your comments on [Slack](slack.storj.io).

**Have a great day,**

The Storj Team
