/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images2.alphacoders.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.alphacoders.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images8.alphacoders.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images6.alphacoders.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media1.tenor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.tenor.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aniyuki.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;