/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      runtime: 'experimental-edge',
    },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.dog.ceo',
          port: '',
          pathname: '/breeds/**',
        },
      ],
    },
  };

export default nextConfig;
