import base from '@vue/theme/config';
import highlight from './plugins/highlight';

const themeConfig = async () => {
  const config = await base();
  config.markdown.highlight = await highlight();
  return config;
};

const config = {
  extends: themeConfig,
  base: '/el-table-next/',
  title: 'el-table-next',
  description:
    'A Simple and Friendly Table Component based on Element Plus Table',

  head: [
    // ['script', { src: 'https://code.iconify.design/2/2.1.2/iconify.min.js' }],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    repo: 'jackluson/el-table-next',
    // docsDir: 'packages/el-table-next-docs/docs',

    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   // appId: 'D43UNTHTRN',
    //   // apiKey: 'a3fca7df39f58382c7aa3173f97b0002',
    //   // indexName: 'ElTableNext',
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jackluson/el-table-next' },
    ],
    nav: [
      {
        text: 'Home',
        link: '/',
        // activeMatch: ,
      },
      {
        text: 'Guide',
        link: '/guide/',
        activeMatch: /gide/,
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: [
            {
              text: 'Quick Start',
              link: '/guide/',
            },
            {
              text: 'Props',
              link: '/guide/props',
            },
            {
              text: 'Example',
              link: '/guide/example',
            },
          ],
        },
      ],
    },
  },
};

export default config;
