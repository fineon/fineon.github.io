---
slug: install-xubuntu-dell-xps-13
title: Install Xubuntu on Dell XPS 13 9343
author: Ian Nguyen
author_title: Author
author_url: https://github.com/fineon
author_image_url: https://avatars.githubusercontent.com/u/38566281?v=4
date: 2022-07-26
tags: [xubuntu, dell]
---

# Install Xubuntu on Dell XPS 13 9343

## **Context**

Recently, my Dell XPS has been running slower after each Windows 10 update. Every interactions on my Dell, like opening a web browser, feels sluggish and laggy. Having tried Ubuntu on older computers earlier, I have set my eyes on a light-weight operating system that combines speed and performance together.

## What is Xubuntu?

**Xubuntu** is an open source GNU/Linux Operating System (OS) that prides itself in portability, performance and good user experience. It is also a different "flavour", or derivative of the open source operating system Ubuntu. Xubuntu's notable feature is its desktop environment *[XFCE](https://www.xfce.org/)* that is light-weight. Its sibling, [LXDE](https://en.wikipedia.org/wiki/LXDE) or [LXQt](https://lxqt-project.org) is also another great alternative available in the derivative OS Lubuntu.

Xubuntu packs basic tools and applications for daily usage that are always free to use. The basic set of applications provide great Graphic User Interface (GUI) for anyone who is not familiar with using command lines in a terminal.

Since my workflow involves a lot of text editing, web browsing, and some light web development, I know Xubuntu can accommodate them well. In fact, after a period of usage, I have noticed that Xubuntu allows my computer to pick up my workflow much faster than Windows 10.

## **Preview Xubuntu on a live USB**

Most Linux OSes, like Ubuntu and its derivatives or the Arch-based Manjaro, often allow live preview before installing. I reccommend running the preview version upon booting the computer to scout for potential compatibility problems. My test on the preview version showed no issues. I could interact with the OS the same way in Windows. For example, opening applications by double clicking the icons, or playing songs on my computer.

To preview Xubuntu on a computer, do the following:

1. Download the official Xubuntu ISO image. Choose the suitable versions that you'd like to run. Ubuntu and its variants/ flavours like Xubuntu all release a latest version and a long-term support (LTS) version.
2. Use [Rufus](https://rufus.ie/en/) to create a bootable USB. You can follow [Ubuntu's guide on creating a bootable USB on Windows](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview). 
3. Press `F2` to boot into BIOS mode. Press it as soon as the keyboard's backlit light is turned on. 
4. Check if UEFI is enabled and Secure Boot is disabled in BIOS.
5. Select the bootable USB to start previewing Xubuntu > Click Live preview.
6. Try replicating tasks in your workflow and see if something doesn't work.

## **Install Xubuntu**

Once I was satisfied with testing in the preview version, I proceeded to install Xubuntu on my Dell XPS.

To install Xubuntu, do the following:

1. Select install Xubuntu on your computer.

2. Choose between dual booting or a full Xubuntu install, which will reformat all data on the current disk.

3. Enjoy your new Xubuntu!

## **Post-Installation Checklist**

I had to tweak a few things to get Xubuntu up and running smoothly.

### **Enable Wifi**

Wifi doesn't work on my Xubuntu out of the box. I did the following to enable Wifi again:

1. Open **Software & Updates** > **Additional Drivers** tab. 
2. The window should display the proprietary driver for Wifi, which is the "**Broadcom Inc. and subsidiaries: BCM4352 802.11ac Wireless Network Adapter**". 
3. Click **Using Broadcom 802.11 Linux STA wireless driver source from bcmwl-kernel-source (proprietary)**. 
4. Click **Apply Changes**. 

### **Change the time to the correct timezone**

I have realized that my Dell XPS's BIOS clock is set to local time, instead of UTC time, which prevents Xubuntu from displaying the correct time. [Windows 10 set the BIOS clock to local time](https://oofhours.com/2020/10/07/windows-10-and-a-pcs-real-time-clock/), which interferes with how other OSes set time. 

Since the BIOS clock is set to local time, Xubuntu attempts to convert the local time to the timezone specified in its settings, which will display the wrong time. To fix this, set the BIOS clock to UTC and let Xubuntu convert it to local time. The following solution fixed the issue for me: 

1. Restart computer, then press `F2` when the Dell logo appears.
2. Click **General** > **Date/Time**.
3. Change the current time to UTC time.
4. Restart your computer.
5. Check Xubuntu's date/time settings and make sure the **Time and Date** application sets the correct local time zone.
