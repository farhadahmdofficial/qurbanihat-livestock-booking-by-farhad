

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**', // এখানে '/**' হবে যাতে এই ডোমেইনের সব ইমেজ সাপোর্ট করে
      },
     
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



