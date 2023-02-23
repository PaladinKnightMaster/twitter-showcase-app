/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
    ],
  },
  //Uncomment these rewrites to work in local development 

  // async rewrites() {
  //     return [
  //       {
  //         source: '/api/search/:path*',
  //         destination: 'http://localhost:9874/api/search/:path*'
  //       },
  //       {
  //         source: '/api/random',
  //         destination: 'http://localhost:9874/api/random'
  //       },
  //     ]
  //   },


  }

module.exports =  nextConfig
