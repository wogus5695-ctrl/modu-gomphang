export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  heroImage: string;
  features: {
    title: string;
    desc: string;
  }[];
  content: string;
}

export const services: Service[] = [
  {
    id: "mold-removal",
    slug: "mold-removal",
    title: "곰팡이 제거 전문 시공",
    shortDesc: "검증된 약품과 3단계 책임 공법으로 포자균까지 완벽 박멸합니다.",
    description: "지움 (Zium)의 핵심 서비스인 곰팡이 제거는 단순한 세척이 아닙니다. 결로 현상 분석부터 포자균 박멸, 항균 코팅까지 이어지는 체계적인 프로세스로 재발 없는 쾌적한 환경을 약속합니다.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    features: [
      {
        title: "정밀 원인 진단",
        desc: "결로, 누수, 환기 부족 등 곰팡이 발생의 근본 원인을 파악하여 맞춤 솔루션을 제안합니다."
      },
      {
        title: "특수 약품 공법",
        desc: "인체에 무해하면서도 포자균 깊숙이 침투하여 균을 완전히 제거하는 전용 약품을 사용합니다."
      },
      {
        title: "장기 재발 방지",
        desc: "시공 부위에 강력한 항균 코팅막을 형성하여 장기적으로 곰팡이 재발을 차단합니다."
      }
    ],
    content: `
      곰팡이는 단순한 미관상의 문제가 아니라 호흡기 질환과 알레르기를 유발하는 건강의 적입니다. 
      지움 (Zium)은 보이지 않는 곳의 포자균까지 찾아내어 완벽하게 박멸하는 것을 원칙으로 합니다.
      
      욕실, 베란다, 벽지 뒤쪽 등 고온다습한 환경에서 번식하는 곰팡이를 
      지움만의 3단계 책임 시공 프로세스(박멸-세척/건조-코팅)로 해결해 드립니다.
      
      많은 고객님들이 셀프 시공 후 재발로 인해 고통받으시지만, 
      전문가의 손길을 거치면 쾌적한 환경을 오랫동안 유지할 수 있습니다.
    `
  },
  {
    id: "bathroom",
    slug: "bathroom-mold",
    title: "욕실 및 실리콘 시공",
    shortDesc: "타일 줄눈과 실리콘의 검은 곰팡이를 제거하고 새것처럼 복원합니다.",
    description: "매일 사용하는 욕실의 위생을 위해 찌든 곰팡이를 제거하고 항균 실리콘으로 재시공하여 청결을 되찾아드립니다.",
    heroImage: "/images/service-bathroom.png",
    features: [],
    content: "준비 중인 서비스입니다."
  },
  {
    id: "aircon",
    slug: "aircon-cleaning",
    title: "에어컨 살균 세척",
    shortDesc: "에어컨 내부의 독소 포자균을 전문 약품으로 고압 살균 세척합니다.",
    description: "여름철 가동 전 필수! 보이지 않는 냉각핀과 송풍팬의 곰팡이를 제거하여 깨끗한 바람을 선물합니다.",
    heroImage: "/images/service-aircon.png",
    features: [],
    content: "준비 중인 서비스입니다."
  }
];
