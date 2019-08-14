---
title: >-
  Early feedback from V3 storage node operators: You’ve got questions, we’ve got
  answers!
date: '2019-02-15T11:18:05-07:00'
image: /blog/img/want-to-join-the-v3-network.png
categories:
  - community
authors:
  - John Gleeson
---
We’ve been onboarding V3 storage nodes for a week now and the feedback has been detailed and thorough. Our initial waitlist has been focused on the more technically proficient, but don’t worry, the onboarding process will continue to get easier as the weeks progress. There have been a number of frequently asked questions that we’d like to answer more broadly.

We’ve published a couple of posts recently about the **99.3% uptime** target for storage node operators. A number of prospective storage node operators have expressed concern that they may not be able to meet that target due to the ordinary maintenance required by a storage node. For example, replacing a drive, rebuilding a RAID array, or reconfiguring drive mirrors could take longer than the stipulated 5h 6m 48.2s of downtime each month.

I’d like to respond to the question of whether the 99.3% uptime target is reasonable and achievable for storage node operators. 

First, it’s important to remember that downtime doesn’t include software updates and Storj-related downtime. Software updates and that sort of thing will not impact reputation.

In terms of ongoing storage node operation, during most months where there are no software updates and no hardware issues, 99.3% uptime should be relatively achievable. If storage node hardware requires maintenance or rebuilding on a regular basis, it’s probably not suitable for any high durability storage use case.

Storage nodes with redundant storage configurations, like RAID arrays or drive mirrors, aren’t necessary since the Storj platform handles redundancy. The added complexity and cost may be useful to ensure against the risk of drive failure, but through the use of erasure coding, distribution of data across statistically uncorrelated storage nodes, and data repair, the Storj platform already accounts for maintaining the availability of data in the event of drive failure or data loss, although this doesn’t necessarily help the storage node operator. 

If a storage node operator needs to replace or upgrade hardware, the V3 network addresses this with a feature called containment mode. Once implemented, containment mode will allow a node to be offline and unavailable for data access or audit responses for a limited time. As long as the drive connects back to the network within the containment time frame (7 days during the alpha with production TBD) and responds to pending audits, the storage node’s reputation will not be significantly impacted, as long as all data stored on the node remains intact. 

Containment mode is designed to allow a storage node operator to perform proactive maintenance to avoid data loss from potential drive failure with only minor repercussion, unless the node is detected to go into containment mode too frequently in a given time span. 

In terms of the hardware choices for storage node operators, at least through the alpha, it’s best to run storage nodes on existing hardware until we’ve built up sufficient demand to provide better estimate of profitability. If a storage node operator is planning to purchase hardware for a storage node, redundant storage configurations such as RAID arrays or mirrored drives are not necessary. A configuration that utilizes a single drive per storage node is preferred.

All in all, the message is: **Don’t panic**. Many of the changes in the V3 network—particularly in the nuanced statistical reputation model—were made to ensure that node operators were provided every opportunity to be successful. As we progress through the alpha releases, we will be activating additional features and reputation factors. The uptime requirements are high, and as we analyze the data generated during the public alpha for storage node operators, we’ll be able to establish the optimal uptime required to achieve the performance and durability targets of the V3 network.
