const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hi, This Is Ian',
  tagline: 'Content creator exploring the vast world of Linux and open source softwares.',
  url: 'https://heythereian.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fineon',
  projectName: 'fineon.github.io',
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: 'Ian Nguyen',
      items: [
        {
          label: 'Notes',
          to: '/docs/intro',
        },
        {
          to: '/My-Development-Projects',
          label: 'Dev Projects',
          position: 'left',
        },
        {
          to: '/Writing-Portfolio',
          label: 'Writing Profolio',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/fineon/fineon.github.io/',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Notes',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fineon/fineon.github.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Author: Ian Nguyen. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    googleAnalytics: {
      trackingID: 'UA-121236675-3',
      anonymizeIP: false,
    },
    sitemap: {
      changefreq: 'weekly',
      priority: 0.5,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/fineon/fineon.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/fineon/fineon.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      },
    ],
  ],
};
