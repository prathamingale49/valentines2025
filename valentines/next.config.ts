import type { NextConfig } from "next";
import tsNode from "ts-node";

// Enable ts-node for TypeScript config files
tsNode.register();

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/valentines2025/" : "",
  basePath: isProd ? "/valentines2025" : "",
  output: "export",
};

export default nextConfig;
