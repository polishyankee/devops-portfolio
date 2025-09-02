// next.config.js
const isCI = process.env.GITHUB_ACTIONS === 'true'
const repo = 'devops-portfolio' // <- zmień na nazwę repo

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isCI ? `/${repo}` : '',
  assetPrefix: isCI ? `/${repo}/` : '',
}
