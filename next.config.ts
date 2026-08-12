import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ketan-sonar-portfolio",
  assetPrefix: "/ketan-sonar-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
