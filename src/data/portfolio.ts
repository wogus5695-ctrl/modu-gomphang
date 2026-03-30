export interface PortfolioCase {
  id: string;
  region: string;
  location: string; // 부천, 강남 등 (지역별 필터링용)
  category: "bathroom" | "aircon" | "wall" | "balcony";
  service: string;
  siteType: string; // 현장 유형 (아파트, 빌라, 상가 등)
  title: string;
  summary: string;
  problem: string; // 문제 상황
  workDetails: string[]; // 작업 내용 (단계별)
  resultSummary: string; // 작업 전후 요약
  relatedServiceSlug: string; // 관련 서비스 페이지 연결용
  beforeImg: string;
  afterImg: string;
  date: string;
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: "gangnam-daechi-apartment",
    region: "서울특별시 강남구 대치동",
    location: "강남구",
    category: "wall",
    service: "벽면 곰팡이 제거 및 결로 방지",
    siteType: "노후 대단지 아파트",
    title: "강남구 대치동 아파트 외벽면 결로 곰팡이 완벽 해결",
    summary: "아이 방 벽면에 발생한 대규모 곰팡이를 제거하고 단열 보강 시공을 통해 결로 현상을 원천 차단했습니다.",
    problem: "고객님께서는 아이 방 가구 뒤쪽 벽면 전체에 곰팡이가 번진 것을 확인하시고 자녀의 호흡기 건강을 우려하여 의뢰를 주셨습니다. 한강 인근의 노후 단지로 외벽 온도 차가 심해 결로가 매년 반복되던 상황이었습니다.",
    workDetails: [
      "1. 오염된 벽지 제거 및 곰팡이 뿌리까지 특수 살균 박멸",
      "2. 벽면 심층 건조 후 포자균 제거용 세정 작업",
      "3. 3단계 방수 및 항균 처리로 균 재발 방지",
      "4. 친환경 단열재 보강 시공으로 결로 온도차 극복",
      "5. 프리미엄 무취 페인트 마감 및 항균 코팅막 형성"
    ],
    resultSummary: "시공 후 곰팡이 냄새가 완전히 사라졌으며, 6개월 뒤 후속 점검에서도 결로나 곰팡이 재발 없이 쾌적한 상태가 유지됨을 확인했습니다.",
    relatedServiceSlug: "mold-removal",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    date: "2024-03-15",
  },
  {
    id: "bucheon-yeokgok-bathroom",
    region: "부천시 역곡동",
    location: "부천",
    category: "bathroom",
    service: "욕실 곰팡이 제거 및 실리콘 시공",
    siteType: "주상복합 아파트",
    title: "부천시 역곡동 욕실 곰팡이 제거 완벽 해결사례",
    summary: "오래된 욕실의 실리콘과 타일 줄눈 곰팡이를 제거하고 바이오 항균 실리콘으로 재시공했습니다.",
    problem: "욕실 내 채광과 환기가 부족하여 실리콘 부분이 검게 변색되었으며, 일반적인 세제로는 지워지지 않는 깊은 곰팡이가 발생한 상태였습니다.",
    workDetails: [
      "1. 기존 오염된 실리콘 전체 제거",
      "2. 타일 사이 줄눈 곰팡이 특수 약품 제거",
      "3. 고압 살균 세척 및 건조",
      "4. 바이오 항균 실리콘 재도포 및 줄눈 코팅"
    ],
    resultSummary: "욕실 전체가 새것처럼 밝아졌으며, 항균 실리콘 적용으로 습한 환경에서도 곰팡이가 쉽게 생기지 않는 상태로 복원되었습니다.",
    relatedServiceSlug: "bathroom-mold",
    beforeImg: "/images/service-bathroom.png",
    afterImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    date: "2024-03-10",
  }
];
