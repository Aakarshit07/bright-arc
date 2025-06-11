import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staticmap.openstreetmap.de",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
