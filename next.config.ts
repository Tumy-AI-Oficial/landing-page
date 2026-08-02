import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://images.unsplash.com;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src 'self' https://www.google.com;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

// 1 year in seconds — safe for hashed/versioned static assets
const LONG_CACHE = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Long-lived cache for static assets that never change between builds
      {
        source: "/frames/:file*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }],
      },
      {
        source: "/fonts/:file*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }],
      },
      {
        source: "/icons3d/:file*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }],
      },
      {
        source: "/logos/:file*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }],
      },
      {
        source: "/projects/:file*",
        headers: [{ key: "Cache-Control", value: LONG_CACHE }],
      },
    ];
  },
};

export default nextConfig;
