import { Metadata } from 'next';
import { WINDOW_CAULKING_ALLOWED_REGIONS } from '@/data/allowedKeywords';

export const SEO_CONFIG = {
  title: {
    default: "창틀코킹 전문가 | 창틀 누수·실리콘 보수 상담 신비로",
    template: "%s | 신비로 (Sinbiroo)"
  },
  description: "아파트·빌라·주택 창틀 누수 및 실리콘 손상 문제를 전문적으로 보수하는 창틀코킹 전문가 신비로입니다. 빗물 누수 차단 및 정밀 코킹 시공으로 완벽 해결해 드립니다.",
  keywords: [
    "창틀코킹",
    "샷시코킹",
    "아파트코킹",
    "빗물누수",
    "창틀누수",
    "창틀실리콘",
    "베란다코킹",
    "외벽실리콘보수"
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
      title: title ? `${title} | 신비로 (Sinbiroo)` : SEO_CONFIG.title.default,
      description: description || SEO_CONFIG.description,
      url: url,
      siteName: "신비로 (Sinbiroo)",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: ogImage || SEO_CONFIG.ogImage,
          width: 800,
          height: 600,
          alt: title || "신비로 (Sinbiroo)",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | 신비로 (Sinbiroo)` : SEO_CONFIG.title.default,
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
    : serviceSlug.includes('window')
    ? "누수 완벽 차단 및 정밀 코킹"
    : "정밀 진단 기반 명품 시공";
  const activeBenefit = benefit || defaultBenefit;

  // Title 생성: [지역명] [서비스명] 전문 | [핵심 효익] - 신비로 (Sinbiroo)
  // 단, 'window-caulking'의 경우 사용자 요청에 따른 특수 화이트리스트 규칙 적용
  const isWindowCaulking = serviceSlug.includes('window');
  const allowedRegion = isWindowCaulking ? WINDOW_CAULKING_ALLOWED_REGIONS[cityName.toLowerCase()] || WINDOW_CAULKING_ALLOWED_REGIONS[options.cityName.toLowerCase()] : null;
  
  // citySlug(cityName)가 화이트리스트에 있으면 해당 이름을 사용, 없으면 기존 cityName 가공
  const displayName = isWindowCaulking && allowedRegion 
    ? (allowedRegion.parentDistrict ? `${allowedRegion.parentDistrict} ${allowedRegion.name}` : allowedRegion.name)
    : cityName.replace(/[구시군]$/, ''); 

  const generatedTitle = isWindowCaulking
    ? `${displayName} 창틀코킹 | 아파트 누수·실리콘 보수 상담 신비로`
    : `${locationText} ${serviceTitle} 전문 | ${activeBenefit} - 신비로 (Sinbiroo)`;
    
  const finalTitle = metaTitle || generatedTitle;

  // Description 생성: [지역명]의 [문제 상황]을 [해결 방식]으로 완벽 해결. [CTA].
  const defaultDesc = isWindowCaulking
    ? `${displayName} 창틀코킹이 필요하신가요? 아파트·빌라 창틀 누수, 실리콘 손상, 외벽 접합부 틈새 문제를 점검 후 상담해드립니다.`
    : `${locationText} 지역의 창틀 누수 및 실리콘 노후 문제, 신비로(Sinbiroo)의 정밀 진단과 전문 코킹 공법으로 완벽 해결하세요. ${locationText} 전 지역 무료 방문 견적 및 책임 시공 보장.`;
  const finalDescription = metaDescription || defaultDesc;

  // H1용 타이틀 (메타데이터와 일관성 유지)
  const h1 = isWindowCaulking 
    ? `${displayName} 창틀코킹`
    : `${locationText} ${serviceTitle} 전문`;

  return {
    ...getMetadata({
      title: finalTitle,
      description: finalDescription,
      path,
    }),
    h1, // 페이지 컴포넌트에서 활용 가능
  };
}

