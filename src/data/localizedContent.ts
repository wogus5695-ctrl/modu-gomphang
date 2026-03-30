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
  workProcess: string[];
  costFactors: string[];
  faqs: LocalizedFAQ[];
  nearbyLinks: LocalizedNearbyLink[];
  relatedPortfolioIds: string[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalSlug?: string;
}

export const localizedContents: LocalizedPageContent[] = [
  {
    key: "mold-removal:gyeonggi:bucheon",
    serviceName: "곰팡이 제거",
    provinceName: "경기도",
    cityName: "부천시",
    neighborhoods: ["상동", "중동", "심곡동", "역곡동", "소사본동", "원미동"],
    primaryKeyword: "부천 곰팡이 제거",
    secondaryKeywords: ["부천 베란다 곰팡이", "부천 결로 공사", "부천 아파트 곰팡이", "부천 빌라 곰팡이 제거"],
    intro: "부천시 전 지역의 주거 환경에 최적화된 곰팡이 박멸 서비스를 제공합니다. 노후 아파트부터 신축 빌라까지, 부천 지역 특유의 결로 문제를 정확히 진단하여 재발 없는 시공을 약속합니다.",
    localProblems: "부천 지역은 중동, 상동 신도시의 노후 아파트 단지와 심곡동, 원미동 일대의 밀집된 빌라 단지에서 결로로 인한 벽면 곰팡이 발생 빈도가 높습니다. 특히 겨울철 외부 온도 차로 인한 창틀 및 베란다 곰팡이가 주요 문제입니다.",
    targets: [
      "상동/중동 소재 노후 아파트 베란다",
      "심곡동/원미동 일대 다세대 주택 외벽면",
      "역곡동/소사본동 인근 빌라 지하층 및 필로티 구조",
      "부천 전 지역 상가 및 오피스텔 내부"
    ],
    workProcess: [
      "1. 부천 지역 무료 방문 및 열화상 카메라 원인 진단",
      "2. 가구 및 집기 오염 방지를 위한 철저한 보양 작업",
      "3. 특수 고농축 제거제를 이용한 포자균 뿌리까지 박멸",
      "4. 오염된 벽지 제거 및 면 고르기 (필요시)",
      "5. 친환경 규조토 또는 결로 방지 전용 페인트 시공",
      "6. 3중 항균 코팅막 형성으로 장기 재발 방지"
    ],
    costFactors: [
      "곰팡이 발생 면적 및 침투 깊이",
      "벽지 제거 및 단열재 교체 필요 여부",
      "특수 항균 코팅 옵션 선택",
      "가구 이동 및 추가 보양 범위"
    ],
    faqs: [
      {
        question: "부천 지역은 당일 방문 견적이 가능한가요?",
        answer: "네, 지움(Zium)은 부천에 인접한 전문 팀이 상주하고 있어 요청 시 최대한 당일 또는 익일 내 방문 확인이 가능합니다."
      },
      {
        question: "시공 후 냄새가 심하지 않나요?",
        answer: "친환경 인증을 받은 저자극 약품을 사용하며, 시공 후 충분한 환기 시스템을 가동하여 작업 완료 직후에도 일상생활에 지장이 없도록 조치합니다."
      }
    ],
    nearbyLinks: [
      { name: "인천광역시 부평구", slug: "bupyeong-gu" },
      { name: "경기도 시흥시", slug: "siheung" },
      { name: "경기도 안산시", slug: "ansan" }
    ],
    relatedPortfolioIds: ["bucheon-yeokgok-bathroom", "bucheon-simgok-wall"],
    metaTitle: "부천 곰팡이 제거 전문 | 지움 (Zium) - 3단계 책임시공 및 항균코팅",
    metaDescription: "부천시 상동, 중동, 심곡동 전 지역 곰팡이 제거 완벽 해결. 결로 진단부터 재발 방지 코팅까지 전문가가 직접 시공합니다. 지금 바로 무료 방문 견적을 신청하세요.",
    canonicalSlug: "/mold-removal/gyeonggi/bucheon"
  },
  {
    key: "mold-removal:seoul:gangnam-gu",
    serviceName: "곰팡이 제거",
    provinceName: "서울특별시",
    cityName: "강남구",
    neighborhoods: ["압구정동", "신사동", "청담동", "삼성동", "역삼동", "도곡동", "개포동", "대치동"],
    primaryKeyword: "강남구 곰팡이 제거",
    secondaryKeywords: ["강남 아파트 결로 방지", "대치동 학원가 곰팡이 제거", "삼성동 오피스텔 곰팡이", "압구정동 빌라 곰팡이 해결"],
    intro: "대한민국 주거의 중심, 강남구의 프리미엄 주거 환경에 걸맞은 무취/무독성 명품 곰팡이 제거 서비스를 제공합니다. 고가의 가구와 인테리어를 보호하는 철저한 보양 시공을 원칙으로 합니다.",
    localProblems: "강남 지역은 압구정, 반포 등 한강 인근의 노후 대단지 아파트에서 결로로 인한 벽면 곰팡이가 빈번하며, 대치동이나 역삼동의 밀집된 고밀도 오피스텔/빌라 구조상의 환기 부족으로 인한 곰팡이 발생이 주요 해결 과제입니다.",
    targets: [
      "한강변 노후 대단지 아파트 내력벽",
      "대치동/역삼동 소형 오피스텔 다용도실",
      "신사동/청담동 고급 빌라 지하 주차장 및 창고",
      "강남역/삼성역 일대 상가 내 공조 시설"
    ],
    workProcess: [
      "1. 강남구 전 지역 숙련된 전문가 팀의 정밀 방문 진단",
      "2. 프리미엄 가구 및 고가 인테리어 보호를 위한 특수 보양",
      "3. 냄새 없는 친환경 무독성 살균제 공법 적용",
      "4. 벽면 심층 건조 및 실시간 습도 체크",
      "5. 정밀 항균 코팅 및 시공 후 실내 공기질 측정",
      "6. 100% 결과 보정 및 사후 관리 시스템 운영"
    ],
    costFactors: [
      "고급 마감재 손상 최소화 공법 적용 여부",
      "가구/가전 보호를 위한 보양 복잡성",
      "시공 면적 및 곰팡이 균사의 침투 심도",
      "야간/주말 시공 희망 여부"
    ],
    faqs: [
      {
        question: "시공 후 바로 입주나 생활이 가능한가요?",
        answer: "지움은 강남 지역 고객님들을 위해 냄새 없는 특수 공법을 사용합니다. 시공 당일 몇 시간의 환기만으로도 즉시 쾌적한 생활이 가능합니다."
      },
      {
        question: "고가의 실크 벽지인데 손상 없이 가능할까요?",
        answer: "벽지 보존형 제거 공법을 우선적으로 검토하며, 부득이하게 제거가 필요한 경우에도 기존 인테리어와 이질감 없는 마감을 지향합니다."
      }
    ],
    nearbyLinks: [
      { name: "서울특별시 서초구", slug: "seocho-gu" },
      { name: "서울특별시 송파구", slug: "songpa-gu" },
      { name: "서울특별시 성동구", slug: "seongdong-gu" }
    ],
    relatedPortfolioIds: ["bucheon-yeokgok-bathroom", "bucheon-wonmi-aircon"],
    metaTitle: "강남구 곰팡이 제거 전문 | 지움 (Zium) - 프리미엄 무취 시공",
    metaDescription: "강남구 전 지역 압구정, 대치, 삼성동 곰팡이 완벽 박멸. 프리미엄 가구 보호 보양과 냄새 없는 친환경 시공으로 가족의 건강을 되찾아드립니다.",
    canonicalSlug: "/mold-removal/seoul/gangnam-gu"
  }
];

/**
 * 서비스+지역 키를 기반으로 상세 콘텐츠를 조회하는 헬퍼 함수
 */
export function getLocalizedContent(service: string, province: string, city: string) {
  const key = `${service}:${province}:${city}`;
  return localizedContents.find((c) => c.key === key);
}
