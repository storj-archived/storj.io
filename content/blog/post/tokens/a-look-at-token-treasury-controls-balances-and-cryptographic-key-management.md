---
title: 'A Look at Token Treasury Controls, Balances and Cryptographic Key Management'
date: '2018-12-07T07:10:57-07:00'
image: /blog/img/treasury-controls-policy.png
categories:
  - tokens
authors:
  - Ben Golub
---
Storj Labs will be adopting a detailed policy for the management of all of our cryptocurrency, including the STORJ token. 

There are several important parts of this policy, including:

**Oversight:** We have a set of internal and external individuals who are responsible for providing review and oversight.

**Roles and Responsibilities:** We detail the roles and responsibilities of various individuals within Storj, including keyholders, the CEO, the CFO, and our newly appointed Chief Compliance Officer. For reasons of independence, the Chief Compliance Officer is an employee of a reputable accounting firm with expertise in cryptocurrency.

**Reporting and Audit:** We have established a regular schedule of quarterly reports and internal audits. Externally, this includes publishing the [STORJ Token Balances and Flows Report](https://storj.io/blog/2018/12/introducing-the-storj-token-balances-and-flows-report/) publicly on a quarterly basis. Internally, this includes things like ensuring that the outflow of STORJ tokens to storage node operators is consistent with the totals from our [payment app](https://payout.storj.io), that the outflow of STORJ tokens from the converter wallet matches the inflow of SJCX into the converter wallet, etc., and that payments to service providers match entries in our internal accounts payable systems. One of the nice aspects of blockchains is that any third party, once they know an address, can easily verify total reserves and any individual transactions associated with that address.

**Physical and Cryptographic Controls:** These are the steps that we take to make sure that we don’t lose cryptographic assets due to actions by bad external actors, to inadvertent loss or corruption of keys, or to a rogue employee. In designing these policies, we have attempted to adhere to industry best practices. Among these practices are controls to ensure that the vast majority of crypto is stored (1) in so-called COLD wallets that are offline, physically stored in safe deposit boxes, and require multiple individuals in order to unlock. In addition, there are controls to make sure that only a limited number of individuals are able to authorize transfers from warm or hot wallets and that there are quantity limits on different types of wallets.

The following table provides a summary of our different wallets and the major policies associated with them.

<img src="/blog/img/chart-1.1.png" alt="Wallets and their corresponding policies." width="100%"/>

## Converter Wallet

We have a special purpose wallet (the converter wallet) which has been associated with our contract to convert the legacy SJCX token to STORJ token. This wallet is a cold, multi-signature wallet, with approximately 6.9 M STORJ tokens. To enable the converter to continually and efficiently execute SJCX to STORJ token exchanges, we have created an authorized spender account for the converter, which has a balance of sufficient STORJ tokens to execute what we believe to be the next 3 months of conversion. That spender account will be authorized for additional STORJ tokens on an as-needed basis, but doing so requires that the converter wallet be brought online temporarily and requires multiple signatures. The address of our converter wallet is made public so that the public can confirm total remaining reserves and the rate of conversion of SJCX to STORJ tokens.

## Operational Reserves

We maintain an operational reserve of STORJ tokens for purposes such as paying storage node operators, service providers, demand partners, and our token bonus plan.

Our hot wallets are the only wallets that are online. We try to minimize the amount of tokens stored in hot wallets to the amount we will need over the next 1-2 months. We also maintain hot wallets to receive payments made to us in STORJ token.

Our warm wallets are stored offline in local safe deposit boxes, and can be used to replenish the hot wallets on an as-needed basis. We try to keep 1-2 quarter’s worth of STORJ tokens in warm wallets.

Our hot wallet and warm wallets combined currently hold about 4.8 M of our 49M operational reserves of STORJ tokens.

The remainder of the operational reserves are stored in a cold, multi-signature wallet, which has 44.2M STORJ tokens. Multiple individuals are required to transfer from that wallet and we restrict payment to a set of authorized addresses. The address of the operational cold wallet is provided publicly so that the public can confirm its total holdings.

We don’t provide the addresses of our warm and hot wallets publicly, but we report balances and flows, and these amounts are audited by our Chief Compliance Officer.

## Long-term, Timelocked Reserves

The bulk of STORJ tokens in existence are the 245 M tokens in our timelocked reserve. As you might imagine, not only is this wallet COLD, but it requires an even greater number of signatures to operate. Furthermore, all of the tokens in this wallet are cryptographically timelocked, meaning that they cannot be used or transferred by anyone—including Storj Labs—until the locks expire. Tomorrow, we will outline our timelock policy.

## Disclaimer

_The STORJ token is intended to facilitate the provision and receipt of data storage and related services through Storj Labs’ software application, which serves as a user interface and development platform on the network. The STORJ token is not intended to be a digital currency, security, commodity or any other kind of financial instrument._

_The contents of this publication contain a high-level overview of the network and the STORJ token and is subject to change as Storj Labs refines its plans. Changes to the network, the STORJ token, and the policies referenced in this post are entirely within the discretion of Storj Labs and could result from commercial, technical or legal issues, among others._

(1) Technically, “stored” means that the private key for any given address is stored.
