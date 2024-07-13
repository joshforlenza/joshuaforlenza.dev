/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/html",
      "@react-email/tailwind",
    ],
  },
  transpilePackages: [
    "@react-email/components",
    "@react-email/render",
    "@react-email/html",
  ],
};

module.exports = nextConfig;
