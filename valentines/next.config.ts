import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/valentines2025/" : "",
  basePath: isProd ? "/valentines2025" : "",
  output: "export",
  /* config options here */
};

export default nextConfig;
