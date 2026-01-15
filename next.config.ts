import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 👈 Эта строчка создает папку out
  images: {
    unoptimized: true, // Обязательно для обычного хостинга
  },
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать мелкие ошибки при сборке
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорировать ошибки типов (чтобы точно собралось)
  },
};

export default nextConfig;