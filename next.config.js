/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{Siddyy007.github.io}' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/{Siddyy007.github.io}' : '',
}
