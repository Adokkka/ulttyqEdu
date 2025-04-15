/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "media.graphassets.com",
      "us-west-2.graphassets.com",
      "ap-south-1.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
