---
title: Installing dataserv-client on a Synology NAS using Debian Chroot
date: '2015-08-21T14:21:00-04:00'
categories:
  - tutorials
authors:
  - Storj
---
Disclaimer: This guide is presented as-is. Please understand that you will be making changes to your system and the authors and maintainers of this guide cannot be held responsible if something goes terribly wrong. That said, this is the method I used to install dataserv-client on my diskstation. It may not be the best method, but it worked for me.  

<!--more-->

**1.** Add SynoCommunity repository.  
**a.** Log onto the NAS using an administrator account. Main Menu → Package Center → Settings → Package Sources.  
**b.** Click Add, and name the new package **SynoCommunity** at the location [http://packages.synocommunity.com/](http://packages.synocommunity.com/). Press OK.  
**c.** Under Trust Level, Allow Installation of packages published by: select **“Synology Inc. and trusted publishers.”**

**2.** Go back to the Package Center and install **Python** (by the Python Software Foundation) and **Debian Chroot** packages. Remember which volume you install Debian Chroot, as you will need this information later.   

**3.** Restart your NAS.

**4.** Enable Root Login for SSH  
   a. Main Menu→Control Panel → Terminal & SNMP.  
   b. Under the Terminal tab, click **Enable SSH Service** and then **Apply**.

**5.** Use a terminal client (for instance, PuTTY) to log into your Synology. Use **root** as the username, and your administrator password. Please be sure to exercise best practices when selecting a password, as a server with ssh exposed to the internet will find itself under regular brute force attacks.  
You should see a prompt:

_DISKSTATION>_

> **A brief note on Debian Chroot  
> **Debian Chroot basically simulates a Debian system within your Diskstation’s operating system. The simulated root directory is located at
> 
> _/volume1/@appstore/debian-chroot/var/chroottarget/root/_
> 
> within the Synology’s “real” file system. In theory, the simulated OS cannot see any files above the chroottarget directory, but there are ways around that (see 13a). Debian Chroot enables certain functions that your Diskstation’s stripped-down Linux cannot perform (such as apt-get). We will be installing running dataserv-client from within this special environment.

**6.** Add repositories for Debian Chroot.  
**a.** You will be installing certain packages via Debian Chroot’s apt-get function. However, apt-get needs to know where to download these packages. You will need to use Linux’s text editor, vi, in order to edit Debian Chroot’s “sources.list” file so that it knows where to find these repositories.

> **A brief note on vi**  
> Vi is linux’s command line text editor. The information below should be enough to get you through this process, but some more information about how to use it can be found here: [http://www.cs.rit.edu/~cslab/vi.html](http://www.cs.rit.edu/~cslab/vi.html).

**b.** Type the following at the prompt to open this file in vi. (Replace **volume1** with the volume where you installed Debian Chroot).  

_DISKSTATION> vi ../volume1/@appstore/debian-chroot/var/chroottarget/etc/apt/sources.list_

**c.** Press “i” (as in Insert) to start editing text. Paste the following three lines at the top of the file:

_deb http://ftp.us.debian.org/debian stable main contrib_

_deb http://ftp.debian.org/debian/ wheezy-updates main contrib_

_deb http://security.debian.org/ jessie main contrib_

**d.** Press Escape, then ZZ (as in, Shift-Z-Z) to save changes and exit. If you want to exit vi without saving changes, press the colon key “:” and then enter “q!” at the prompt.

**7.** At this point, you can run dataserv-client as normal. To exit Debian Chroot, you can type exit. After exiting vi, type “reboot” to restart your machine. Then log in again as before with PuTTY.  
  
**8.** At the prompt _DISKSTATION>_, start Debian Chroot by entering the text below.

_DISKSTATION> /var/packages/debian-chroot/scripts/start-stop-status chroot_

This will present you with a new prompt _root@DISKSTATION:/#._ When you see this prompt, you are working in the chroot environment.  

**9.** At the new prompt, enter the following:

_root@DISKSTATION:/# apt-get update_

_root@DISKSTATION:/# apt-get install python3 python3-pip git_

**10.** Next, install dataserv-client (1.1.0)  via PIP, and then upgrade to 1.3.0.  

_root@DISKSTATION:/# pip3 install dataserv-client==1.3.0_

_root@DISKSTATION:/# dataserv-client version_

_root@DISKSTATION:/# sudo pip3 install dataserv-client --upgrade_

_root@DISKSTATION:/# dataserv-client version_

**11.** Then type _dataserv-client_ to start the program. Some versions may require you to type the full name with the extension, _dataserv-client.py_

**12.** At this point, you can run dataserv-client as normal. To exit Debian Chroot, you can type _exit_.  

**13.** Some additional tips:  
**a.** By default, dataserv-client places built shards in /root/.storj/store. Within the “real” filesystem, this is actually located in

_/volume1/@appstore/debian-chroot/var/chroottarget/root/.storj/store_

Where volume1 represents the volume in which you installed Chroot. I prefer to send the shards to a directory which I can access in DSM’s file manager. Therefore, I call the following commands **outside** the chroot environment, **before** running the build command:

_DISKSTATION> mkdir ~/../volume1/storj_

_DISKSTATION> mount -o bind ~/../volume1/storj/ ~/../volume1/@appstore/debian-chroot/var/chroottarget/root/.storj_

This (1) creates a directory under volume 1 to receive the shards and (2) tells the server to redirect anything being sent to the latter directory (deep in the chroot filesystem) into the former directory (higher up, in the main filesystem). It’s sort of like making a shortcut that “tricks” the system and lets it place files in locations outside the chroot environment. **You will have to remount this at every restart.**

**b.** To ensure that dataserv-client will continue running after you close PuTTY, prefix it with the nohup command. To make sure it runs in the background, add an & character to the end of your command. When I run a build or a poll, I use both of these:

_root@DISKSTATION:/# nohup dataserv-client --address=YourAddress poll &_

**c.** If the process is running in the background, you can type _ps | grep dataserv_ to identify the process id (PID) of the dataserv-client process, and terminate it by using the _kill_ command. If the process is running in the foreground, you can terminate it with Ctrl-C. This works in both the chroot and normal environments.

**d.** When running “poll” in the background, you will not see any output that confirms that the process is working. It can be helpful to use _strace -p PID_ (where PID is the process ID identified using _ps_) in order to confirm that a ping is being sent every 15 seconds or so. You can terminate _strace_ (or rather, detach from the process) with Ctrl-C. This works in both the chroot and normal environments.  

**e.** You can use _du ~/.storj/store_ to track the size of your storage directory (in KB) as the shards are built (assuming that _~/.storj/store_ is your storage directory). By default the directory size is reported in kilobytes, which can be unwieldy. Add a -h tag to the end to make it more human readable (e.g. _du ~/.storj/store -h_). This command (du) works both inside and outside the chroot environment; just keep in mind that the directory path will be different in each one.  

**f.** You can use _top_ within the chroot environment in order to see how long dataserv-client has been running. Use this in conjunction with the du command described above in order to calculate the rate of a build (as in, gigabytes/minute). You can use top in the regular environment, but it will not report a time.  

**g.** To manually update, kill any existing dataserv-client processes and use pip3 to remove and reinstall the package from git.  

_root@DISKSTATION:/# pip3 uninstall dataserv-client_

followed by one:  

_root@DISKSTATION:/# pip3 install dataserv-client_

> __This guide was prepared by Storj community member **reddd** (BTC/SJCX: 1GhLgxeaa58eCXkWCSCuxLKR18vYXi7Tvi), with early steps (1-5) adapted from **Scott**’s Downstream Farmer synology guide (BTC/SJCX: 1FvcdE9G6ZJrU7wbwYuYPe5d85Jgz37rVw)_  
> _
