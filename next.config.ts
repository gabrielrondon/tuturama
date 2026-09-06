import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // The old studios sub-site (Zyro) becomes the archive page.
      {
        source: "/:path*",
        has: [{ type: "host", value: "studios.tuturama.com" }],
        destination: "https://tuturama.com/archive",
        permanent: true,
      },
      // www to apex.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tuturama.com" }],
        destination: "https://tuturama.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
