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
  authors: [{ name: "레인가드" }],
  creator: "레인가드",
  publisher: "레인가드",
  alternates: {
    canonical: SEO_CONFIG.baseUrl,
  },
  openGraph: {
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.baseUrl,
    siteName: "레인가드",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: SEO_CONFIG.ogImage,
        width: 800,
        height: 600,
        alt: "레인가드 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title.default,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.ogImage],
  },
  other: {
    "thumbnail": `${SEO_CONFIG.baseUrl}${SEO_CONFIG.ogImage}`,
  },
  verification: {
    google: "rn37nKpOdKO8P9jYe7aPcvJAXGeg4v9Pl9oH3SQcC10",
    other: {
      "naver-site-verification": "9138a0152278010dcac97c9210dcdc527e9fd77d",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/icon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg?v=3", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DP1S9V5QNH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DP1S9V5QNH');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGDS4Z4T');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "레인가드",
              "url": SEO_CONFIG.baseUrl,
              "logo": `${SEO_CONFIG.baseUrl}/web-thumbnail.jpg?v=1`,
              "sameAs": [
                "http://pf.kakao.com/_xkAXxlX"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "010-7774-5823",
                "contactType": "customer service"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "레인가드",
              "url": SEO_CONFIG.baseUrl,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SEO_CONFIG.baseUrl}/?k={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGDS4Z4T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
