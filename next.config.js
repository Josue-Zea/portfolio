/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const isProd = process.env.NEXT_IS_PRODUCTION === "true";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: isProd ? "export" : undefined,
  i18n: isProd ? undefined : i18n,

  // 👇 Solo usa basePath/assetPrefix en producción
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH + "/" : "",

  images: {
    // en GitHub Pages necesitamos unoptimized
    unoptimized: isProd,
  },
};

module.exports = nextConfig;