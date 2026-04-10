export const getHash = (str: string) => {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export const getDynamicHomeData = (region: string, service: string, hash: number) => {
  const keyword = `${region} ${service}`; // 핵심 키워드 조합

  // 1. H1 패턴
  const h1Patterns = [
    `${keyword} 점검 및 보수`
  ];

  // 2. 상단 요약 (Hero Intro) 패턴
  const summaryPatterns = [
    `${keyword} 문제로 문의가 많은 창틀 주변 누수 원인과 보수 방향을 안내해드립니다.`
  ];

  // 3. 첫 본문 첫 문장 (지역명별 보조 문장) 패턴
  const regionPatterns = [
    `${keyword}는 비 오는 날 창틀 주변 물자국이나 실내 오염으로 먼저 확인되는 경우가 많습니다.`
  ];

  // 4. 시공 프로세스 제목 (작업 연결 문장) 패턴
  const processTitlePatterns = [
    `${keyword} 보수는 누수 원인 확인부터 실리콘 제거, 재시공, 마감 점검까지 순서대로 진행되어야 합니다.`
  ];

  // 5. 하단 CTA 문구 패턴
  const ctaPatterns = [
    `${keyword} 빠른 견적 상담`
  ];

  // 서비스별 공통 블록
  const serviceBlocks: Record<string, string[]> = {
    '창틀코킹': [
      `창틀코킹은 노후된 실리콘 마감이나 벌어진 틈새를 점검하고, 필요한 부위에 맞춰 보수 또는 재시공을 진행하는 작업입니다. 창틀 주변 마감 상태가 좋지 않으면 비바람이 강한 날 빗물 유입으로 이어질 수 있어, 초기 점검과 보수가 중요합니다.`,
      `창틀 실리콘은 시간이 지나면서 갈라짐, 들뜸, 수축 현상이 생길 수 있습니다. 이런 경우 창틀코킹 작업을 통해 틈새를 정리하고 마감을 보완하면 빗물 유입 가능성을 줄이는 데 도움이 됩니다.`,
      `창틀코킹은 단순히 실리콘을 덧바르는 작업이 아니라, 기존 마감 상태와 틈새 원인을 확인한 뒤 필요한 범위에 맞춰 보수 방향을 잡는 것이 중요합니다. 창틀 주변의 실리콘 열화나 접합부 손상이 확인되면 재시공이 필요한 경우도 있습니다.`
    ],
    '창틀누수': [
      `창틀누수는 창호 틈새, 실리콘 열화, 접합부 손상 등 여러 원인으로 발생할 수 있습니다. 겉으로 보이는 물자국만 확인하기보다, 누수가 시작되는 지점을 함께 점검하는 과정이 중요합니다.`,
      `비 오는 날 창틀 주변으로 물이 스며들거나 실내 벽지·마감재에 얼룩이 생긴다면 창틀누수를 의심해볼 수 있습니다. 이 경우 창틀 주변 실리콘, 샷시 접합부, 외부 유입 가능성까지 함께 확인해야 정확한 보수 방향을 잡을 수 있습니다.`,
      `창틀누수는 단순 결로와 달리 외부에서 유입되는 물길이 원인인 경우가 많습니다. 누수 원인을 제대로 확인하지 않으면 같은 문제가 반복될 수 있어, 보수 전 점검이 우선되어야 합니다.`
    ],
    '빗물누수': [
      `빗물누수는 비가 올 때만 증상이 나타나는 경우가 많아, 외벽 접합부와 창틀 주변 상태를 함께 확인하는 것이 중요합니다. 실내 천장이나 벽면에 물자국이 생긴다면 유입 경로 점검부터 진행해야 합니다.`,
      `우천 시 반복적으로 발생하는 빗물누수는 창틀 주변 마감 손상이나 외부 접합부 틈새와 연결되는 경우가 있습니다. 표면만 보수하기보다 실제 유입 가능 부위를 확인한 뒤 필요한 보수를 진행해야 재발을 줄일 수 있습니다.`,
      `비 올 때만 물이 들어오거나 벽면 오염이 반복된다면 빗물누수 가능성을 먼저 살펴봐야 합니다. 창틀 주변 실리콘과 접합부 상태를 점검하고 필요한 범위에 맞춰 보수 방향을 잡는 것이 중요합니다.`
    ]
  };

  const blocks = serviceBlocks[service] || serviceBlocks['창틀코킹'];

  return {
    metaTitle: `${keyword} 전문가 | 레인가드`,
    metaDesc: `${region} 지역의 ${service} 점검, 보수, 실리콘 재시공 안내. 자연스러운 실내 환경 조성을 위해 레인가드와 함께하세요.`,
    h1: h1Patterns[0],
    summary: summaryPatterns[0],
    regionText: regionPatterns[0],
    processTitle: processTitlePatterns[0],
    serviceBlock: blocks[hash % blocks.length],
    ctaHeader: ctaPatterns[0]
  };
};
