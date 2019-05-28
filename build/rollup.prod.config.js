import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

import baseConfig from './rollup.base.config'
import { name, version, author } from '../package.json'

// banner
const banner =
  `${'/*!\n' + ' * '}${name} v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`

// 支持输出 []
export default [
  // .js, .cjs.js, .esm.js
  {
    ...baseConfig,
    output: [
      // umd development version with sourcemap
      {
        file: `dist/index.js`,
        format: 'umd',
        name,
        banner,
        sourcemap: true
      },
      // cjs and esm version
      {
        file: `dist/index.cjs.js`,
        format: 'cjs',
        banner
      },
      // cjs and esm version
      {
        file: `dist/index.esm.js`,
        format: 'es',
        banner
      }
    ],
    plugins: [...baseConfig.plugins, filesize()]
  },
  // .min.js
  {
    ...baseConfig,
    output: [
      // umd with compress version
      {
        file: `dist/index.min.js`,
        format: 'umd',
        name,
        banner
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      // 会报错 暂时关掉
      // uglify(
      //   {
      //     compress: {
      //       drop_console: true
      //     }
      //   },
      //   minify
      // ),
      filesize()
    ]
  }
]