import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "곰팡이제거 전문 | 모두종합관리 - 욕실, 에어컨, 베란다 곰팡이 해결",
  description: "모두종합관리에서 우리 집 숨어있는 곰팡이를 완벽히 제거하세요. 욕실, 에어컨, 벽면, 베란다 곰팡이 해결 및 재발을 막는 3단계 책임시공. 부천시 등 수도권 전 지역 방문 가능.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
