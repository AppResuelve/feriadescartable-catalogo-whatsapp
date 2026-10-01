import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // sacamos 2048 y 3840 — para un banner de ancho máximo ~1280px,
    // no aporta nitidez perceptible y multiplica el peso por archivo
  },
  rewrites: () => [
    {
      source: "/api/:path*",
      destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
    },
  ],
};

export default nextConfig;
