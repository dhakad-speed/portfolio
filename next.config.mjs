/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors during build
  },
  images: {
    domains: [
      "iili.io",
      "cdn.prod.website-files.com",
      "images.unsplash.com",
      "images.pexels.com",
      "i.ibb.co",
      "ik.imagekit.io",
    ],
  },
};

export default nextConfig;
