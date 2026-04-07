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
    id: "window-caulking",
    slug: "window-caulking",
    title: "아파트 창틀코킹 전문",
    shortDesc: "노후된 창틀 실리콘을 전면 제거하고 창호 전용 실런트로 누수를 완벽 차단합니다.",
    description: "빗물 누수의 주범인 갈라진 창틀 실리콘! 레인가드의 정밀 코킹 시공으로 누수 차단은 물론 에너지 효율까지 높여드립니다.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    features: [
      { title: "노후 실리콘 완전 제거", desc: "덧방이 아닌 기존 실리콘을 깨끗하게 제거한 뒤 시공하여 부착력을 극대화합니다." },
      { title: "창호 전용 프리미엄 실런트", desc: "자외선과 온도 변화에 강한 고내후성 실런트를 사용하여 수명을 늘립니다." },
      { title: "정밀 기밀 시공 마감", desc: "미세한 틈새까지 완벽하게 메워 빗물 누수 및 벌레 유입을 원천 차단합니다." }
    ],
    content: `
      창틀 실리콘은 시간이 흐르면 건물 외벽의 수축 팽창으로 인해 벌어지거나 갈라지기 마련입니다. 
      이 틈새로 유입되는 빗물은 내부 누수와 외풍의 직접적인 원인이 됩니다.

      레인가드는 단순히 겉면만 덮는 방식이 아닌, 노후 실리콘의 완전한 제거와 
      프라이머 도포 과정을 거쳐 정석대로 시공합니다. 

      창틀 코킹은 단순한 미관 개선이 아닌, 우리 집의 내구성을 지키는 필수 관리 항목입니다. 
      전문가의 손길로 빗물 걱정 없는 쾌적한 실내 환경을 만드시기 바랍니다.
    `
  },
  {
    id: "leak-repair",
    slug: "leak-repair",
    title: "외벽 누수 및 창틀 보수",
    shortDesc: "벽면 균열과 창틀 주변 외벽의 누수 취약 구간을 보강하여 빗물 침투를 방지합니다.",
    description: "레인가드의 외벽 누수 보수는 창틀 주변의 미세 균열까지 정밀하게 점검하여 빗물이 스며들 틈을 주지 않습니다.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    features: [
      { title: "누수 원인 정밀 진단", desc: "단순 실리콘뿐만 아니라 외벽 틈새 등 누수의 근본 원인을 파악합니다." },
      { title: "고성능 항균 실런트", desc: "누수 차단은 물론 습기로 인한 세균 번식을 억제하는 자재를 사용합니다." },
      { title: "최장 3년 책임 보증", desc: "시공 후 철저한 사후 관리를 통해 고객님의 신뢰에 보답합니다." }
    ],
    content: `
      외벽 누수 문제는 원인 파악이 가장 중요합니다. 
      레인가드는 풍부한 현장 경험을 바탕으로 누수 유입 경로를 정확히 진단합니다.

      검증된 고성능 자재와 전문 인력의 정교한 시공을 통해 
      장마철이나 태풍에도 걱정 없는 안전한 주거 환경을 만들어 드립니다.
    `
  }
];
