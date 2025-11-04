/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'TLM Kasm Workspaces',
    description: 'The Officially Unofficial Workspaces Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/semtex1987/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
