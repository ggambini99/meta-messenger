/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "media-exp1.licdn.com",
      "z-p3-scontent.fcgh19-1.fna.fbcdn.net",
    ],
  },
  experimental: {
    appDir: true,
  },
};
