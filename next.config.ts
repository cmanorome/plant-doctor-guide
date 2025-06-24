import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL"
          },
          {
            key: "Content-Security-Policy", 
            value: "frame-ancestors 'self' https://plantdoctor.com.au https://*.plantdoctor.com.au https://*.maropost.com https://*.neto.com.au *"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
