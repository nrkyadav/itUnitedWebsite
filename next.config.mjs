/** @type {import('next').NextConfig} */
import dotenv from "dotenv";

dotenv.config();

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactCompiler: false,
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
    const baseSecurity = {
      source: "/:path*",
      headers: [
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    };

    if (isDev) {
      // Force every asset to bypass browser cache during dev — fixes hydration
      // mismatches caused by cached chunks after rapid edits.
      return [
        baseSecurity,
        {
          source: "/:path*",
          headers: [
            { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0" },
            { key: "Pragma", value: "no-cache" },
            { key: "Expires", value: "0" },
          ],
        },
      ];
    }

    // Production: long-lived caching for static assets
    return [
      baseSecurity,
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
