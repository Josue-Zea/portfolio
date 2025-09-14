/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // <--- importante para generar /out
  basePath: "/portfolio", // <--- debe ser el nombre EXACTO de tu repo
  assetPrefix: "/portfolio/", // <--- ayuda a que sirva bien en GitHub Pages
  images: {
    unoptimized: true, // <--- necesario porque no hay servidor en Pages
  },
}

module.exports = nextConfig
