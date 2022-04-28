import base from '@vue/theme/config';
import highlight from './plugins/highlight';

const themeConfig = async () => {
  const config = await base();
  config.markdown.highlight = await highlight();
  return config;
};

const isVercelDeployPlatform = process.env.DEPLOY_PLATFORM === 'vercel';
const baseRoot = isVercelDeployPlatform ? '/' : '/el-table-next/';
const config = {
  extends: themeConfig,
  base: baseRoot,
  title: 'el-table-next',
  description:
    'A Simple and Friendly Vue Table Component based on el-table of Element Plus',

  head: [
    [
      'link',
      {
        href: baseRoot + 'favicon-16x16.png',
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    [
      'link',
      {
        href: baseRoot + 'favicon-32x32.png',
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    [
      'link',
      {
        href: baseRoot + 'apple-touch-icon.png',
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  ],
  themeConfig: {
    logo: baseRoot + 'favicon.ico',
    repo: 'jackluson/el-table-next',
    // docsDir: 'packages/el-table-next-docs/docs',

    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',

    algolia:
      baseRoot === '/'
        ? undefined
        : {
            appId: 'O30P7F613L',
            apiKey: 'a9e5d247777f74b5446b7826a19c461d',
            indexName: 'eltablenext',
          },

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
      },
      {
        text: 'PlayGround',
        link: 'https://jackluson.github.io/el-table-next-playground/',
      },
      {
        text: 'Blog',
        link: '/blog',
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
            {
              text: 'Advanced Usage',
              link: '/guide/advanced',
            },
          ],
        },
      ],
    },
  },
};

export default config;
