/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors during build
  },
  images: {
    domains: ["iili.io", "cdn.prod.website-files.com"],
  },
};

export default nextConfig;
