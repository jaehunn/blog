/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

/** @see https://nextjs.org/docs/advanced-features/using-mdx */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],

    // MDX Provider
    // providerImportSource: '@mdx-js/react',
  },
})

module.exports = withMDX(nextConfig)
