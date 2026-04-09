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
    id: "bucheon-sangdong-apartment",
    region: "부천시 상동",
    location: "부천",
    category: "wall",
    service: "아파트 창틀코킹 및 빗물누수 보수",
    siteType: "대단지 아파트",
    title: "부천시 상동 아파트 창틀 작업현장",
    summary: "빗물누수로 인해 아랫집까지 피해가 발생했던 현장입니다.\n아랫집에서는 타 업체를 통해 코킹 재작업을 진행했지만\n누수가 다시 발생했고, 레인가드가 정확한 원인을 찾아\n창틀 보수를 통해 문제를 해결해 드렸습니다.",
    problem: "고객님께서는 비가 많이 올 때마다 거실 베란다 창틀 하단으로 물이 고이는 현상을 겪고 계셨습니다. 점검 결과 외부 실리콘이 노후화되어 벽면에서 벌어진 틈새로 빗물이 대량 유입되고 있었습니다.",
    workDetails: [
      "1. 외부 로프 및 내부 정밀 점검으로 누수 지점 확인",
      "2. 노후되고 경화된 기존 창틀실리콘 완전 제거",
      "3. 샷시코킹 전용 프라이머 도포 및 접착력 강화",
      "4. 창호 전용 프리미엄 실런트 정밀 충진 및 헤라 마감",
      "5. 외부 연결 부위 기밀성 테스트 및 시공 확인"
    ],
    resultSummary: "시공 후 집중 호우 시에도 누수 현상이 완벽하게 해결되었으며, 창호 주변 기밀성 향상으로 단열 효과까지 개선됨을 확인했습니다.",
    relatedServiceSlug: "window-caulking",
    beforeImg: "/portfolio-01-before.jpg",
    afterImg: "/portfolio-01-after.jpg",
    date: "2024-03-25",
  },
  {
    id: "incheon-guwol-apartment",
    region: "인천시 남동구 구월동",
    location: "인천",
    category: "wall",
    service: "아파트 창틀코킹 및 외벽 크랙 보수",
    siteType: "대단지 아파트",
    title: "인천 구월동 아파트 작업현장",
    summary: "아파트 매매 전, 지속되는 빗물누수를 해결하고자\n레인가드에 문의를 주신 현장입니다.\n노후된 창틀 코킹을 새로 시공하고,\n추가 문제가 될 수 있는 외벽크랙까지 함께 보수했습니다.",
    problem: "안방 창틀 주변 외벽 실리콘이 삭아서 가루가 날리는 상태였으며, 비가 오면 벽지가 축축하게 젖어 누수 피해가 우려되는 상황이었습니다.",
    workDetails: [
      "1. 누수 부위 정밀 진단 및 기존 실리콘 제거",
      "2. 창틀과 외벽 사이의 이물질 정리 및 전처리",
      "3. 비오염성 고내후성 실리콘 도포",
      "4. 누수 취약 구간(모서리) 보안 처리",
      "5. 최종 검수 및 누수 차단 확인"
    ],
    resultSummary: "노후된 실리콘을 전면 교체하여 빗물 유입을 원천 차단하였고, 더 이상의 벽지 젖음 현상 없이 쾌적하게 복구되었습니다.",
    relatedServiceSlug: "window-caulking",
    beforeImg: "/portfolio-02-before.jpg",
    afterImg: "/portfolio-02-after.jpg",
    date: "2024-03-20",
  }
];

