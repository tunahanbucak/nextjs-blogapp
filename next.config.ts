import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "cdn2.wpbeginner.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "ceyhunozdemir.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "blog.ozkula.com.tr",
        protocol: "https",
        port: "",
      },
      {
        hostname: "nextjs-blogapp-opal.vercel.app",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
