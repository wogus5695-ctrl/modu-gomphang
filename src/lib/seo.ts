import { Metadata } from 'next';

export const SEO_CONFIG = {
  title: {
    default: "곰팡이제거 전문 | 지움 (Zium) - 욕실, 에어컨, 베란다 해결",
    template: "%s | 지움 (Zium)"
  },
  description: "지움 (Zium)에서 우리 집 숨어있는 곰팡이를 완벽히 제거하세요. 욕실, 에어컨, 벽면, 베란다 곰팡이 해결 및 재발을 막는 3단계 책임시공. 부천, 인천 등 수도권 전 지역 방문 가능.",
  keywords: [
    "곰팡이제거", 
    "부천곰팡이제거", 
    "인천곰팡이제거", 
    "베란다곰팡이", 
    "벽곰팡이", 
    "에어컨곰팡이", 
    "욕실곰팡이", 
    "결로현상해결"
  ],
  baseUrl: "https://sinbiroo.co.kr",
  ogImage: "/icon.png",
};

/**
 * 페이지별 메타데이터를 생성하는 헬퍼 함수
 */
export function getMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, path, ogImage, noIndex } = options;
  const url = `${SEO_CONFIG.baseUrl}${path || ''}`;

  return {
    title: title,
    description: description || SEO_CONFIG.description,
    keywords: SEO_CONFIG.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title ? `${title} | 지움 (Zium)` : SEO_CONFIG.title.default,
      description: description || SEO_CONFIG.description,
      url: url,
      siteName: "지움 (Zium)",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: ogImage || SEO_CONFIG.ogImage,
          width: 800,
          height: 600,
          alt: title || "지움 (Zium)",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | 지움 (Zium)` : SEO_CONFIG.title.default,
      description: description || SEO_CONFIG.description,
      images: [ogImage || SEO_CONFIG.ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    metadataBase: new URL(SEO_CONFIG.baseUrl),
  };
}

/**
 * 지역 + 서비스 조합 메타데이터 생성
 */
/**
 * 지역 + 서비스 조합 메타데이터 생성 (템플릿 기반 자동화)
 */
export function getMetadataByLocation(options: {
  serviceSlug: string;
  serviceTitle: string;
  provinceName: string;
  cityName: string;
  path: string;
  metaTitle?: string;
  metaDescription?: string;
  benefit?: string;
}): Metadata & { h1: string } {
  const { serviceSlug, serviceTitle, provinceName, cityName, path, metaTitle, metaDescription, benefit } = options;
  const locationText = `${provinceName} ${cityName}`;
  
  // 서비스별 기본 효익(Benefit) 설정
  const defaultBenefit = serviceSlug.includes('mold') 
    ? "재발 없는 3단계 책임시공" 
    : "정밀 진단 기반 명품 시공";
  const activeBenefit = benefit || defaultBenefit;

  // Title 생성: [지역명] [서비스명] 전문 | [핵심 효익] - 지움 (Zium)
  const generatedTitle = `${locationText} ${serviceTitle} 전문 | ${activeBenefit} - 지움 (Zium)`;
  const finalTitle = metaTitle || generatedTitle;

  // Description 생성: [지역명]의 [문제 상황]을 [해결 방식]으로 완벽 해결. [CTA].
  const defaultDesc = `${locationText} 지역의 곰팡이와 유해균 문제, 지움 (Zium)의 원인 분석과 항균 코팅막으로 완벽 해결하세요. ${locationText} 전 지역 무료 방문 견적 및 1년 무상 AS 보장.`;
  const finalDescription = metaDescription || defaultDesc;

  // H1용 타이틀 (메타데이터와 일관성 유지)
  const h1 = `${locationText} ${serviceTitle} 전문`;

  return {
    ...getMetadata({
      title: finalTitle,
      description: finalDescription,
      path,
    }),
    h1, // 페이지 컴포넌트에서 활용 가능
  };
}
