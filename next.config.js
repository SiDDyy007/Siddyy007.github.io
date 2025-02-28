/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',  // Add this for static exports in Next.js 13+
}

module.exports = nextConfig;