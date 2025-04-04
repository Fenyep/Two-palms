import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/api/v1/image/assets/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost", // use 'localhost' instead of '0.0.0.0'
        port: "8055",
        pathname: "/assets/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "0.0.0.0", // use 'localhost' instead of '0.0.0.0'
        port: "10000",
        pathname: "/assets/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "two-palms-directus.onrender.com", // use 'localhost' instead of '0.0.0.0'
        port: "",
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
