import { Metadata } from 'next';
import { WINDOW_CAULKING_ALLOWED_REGIONS } from '@/data/allowedKeywords';

export const SEO_CONFIG = {
  title: {
    default: "레인가드 | 창틀코킹·빗물누수·창틀누수 보수 상담",
    template: "%s | 레인가드"
  },
  description: "창틀코킹 전문가 레인가드입니다. 아파트 및 빌라의 창틀 누수, 빗물 누수, 실리콘 손상 문제를 정밀 점검하고 완벽 보수합니다. 샷시코킹 및 창틀실리콘 노후 문제 상담.",
  keywords: [
    "창틀코킹",
    "레인가드",
    "샷시코킹",
    "아파트코킹",
    "빗물누수",
    "창틀누수",
    "창틀실리콘",
    "베란다실리콘코킹"
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
      title: title ? `${title} | 레인가드` : SEO_CONFIG.title.default,
      description: description || SEO_CONFIG.description,
      url: url,
      siteName: "레인가드",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: ogImage || SEO_CONFIG.ogImage,
          width: 800,
          height: 600,
          alt: title || "레인가드",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | 레인가드` : SEO_CONFIG.title.default,
      description: description || SEO_CONFIG.description,
      images: [ogImage || SEO_CONFIG.ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    metadataBase: new URL(SEO_CONFIG.baseUrl),
  };
}

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
  const isWindowCaulking = serviceSlug.includes('window');
  const defaultBenefit = isWindowCaulking
    ? "빗물누수 완벽 차단 전문"
    : "3단계 책임 시공 보장";
  const activeBenefit = benefit || defaultBenefit;

  // 창틀코킹 화이트리스트 규칙 적용
  const allowedRegion = isWindowCaulking ? WINDOW_CAULKING_ALLOWED_REGIONS[cityName.toLowerCase()] || WINDOW_CAULKING_ALLOWED_REGIONS[options.cityName.toLowerCase()] : null;
  
  const displayName = isWindowCaulking && allowedRegion 
    ? (allowedRegion.parentDistrict ? `${allowedRegion.parentDistrict} ${allowedRegion.name}` : allowedRegion.name)
    : cityName.replace(/[구시군]$/, ''); 

  // Title 생성: {지역명} 창틀코킹 | 빗물누수·창틀누수 실리콘 보수 레인가드
  const generatedTitle = isWindowCaulking
    ? `${displayName} 창틀코킹 | 빗물누수·창틀누수 실리콘 보수 레인가드`
    : `${locationText} ${serviceTitle} 전문 | ${activeBenefit} - 레인가드`;
    
  const finalTitle = metaTitle || generatedTitle;

  // Description 생성
  const defaultDesc = isWindowCaulking
    ? `${displayName} 창틀코킹 및 빗물누수 보수 전문 레인가드입니다. 노후된 창틀실리콘과 외벽 접합부 틈새를 점검하여 창틀누수를 완벽하게 해결해 드립니다.`
    : `${locationText} 지역의 ${serviceTitle} 고민, 레인가드의 정밀 진단과 전문 시공으로 완벽하게 해결하세요. 무료 방문 견적 및 책임 시공 보장.`;
  const finalDescription = metaDescription || defaultDesc;

  // H1용 타이틀
  const h1 = isWindowCaulking 
    ? `${displayName} 창틀코킹 전문가`
    : `${locationText} ${serviceTitle} 전문`;

  return {
    ...getMetadata({
      title: finalTitle,
      description: finalDescription,
      path,
    }),
    h1,
  };
}


