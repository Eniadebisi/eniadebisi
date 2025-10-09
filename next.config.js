/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './client/src'),
      '@assets': require('path').resolve(__dirname, './attached_assets'),
    };
    return config;
  },
}

module.exports = nextConfig
