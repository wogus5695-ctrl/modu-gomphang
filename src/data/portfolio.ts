export interface PortfolioCase {
  id: string;
  region: string;
  service: string;
  title: string;
  summary: string;
  content: string;
  beforeImg: string;
  afterImg: string;
  date: string;
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: "bucheon-yeokgok-bathroom",
    region: "부천시 역곡동",
    service: "욕실 곰팡이 제거",
    title: "부천시 역곡동 욕실 곰팡이 제거 완벽 해결",
    summary: "오래된 아파트 욕실의 실리콘과 타일 곰팡이를 뿌리까지 박멸하고 항균 코팅을 진행한 사례입니다.",
    content: "고객님께서는 욕실의 검은 곰팡이 때문에 어린 자녀의 건강이 걱정되어 의뢰를 주셨습니다. 특수 세제를 사용하여 12시간 동안 포자균을 박멸하고, 재발 방지를 위한 고성능 항균 코팅을 완료했습니다.",
    beforeImg: "/images/service-bathroom.png", // 사용자가 전달한 이미지 활용
    afterImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop", // 가상 After 이미지
    date: "2024-03-10",
  },
  {
    id: "bucheon-wonmi-aircon",
    region: "부천시 원미동",
    service: "에어컨 곰팡이 제거",
    title: "부천시 원미동 에어컨 곰팡이 제거 및 살균 세척",
    summary: "에어컨 가동 시 발생하는 악취의 원인인 내부 포자균을 고압 세척으로 완벽히 제거했습니다.",
    content: "에어컨 내부 팬과 필터에 가득했던 곰팡이를 분해 세척하여 제거했습니다. 시공 후 불쾌한 냄새가 사라지고 풍량이 개선되었습니다.",
    beforeImg: "/images/service-aircon.png",
    afterImg: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    date: "2024-03-08",
  },
  {
    id: "bucheon-simgok-wall",
    region: "부천시 심곡동",
    service: "벽 곰팡이 제거",
    title: "부천시 심곡동 빌라 벽 곰팡이 제거 및 결로 방지 시공",
    summary: "결로 현상으로 인해 거실 벽면에 발생한 대규모 곰팡이를 제거하고 방지 작업을 마쳤습니다.",
    content: "단열재 보강과 곰팡이 차단 코팅을 병행하여 향후 결로가 발생해도 곰팡이가 피지 않도록 조치했습니다.",
    beforeImg: "/images/service-wall.png",
    afterImg: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    date: "2024-03-05",
  },
  {
    id: "bucheon-sangdong-balcony",
    region: "부천시 상동",
    service: "베란다 곰팡이 제거",
    title: "부천시 상동 아파트 베란다 창틀 곰팡이 제거 시공",
    summary: "베란다 창틀 주변의 결로 곰팡이를 제거하고 탄성 코트로 깔끔하게 마무리했습니다.",
    content: "베란다 전체의 곰팡이를 제거한 후, 습기에 강한 전용 페인트와 코팅제로 마감하여 깔끔한 상태를 유지하게 했습니다.",
    beforeImg: "/images/service-balcony.png",
    afterImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    date: "2024-03-01",
  }
];
