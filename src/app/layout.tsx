import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingCallButton from "@/components/FloatingCallButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "곰팡이제거 전문 | 지움 (Zium) - 욕실, 에어컨, 베란다 곰팡이 해결",
  description: "지움 (Zium)에서 우리 집 숨어있는 곰팡이를 완벽히 제거하세요. 욕실, 에어컨, 벽면, 베란다 곰팡이 해결 및 재발을 막는 3단계 책임시공. 부천시 등 수도권 전 지역 방문 가능.",
  verification: {
    google: "rn37nKpOdKO8P9jYe7aPcvJAXGeg4v9Pl9oH3SQcC10",
    other: {
      "naver-site-verification": "9138a0152278010dcac97c9210dcdc527e9fd77d",
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
