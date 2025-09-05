// next.config.js
const isProd = process.env.NODE_ENV === "production"
const repo = "NOME_DO_SEU_REPO" // ex: bugbuster-culture

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",               // gera site estático (./out)
  trailingSlash: true,            // GH Pages gosta de /about/ -> about/index.html
  images: { unoptimized: true },  // next/image estático no GH Pages
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
}
