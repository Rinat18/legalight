import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "LegaLight — Юридические услуги в Бишкеке",
  description: "Юридическая помощь, бухгалтерия и HR услуги. +996 (772) 77-44-33",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}