export const getHash = (str: string) => {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export const getDynamicHomeData = (region: string, service: string, hash: number) => {
  const keyword = `${region} ${service}`;

  // 기본 서비스 매핑 (키워드 매칭 실패 시 창틀코킹 기준)
  const serviceType = service.includes('빗물') ? '빗물누수' : (service.includes('샷시') ? '창틀누수' : '창틀코킹');

  const configs: Record<string, any> = {
    '창틀코킹': {
      h1: `${keyword} 전문가의 정밀 시공`,
      summary: `${region} 지역 아파트 및 빌라의 노후된 창틀 실리콘을 전면 제거하고, 고내후성 전용 실런트로 빗물을 완벽 차단하는 전문 솔루션을 제공합니다.`,
      regionText: `${region} 지역은 해풍이나 습도 변화에 노출된 창호가 많아 실리콘 경화로 인한 틈새 발생과 빗물 누수가 빈번하게 발생합니다.`,
      analysisTitle: `${service} 상태 정밀 점검 및 진단`,
      analysisDesc: `${service}은 단순히 실리콘을 덧바르는 것이 아니라, 기존 마감재의 탈락 상태와 외벽 접합부의 미세 크랙을 정밀하게 파악하는 것이 중요합니다.`,
      analysisBlocks: [
        {
          title: "01. 실리콘 노후도 및 박리 상태 점검",
          description: "창틀 주변 실리콘이 딱딱하게 굳거나 벽면에서 벌어진 정도를 확인하여 재시공 범위를 결정합니다.",
          checkpoints: ["실리콘 경화 현상 체크", "벽면 접착력 상실 부위 확인", "미세 틈새 유입 경로 추적"]
        },
        {
          title: "02. 외벽 크랙 및 샤시 변형 진단",
          description: "실리콘 문제 외에도 외벽의 균열이나 샤시 프레임의 미세한 변형 여부를 열화상 장비 등으로 체크합니다.",
          checkpoints: ["외벽 미세 크랙 탐색", "샤시 프레임 수평 확인", "코너 부위 누수 흔적 분석"]
        },
        {
          title: "03. 거주 환경 맞춤형 실런트 선정",
          description: "일사량이 많은 남향인지, 습기가 많은 북향인지에 따라 최적의 고부착 창호 전용 실런트를 선정합니다.",
          checkpoints: ["고내후성 자재 최적화", "프라이머 적합성 테스트", "작업 환경 및 날씨 고려"]
        }
      ],
      processTitle: `${service} 4단계 책임 시공`,
      processSteps: [
        { title: "노후 실리콘 및 이물질 전면 제거", description: "부착력을 떨어뜨리는 낡은 실리콘과 먼지를 꼼꼼하게 긁어내어 깨끗한 면을 만듭니다." },
        { title: "고밀착 전용 프라이머 도포", description: "새로운 실리콘이 벽면과 창틀에 강력하게 고착될 수 있도록 특수 프라이머를 바릅니다." },
        { title: "프리미엄 창호 실런트 충진", description: "창틀 틈새 깊숙이 실리콘을 밀착하여 채워 넣고 균일한 두께로 도포합니다." },
        { title: "표면 매끈 마감 및 최종 검수", description: "도구로 표면을 매끄럽게 정리하여 미관을 높이고, 누수 가능 부위를 최종 확인합니다." }
      ],
      faqTitle: `${service} 관련 핵심 질문`,
      faqs: [
        { question: "기존 실리콘을 꼭 제거하고 작업해야 하나요?", answer: "네, 낡은 실리콘 위에 덧바르면 금방 다시 벌어집니다. 레인가드는 반드시 전면 제거 후 정석 시공을 원칙으로 합니다." },
        { question: "시공 후 냄새가 심하거나 독하지 않나요?", answer: "저희가 사용하는 창호 전용 실런트는 자극적인 냄새가 거의 없으며, 인체에 무해한 친환경 인증 제품입니다." },
        { question: "비가 오기 직전에 시공해도 안전한가요?", answer: "벽면이 말라 있어야 접착이 잘 됩니다. 비가 예보된 경우에는 일정을 조율하여 가장 건조한 날에 시공해 드립니다." }
      ]
    },
    '빗물누수': {
      h1: `${keyword} 근본 원인 해결 솔루션`,
      summary: `${region} 지역의 반복되는 빗물 누수 고민을 해결하기 위해, 창틀 실리콘 보수부터 외벽 크랙 보강까지 종합적인 누수 차단 서비스를 제공합니다.`,
      regionText: `${region} 지역은 폭우나 강풍 시 창문 틈새로 들이치는 빗물로 인해 베란다와 거실 벽지가 훼손되는 사례가 많습니다.`,
      analysisTitle: `${service} 경로 역추적 및 정밀 분석`,
      analysisDesc: `${service} 차단은 물이 들어오는 통로를 정확히 폐쇄하는 것이 핵심입니다. 단순히 눈에 보이는 곳만 막아서는 해결되지 않습니다.`,
      analysisBlocks: [
        {
          title: "01. 실내 누수 흔적 및 확산 범위 조사",
          description: "물자국 유입 방향과 벽지의 변색 상태를 분석하여 내부로 침투한 누수의 주된 경로를 예상합니다.",
          checkpoints: ["물자국 흐름 패턴 분석", "벽지 내부 습도 측정", "내부 습기 및 벽지 훼손 지점 확인"]
        },
        {
          title: "02. 외부 로프 및 고소 점검 (필요시)",
          description: "창문 외부의 실리콘 탈락 상태와 위층에서의 낙수 영향 등을 외부에서 정밀하게 살펴봅니다.",
          checkpoints: ["상부 세대 영향 여부 판단", "외벽 드라이비트 및 크랙 점검", "방충망 및 창호 레일 상태 확인"]
        },
        {
          title: "03. 누수 원인별 맞춤 보수 공법 설계",
          description: "실리콘 재시공만으로 충분한지, 혹은 외벽 방수 처리가 병행되어야 하는지 최적의 공법을 제안합니다.",
          checkpoints: ["보수 범위 리스트업", "자재 투입량 및 공기 산정", "추가 누수 방지 포인트 설정"]
        }
      ],
      processTitle: `${service} 철저 방수 프로세스`,
      processSteps: [
        { title: "원인 부위 정밀 청소 및 면 정리", description: "누수 원인이 되는 틈새 주변의 습기와 오염물질을 제거하여 보수 준비를 합니다." },
        { title: "고성능 방수재 및 코킹재 주입", description: "공극(틈새)이 생긴 곳에 강력한 방수 성능을 가진 전용 코킹재를 주입합니다." },
        { title: "접합부 이음매 기밀 보강 작업", description: "창틀과 벽이 만나는 면을 광폭 시공하여 빗물이 절대 침투할 수 없게 만듭니다." },
        { title: "시건 장치 및 마감 상태 확인", description: "작업 완료 후 샤시가 정상적으로 개폐되는지 확인하고 깔끔하게 마무리합니다." }
      ],
      faqTitle: `${service} 해결을 위한 궁금증`,
      faqs: [
        { question: "윗집에서 물이 새는 경우도 저희가 고쳐야 하나요?", answer: "윗집 실리콘 문제일 경우 윗집에서 보수해야 합니다. 현장 방문 시 정확한 원인 소재를 파악해 드립니다." },
        { question: "한 번 고치면 얼마나 오래 유지되나요?", answer: "프리미엄 창호 전용 실런트를 사용하므로 관리 상태에 따라 보통 10년 이상의 내구성을 기대할 수 있습니다." },
        { question: "장마철인데 바로 예약이 가능한가요?", answer: "장마철에는 문의가 많으므로, 비가 오지 않는 날을 선점하기 위해 미리 상담을 받으시는 것이 유리합니다." }
      ]
    },
    '창틀누수': {
      h1: `${keyword} 샷시 코킹 및 보수 전문`,
      summary: `${region} 지역 노후 아파트의 샷시 틈새 벌어짐 현상을 해결하여, 빗물 차단은 물론 단열 및 방음 효과까지 개선해 드립니다.`,
      regionText: `${region} 지역은 15년 이상 된 아파트가 많아, 샷시를 지탱하는 기존 실리콘의 수명이 다해 누수로 이어지는 경우가 많습니다.`,
      analysisTitle: `${service} 구조적 결함 진단`,
      analysisDesc: `${service}은 샷시 프레임과 콘크리트 벽체 사이의 유격이 핵심입니다. 안정적인 충진과 깔끔한 마감이 품질을 결정합니다.`,
      analysisBlocks: [
        {
          title: "01. 프라이머 부착 성능 및 오염도 측정",
          description: "기존 마감재가 노후되어 가루가 날리거나 매끄럽지 않은 벽면 상태를 진단하여 청소 범위를 잡습니다.",
          checkpoints: ["벽면 푸석거림 상태 체크", "이전 덧방 시공 여부 확인", "이물질 고착 정도 판별"]
        },
        {
          title: "02. 샷시 하단 고임 및 배수구 점검",
          description: "창틀 하단부에 물이 고이는 현상이 배수구 막힘인지, 실리콘 균열인지 명확하게 구분합니다.",
          checkpoints: ["배수 구멍 이물질 확인", "하부 실리콘 탈락 집중 점검", "레일 물 고임 원인 파악"]
        },
        {
          title: "03. 고품격 마감 및 코팅 계획",
          description: "미관을 해치지 않으면서도 강력한 방수 성능을 낼 수 있는 광폭 코킹 두께와 컬러를 결정합니다.",
          checkpoints: ["인테리어 맞춤 컬러 선택", "광폭 시공 범위 협의", "실리콘 표면 질감 최적화"]
        }
      ],
      processTitle: `${service} 정밀 코킹 프로세스`,
      processSteps: [
        { title: "정밀 스크래핑 및 면처리", description: "전용 도구로 기존 실리콘을 한 올 남김없이 제거하고 벽면을 매끄럽게 다듬습니다." },
        { title: "접착 강화 약품 도포", description: "실리콘이 들뜨지 않도록 강력한 결속력을 부여하는 프라이머를 충분히 도포합니다." },
        { title: "압착 코킹 및 헤라 마감", description: "실리콘을 고르게 압착하여 쏘고, 전용 헤라로 눌러주어 기밀성을 극대화합니다." },
        { title: "건조 관리 안내 및 현장 정리", description: "시공 부위 주의사항을 안내해 드리고 이동 경로를 깔끔하게 원상복구 합니다." }
      ],
      faqTitle: `${service} 시공 FAQ`,
      faqs: [
        { question: "실리콘 종류가 많은데 어떤 걸 쓰나요?", answer: "저희는 일반 실리콘이 아닌 자외선과 신축성에 강한 '창호 전용 비초산형 실런트'만 사용합니다." },
        { question: "부분 시공도 가능한가요?", answer: "네, 누수가 발생하는 특정 창문만 선택해서 시공도 가능하지만, 전체 시공을 하시는 것이 장기적으로 경제적입니다." },
        { question: "견적은 어떻게 확인하나요?", answer: "전화로 아파트명과 평수를 알려주시거나, 누수 부위 사진을 문자로 보내주시면 즉시 예상 견적을 드립니다." }
      ]
    }
  };

  const config = configs[serviceType];
  const ctaPatterns = [`${keyword} 실시간 견적 상담`];

  const serviceBlocks: Record<string, string[]> = {
    '창틀코킹': [
      `창틀 실리콘은 소모품입니다. 레인가드의 정석 제거 시공을 통해 노후된 틈새를 완벽하게 보수하세요.`,
      `빗물 누수는 방치할수록 피해가 커집니다. 전문가의 꼼꼼한 코킹 손길로 소중한 우리 집을 지키세요.`
    ],
    '빗물누수': [
      `비바람에도 끄떡없는 강한 방수막! 레인가드만의 고밀착 공법으로 새어드는 빗물을 원천 차단합니다.`,
      `창틀 사이로 흐르는 빗물, 이제 걱정 마세요. 수많은 현장 경험으로 다져진 누수 탐지 노하우를 제공합니다.`
    ],
    '창틀누수': [
      `오래된 샷시를 교체 없이 새것처럼! 프리미엄 실리콘 코킹으로 누수 해결과 외풍 차단 효과를 동시에 누리세요.`,
      `들뜨고 갈라진 샷시 실리콘, 레인가드가 깔끔하게 복원합니다. 물걸레 청소가 가능할 정도의 완벽한 마감을 경험하세요.`
    ]
  };

  const blocks = serviceBlocks[serviceType];

  return {
    metaTitle: `${keyword} 전문 업체 | 레인가드`,
    metaDesc: `${region} 지역 ${service} (창틀코킹, 빗물누수 차단, 샷시 실리콘 보수)를 정석 시공합니다. 쾌적한 주거 공간을 위해 레인가드와 상담하세요.`,
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
    portfolioTitle: `레인가드 ${service} 시공 사례`,
    serviceBlock: blocks[hash % blocks.length],
    ctaHeader: ctaPatterns[0]
  };
};
