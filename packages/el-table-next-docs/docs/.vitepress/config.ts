import base from '@vue/theme/config';
import highlight from './plugins/highlight';

const themeConfig = async () => {
  const config = await base();
  config.markdown.highlight = await highlight();
  return config;
};

const config = {
  extends: themeConfig,
  title: 'el-table-next',
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
    //   apiKey: 'a99ef8de1b2b27949975ce96642149c6',
    //   indexName: 'vueuse',
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jackluson/el-table-next' },
    ],
    nav: [
      // {
      //   text: 'Guide',
      //   // items: [
      //   //   { text: 'Guide', items: Guide },
      //   //   { text: 'Links', items: Links },
      //   // ],
      // },
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
        activeMatch: /guide/,
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
