// next.config.js
const isProd = process.env.NODE_ENV === "production";
const repo = "bugbuster-culture"; // <- nome exato do repositório

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",               // gera site estático em ./out
  trailingSlash: true,            // GH Pages curte /about/ -> about/index.html
  images: { unoptimized: true },  // next/image sem loader no export
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};
