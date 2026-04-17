export const getHash = (str: string) => {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export const getDynamicHomeData = (region: string, service: string, hash: number) => {
  const keyword = `${region} ${service}`;

  // 기본 서비스 매핑 (키워드 매칭 실패 시 창틀코킹 기준)
  const serviceType = service.includes('빗물') ? '빗물누수' : (service.includes('누수') ? '창틀누수' : '창틀코킹');

  const configs: Record<string, any> = {
    '창틀코킹': {
      h1: `${keyword} 정석 시공 및 보수`,
      summary: `${region} 지역 아파트 및 빌라의 노후된 창틀 실리콘을 제거하고 고기능성 실런트로 재시공하는 창틀코킹 전문 서비스를 안내합니다.`,
      regionText: `${region}은 주거 밀집도가 높아 창틀 코킹 노후로 인한 세대 간 누수 민원이 빈번하게 발생하는 지역입니다.`,
      analysisTitle: `${service} 원인 진단 및 전문 분석`,
      analysisDesc: `${service}은 단순히 실리콘을 덧바르는 것이 아니라, 기존 실리콘의 박리 상태와 외벽 접합부의 노후도를 입체적으로 분석하여 완벽한 밀착력을 확보해야 합니다.`,
      analysisBlocks: [
        {
          title: "01. 노후 실리콘 경화도 측정",
          description: "자외선과 온도 변화로 인해 탄성을 잃고 갈라진 기존 실리콘의 상태를 정밀하게 확인합니다.",
          checkpoints: ["실리콘 들뜸 및 벌어짐 확인", "접착면 부식 상태 점검", "기존 마감재 성능 저하 분석"]
        },
        {
          title: "02. 부착면 청결도 및 유격 진단",
          description: "새로운 실리콘이 완벽하게 밀착될 수 있도록 프레임과 외벽 사이의 먼지 및 유분기를 체크합니다.",
          checkpoints: ["이물질 제거 필요성 확인", "프레임 유격 상태 점검", "프라이머 도포 범위 설정"]
        },
        {
          title: "03. 시공 범위 및 자재량 산출",
          description: "현장 상황에 맞는 최적의 실런트 노즐 사이즈와 투입량을 결정하여 빈틈없는 마감을 준비합니다.",
          checkpoints: ["창호 사이즈별 자재 최적화", "고위험군 작업 구간 확인", "표준 마감 두께 설계"]
        }
      ],
      processTitle: `${service} 표준 시공 프로세스`,
      processSteps: [
        { title: "기존 실리콘 100% 제거", description: "노후되어 기능을 상실한 기존 실리콘을 전용 도구로 깔끔하게 긁어냅니다." },
        { title: "부착면 청소 및 이물질 정리", description: "강력한 접착력을 위해 프레임에 남은 잔여물과 먼지를 철저히 제거합니다." },
        { title: "전용 프라이머 꼼꼼 도포", description: "실리콘과 피착면 사이의 결합력을 높여주는 특수 프라이머를 도포합니다." },
        { title: "고기능성 실런트 충진 및 압착", description: "샷시 전용 실리콘을 깊숙이 채운 뒤 전용 헤라로 강하게 압착 마감합니다." }
      ],
      faqTitle: `${service} 관련 자주 묻는 질문`,
      faqs: [
        { question: "창틀코킹 시공 후 수명은 얼마나 되나요?", answer: "시공 환경에 따라 다르지만, 레인가드의 정석 시공을 거치면 일반적으로 5~10년 이상 방수 성능이 유지됩니다." },
        { question: "덧방 시공과 전체 제거 시공의 차이는 무엇인가요?", answer: "덧방은 금방 다시 벌어지지만, 레인가드처럼 기존 실리콘을 완전히 제거하고 시공해야 근본적인 누수가 차단됩니다." },
        { question: "비가 오는 날에도 시공이 가능한가요?", answer: "완벽한 접착력을 위해 비 오는 날은 피하며, 바탕면이 완전히 건조된 상태에서 시공하는 것을 원칙으로 합니다." }
      ]
    },
    '창틀누수': {
      h1: `${keyword} 정밀 점검 및 방수 보수`,
      summary: `${region} 지역 창문 틈으로 스며드는 빗물 문제를 해결하기 위해, 유입 경로를 정확히 추적하고 최적의 방수 솔루션을 제공합니다.`,
      regionText: `${region} 지역의 기상 특성과 건물 노후도를 고려하여, 창틀 주변의 취약 부위를 집중적으로 점검합니다.`,
      analysisTitle: `${service} 유입 경로 확인 포인트`,
      analysisDesc: `${service}은 눈에 보이는 물자국만 닦는 것이 아니라, 빗물이 어디서 시작되어 내부로 들어오는지 과학적으로 분석하여 원인을 제거해야 합니다.`,
      analysisBlocks: [
        {
          title: "01. 내부 유입 경로 역추적",
          description: "실내 벽지 오염이나 곰팡이 위치를 기반으로 빗물이 들어오는 시작점을 정밀하게 추적합니다.",
          checkpoints: ["물자국 확산 패턴 분석", "창호 내부 레일 침투 확인", "벽면 결로 유무 동시 체크"]
        },
        {
          title: "02. 외부 샷시 접합부 정밀 진단",
          description: "창틀 프레임과 건물 외벽 사이의 미세한 틈새 및 실리콘 손상 여부를 집중적으로 확인합니다.",
          checkpoints: ["실리콘 박리 및 크랙 점검", "샷시 연결 부위 유격 확인", "외부 코너 마감 상태 분석"]
        },
        {
          title: "03. 건물 외벽 및 상단 크랙 분석",
          description: "창틀 자체의 문제뿐만 아니라 위층이나 상부 외벽에서 타고 내려오는 물길을 점검합니다.",
          checkpoints: ["상부 외벽 균열 상태 확인", "층간 조인트 마감 조사", "빗물 낙차 유입 경로 진단"]
        }
      ],
      processTitle: `${service} 점검 및 보수 절차`,
      processSteps: [
        { title: "누수 원인 및 유입 지점 특정", description: "현장 육안 점검을 통해 빗물이 유입되는 구체적인 경로를 파악합니다." },
        { title: "원인 부위 정밀 크리닝", description: "보수 부위의 오염물을 제거하고 방수재가 잘 스며들 수 있게 준비합니다." },
        { title: "단계별 방수 보강 시공", description: "틈새 메꿈, 실리콘 보충, 외벽 코팅 등 원인에 맞는 맞춤형 보수를 진행합니다." },
        { title: "최종 유입 차단 확인 점검", description: "시공 부위의 기밀성을 확인하고 전체적인 마감 상태를 최종 검토합니다." }
      ],
      faqTitle: `${service} 해결을 위한 핵심 FAQ`,
      faqs: [
        { question: "윗집 문제로 인해 우리 집 창틀이 셀 수도 있나요?", answer: "네, 위층 외벽 크랙을 통해 타고 내려온 빗물이 아래층 창틀로 유입되는 경우가 상당히 많습니다." },
        { question: "창틀누수를 방치하면 어떤 문제가 생기나요?", answer: "내부 벽지 손상은 물론 곰팡이 발생, 샷시 프레임 부식, 심한 경우 아래층 누수로 번질 수 있습니다." },
        { question: "누수 점검 비용은 따로 발생하나요?", answer: "기본적인 시공 견적 상담 시 현장 진단이 포함되며, 정밀 누수 탐지가 필요한 경우 별도 안내를 드립니다." }
      ]
    },
    '빗물누수': {
      h1: `${keyword} 근본 원인 차단 시공`,
      summary: `${region} 지역 강풍을 동반한 폭우 시 발생하는 빗물 누수 문제를 해결하기 위해 고성능 방수 마감 공법을 적용합니다.`,
      regionText: `${region} 지역은 최근 국지성 호우가 잦아지면서 기존 마감재의 한계를 넘는 빗물 유입 사례가 증가하고 있습니다.`,
      analysisTitle: `${service} 원인 분석 및 해결 방안`,
      analysisDesc: `${service}은 비가 올 때만 나타나는 증상을 잡기 위해 건물의 구조적 취약점과 마감재의 내후성을 종합적으로 판단해야 합니다.`,
      analysisBlocks: [
        {
          title: "01. 수압 및 강풍 영향 분석",
          description: "단순 낙수뿐만 아니라 강풍에 의해 밀려 들어오는 빗물의 압력을 견딜 수 있는 구조인지 분석합니다.",
          checkpoints: ["기밀 성능 취약 구간 식별", "샷시 배수 구멍 기능 점검", "풍압에 따른 유입 가능성 측정"]
        },
        {
          title: "02. 외벽 방수 및 코킹 상태 진단",
          description: "건물 전체적인 외벽 방수층과 창틀 코킹의 연계성을 확인하여 통합적인 솔루션을 도출합니다.",
          checkpoints: ["외벽 발수 상태 체크", "코킹 실리콘 수축 정도 측정", "이종 자재 접합부 점검"]
        },
        {
          title: "03. 원인별 맞춤형 솔루션 설계",
          description: "단순 코킹으로 해결될지, 외벽 방수 보강이 병행되어야 할지 현장에 최적화된 공법을 설계합니다.",
          checkpoints: ["최적 자재 선정 (변성/우레탄 등)", "보수 범위 및 공법 확정", "재발 방지 마감 계획 수립"]
        }
      ],
      processTitle: `${service} 유입 경로 점검 프로세스`,
      processSteps: [
        { title: "우천 시 유입 패턴 분석", description: "강우량과 풍향에 따른 빗물 유입 형태를 분석하여 원인을 파악합니다." },
        { title: "취약 부위 집중 전처리", description: "유입 경로로 파악된 크랙과 틈새를 청소하고 접착력을 강화합니다." },
        { title: "광범위 기밀 차단 시공", description: "창틀뿐만 아니라 연결된 외벽 부위까지 넓게 방수 코킹을 실시합니다." },
        { title: "사후 모니터링 및 마감 감사", description: "시공 후 실제 강우 시 누수 여부를 확인하고 완벽한 차단을 보장합니다." }
      ],
      faqTitle: `${service} 차단에 관한 궁금한 점`,
      faqs: [
        { question: "빗물누수와 단순 결로를 어떻게 구분하나요?", answer: "비가 올 때만 젖거나 물이 흘러내리면 빗물누수, 비와 상관없이 내부 온도차로 맺히면 결로일 확률이 높습니다." },
        { question: "외벽 방수 및 창틀코킹 중 무엇이 더 중요한가요?", answer: "둘 다 긴밀하게 연결되어 있으며, 대부분 창틀코킹 노화가 1순위 원인이지만 외벽 상태도 함께 봐야 합니다." },
        { question: "한 번 시공하면 평생 안 새나요?", answer: "반영구적인 마감은 없지만, 최고급 자재와 정밀 시공을 통하면 10년 가까이 걱정 없이 지내실 수 있습니다." }
      ]
    }
  };

  const config = configs[serviceType];
  const ctaPatterns = [`${keyword} 빠른 견적 상담`];

  // 서비스별 블록 (기존 호환용)
  const serviceBlocks: Record<string, string[]> = {
    '창틀코킹': [
      `창틀코킹은 노후된 실리콘 마감을 점검하고, 전문 장비로 제거 후 재시공하여 빗물을 차단하는 핵심 작업입니다.`,
      `창틀 주변 실리콘은 시간이 지나면서 갈라지고 벌어질 수 있어, 이를 정석으로 보수하는 것이 가장 중요합니다.`
    ],
    '창틀누수': [
      `창틀누수는 유입 경로를 정확히 찾는 것이 우선입니다. 레인가드는 정밀 점검을 통해 누수 원인을 확실히 잡아냅니다.`,
      `실내 물자국이 확인된다면 창틀 주변의 기밀성이 깨진 것이므로 전문가의 빠른 조치가 필요합니다.`
    ],
    '빗물누수': [
      `빗물누수는 외벽과 창틀의 연결 부위를 넓게 봐야 합니다. 비가 올 때만 생기는 골치 아픈 문제를 해결해 드립니다.`,
      `강풍 시 빗물 유입은 단순 덧방으로는 막을 수 없습니다. 근본적인 기밀 시공으로 재발을 막아야 합니다.`
    ]
  };

  const blocks = serviceBlocks[serviceType];

  return {
    metaTitle: `${keyword} 전문가 | 레인가드`,
    metaDesc: `${region} 지역의 ${service} 점검, 보수, 실리콘 재시공 안내. 자연스러운 실내 환경 조성을 위해 레인가드와 함께하세요.`,
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
    portfolioTitle: `레인가드 ${service} 현장 시공 사례`,
    serviceBlock: blocks[hash % blocks.length],
    ctaHeader: ctaPatterns[0]
  };
};
