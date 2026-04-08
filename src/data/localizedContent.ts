export interface LocalizedFAQ {
  question: string;
  answer: string;
}

export interface LocalizedNearbyLink {
  name: string;
  slug: string; // e.g. "ansan", "siheung"
}

export interface LocalizedPageContent {
  key: string; // serviceSlug:provinceSlug:citySlug
  serviceName: string;
  provinceName: string;
  cityName: string;
  neighborhoods: string[]; // 동/세부지역 리스트
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  localProblems: string;
  targets: string[];
  workProcess: { title: string; description: string }[] | string[];
  costFactors: string[];
  faqs: LocalizedFAQ[];
  nearbyLinks: LocalizedNearbyLink[];
  relatedPortfolioIds: string[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalSlug?: string;
}

export const localizedContents: LocalizedPageContent[] = [
  // 곰팡이 제거 중심의 기존 수동 데이터는 삭제하고, 창틀코킹 전문 브랜드 데이터 위주로 운영
];

/**
 * 서비스+지역 키를 기반으로 상세 콘텐츠를 조회하는 헬퍼 함수
 * 데이터가 없을 경우 지역명과 서비스명을 조합한 기본 Fallback 콘텐츠를 생성하여 반환합니다.
 */
export function getLocalizedContent(serviceSlug: string, provinceSlug: string, citySlug: string) {
  const key = `${serviceSlug}:${provinceSlug}:${citySlug}`;
  const existingContent = localizedContents.find((c) => c.key === key);
  
  if (existingContent) return existingContent;

  const { services } = require("./services");
  const { regions } = require("./regions");
  const { WINDOW_CAULKING_ALLOWED_REGIONS } = require("./allowedKeywords");

  const service = services.find((s: any) => s.slug === serviceSlug);
  const isWindowCaulking = serviceSlug === 'window-caulking';
  
  const allowedRegion = isWindowCaulking ? WINDOW_CAULKING_ALLOWED_REGIONS[citySlug] : null;
  const province = regions.find((p: any) => p.slug === provinceSlug);
  const city = province?.cities.find((c: any) => c.slug === citySlug);

  if (!service || (!allowedRegion && (!province || !city))) return null;

  const locationName = city ? `${province.name} ${city.name}` : allowedRegion?.name || "";
  const displayName = allowedRegion 
    ? (allowedRegion.parentDistrict ? `${allowedRegion.parentDistrict} ${allowedRegion.name}` : allowedRegion.name)
    : city?.name.replace(/[구시군]$/, '') || "";

  // 기본 Fallback 데이터 생성 (RainGuard 최적화)
  return {
    key,
    serviceName: isWindowCaulking ? '창틀코킹' : service.title,
    provinceName: province?.name || (allowedRegion?.province === 'seoul' ? '서울특별시' : '경기도'),
    cityName: city?.name || allowedRegion?.name || "",
    neighborhoods: [],
    primaryKeyword: isWindowCaulking ? `${displayName} 창틀코킹` : `${locationName} ${service.title}`,
    secondaryKeywords: isWindowCaulking 
      ? [`${displayName} 창틀누수`, `${displayName} 빗물누수`, `${displayName} 샷시코킹`, `${displayName} 아파트코킹`, `${displayName} 창틀실리콘`]
      : [`${locationName} 전문`, `${locationName} 업체 추천`, `${locationName} 견적`, `${locationName} 시공 사례`],
    intro: isWindowCaulking
      ? `${displayName} 창틀코킹이 필요한 현장은\n비가 올 때 창틀실리콘 노후화로 인한\n창틀누수가 반복되는 경우가 많습니다.\n레인가드는 ${displayName} 지역의 빗물누수에 대한\n근본적인 원인을 점검하고 창틀코킹 보수해 드립니다.`
      : `${locationName} 지역의 쾌적한 주거 환경을 위해 정직하게 시공하는 레인가드입니다. 전문적인 기술력으로 최상의 만족을 드리겠습니다.`,
    localProblems: isWindowCaulking
      ? `${displayName} 지역의 아파트 및 빌라는 외부 환경 노출로 인해 창틀실리콘 경화가 진행되기 쉽습니다. 빗물누수를 방치할 경우 내벽 손상으로 이어지므로 샷시코킹 전문가의 정밀 진단이 필요합니다.`
      : `${locationName} 지역 특성에 맞춰 최적화된 시공 솔루션을 제공합니다. 노후된 시설 점검 및 관리를 통해 문제를 조기에 해결해 드립니다.`,
    targets: isWindowCaulking
      ? [
          `${displayName} 소재 아파트 및 빌라 세대`,
          "창틀 틈새로 빗물 유입이 확인되는 곳",
          "외벽 실리콘이 갈라지거나 떨어진 현장",
          "비만 오면 창문 주변 벽지가 젖는 주거 공간"
        ]
      : [
          `${locationName} 소재 주거 및 상업 공간`,
          "노후 시설 보수 및 관리가 필요한 곳",
          "전문가의 정밀 진단이 필요한 현장"
        ],
    workProcess: isWindowCaulking
      ? [
          {
            title: "현장 방문 및 누수 원인 정밀 진단",
            description: "창틀, 코킹실리콘, 외벽크랙 등\n빗물이 스며드는 위치와 원인을 꼼꼼하게 확인합니다."
          },
          {
            title: "노후 실리콘 제거 및 이물질 정리",
            description: "탄성이 약해져 갈라진 실리콘과\n금이 가거나 탈락한 외벽크랙, 이물질 등을 말끔히 제거합니다."
          },
          {
            title: "부착력을 높이는 프라이머 도포",
            description: "실리콘의 접착력과 방수 유지력을 높일 수 있도록\n프라이머를 세밀하게 도포합니다."
          },
          {
            title: "새로운 실리콘 충진 및 마감",
            description: "새로운 실리콘을 창틀 틈새 깊숙이 꼼꼼히 채운 뒤\n균일하게 도포하여 깔끔하게 마감합니다."
          }
        ]
      : [
          "1. 현장 방문 및 누수 원인 정밀 진단",
          "2. 노후 실리콘 제거 및 이물질 청소",
          "3. 샷시코킹 전용 프라이머 도포",
          "4. 창틀실리콘 정밀 충진 및 마감",
          "5. 시공 부위 최종 검수"
        ],
    costFactors: [
      "창틀코킹 시공이 필요한\n창호의 개수 및 사이즈",
      "건물의 총 층고 대비\n작업 현장의 층수",
      "많은 양의 외벽크랙 발견으로\n작업량이 증가할 때"
    ],
    faqs: [
      {
        question: `${displayName} 지역 시공 A/S 기간은 어떻게 되나요?`,
        answer: `레인가드는 ${displayName} 지역 전담 팀을 운영하며, 시공 하자에 대해 철저한 책임 보증을 제공합니다. 사용된 자재와 공법에 따라 정해진 기간 내 무상 점검 및 보수를 지원합니다.`
      },
      {
        question: "주말이나 공휴일에도 상담이 가능한가요?",
        answer: `네, 가능합니다. 레인가드 고객센터로 문의 주시면 주말 및 공휴일에도 ${displayName} 지역 방문 예약 및 상담을 도와드리고 있습니다.`
      },
      {
        question: "방문 견적 시 비용이 발생하나요?",
        answer: "레인가드는 고객님의 부담을 덜어드리기 위해 전 지역 무료 방문 견적 서비스를 제공하고 있습니다. 편하게 문의주세요."
      }
    ],
    nearbyLinks: [],
    relatedPortfolioIds: [],
    metaTitle: isWindowCaulking ? `${displayName} 창틀코킹 | 빗물누수·창틀누수 실리콘 보수 레인가드` : undefined,
    metaDescription: isWindowCaulking ? `${displayName} 창틀코킹 및 빗물누수 보수 전문 레인가드입니다. 노후된 창틀실리콘과 외벽 접합부 틈새를 점검하여 창틀누수를 완벽하게 해결해 드립니다.` : undefined
  } as LocalizedPageContent;
}
