import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "s3.amazonaws.com",
      "www.purina.in",
      "pridebites.com",
    ]
  }
};

export default nextConfig;
