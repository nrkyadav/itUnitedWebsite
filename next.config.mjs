/** @type {import('next').NextConfig} */
import dotenv from "dotenv";

dotenv.config();

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  },
  reactStrictMode: true,
  trailingSlash: false,
  compress: true,


  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
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
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.samyotech.com" }],
        destination: "https://samyotech.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
