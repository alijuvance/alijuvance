/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizations for production
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  // Reduce JS bundle size in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
