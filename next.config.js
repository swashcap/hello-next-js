const path = require('path')

/**
 * Add mdx support
 * {@link https://github.com/zeit/next.js/tree/canary/packages/next-mdx}
 */
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

module.exports = withMDX({
  /**
   * Custom asset prefix for deploying to GitHub pages.
   *
   * {@link https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix}
   */
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://swashcap.github.io/hello-next-js/'
      : '',

  pageExtensions: ['ts', 'tsx', 'md', 'mdx', 'js', 'jsx'],

  /**
   * {@link https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config}
   */
  webpack: config => {
    const rule = config.module.rules.find(
      rule => rule.test && rule.test.test('filename.tsx')
    )

    rule.use = [
      rule.use,
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          propFilter: prop => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules')
            }

            return true
          },
          tsconfigPath: path.resolve(__dirname, './tsconfig.json')
        }
      }
    ]

    return config
  }
})
