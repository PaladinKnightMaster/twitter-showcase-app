/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
    ],
  },
  async rewrites() {
      return [
        {
          source: '/api/search/:path*',
          destination: 'http://localhost:9874/api/search/:path*'
        },
        {
          source: '/api/random',
          destination: 'http://localhost:9874/api/random'
        },
      ]
    },


  }

module.exports =  nextConfig
