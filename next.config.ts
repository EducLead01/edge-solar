import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/edge-solar",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
