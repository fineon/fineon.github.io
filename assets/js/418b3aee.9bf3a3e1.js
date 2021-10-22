"use strict";(self.webpackChunkdocsaur_ian=self.webpackChunkdocsaur_ian||[]).push([[802],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=o,h=m["".concat(l,".").concat(p)]||m[p]||c[p]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},985:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={},l="Migrating from WordPress to Docusaurus",u={unversionedId:"Migrating-from-WordPress-to-Docusaurus",id:"Migrating-from-WordPress-to-Docusaurus",isDocsHomePage:!1,title:"Migrating from WordPress to Docusaurus",description:"I have been thinking about moving away from WordPress to a static website build. On my search, I have discovered 11ty, Next.js, Create React App and Gatsby.js. All of them provide the tools to create a perfectly functional website. However, I realized that they all required a lot of manual configurations and HTML + CSS template customizations, which consumes too much time to my likings.",source:"@site/docs/Migrating-from-WordPress-to-Docusaurus.md",sourceDirName:".",slug:"/Migrating-from-WordPress-to-Docusaurus",permalink:"/docs/Migrating-from-WordPress-to-Docusaurus",editUrl:"https://github.com/fineon/fineon.github.io/tree/main/docs/Migrating-from-WordPress-to-Docusaurus.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Xubuntu Terminal Commands for File and Folder Management",permalink:"/docs/Linux Guides/Xubuntu-Terminal-Commands-for-File-and-Folder"},next:{title:"My Development Projects",permalink:"/docs/My Portfolio/My-Development-Projects"}},d=[{value:"What is Docusaurus?",id:"what-is-docusaurus",children:[]},{value:"Reasons for the Migration to Docusaurus",id:"reasons-for-the-migration-to-docusaurus",children:[]},{value:"Migration Steps",id:"migration-steps",children:[]},{value:"Docusaurus Deploy Flow",id:"docusaurus-deploy-flow",children:[]},{value:"References",id:"references",children:[]}],c={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-from-wordpress-to-docusaurus"},"Migrating from WordPress to Docusaurus"),(0,i.kt)("p",null,"I have been thinking about moving away from WordPress to a static website build. On my search, I have discovered 11ty, Next.js, Create React App and Gatsby.js. All of them provide the tools to create a perfectly functional website. However, I realized that they all required a lot of manual configurations and HTML + CSS template customizations, which consumes too much time to my likings. "),(0,i.kt)("p",null,"One day when I was browsing on Github's explore page and saw this green cute dinosaur called Docusaurus. After reading its documentation site, I realized that Docusaurus is going to provide me a good layout for blog posts and documentation content, which fits my needs perfectly. "),(0,i.kt)("h2",{id:"what-is-docusaurus"},"What is Docusaurus?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," is a static site generator geared towards technical documentation and frequently updated content. It is an open-source project created by a small team at Facebook and currently being used by many third-party library authors for API documentations. Docusaurus uses React, Babel and Webpack to build static sites and runs on Node.js environment. "),(0,i.kt)("h2",{id:"reasons-for-the-migration-to-docusaurus"},"Reasons for the Migration to Docusaurus"),(0,i.kt)("p",null,"I have recently been building websites with React, so why not try a documentation buider that uses React and Javascript under the hood? More reasons to like Docusaurus: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Git-based workflow: All of my source code is on Github and my website is deployed using Github Pages in one quick command ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run deploy"),"."),(0,i.kt)("li",{parentName:"ul"},"Single Page Application (SPA) + server-side rendering: All of React goodness in a package. Fast and responsive website that is SEO-friendly with server-side rendering."),(0,i.kt)("li",{parentName:"ul"},"Fast SEO optimization: Docusaurus can dynamically generate sitemap based on the published contents. This sitemap is crucial for search engines like Google to discover a website and index the correct URLs. Docusaurus also includes built-in React components for SEO optimization such as ",(0,i.kt)("inlineCode",{parentName:"li"},"<Head/>")," to specify HTML's ",(0,i.kt)("inlineCode",{parentName:"li"},"<head>")," tag."),(0,i.kt)("li",{parentName:"ul"},"All-in-one documentation tool that is focused on content writing, instead of coding:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Easy blog layout: I can just focus on writing contents, instead of spending time tinkering with web layouts."),(0,i.kt)("li",{parentName:"ul"},"Good options for customizations while lifitng heavy work: Having said the above point, Docusaurus still allows CSS customization with tools such as ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/styling-layout#css-modules"},"CSS Module"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/styling-layout#sassscss"},"Sass/SCSS")," and the developing ",(0,i.kt)("a",{parentName:"li",href:"https://infima.dev"},"CSS library Infirma"),"."))),(0,i.kt)("li",{parentName:"ul"},"Ease of deployment on Github Pages: I can deploy my website all from the terminal with one command line. Docusaurus will handle optmizing the site build and use Git to deploy on Github Pages for me."),(0,i.kt)("li",{parentName:"ul"},"Moving away from bloated scripts and page builders on WordPress: This is a strong reason why I migrated from WordPress to Docusaurus. My old WordPress site has a very slow loading time despite having a few plugins and  little theme customization. I also realized that WordPress themes and plugins would create extra URLs that I don't need."),(0,i.kt)("li",{parentName:"ul"},"Avoiding arbitrarily-created pages by WordPress themes and plugins."),(0,i.kt)("li",{parentName:"ul"},"Options to include slugs and other metadata in blogs and docs: Docusaurus can parse frontmatter to display page descriptions and other metadata that is meaningful to search engines and users.")),(0,i.kt)("h2",{id:"migration-steps"},"Migration Steps"),(0,i.kt)("p",null,"I did the following steps to migrate my site from WordPress to Docusaurus: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cross reference links between WordPress site and Docusaurus site.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create 301 redirects for links that won't be available in old site. I used CPanel's Zone Editor to manage most of my domain's records and redirection.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use Google Search Console to discover any crawled links and excluded links.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Redirect any old links to the homepage. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Uninstall WordPress using Softaculous script on CPanel. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Docusaurus and customize the contents and layout to fit any needs. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add custom domain to the Github Pages repository:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"CNAME")," record and ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," records on my hosting server.")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"CNAME")," record should point to the Github user page ",(0,i.kt)("a",{parentName:"p",href:"http://fineon.github.io/"},(0,i.kt)("inlineCode",{parentName:"a"},"fineon.github.io"))," and ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," records should point to Github's IP address. To input the correct IP address, refer to Github Pages's guide to setting up ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," records: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain"},"Configuring an Apex domain"),". "))),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"CNAME")," file without any dot extension and add the custom domain name. Place the file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," folder. The ",(0,i.kt)("inlineCode",{parentName:"li"},"baseURL")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," file can be changed to ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," . This step is reccommended on ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings"},"Docusaurus deployment guide"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set up URL in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to my custom domain ",(0,i.kt)("inlineCode",{parentName:"p"},"heythereian.com")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"fineon.github.io")," to match all URLs to the domain name. Google Search Console will warn about this if the URLs in the sitemap do not match with the actual website's links. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy Docusaurus site on Github repository on ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the deployed site's XML path and resubmit the sitemap XML link to Google Search Console for link coverage."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Potential Email Server Errors and Solution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are using an email account provided by the hosting provider, like ",(0,i.kt)("a",{parentName:"p",href:"https://www.namecheap.com"},"NameCheap"),", after changing the domain's records, you may experience issues with email synchronization on clients, like Thunderbird or Iphone's Mail app. I figured out that my email clients were using the default domain name ",(0,i.kt)("inlineCode",{parentName:"p"},"heythereian.com")," as the email server, which used to point to the correct email server. When the domain's records were changed to point to Github's IP address, this email server addresss no longer works. Instead, you should configure your email client to sync from the direct email server, like ",(0,i.kt)("inlineCode",{parentName:"p"},"server-000.hosting.com")," to fetch and send emails. Ask your hosting provider or look for the direct email server address in Help & Support section of your email providers. "))),(0,i.kt)("h2",{id:"docusaurus-deploy-flow"},"Docusaurus Deploy Flow"),(0,i.kt)("p",null,"Here's my Docusaurus Deployment Flow  right now: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Write content in ",(0,i.kt)("inlineCode",{parentName:"li"},".md")," Markdown files. Then commit the code: ",(0,i.kt)("inlineCode",{parentName:"li"},"git add .")," and ",(0,i.kt)("inlineCode",{parentName:"li"},'git commit -m "commit message here"'),". "),(0,i.kt)("li",{parentName:"ol"},"Open the Linux terminal and enter Docusaurus's deployment command: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Linux bash shell"',title:'"Linux',bash:!0,'shell"':!0},"GIT_USER=<GitHub-username-here> DEPLOYMENT_BRANCH=gh-pages npm run deploy\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're deploying from Windows, checkout ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment#deploy"},"Docusaurus's guide on deployment on Windows"),". "))),(0,i.kt)("p",null,"I deployed from ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch and did not need to create another ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch on my local repository. Docusaurus will automatically create a remote ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," and push the static build there. I also specified the branch used for deployment by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"DEPLOYMENT_BRANCH=gh-pages")," in the deploy command. "),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings"},"https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.siteground.com/kb/if_i_switch_hosts_will_it_affect_my_search_engine_ranking/"},"https://www.siteground.com/kb/if_i_switch_hosts_will_it_affect_my_search_engine_ranking/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.searchenginewatch.com/2018/10/01/how-to-migrate-web-hosts-without-losing-seo/"},"https://www.searchenginewatch.com/2018/10/01/how-to-migrate-web-hosts-without-losing-seo/")))}m.isMDXComponent=!0}}]);