import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "www.purina.in"
      },
      {
        protocol: "https",
        hostname: "pridebites.com"
      }
    ]
  }
};

export default nextConfig;
