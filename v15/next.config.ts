import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler:true,
  },
  images:{
    remotePatterns:[
      {
        hostname:"images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
