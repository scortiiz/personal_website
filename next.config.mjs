/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Option 1: If you only have a single domain you need to allow
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'v5.airtableusercontent.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  