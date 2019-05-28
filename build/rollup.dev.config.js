import baseConfig from './rollup.base.config'
// import serve from 'rollup-plugin-serve'

import { name } from '../package.json'

export default {
  ...baseConfig,
  output: [
    {
      file: `dist/index.js`,
      format: 'umd',
      name,
      sourcemap: true
    },
    {
      file: `dist/index.cjs.js`,
      format: 'cjs',
      name,
      sourcemap: 'inline'
    }
  ],
  plugins: [
    ...baseConfig.plugins
  ]
}