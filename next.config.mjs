/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors during build
  },
  images: {
    domains: ["iili.io"], // ✅ allow this domain
  },
};

export default nextConfig;
