import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  // Remove assetPrefix and basePath as they're not needed for Netlify
};

export default nextConfig;