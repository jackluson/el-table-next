/*
 * @Date: 2021-12-08 11:14:12
 * @LastEditTime: 2022-02-15 20:27:54
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
        exports: 'auto',
        file: `./dist/index.umd.js`,
        // extend: true,
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
      {
        file: `./dist/index.mjs`,
        exports: 'auto',
        format: 'es',
      },
      {
        file: `./dist/index.cjs`,
        exports: 'auto',
        format: 'cjs',
      },
    ],
    plugins: buildPlugins,
  },
];
