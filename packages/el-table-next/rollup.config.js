/*
 * @Date: 2021-12-08 11:14:12
 * @LastEditTime: 2022-03-29 18:22:39
 * @Description: rollup config entry file
 */
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import esbuild, { Options as ESBuildOptions } from 'rollup-plugin-esbuild';

const buildPlugins = [vueJsx(), esbuild(), terser()];
export default [
  {
    input: './default_umd.ts',
    output: {
      name: 'ElTableNext',
      format: 'umd',
      exports: 'default',
      file: `./dist/index.umd.js`,
      // extend: true,
      globals: {
        vue: 'Vue',
        'element-plus': 'ElementPlus',
      },
    },
    plugins: buildPlugins,
  },
  {
    input: './index.tsx',
    output: [
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

  {
    input: './index.tsx',
    output: {
      file: `./types/index.d.ts`,
      format: 'es',
    },
    plugins: [dts()],
  },
];
