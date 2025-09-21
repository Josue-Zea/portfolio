/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_IS_PRODUCTION === "true";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: isProd ? "export" : undefined,
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "",
  assetPrefix: isProd ? (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/" : undefined,

  images: {
    unoptimized: isProd,
  },
};

module.exports = nextConfig;