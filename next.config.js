/** @type {import('next').NextConfig} */




module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@splinetool/react-spline'],
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.webfx.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'png.pngtree.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'numerique.vamtam.com',
          port: '',
        },
      ],
    },
  }