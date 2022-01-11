import resolve from '@rollup/plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: minifyExtension(pkg.main),
        format: 'cjs',
      },
    ],
    plugins: [
      terser(),
      autoExternal(),
      resolve(),
      typescript({
        typescript: require('typescript'),
      }),
    ],
  },
  {
    input: 'src/cli.ts',
    output: [
      {
        file: 'dist/cli.js',
        format: 'cjs',
      },
      {
        file: minifyExtension(pkg.main),
        format: 'cjs',
      },
    ],
    plugins: [
      terser(),
      autoExternal(),
      resolve(),
      typescript({
        typescript: require('typescript'),
      }),
    ],
  },
];
