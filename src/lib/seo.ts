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
  ogImage: "/web-thumbnail(2).jpg?v=2", // 최적화된 썸네일 파일로 교체
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
  const finalOgImage = ogImage || SEO_CONFIG.ogImage;

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
          url: finalOgImage,
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
      images: [finalOgImage],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
    metadataBase: new URL(SEO_CONFIG.baseUrl),
    other: {
      "thumbnail": `${SEO_CONFIG.baseUrl}${finalOgImage}`, // 네이버 썸네일 힌트
    }
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
  ogImage?: string;
}): Metadata & { h1: string } {
  const { serviceSlug, serviceTitle, provinceName, cityName, path, metaTitle, metaDescription, benefit, ogImage } = options;
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

  // Title & Description 다변화 템플릿 (SEO 품질 향상 및 중복 방지)
  const titleTemplates = [
    `${displayName} 창틀코킹 | 빗물누수·창틀누수 보수 전문 레인가드`,
    `${displayName} 창틀누수 보수 | 창틀코킹 전문 업체 레인가드`,
    `${displayName} 외벽 실리콘 보수 | 창틀코킹·빗물누수 차단 레인가드`,
    `${displayName} 창틀코킹 재시공 | 빗물누수 점검 및 외벽 보수 레인가드`
  ];

  const descTemplates = [
    `${displayName} 창틀코킹 및 빗물누수 보수 전문 레인가드입니다. 아파트, 상가 건물의 노후된 창틀실리콘과 외벽 접합부 틈새를 꼼꼼하게 점검하여 창틀누수를 완벽하게 해결해 드립니다.`,
    `${displayName} 지역의 반복되는 빗물누수 고민을 샷시 주변 외벽 실리콘 보수로 확실하게 차단합니다. 창틀코킹 전문가 레인가드의 책임 시공과 꼼꼼한 진단 서비스를 확인해 보세요.`,
    `낡은 창틀 실리콘 사이로 스며드는 빗물누수, 더 이상 방치하지 마세요. ${displayName} 창틀누수 점검부터 샷시 외벽 코킹 재시공까지 레인가드가 쾌적한 주거환경을 다시 찾아드립니다.`,
    `${displayName} 전 구역 아파트 및 주택 창틀코킹 통합 보수. 외벽 크랙이나 벌어진 샷시 실리콘 틈새로 들이치는 빗물누수 문제를 정밀하게 파악해 완벽한 보수 솔루션을 제공합니다.`
  ];

  // 도시명 기반으로 템플릿 일관성 유지 (인덱스)
  const idx = cityName ? cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 4 : 0;

  // Title 생성
  const generatedTitle = isWindowCaulking
    ? titleTemplates[idx]
    : `${locationText} ${serviceTitle} 전문 | ${activeBenefit} - 레인가드`;
    
  const finalTitle = metaTitle || generatedTitle;

  // Description 생성
  const defaultDesc = isWindowCaulking
    ? descTemplates[idx]
    : `${locationText} 지역의 ${serviceTitle} 고민, 레인가드의 정밀 진단과 전문 시공으로 완벽하게 해결하세요. 무료 방문 견적 및 책임 시공 보장.`;
  const finalDescription = metaDescription || defaultDesc;

  // H1용 타이틀 (화면 노출용: 주제 일치)
  const h1 = isWindowCaulking 
    ? `${displayName} 창틀코킹 전문가`
    : `${locationText} ${serviceTitle} 전문`;

  return {
    ...getMetadata({
      title: finalTitle,
      description: finalDescription,
      path,
      ogImage,
    }),
    h1,
  };
}


