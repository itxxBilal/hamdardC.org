import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // ✅ Cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },

      // ✅ Supabase Storage CDN
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/**",
      },

      // ✅ ImgBB
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },

      // ✅ Imgur
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },

      // ✅ Flickr
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        pathname: "/**",
      },

      // ✅ Pinterest images
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },

      // ✅ Freepik / Flaticon CDN
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },

      // ✅ Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },

      // ✅ Pexels
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },

      // ✅ Pixabay
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },

      // Add any other CDN here...
    ],
  },
};

export default nextConfig;
