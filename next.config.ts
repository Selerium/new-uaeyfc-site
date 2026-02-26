import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: (process.env.staging == 'true') ? '/new-uaeyfc-site' : ''
};

export default nextConfig;
