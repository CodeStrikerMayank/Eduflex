import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
