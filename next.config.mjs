// @ts-nocheck
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API: process.env.SERVER_API,
    SERVER_LOCAL: process.env.SERVER_LOCAL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.61.225",
        port: "8000",
        pathname: "/media/articles/**/*",
      },
    ],
  },
};

// module.exports = withPlaiceholder(nextConfig);
export default withPlaiceholder(nextConfig);
