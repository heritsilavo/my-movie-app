const path = require("path")
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  images: {
    domains: ['image.tmdb.org']
  }
};

module.exports = nextConfig;
