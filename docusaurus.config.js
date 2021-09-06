const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hi, This Is Ian',
  tagline: 'Content creator exploring the vast world of Linux and open source softwares.',
  url: 'https://dev.heythereian.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fineon', // Usually your GitHub org/user name.
  projectName: 'heyian-doc', // Usually your repo name.
  trailingSlash: true,
  themeConfig: { 
    navbar: {
      title: 'Ian Nguyen',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          label: 'Notes',
          to: '/docs/intro',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/fineon/heyian-doc/',
          label: 'GitHub',
          position: 'right',
        },
        {
          to:'/contact',
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
              href: 'https://github.com/fineon/heyian-doc/',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/fineon/heyian-doc/tree/dev/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/fineon/heyian-doc/tree/dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
