import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SEO_CONFIG } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: "RainGuard" }],
  creator: "RainGuard",
  publisher: "RainGuard",
  alternates: {
    canonical: SEO_CONFIG.baseUrl,
  },
  openGraph: {
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.baseUrl,
    siteName: "RainGuard",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: SEO_CONFIG.ogImage,
        width: 800,
        height: 600,
        alt: "RainGuard 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.ogImage],
  },
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
