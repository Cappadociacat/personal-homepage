import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "子来 - 个人主页 | 后端工程师",
  description: "子来，资深后端工程师，两娃奶爸，AI破局俱乐部行动家。专注Java后端技术栈，正在探索AI营销和SEO领域。",
  keywords: ["子来", "后端工程师", "Java", "MySQL", "AI", "SEO", "编程"],
  authors: [{ name: "子来" }],
  openGraph: {
    title: "子来 - 个人主页",
    description: "资深后端工程师的个人主页，分享技术学习与AI探索之旅",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
