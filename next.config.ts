import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
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
      },
      {
        protocol: "https",
        hostname: "www.muyinteresante.com"
      }
    ]
  }
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    // Provide the path to the messages that you're using in `AppConfig`
    createMessagesDeclaration: "./messages/en.json"
  }
});

export default withNextIntl(nextConfig);
