/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "image.dummyjson.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
