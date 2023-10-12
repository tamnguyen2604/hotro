// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trung tâm Hỗ trợ',
  tagline: 'HỆ THỐNG SỔ THỤ LÝ ĐIỆN TỬ ÁN HÌNH SỰ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hotro.vksndtc.gov.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HỆ THỐNG SỔ THỤ LÝ ĐIỆN TỬ ÁN HÌNH SỰ',
        logo: {
          alt: 'HỆ THỐNG SỔ THỤ LÝ ĐIỆN TỬ ÁN HÌNH SỰ',
          src: 'img/logo_vks.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hướng dẫn sử dụng',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://sothuly.vksndtc.gov.vn/',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Hướng dẫn sử dụng',
            items: [
              {
                label: 'Hướng dẫn sử dụng',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Liên kết',
            items: [
              {
                label: 'QUẢN LÝ ÁN - HỆ THỐNG SỔ THỤ LÝ ĐIỆN TỬ ÁN HÌNH SỰ',
                href: 'https://sothuly.vksndtc.gov.vn/',
              },
              {
                label: 'BÁO CÁO - HỆ THỐNG SỔ THỤ LÝ ĐIỆN TỬ ÁN HÌNH SỰ',
                href: 'https://baocao.vksndtc.gov.vn/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Viện Kiểm Sát Nhân Dân Tối Cao.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
    }),
};

module.exports = config;
