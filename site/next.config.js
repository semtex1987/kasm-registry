/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'The Lost Marble Kasm Registry',
    description: 'Kasm registry store for the weird',
    icon: '/img/logo.svg',
    listUrl: 'https://semtex1987.github.io/repositoryname',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
