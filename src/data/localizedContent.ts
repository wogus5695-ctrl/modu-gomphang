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
      ? ["100% 책임 시공제", "정밀 누수 진단", "프리미엄 실리콘 사용", "아파트·주택·상가 전문"]
      : [`${locationName} 전문`, `${locationName} 업체 추천`, `${locationName} 견적`, `${locationName} 시공 사례`],
    intro: isWindowCaulking
      ? `비가 올 때마다 반복되는 빗물누수와 창틀누수, 더 이상 방치하지 마세요.\n정밀한 원인 진단을 통해 노후된 실리콘을 완벽하게 보수합니다.\n아파트, 주택부터 상가까지 레인가드가 책임지고 해결해 드립니다.`
      : `${locationName} 지역의 쾌적한 주거 환경을 위해 정직하게 시공하는 레인가드입니다. 전문적인 기술력으로 최상의 만족을 드리겠습니다.`,
    localProblems: isWindowCaulking
      ? `시간이 지나면 외부 환경에 노출된 창틀실리콘은 자연스럽게 경화되고 틈이 벌어지게 됩니다. 이렇게 발생한 미세한 틈새로 빗물이 유입되면 내부 벽지 손상과 곰팡이의 원인이 되므로, 누수 전문가의 정확한 상태 점검이 반드시 필요합니다.`
      : `${locationName} 지역 특성에 맞춰 최적화된 시공 솔루션을 제공합니다. 노후된 시설 점검 및 관리를 통해 문제를 조기에 해결해 드립니다.`,
    targets: isWindowCaulking
      ? [
          "아파트, 주택, 상가 등 빗물누수 취약 세대",
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
      "창틀코킹 시공이 필요한 창호의 개수 및 사이즈",
      "건물의 총 층고 대비 작업 현장의 층수",
      "많은 양의 추가 외벽크랙 발견으로 작업량이 증가할 때"
    ],
    faqs: [
      {
        question: `창틀코킹 시공 후 A/S 보증 기간은 어떻게 되나요?`,
        answer: `레인가드는 시공 하자에 대해 철저한 책임 보증을 제공합니다. 사용된 프리미엄 자재와 정석 공법을 바탕으로, 정해진 기간 내 무상 점검 및 보수를 확실하게 지원해 드립니다.`
      },
      {
        question: "비가 오는 날이나 주말에도 방문 점검이 가능한가요?",
        answer: `안전을 위해 비가 오는 날 당일 시공은 어려울 수 있으나, 누수 원인 진단 및 방문 상담은 가능합니다. 주말이나 공휴일에도 고객센터로 문의해 주시면 편하신 일정에 맞춰 방문을 도와드립니다.`
      },
      {
        question: "방문 견적 시 비용이 발생하나요?",
        answer: "레인가드는 고객님의 부담을 최소화하기 위해 기본적으로 무상 방문 견적 서비스를 제공하고 있습니다. 누수 상태 점검이 필요하시다면 언제든 편하게 문의해 주세요."
      }
    ],
    nearbyLinks: [],
    relatedPortfolioIds: [],
    metaTitle: isWindowCaulking ? `${displayName} 창틀코킹 | 빗물누수·창틀누수 실리콘 보수 레인가드` : undefined,
    metaDescription: isWindowCaulking ? `${displayName} 창틀코킹 및 빗물누수 보수 전문 레인가드입니다. 노후된 창틀실리콘과 외벽 접합부 틈새를 점검하여 창틀누수를 완벽하게 해결해 드립니다.` : undefined
  } as LocalizedPageContent;
}
