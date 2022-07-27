"use strict";(self.webpackChunkdocsaur_ian=self.webpackChunkdocsaur_ian||[]).push([[6748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||r;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={slug:"install-xubuntu-dell-xps-13",title:"Install Xubuntu on Dell XPS 13 9343",author:"Ian Nguyen",author_title:"Author",author_url:"https://github.com/fineon",author_image_url:"https://avatars.githubusercontent.com/u/38566281?v=4",date:new Date("2022-07-26T00:00:00.000Z"),tags:["xubuntu","dell"]},i="Install Xubuntu on Dell XPS 13 9343",l={permalink:"/blog/install-xubuntu-dell-xps-13",editUrl:"https://github.com/fineon/fineon.github.io/tree/main/blog/Install-Xubuntu-on-Dell-XPS-13-9343.md",source:"@site/blog/Install-Xubuntu-on-Dell-XPS-13-9343.md",title:"Install Xubuntu on Dell XPS 13 9343",description:"Context",date:"2022-07-26T00:00:00.000Z",formattedDate:"July 26, 2022",tags:[{label:"xubuntu",permalink:"/blog/tags/xubuntu"},{label:"dell",permalink:"/blog/tags/dell"}],readingTime:3.495,hasTruncateMarker:!1,authors:[{name:"Ian Nguyen",title:"Author",url:"https://github.com/fineon",imageURL:"https://avatars.githubusercontent.com/u/38566281?v=4"}],frontMatter:{slug:"install-xubuntu-dell-xps-13",title:"Install Xubuntu on Dell XPS 13 9343",author:"Ian Nguyen",author_title:"Author",author_url:"https://github.com/fineon",author_image_url:"https://avatars.githubusercontent.com/u/38566281?v=4",date:"2022-07-26T00:00:00.000Z",tags:["xubuntu","dell"]},nextItem:{title:"Xubuntu Terminal Commands for File and Folder Management",permalink:"/blog/xubuntu-commands-terminal"}},u={authorsImageUrls:[void 0]},s=[{value:"<strong>Context</strong>",id:"context",level:2},{value:"What is Xubuntu?",id:"what-is-xubuntu",level:2},{value:"<strong>Preview Xubuntu on a live USB</strong>",id:"preview-xubuntu-on-a-live-usb",level:2},{value:"<strong>Install Xubuntu</strong>",id:"install-xubuntu",level:2},{value:"<strong>Post-Installation Checklist</strong>",id:"post-installation-checklist",level:2},{value:"<strong>Enable Wifi</strong>",id:"enable-wifi",level:3},{value:"<strong>Change the time to the correct timezone</strong>",id:"change-the-time-to-the-correct-timezone",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"context"},(0,a.kt)("strong",{parentName:"h2"},"Context")),(0,a.kt)("p",null,"Recently, my Dell XPS has been running slower after each Windows 10 update. Every interactions on my Dell, like opening a web browser, feels sluggish and laggy. Having tried Ubuntu on older computers earlier, I have set my eyes on a light-weight operating system that combines speed and performance together."),(0,a.kt)("h2",{id:"what-is-xubuntu"},"What is Xubuntu?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Xubuntu"),' is an open source GNU/Linux Operating System (OS) that prides itself in portability, performance and good user experience. It is also a different "flavour", or derivative of the open source operating system Ubuntu. Xubuntu\'s notable feature is its desktop environment ',(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.xfce.org/"},"XFCE"))," that is light-weight. Its sibling, ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/LXDE"},"LXDE")," or ",(0,a.kt)("a",{parentName:"p",href:"https://lxqt-project.org"},"LXQt")," is also another great alternative available in the derivative OS Lubuntu."),(0,a.kt)("p",null,"Xubuntu packs basic tools and applications for daily usage that are always free to use. The basic set of applications provide great Graphic User Interface (GUI) for anyone who is not familiar with using command lines in a terminal."),(0,a.kt)("p",null,"Since my workflow involves a lot of text editing, web browsing, and some light web development, I know Xubuntu can accommodate them well. In fact, after a period of usage, I have noticed that Xubuntu allows my computer to pick up my workflow much faster than Windows 10."),(0,a.kt)("h2",{id:"preview-xubuntu-on-a-live-usb"},(0,a.kt)("strong",{parentName:"h2"},"Preview Xubuntu on a live USB")),(0,a.kt)("p",null,"Most Linux OSes, like Ubuntu and its derivatives or the Arch-based Manjaro, often allow live preview before installing. I reccommend running the preview version upon booting the computer to scout for potential compatibility problems. My test on the preview version showed no issues. I could interact with the OS the same way in Windows. For example, opening applications by double clicking the icons, or playing songs on my computer."),(0,a.kt)("p",null,"To preview Xubuntu on a computer, do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the official Xubuntu ISO image. Choose the suitable versions that you'd like to run. Ubuntu and its variants/ flavours like Xubuntu all release a latest version and a long-term support (LTS) version."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://rufus.ie/en/"},"Rufus")," to create a bootable USB. You can follow ",(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview"},"Ubuntu's guide on creating a bootable USB on Windows"),". "),(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"F2")," to boot into BIOS mode. Press it as soon as the keyboard's backlit light is turned on. "),(0,a.kt)("li",{parentName:"ol"},"Check if UEFI is enabled and Secure Boot is disabled in BIOS."),(0,a.kt)("li",{parentName:"ol"},"Select the bootable USB to start previewing Xubuntu > Click Live preview."),(0,a.kt)("li",{parentName:"ol"},"Try replicating tasks in your workflow and see if something doesn't work.")),(0,a.kt)("h2",{id:"install-xubuntu"},(0,a.kt)("strong",{parentName:"h2"},"Install Xubuntu")),(0,a.kt)("p",null,"Once I was satisfied with testing in the preview version, I proceeded to install Xubuntu on my Dell XPS."),(0,a.kt)("p",null,"To install Xubuntu, do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select install Xubuntu on your computer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose between dual booting or a full Xubuntu install, which will reformat all data on the current disk.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enjoy your new Xubuntu!"))),(0,a.kt)("h2",{id:"post-installation-checklist"},(0,a.kt)("strong",{parentName:"h2"},"Post-Installation Checklist")),(0,a.kt)("p",null,"I had to tweak a few things to get Xubuntu up and running smoothly."),(0,a.kt)("h3",{id:"enable-wifi"},(0,a.kt)("strong",{parentName:"h3"},"Enable Wifi")),(0,a.kt)("p",null,"Wifi doesn't work on my Xubuntu out of the box. I did the following to enable Wifi again:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Software & Updates")," > ",(0,a.kt)("strong",{parentName:"li"},"Additional Drivers")," tab. "),(0,a.kt)("li",{parentName:"ol"},'The window should display the proprietary driver for Wifi, which is the "',(0,a.kt)("strong",{parentName:"li"},"Broadcom Inc. and subsidiaries: BCM4352 802.11ac Wireless Network Adapter"),'". '),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Using Broadcom 802.11 Linux STA wireless driver source from bcmwl-kernel-source (proprietary)"),". "),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Apply Changes"),". ")),(0,a.kt)("h3",{id:"change-the-time-to-the-correct-timezone"},(0,a.kt)("strong",{parentName:"h3"},"Change the time to the correct timezone")),(0,a.kt)("p",null,"I have realized that my Dell XPS's BIOS clock is set to local time, instead of UTC time, which prevents Xubuntu from displaying the correct time. ",(0,a.kt)("a",{parentName:"p",href:"https://oofhours.com/2020/10/07/windows-10-and-a-pcs-real-time-clock/"},"Windows 10 set the BIOS clock to local time"),", which interferes with how other OSes set time. "),(0,a.kt)("p",null,"Since the BIOS clock is set to local time, Xubuntu attempts to convert the local time to the timezone specified in its settings, which will display the wrong time. To fix this, set the BIOS clock to UTC and let Xubuntu convert it to local time. The following solution fixed the issue for me: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Restart computer, then press ",(0,a.kt)("inlineCode",{parentName:"li"},"F2")," when the Dell logo appears."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"General")," > ",(0,a.kt)("strong",{parentName:"li"},"Date/Time"),"."),(0,a.kt)("li",{parentName:"ol"},"Change the current time to UTC time."),(0,a.kt)("li",{parentName:"ol"},"Restart your computer."),(0,a.kt)("li",{parentName:"ol"},"Check Xubuntu's date/time settings and make sure the ",(0,a.kt)("strong",{parentName:"li"},"Time and Date")," application sets the correct local time zone.")))}c.isMDXComponent=!0}}]);