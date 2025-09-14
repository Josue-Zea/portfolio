/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_IS_PRODUCTION === "true";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",

  // 👇 Solo usa basePath/assetPrefix en producción
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH + "/" : "",

  images: {
    // en GitHub Pages necesitamos unoptimized
    unoptimized: isProd,
  },
};

module.exports = nextConfig;