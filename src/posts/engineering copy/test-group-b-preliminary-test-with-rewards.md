---
title: Test Group B - Preliminary Test With Rewards
date: '2015-08-13T05:49:00-04:00'
categories:
  - engineering
authors:
  - Storj
---
**Dear Storj Supporters,**  
  
We are nearing the launch of Test Group B and are currently running a preliminary test. You can help test our software by following the instructions below for Windows. Instructions for Linux/Ubuntu are available on the dataserv [GitHub repository](https://github.com/Storj/dataserv-client).  


**Storj Dataserv-Client 1.1.0 Setup Windows**  
  
**1** \- Download the Storj dataserv-client 1.1.0 Windows Executable file [here](https://github.com/Storj/dataserv-client/releases/tag/v1.1.0).  
  
**2** \- Unzip the file into a folder of your choice on your local hard drive.  
  
**3** \- Then open a command prompt (CMD.exe) and browse to the folder you just unzipped, for example, by typing: C: (or whatever letter your hard drive is); then you can type:  
  
`cd c:\dataserv-client\  
`  
If you can’t locate the dataserv-client folder this way, open the folder with Windows Explorer then select and copy the text in the explorer bar. Back in CMD type cd, press the space bar once, then move your mouse into the black side of the CMD window, right click, select ‘’paste’’ and press enter.  
  
**4** \- Then type:  
`  
dataserv-client.exe --address <YOUR ADDRESS> register  
`  
Replace <YOUR ADDRESS> with your SJCX address. The < > are simply placeholders, delete them before pressing enter.  
  
**5** \- Then type:   

`dataserv-client.exe --address <YOUR ADDRESS> --max_size <SPACE IN BYTES> --store_path <PATH TO FOLDER> build  
`  
Replace <YOUR ADDRESS> with your SJCX address, <SPACE IN BYTES> with the number of bytes you want to store, for this test 500GB would be sufficient, so that is 536870912000 in bytes. To help you convert from GB to Bytes you can use this website [here](http://www.convertunits.com/from/GB/to/byte). You can store as much as you want over or below 500GB. Replace <PATH TO FOLDER> with the path to a folder you have created to store data for this test. Make sure you choose an amount of storage that you have space for on your hard drive.  
  
The build process can take up to several hours depending on the size specified. While the process is running your cursor will blink. You can see the build progress by checking the folder properties. The size of the folder and the number of files should increase every few minutes. When the build process is complete you will return to the command prompt.  
  
**6** \- Then type:  
`  
dataserv-client.exe --address <YOUR ADDRESS> poll  
`  
Replace <YOUR ADDRESS> with your SJCX address.  
  
You will then see your command prompt continuously displaying:  
`  
Pinging http://104.236.104.117 with address <YOUR ADDRESS>  
`  
Once you are pinging you are done, keep it running.  
  
If you encounter any problems, you can get real-time help in our community Slack. If you haven't joined us yet, [sign up now](http://slack.storj.io/).  
  
Note that you will need 10,000 SJCX in your address to receive any rewards for this test. Crowdsale addresses can participate with any amount of SJCX but for full rewards they will need a balance of 10,000 SJCX or more. More details on rewards to follow.  
  

Have a great day,  
**The Storj Team**
