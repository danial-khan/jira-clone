import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://letsenhance.io/static/**')],
  },
};

export default nextConfig;
