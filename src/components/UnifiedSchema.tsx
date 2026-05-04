import React from 'react';
import { SEO_CONFIG } from '@/lib/seo';

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface UnifiedSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * 네이버 및 검색엔진 최적화를 위한 통합 구조화 데이터(JSON-LD) 컴포넌트
 * FAQPage, BreadcrumbList, WebPage(ImageObject 포함)를 하나로 묶어 제공합니다.
 */
export default function UnifiedSchema({
  title,
  description,
  url,
  imageUrl,
  faqs,
  breadcrumbs,
}: UnifiedSchemaProps) {
  const finalImageUrl = imageUrl ? `${SEO_CONFIG.baseUrl}${imageUrl}` : `${SEO_CONFIG.baseUrl}${SEO_CONFIG.ogImage}`;
  
  const schemas: any[] = [
    // 1. WebPage & ImageObject: 페이지의 대표 이미지와 주제 명시
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      "url": url,
      "name": title,
      "description": description,
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        "url": finalImageUrl,
        "width": 1200,
        "height": 630
      },
      "image": {
        "@id": `${url}#primaryimage`
      }
    }
  ];

  // 2. FAQPage: 자주 묻는 질문 스니펫 노출 유도
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  // 3. BreadcrumbList: 검색 결과 하단에 경로 노출 유도
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.href ? (item.href.startsWith('http') ? item.href : `${SEO_CONFIG.baseUrl}${item.href}`) : undefined,
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={`schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
