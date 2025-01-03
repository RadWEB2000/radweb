import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    useLightningcss:true,
  },
  pageExtensions: ['mdx', 'md', 'tsx', 'ts'],
  trailingSlash:false
};

export default nextConfig;
