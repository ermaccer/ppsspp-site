// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const env = require('./env.js');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PPSSPP',
  tagline: 'A PSP emulator',
  url: env.url,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',  //was: warn
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hrydgard/ppsspp-site/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    './plugins/fastspring',  // TODO: This is only needed on /buygold, can we filter it out?
    './plugins/google-adsense',

    [
      '@docusaurus/plugin-content-blog',
      {
        // Required for any multi-instance plugin
        id: 'news-blog',
        // URL route for the blog section of your site. *DO NOT* include a trailing slash.
        routeBasePath: 'news',
        // Path to data on filesystem relative to site dir.
        path: './news',

        blogSidebarCount: 'ALL',
        postsPerPage: 'ALL',
      },
    ],

    './plugins/webpack-proxy',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [{name: 'keywords', content: 'ppsspp, psp, emulator'}],
      colorMode: {
        defaultMode: 'dark',
      },

      /*
      announcementBar: {
        id: 'site_update',
        content: 'The website is currently being updated to a new design - please forgive any broken functionality, just try again soon',
        backgroundColor: "var(--ifm-color-primary)",
        textColor: "var(--ifm-color-primary-lightest)",
        isCloseable: false,
      },
      */

      navbar: {
        title: 'PPSSPP',
        logo: {
          alt: 'PPSSPP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/download', label: 'Downloads', position: "left"},
          {to: '/news', label: 'News', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides & Help',
          },
          {to: '/media', label: 'Screenshots & Video', position: "left"},
          {to: '/contact', label: 'Contact', position: "left"},
          {
            href: 'https://forums.ppsspp.org/',
            label: 'Forums',
            position: "left"
          },
          {
            href: 'https://github.com/hrydgard/ppsspp',
            label: 'GitHub',
            position: 'left',
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
                label: 'Guides & Help',
                to: '/docs/intro',
              },
              {
                label: 'Getting started',
                to: '/docs/category/getting-started',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/5NJB6dD',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ppsspp_emu',
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
                href: 'https://github.com/hrydgard/ppsspp',
              },
              {
                label: 'Login',
                to: '/login',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PPSSPP Project. <a href="/privacy">Privacy Policy</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAdsense: env.adsense ? {
        dataAdClient: env.adsense,
      } : null,
    },
};

module.exports = config;