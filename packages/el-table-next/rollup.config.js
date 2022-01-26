/*
 * @Date: 2021-12-08 11:14:12
 * @LastEditTime: 2022-01-05 20:35:38
 * @Description: rollup config entry file
 */
import vueJsx from '@vitejs/plugin-vue-jsx';
import { terser } from 'rollup-plugin-terser';
import esbuild, { Options as ESBuildOptions } from 'rollup-plugin-esbuild';

const buildPlugins = [vueJsx(), esbuild(), terser()];
export default [
  {
    input: './install.ts',
    output: [
      {
        name: 'ElTableNext',
        format: 'umd',
        file: `./dist/index.umd.js`,
        // extend: true,
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
      {
        file: `./dist/index.mjs`,
        format: 'es',
      },
      {
        file: `./dist/index.cjs`,
        format: 'cjs',
      },
    ],
    plugins: buildPlugins,
  },
];
