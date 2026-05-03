

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'lh3.googleusercontent.com',
      //   port: '',
      //   pathname: '/**', 
      // },
     
     {
        protocol: 'https',
        hostname: '**', 
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '**', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;



