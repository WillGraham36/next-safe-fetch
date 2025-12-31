import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(__dirname),
  },
  transpilePackages: ["unified-auth-fetch"],
  experimental: {
    externalDir: true,
  },

  webpack: (config, { isServer }) => {
    config.resolve.symlinks = true;
    config.resolve.alias = {
      ...config.resolve.alias,
      "unified-auth-fetch": path.resolve(__dirname, "../../lib"),
    };
    return config;
  },
};

export default nextConfig;
