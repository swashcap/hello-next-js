/**
 * Add mdx support
 * {@link https://github.com/zeit/next.js/tree/canary/packages/next-mdx}
 */
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx', 'js', 'jsx']
})
