// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Licht\'s Zone',
  tagline: 'Living, Leaning and Enjoying.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://ewigl.github.io',
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ewigl', // Usually your GitHub org/user name.
  projectName: 'ewigl.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogTitle: '博客',
          blogDescription: '博客。',
          showReadingTime: true,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        gtag: {
          trackingID: 'G-3WX4XJC2T0',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/logo.png',
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Licht\'s Zone',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: '项目',
          },
          { to: '/blog', label: '博客', position: 'left' },
          { to: '/expectations', label: 'Todo', position: 'right' },
          { to: '/apps', label: '应用', position: 'right' },
          { to: '/about', label: '关于', position: 'right' },
          {
            href: 'https://github.com/ewigl',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'light',
      //   links: [],
      //   copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/ewigl" target="_blank"> EwigLicht </a>.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    })
};

export default config;
