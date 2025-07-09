import type { NextConfig } from "next";



// next.config.js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔧 ISSO AQUI IGNORA ERROS DO ESLINT NO BUILD
  },
};

module.exports = nextConfig;


export default nextConfig;
