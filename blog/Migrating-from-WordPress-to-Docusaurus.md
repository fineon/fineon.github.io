---
slug: migrate-wordpress-to-docusaurus
title: Migrating from WordPress to Docusaurus
author: Ian Nguyen
author_title: Author
author_url: https://github.com/fineon
author_image_url: https://avatars.githubusercontent.com/u/38566281?v=4
date: 2022-01-15
tags: [wordpress, docusaurus]
---
# Migrating from WordPress to Docusaurus

I have been thinking about moving away from WordPress to a static website build. On my search, I have discovered 11ty, Next.js, Create React App and Gatsby.js. All of them provide the tools to create a perfectly functional website. However, I realized that they all required a lot of manual configurations and HTML + CSS template customizations, which consumes too much time to my likings. 

One day when I was browsing on Github's explore page and saw this green cute dinosaur called Docusaurus. After reading its documentation site, I realized that Docusaurus is going to provide me a good layout for blog posts and documentation content, which fits my needs perfectly. 

## What is Docusaurus?

[Docusaurus](https://docusaurus.io) is a static site generator geared towards technical documentation and frequently updated content. It is an open-source project created by a small team at Facebook and currently being used by many third-party library authors for API documentations. Docusaurus uses React, Babel and Webpack to build static sites and runs on Node.js environment. 

## Reasons for the Migration to Docusaurus

I have recently been building websites with React, so why not try a documentation buider that uses React and Javascript under the hood? More reasons to like Docusaurus: 

- Git-based workflow: All of my source code is on Github and my website is deployed using Github Pages in one quick command `npm run deploy`.
- Single Page Application (SPA) + server-side rendering: All of React goodness in a package. Fast and responsive website that is SEO-friendly with server-side rendering.
- Fast SEO optimization: Docusaurus can dynamically generate sitemap based on the published contents. This sitemap is crucial for search engines like Google to discover a website and index the correct URLs. Docusaurus also includes built-in React components for SEO optimization such as `<Head/>` to specify HTML's `<head>` tag.
- All-in-one documentation tool that is focused on content writing, instead of coding:
    - Easy blog layout: I can just focus on writing contents, instead of spending time tinkering with web layouts.
    - Good options for customizations while lifitng heavy work: Having said the above point, Docusaurus still allows CSS customization with tools such as [CSS Module](https://docusaurus.io/docs/styling-layout#css-modules), [Sass/SCSS](https://docusaurus.io/docs/styling-layout#sassscss) and the developing [CSS library Infirma](https://infima.dev).
- Ease of deployment on Github Pages: I can deploy my website all from the terminal with one command line. Docusaurus will handle optmizing the site build and use Git to deploy on Github Pages for me.
- Moving away from bloated scripts and page builders on WordPress: This is a strong reason why I migrated from WordPress to Docusaurus. My old WordPress site has a very slow loading time despite having a few plugins and  little theme customization. I also realized that WordPress themes and plugins would create extra URLs that I don't need.
- Avoiding arbitrarily-created pages by WordPress themes and plugins.
- Options to include slugs and other metadata in blogs and docs: Docusaurus can parse frontmatter to display page descriptions and other metadata that is meaningful to search engines and users.

## Migration Steps

I did the following steps to migrate my site from WordPress to Docusaurus: 

1. Cross reference links between WordPress site and Docusaurus site.
2. Create 301 redirects for links that won't be available in old site. I used CPanel's Zone Editor to manage most of my domain's records and redirection.
3. Use Google Search Console to discover any crawled links and excluded links.
4. Redirect any old links to the homepage. 
5. Uninstall WordPress using Softaculous script on CPanel. 
6. Install Docusaurus and customize the contents and layout to fit any needs. 
7. Add custom domain to the Github Pages repository:
    1. Add `CNAME` record and `A` records on my hosting server.

    :::info Note

    `CNAME` record should point to the Github user page [`fineon.github.io`](http://fineon.github.io/) and `A` records should point to Github's IP address. To input the correct IP address, refer to Github Pages's guide to setting up `A` records: [Configuring an Apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain). 

    :::

    1. Create a `CNAME` file without any dot extension and add the custom domain name. Place the file in the `static` folder. The `baseURL` in `docusaurus.config.js` file can be changed to `/` . This step is reccommended on [Docusaurus deployment guide](https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings).
8. Set up URL in `docusaurus.config.js` to my custom domain `heythereian.com` instead of `fineon.github.io` to match all URLs to the domain name. Google Search Console will warn about this if the URLs in the sitemap do not match with the actual website's links. 
9. Deploy Docusaurus site on Github repository on `gh-pages` branch.
10. Go to the deployed site's XML path and resubmit the sitemap XML link to Google Search Console for link coverage.

:::danger Potential Email Server Errors and Solution
If you are using an email account provided by the hosting provider, like [NameCheap](https://www.namecheap.com), after changing the domain's records, you may experience issues with email synchronization on clients, like Thunderbird or Iphone's Mail app. I figured out that my email clients were using the default domain name `heythereian.com` as the email server, which used to point to the correct email server. When the domain's records were changed to point to Github's IP address, this email server addresss no longer works. Instead, you should configure your email client to sync from the direct email server, like `server-000.hosting.com` to fetch and send emails. Ask your hosting provider or look for the direct email server address in Help & Support section of your email providers. 
:::

## Docusaurus Deploy Flow

Here's my Docusaurus Deployment Flow  right now: 

1. Write content in `.md` Markdown files. Then commit the code: `git add .` and `git commit -m "commit message here"`. 
2. Open the Linux terminal and enter Docusaurus's deployment command: 

```bash title="Linux bash shell"
GIT_USER=<GitHub-username-here> DEPLOYMENT_BRANCH=gh-pages npm run deploy
```

:::info Note 

If you're deploying from Windows, checkout [Docusaurus's guide on deployment on Windows](https://docusaurus.io/docs/deployment#deploy). 

:::

I deployed from `main` branch and did not need to create another `gh-pages` branch on my local repository. Docusaurus will automatically create a remote `gh-pages` and push the static build there. I also specified the branch used for deployment by specifying `DEPLOYMENT_BRANCH=gh-pages` in the deploy command. 

## References

[https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings](https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings)

[https://www.siteground.com/kb/if_i_switch_hosts_will_it_affect_my_search_engine_ranking/](https://www.siteground.com/kb/if_i_switch_hosts_will_it_affect_my_search_engine_ranking/)

[https://www.searchenginewatch.com/2018/10/01/how-to-migrate-web-hosts-without-losing-seo/](https://www.searchenginewatch.com/2018/10/01/how-to-migrate-web-hosts-without-losing-seo/)
