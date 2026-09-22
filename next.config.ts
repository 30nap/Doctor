import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=true builds a fully static site into /out (used for GitHub Pages).
 * NEXT_PUBLIC_BASE_PATH is the sub-path the site is served from, e.g. "/Doctor"
 * for https://<user>.github.io/Doctor. Leave both unset for a normal Node deploy.
 */
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isStaticExport && { output: "export", trailingSlash: true }),
  basePath,
  images: {
    // The image optimizer needs a server; static hosting serves originals.
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
