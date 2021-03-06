/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '元气の小岛',
  tagline: '生活明朗 • 万物可爱 ☻ 人间值得 • 未来可期',
  url: 'https://zhaocchen.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zhaocchen', // Usually your GitHub org/user name.
  projectName: 'zhaocchen.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '元气の小岛',
      logo: {
        alt: '元气の小岛',
        src: 'img/avatar.jpeg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '专栏',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/zhaocchen',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '专栏',
          items: [
            {
              label: '开始阅读',
              to: 'docs/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'LeedCode题解',
              to: 'https://doocs.github.io/leetcode/#/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zhaocchen',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zhaocchen/zhaocchen.github.io/blob/master/',
        },
        blog: {
          path: './blog',
					showReadingTime: true,
					postsPerPage: 3,
					feedOptions: {
						type: 'all',
						copyright: `Copyright © ${new Date().getFullYear()} Rematch, Inc.`,
					},
					blogSidebarCount: 'ALL',
					blogSidebarTitle: 'All our posts',
          editUrl:
            'https://github.com/zhaocchen/zhaocchen.github.io/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
