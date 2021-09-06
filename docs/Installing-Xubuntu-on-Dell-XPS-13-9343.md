# Install Xubuntu on Dell XPS 13 9343

## Context
Recently, my Dell XPS has been running slower after each Windows update. Every interactions on my Dell, like opening a web browser, feels sluggish and laggy. Having tried Ubuntu on older computers earlier, I have set my eyes on a light-weight operating system that combines speed and performance together. 

**Xubuntu** is an open source GNU/Linux Operating System (OS) that prides itself in portability, performance and good user experience. It is also a different "flavour", or derivative of the open source operating system Ubuntu. Xubuntu's notable feature is its desktop environment *XFCE* that is light-weight. Its siblings, LXDE or LXQt is also another great alternative available in the derivative OS Lubuntu. 

Xubuntu packs basic tools and applications for daily usage that are always free to use. The basic set of applications provide great Graphic User Interface (GUI) for anyone who is not familiar with using command lines in a terminal. 

Since my workflow involves a lot of text editing, web browsing, and some light web development, I know Xubuntu can accommodate them well. In fact, after a period of usage, I have noticed that Xubuntu allows my computer to pick up my workflow much faster than Windows 10.


## Previewing Xubuntu on a live USB
Most Linux OSes, like Ubuntu and its derivatives or the Arch-based Manjaro, often allow live preview before installing. I reccommend running the preview version upon booting the computer to scout for potential compatibility problems. My test on the preview version showed no issues. I could interact with the OS the same way in Windows. For example, opening applications by double clicking the icons, or playing songs on my computer.

To preview Xubuntu on a computer, do the following: 
1. Download the official Xubuntu ISO image. Choose the suitable versions that you'd like to run. Ubuntu and its variants/ flavours like Xubuntu all release a latest version and a long-term support (LTS) version. 
2. Verify checksum.
2. Use Rufus to create a bootable USB.
3. Check if UEFI is enabled and Secure Boot is disabled. 
4. Press `F2` to boot into BIOS mode. 
5. Select the bootable USB to start previewing Xubuntu > "Live preview".
6. Try replicating tasks in your workflow and see if something is missing. 

## Installing Xubuntu
Once I was satisfied with testing in the preview version, I proceeded to install Xubuntu on my Dell XPS. Installing a completely new OS and replacing the familiar Windows OS felt very nerve-braking for me. But my doubs was proven wrong, as Xubuntu can accomodate a lot of my daily tasks. 

To install Xubuntu, do the following: 
1. Repeat steps 1 to 4 in the above section. 
2. Select install Xubuntu on your computer. 
3. Choose between dual booting or just Xubuntu install. 
4. Configure your audio, display, Wifi settings. Since Dell XPS 9343 uses the Broadcom Wifi chip, the proprietary Broadcom driver is needed. You need to choose the `proprietary driver` to enable Wifi functions. 
5. Enjoy your new Xubuntu! 

## A Checklist Post-Installation
I had to tweak a few things to get Xubuntu up and running smoothly. 

### Enabling Wifi

### Changing time to the correct timezone


