import { resolve } from 'path';
import { defineConfig, Plugin } from 'vite';
import { parse, SFCParseResult } from 'vue/compiler-sfc';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import highlight from './.vitepress/plugins/highlight';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  breaks: true,
});

let highlightRender: any = null;
(async () => {
  highlightRender = await highlight();
})();

const createDemoBlockSfc = (descriptor: SFCParseResult['descriptor']) => {
  const { template, scriptSetup, script, styles, customBlocks, source } =
    descriptor;
  const sliceStartIndex = source.indexOf('<desc>');
  const sliceEndIndex = source.indexOf('</desc>');
  let templateBlock = '';
  if (template) {
    const descBlocks = customBlocks.filter((item) => item.type === 'desc');

    let description = '';
    if (descBlocks && descBlocks.length > 0) {
      description = md.render(descBlocks[0].content);
    }
    let lang = 'vue';
    let sourceHtml = '';
    if (~sliceStartIndex) {
      sourceHtml = highlightRender(
        source.slice(0, sliceStartIndex) +
          source.slice(sliceEndIndex + 7).trim(),
        lang
      );
    } else {
      sourceHtml = highlightRender(source, lang);
    }
    templateBlock = `
    <template>
      <div>
          <demo-block>
            <template v-slot:demo>
              ${template.content}
            </template>
            ${
              description
                ? `<template v-slot:description>
                    ${description}
                    </template>`
                : ''
            }
            <template v-slot:source>
              <div class="language-${lang}">${sourceHtml}</div>
            </template>
          </demo-block>
        </div>
      </template>
    `;
  }
  let scriptSetupBlock = '';
  if (scriptSetup) {
    scriptSetupBlock = `<script setup lang="${scriptSetup.lang}">${scriptSetup.content}</script>`;
  }
  let scriptBlock = '';
  if (script) {
    scriptBlock = `<script lang="${script.lang}">${script.content}</script>`;
  }
  let styleBlock = '';
  if (styles && styles.length > 0) {
    styleBlock = styles.reduce((pre, cur) => {
      return (
        pre +
        `\n<style ${cur.scoped ? 'scoped' : ''} ${
          cur.lang ? `lang="${cur.lang}"` : ''
        }>${cur.content}</style>`
      );
    }, '');
  }
  return scriptSetupBlock + scriptBlock + templateBlock + styleBlock;
};

function MarkdownTransform(): Plugin {
  // const DIR_TYPES = resolve(__dirname, '../types/packages')
  // const DIR_SRC = resolve(__dirname, '../packages')
  return {
    name: 'vueuse-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.vue') || !/docs.*\/example/.test(id)) return null;
      const parseSfcResult = parse(code, { sourceMap: false });
      const demoBlockSfc = createDemoBlockSfc(parseSfcResult.descriptor);
      return demoBlockSfc;
    },
  };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    MarkdownTransform(),
    Components({
      dirs: [
        resolve(__dirname, '.vitepress/theme/components'),
        resolve(__dirname, 'guide/example'),
      ],
      include: [/\.vue$/, /\.tsx$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          prefix: 'icon',
          componentPrefix: '',
        }),
        (name) => {
          // where `name` is always CapitalCase
          if (name === 'ElTableNext') {
            return { importName: name, path: 'el-table-next' };
          }
        },
      ],
      transformer: 'vue3',
    }),
    Icons({
      compiler: 'vue3',
      defaultStyle: 'display: inline-block',
    }),
    WindiCSS({
      preflight: false,
    }),
  ],
});
