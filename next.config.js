/** @type {import('next').NextConfig} */




module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.webfx.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
        },
      ],
    },
  }