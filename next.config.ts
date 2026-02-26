import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: (process.env.staging) ? '' : '/new-uaeyfc-site'
};

export default nextConfig;
