export const getHash = (str: string) => {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export const getDynamicHomeData = (region: string, service: string, hash: number) => {
  const keyword = `${region} ${service}`;

  // 기본 서비스 매핑 (키워드 매칭 실패 시 곰팡이제거 기준)
  const serviceType = service.includes('단열') ? '단열시공' : (service.includes('탄성') ? '탄성코트' : '곰팡이제거');

  const configs: Record<string, any> = {
    '곰팡이제거': {
      h1: `${keyword} 뿌리까지 완벽 박멸`,
      summary: `${region} 지역 아파트 및 빌라의 고질적인 곰팡이 문제를 해결하기 위해, 단순 제거가 아닌 원인을 차단하고 포자까지 살균하는 전문 솔루션을 안내합니다.`,
      regionText: `${region} 지역은 결로가 발생하기 쉬운 환경적 특성으로 인해 베란다와 다용도실의 곰팡이 민원이 지속적으로 발생하는 곳입니다.`,
      analysisTitle: `${service} 원인 정밀 진단 및 분석`,
      analysisDesc: `${service}은 눈에 보이는 얼룩만 닦아내는 것이 아니라, 벽면 내부의 습도와 공기 중의 포자 농도를 분석하여 재발하지 않는 환경을 만드는 것이 핵심입니다.`,
      analysisBlocks: [
        {
          title: "01. 곰팡이 오염도 및 종류 판별",
          description: "벽면에 침투한 곰팡이의 종류와 깊이를 확인하여 최적의 살균 세척 방식을 결정합니다.",
          checkpoints: ["오염 범위 정밀 측정", "변색 및 부식 상태 점검", "공기 중 포자 확산 가능성 진단"]
        },
        {
          title: "02. 원인 부위 습도 및 누수 체크",
          description: "단순 환기 부족인지, 외부 누수나 내부 결로 때문인지를 열화상 장비 등으로 체크합니다.",
          checkpoints: ["벽면 함수율(습도) 측정", "단열 열교 부위 탐색", "주변 실리콘 및 외벽 크랙 점검"]
        },
        {
          title: "03. 시공 범위 및 맞춤 약제 선정",
          description: "거주 환경과 자재의 특성에 맞춰 인체에 무해하면서도 강력한 항균 성능을 가진 약제를 선정합니다.",
          checkpoints: ["친환경 제거제 최적화", "가구 및 가전 보양 범위 설정", "재발 방지 코팅 범위 계획"]
        }
      ],
      processTitle: `${service} 4단계 표준 시공`,
      processSteps: [
        { title: "고농축 살균 제거 및 포자 박멸", description: "전문 살균제를 사용하여 벽면 깊숙이 박힌 곰팡이 뿌리와 공기 중 포자를 제거합니다." },
        { title: "항균 프라이머 기초 보강", description: "제거 후 깨끗해진 벽면에 곰팡이 재발을 억제하는 특수 항균 프라이머를 도포합니다." },
        { title: "수성 항균 코팅 및 마감", description: "습기에 강하고 통기성이 좋은 전문 항균 도료로 벽면을 깔끔하게 복원합니다." },
        { title: "공간 살균 및 피톤치드 케어", description: "시공 완료 후 실내 공기질 정화를 위해 추가 공간 살균 케어를 진행합니다." }
      ],
      faqTitle: `${service} 관련 궁금한 점`,
      faqs: [
        { question: "제거 후 냄새가 심하게 남지는 않나요?", answer: "모두종합환경은 법적으로 안전성이 검증된 저독성 약제를 사용하며, 시공 후 충분한 환기를 통해 냄새를 빠르게 제거합니다." },
        { question: "곰팡이만 지우면 다시 안 생기나요?", answer: "제거 후 항균 코팅을 진행하지만, 결로가 심한 곳은 단열 공사를 병행해야 완벽한 재발 방지가 가능합니다." },
        { question: "시공할 때 짐을 다 치워야 하나요?", answer: "작은 짐들은 중앙으로 옮겨주시면 되며, 큰 가구 등은 저희가 꼼꼼히 보양(비닐 보호) 후 작업합니다." }
      ]
    },
    '단열시공': {
      h1: `${keyword} 결로 해결을 위한 근본 대책`,
      summary: `${region} 지역의 겨울철 온도 차로 인한 결로 현상을 해결하기 위해, 벽면의 기밀성을 높이고 열 손실을 차단하는 정밀 단열 솔루션을 제공합니다.`,
      regionText: `${region} 지역은 외벽과 접한 세대의 경우 겨울철 내외부 온도차로 인해 벽면에 물방울이 맺히는 결로 현상이 빈번합니다.`,
      analysisTitle: `${service} 핵심 성능 평가 및 진단`,
      analysisDesc: `${service}은 단순히 두꺼운 판을 붙이는 것이 아니라, 벽체와 단열재 사이의 틈새를 완벽히 밀착하여 '열교 현상'이 생기지 않도록 하는 것이 기술력입니다.`,
      analysisBlocks: [
        {
          title: "01. 결로 발생 지점 열화상 분석",
          description: "육안으로 보이지 않는 외벽의 냉기 유입 경로와 단열이 깨진 부위를 열화상 카메라로 정확히 찾아냅니다.",
          checkpoints: ["모서리 및 창틀 코너 집중 진단", "벽체 온도 분포 확인", "결로 취약 포인트 특정"]
        },
        {
          title: "02. 기존 자재 상태 및 벽체 건조도 확인",
          description: "단열재를 붙이기 전 기존 벽면의 습기가 완전히 건조되었는지 확인하여 내부 부식을 방지합니다.",
          checkpoints: ["잔류 습도 정밀 측정", "들뜬 페인트층 제거 범위 확인", "기존 단열재 성능 퇴화 여부 판단"]
        },
        {
          title: "03. 현장별 최적 단열재 두께 및 공법 설계",
          description: "공간의 크기와 냉기 수준에 맞춰 이보드, 아이소핑크 등 최적의 자재와 시공 두께를 설계합니다.",
          checkpoints: ["공간 효율성 고려한 두께 협의", "화재 안전성 검증 자재 선정", "기밀 시공을 위한 몰딩 마감 계획"]
        }
      ],
      processTitle: `${service} 정밀 시공 절차`,
      processSteps: [
        { title: "벽면 평탄화 및 항균 기초 작업", description: "단열재의 완벽한 밀착을 위해 벽면의 요철을 정리하고 곰팡이 방지 처리를 합니다." },
        { title: "고성능 단열재 밀착 압착 시공", description: "전용 폼과 접착제를 사용하여 단열재를 벽면에 빈틈없이 밀착시켜 고정합니다." },
        { title: "이음매 및 코너 우레탄폼 기밀 보강", description: "단열재 사이의 미세한 틈새까지 폼으로 메워 냉기 유입을 원천 차단합니다." },
        { title: "마감 보드 및 표면 코팅 마무리", description: "단열 시공 후 도배나 탄성코트가 가능하도록 전용 보드로 깔끔하게 마감합니다." }
      ],
      faqTitle: `${service} 해결을 위한 핵심 FAQ`,
      faqs: [
        { question: "시공하면 집이 좁아지지 않나요?", answer: "최근에는 얇으면서도 성능이 좋은 고밀도 단열재를 사용하여 실내 공간 손실을 최소화(약 13~33mm)합니다." },
        { question: "단열 공사 후에도 환기를 해야 하나요?", answer: "네, 단열은 벽의 온도를 높여 결로를 줄여주지만, 실내 습도가 너무 높으면 환기를 통해 습기를 배출해주는 것이 좋습니다." },
        { question: "윗집 누수가 있어도 시공이 가능한가요?", answer: "누수가 진행 중인 상태에서는 단열 시공이 불가능합니다. 윗집 누수부터 해결한 후 벽이 완전히 마른 뒤 시공해야 합니다." }
      ]
    },
    '탄성코트': {
      h1: `${keyword} 프리미엄 항균 베란다 코팅`,
      summary: `${region} 지역 아파트 베란다의 청결함과 내구성을 높이기 위해, 습기에 강하고 곰팡이 억제 효과가 탁월한 친환경 탄성코트 시공을 안내합니다.`,
      regionText: `${region} 지역은 입주 전 인테리어나 거주 중 베란다 관리를 위해 탄성코트 시공 문의가 가장 활발한 지역 중 하나입니다.`,
      analysisTitle: `${service} 내구도 및 환경 분석`,
      analysisDesc: `${service}은 단순한 페인트 뿜칠이 아니라, 벽면의 오염 상태와 습도 조절 능력을 종합적으로 고려하여 반영구적인 미관을 완성하는 과정입니다.`,
      analysisBlocks: [
        {
          title: "01. 기존 페인트 부식 및 박리 상태 진단",
          description: "물이 닿아 부풀어 오르거나 가루가 날리는 기존 페인트층의 부착력 상태를 꼼꼼하게 살핍니다.",
          checkpoints: ["하부 들뜸 현상 확인", "노후 페인트 고착 상태 점검", "박리 제거 필요 범위 산출"]
        },
        {
          title: "02. 미세 균열 및 하자 부위 파악",
          description: "뿜칠 전 실금(크랙)이나 구멍 등 벽면의 결함을 찾아내어 완벽한 평탄화를 준비합니다.",
          checkpoints: ["외벽 연결부 균열 추적", "우수관 주변 부식 확인", "실리콘 보수 필요 지점 체크"]
        },
        {
          title: "03. 고객 선호 컬러 및 도료 등급 상담",
          description: "거주 환경에 맞춰 결로 방지 성능이 강화된 세라믹, 실크코트 등 최적의 제품을 추천합니다.",
          checkpoints: ["항균 및 내후성 등급 선택", "인테리어 맞춤형 컬러 및 펄 선택", "건조 환경에 따른 시공 시간 조정"]
        }
      ],
      processTitle: `${service} 명품 시공 프로세스`,
      processSteps: [
        { title: "정밀 보양 및 마스킹 작업", description: "샷시, 선반, 바닥 등 도료가 묻지 않아야 할 곳을 비닐로 완벽히 보호합니다." },
        { title: "오염 제거 및 벽면 퍼티 보수", description: "곰팡이를 제거하고 핸디코트(퍼티) 작업을 통해 평평한 벽면을 만듭니다." },
        { title: "특수 하도 프라이머 도포", description: "도료의 접착력을 높이고 벽면의 얼룩이 올라오지 않게 프라이머를 발라줍니다." },
        { title: "기압 뿜칠 및 고른 분포 마감", description: "전문 장비를 이용해 균일한 두께와 일정한 패턴으로 고품격 질감을 표현합니다." }
      ],
      faqTitle: `${service} 시공에 관한 궁금증`,
      faqs: [
        { question: "일반 페인트와 무엇이 다른가요?", answer: "일반 페인트보다 신축성과 복원력이 좋아 균열을 막아주고, 항균 세라믹 성분이 포함되어 결로와 곰팡이 방지에 탁월합니다." },
        { question: "시공 후에 바로 짐을 넣어도 되나요?", answer: "겉면은 하루면 마르지만 속까지 단단히 굳으려면 2~3일 정도는 충격이나 무거운 물건 밀착을 피하는 것이 좋습니다." },
        { question: "색상 선택이 가능한가요?", answer: "네, 진주색, 은하수색 등 다양한 기본 컬러와 펄 추가 여부를 취향에 맞춰 선택하실 수 있습니다." }
      ]
    }
  };

  const config = configs[serviceType];
  const ctaPatterns = [`${keyword} 실시간 견적 상담`];

  const serviceBlocks: Record<string, string[]> = {
    '곰팡이제거': [
      `곰팡이는 포자 번식이 빠릅니다. 모두종합환경의 전용 약제 살균 과정을 통해 보이지 않는 뿌리까지 확실히 제거하세요.`,
      `벽지의 곰팡이 냄새가 난다면 이미 내부에 깊숙이 침투한 상태입니다. 건강을 위해 전문가의 진단이 필수적입니다.`
    ],
    '단열시공': [
      `결로 없는 쾌적한 겨울을 위해 단열 시공은 선택이 아닌 필수입니다. 기밀성 높은 시공으로 에너지 효율까지 높여드립니다.`,
      `단열재 사이의 작은 틈새(열교) 하나가 결로의 원인이 됩니다. 디테일이 다른 모두종합환경의 기술력을 경험하세요.`
    ],
    '탄성코트': [
      `오래된 베란다를 새집처럼! 친환경 세라믹 탄성코트로 결로 예방은 물론 고급스러운 실내 인테리어 효과를 동시에 누리세요.`,
      `들뜨고 벗겨지는 페인트 고민, 탄성코트 뿜칠 시공으로 해결하세요. 물걸레 청소가 가능해 관리가 매우 편리해집니다.`
    ]
  };

  const blocks = serviceBlocks[serviceType];

  return {
    metaTitle: `${keyword} 전문 업체 | 모두종합환경`,
    metaDesc: `${region} 지역 ${service} (곰팡이 박멸, 결로 방지 단열, 베란다 탄성코트)를 정석 시공합니다. 쾌적한 주거 공간을 위해 모두종합환경과 상담하세요.`,
    h1: config.h1,
    summary: config.summary,
    regionText: config.regionText,
    analysisTitle: config.analysisTitle,
    analysisDesc: config.analysisDesc,
    analysisBlocks: config.analysisBlocks,
    processTitle: config.processTitle,
    processSteps: config.processSteps,
    faqTitle: config.faqTitle,
    faqs: config.faqs,
    portfolioTitle: `모두종합환경 ${service} 시공 사례`,
    serviceBlock: blocks[hash % blocks.length],
    ctaHeader: ctaPatterns[0]
  };
};
