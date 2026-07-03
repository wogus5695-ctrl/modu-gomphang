import { WATERPROOF_SERVICES } from "@/data/sitemapKeywords";

export const getHash = (str: string) => {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export function isNewExpansionArea(region: string): boolean {
  if (!region) return false;

  const cleanRegion = region.replace(/\s+/g, "");

  // 인천 권역 키워드 (인천 전체)
  const incheonKeywords = [
    "인천", "부평", "계양", "남동", "연수", "미추홀", "송도", "논현", "강화", "옹진"
  ];

  // 수원 권역 키워드 (수원 전체)
  const suwonKeywords = [
    "수원", "장안", "권선", "팔달", "영통", "인계", "매탄", "망포", "광교"
  ];

  // 구리 권역 키워드 (구리 전체)
  const guriKeywords = [
    "구리", "인창", "교문", "수택", "토평", "갈매"
  ];

  // 양주 권역 키워드 (양주 전체)
  const yangjuKeywords = [
    "양주", "옥정", "고읍", "덕계", "삼숭", "회천"
  ];

  // 고양 권역 키워드 (고양 전체)
  const goyangKeywords = [
    "고양", "덕양", "일산", "화정", "행신", "식사", "탄현", "원흥", "삼송", "마두", "주엽", "대화"
  ];

  // 경기 광주 권역 키워드 (경기 광주 전체)
  const gwangjuKeywords = [
    "광주", "태전", "오포", "초월", "곤지암", "신현", "양벌"
  ];

  if (incheonKeywords.some(kw => cleanRegion.includes(kw))) return true;
  if (suwonKeywords.some(kw => cleanRegion.includes(kw))) return true;
  if (guriKeywords.some(kw => cleanRegion.includes(kw))) return true;
  if (yangjuKeywords.some(kw => cleanRegion.includes(kw))) return true;
  if (goyangKeywords.some(kw => cleanRegion.includes(kw))) return true;
  if (gwangjuKeywords.some(kw => cleanRegion.includes(kw))) return true;

  return false;
}

export const getDynamicHomeData = (region: string, service: string, hash: number) => {
  const keyword = `${region} ${service}`;
  const isExpansion = isNewExpansionArea(region);

  // 신규 확장 권역용 문구 분기 (서울 전용 문구 차단)
  const regionContext = isExpansion
    ? `${region} 및 인근 경기·인천 권역`
    : `${region} 및 서울·수도권 지역`;

  // 각 10대 작업명별 정밀 설정 분기
  const configs: Record<string, any> = {
    '창틀코킹': {
      h1: `${keyword} 전문 정밀 보수 시공`,
      summary: `${region} 지역 아파트 및 빌라의 노후 실리콘을 전면 제거하고, 빗물 유입을 완벽히 차단하는 창틀코킹 정석 시공 서비스를 제공합니다.`,
      regionText: `${regionContext}은 계절적 습도 변화와 강풍에 노출된 창틀이 많아, 실리콘 경화로 인한 틈새 발생과 누수 현상이 빈번히 발견됩니다.`,
      analysisTitle: `${service} 상태 정밀 점검 및 진단`,
      analysisDesc: `${region} ${service}은 단순히 실리콘을 덧바르는 것이 아니라, 기존 마감재의 탈락 상태와 외벽 접합부의 미세 크랙을 정밀하게 파악하는 것이 중요합니다.`,
      analysisBlocks: [
        {
          title: "01. 노후 실리콘 상태 점검",
          description: "창틀 주변 실리콘이 딱딱하게 굳거나 벽면에서 벌어진 정도를 확인하여 재시공 범위를 결정합니다.",
          checkpoints: ["실리콘 경화 현상 체크", "벽면 접착력 상실 부위 확인", "미세 틈새 유입 경로 추적"]
        },
        {
          title: "02. 창틀 틈새 보수 계획 수립",
          description: "샤시 프레임 and 콘크리트 외벽 접합부 사이의 균열을 파악해 기밀한 보강 계획을 세웁니다.",
          checkpoints: ["접합부 틈새 유격 측정", "우레탄 폼 보강 필요성 검사", "코너 부위 취약점 진단"]
        },
        {
          title: "03. 빗물 유입 방지 자재 최적화",
          description: "일사량과 기후적 요인을 고려해 접착 성능이 뛰어난 고내후성 창호 전용 실런트를 선정합니다.",
          checkpoints: ["고부착성 실런트 준비", "프라이머 적합성 테스트", "시공 당일 기상 여건 분석"]
        }
      ],
      processTitle: `${service} 정석 코킹 시공 프로세스`,
      processSteps: [
        { title: "노후 실리콘 및 이물질 전면 제거", description: "부착력을 방해하는 오래된 실리콘을 전용 커터로 긁어내고 먼지를 제거합니다." },
        { title: "고밀착 전용 프라이머 도포", description: "새로운 실리콘이 콘크리트와 샷시에 완벽히 붙도록 접착 강화제를 도포합니다." },
        { title: "프리미엄 창호 전용 실런트 충진", description: "창틀 틈새 속 깊은 곳까지 실리콘을 밀착하여 두껍고 균일하게 채워 넣습니다." },
        { title: "표면 매끄러운 마감 및 최종 검수", description: "전용 헤라로 매끄럽게 마감하고, 누수 위험 요소를 최종 점검합니다." }
      ]
    },
    '창틀누수': {
      h1: `${keyword} 원인 진단 및 해결`,
      summary: `${region} 지역 비 올 때 창틀 주변 물자국 및 누수로 인한 고민을 해결하기 위해 외벽과 창호 접합부 점검부터 정밀 보수까지 원스톱으로 처리합니다.`,
      regionText: `${regionContext}의 아파트나 빌라에서 비가 많이 올 때 창틀 하부 누수나 내부 벽지 변색이 생기는 것은 전형적인 창틀 마감 균열 신호입니다.`,
      analysisTitle: `${service} 원인 분석 및 정밀 점검`,
      analysisDesc: `${region} ${service}의 근본적인 차단을 위해, 실내 물자국 흔적을 토대로 외부 누수 발원지를 역추적해 정밀 진단합니다.`,
      analysisBlocks: [
        {
          title: "01. 비 올 때 창틀 주변 물자국 경로 파악",
          description: "누수가 진행되며 실내 벽지가 젖은 부위를 확인하여 물이 스며든 예상 경로를 역으로 추적합니다.",
          checkpoints: ["내부 습도 상태 판독", "벽지 물 흔적 방향 관측", "누수 확산 정도 진단"]
        },
        {
          title: "02. 창틀 하부 누수 집중 점검",
          description: "하부 샷시 레일 부분이나 실리콘 벌어짐 부위로 강수가 고여 침투하는지 상세하게 조사합니다.",
          checkpoints: ["하부 마감재 크랙 점검", "샷시 물구멍 배수 상태 점검", "아래 세대 누수 영향 여부 체크"]
        },
        {
          title: "03. 외벽과 창호 접합부 점검 및 처방",
          description: "로프 시공 전문가가 외부에서 외벽 콘크리트 면과 창틀 접착 면의 상태를 꼼꼼하게 들여다봅니다.",
          checkpoints: ["접합면 탈락 유무 관측", "외벽 드라이비트/균열 점검", "적정 보수 공법 결정"]
        }
      ],
      processTitle: `${service} 단계별 누수 원인 진단 및 보수`,
      processSteps: [
        { title: "누수 발원부 기밀 청소", description: "외부 접합면의 찌든 때와 이물질을 털어내고 습기를 완벽히 건조시킵니다." },
        { title: "접착면 프라이머 강화 처리", description: "실런트의 접착 성능을 최대로 높여줄 강화 약품을 꼼꼼하게 발라 줍니다." },
        { title: "샷시 접합부 틈새 실링 보완", description: "외벽과 프레임 사이 틈새를 고탄성 실런트로 빈틈없이 메워 줍니다." },
        { title: "물빠짐 상태 점검 및 마감", description: "샤시 하부 레일과 배수 구멍이 정상 작동하도록 조치하고 마무리합니다." }
      ]
    },
    '빗물누수': {
      h1: `${keyword} 완벽 차단 솔루션`,
      summary: `${region} 지역 폭우 시 유입되는 빗물누수를 원천 봉쇄하기 위해 빗물 유입 경로 확인 및 외벽/창틀 접합부 방수 처리를 정밀 시공합니다.`,
      regionText: `${regionContext}은 동풍이나 북서풍 등 강한 바람과 함께 내리는 빗물로 인해 창문 틈새 기밀성이 약화되어 누수 현상이 자주 나타납니다.`,
      analysisTitle: `${service} 침투 경로 확인 및 방수 설계`,
      analysisDesc: `${region} ${service} 차단을 위해 단순히 마감재를 덧바르는 일차원적 방식이 아닌, 다각도 균열 추적 방식으로 누수 재발 방지 대책을 세웁니다.`,
      analysisBlocks: [
        {
          title: "01. 빗물 유입 경로 확인",
          description: "비바람이 칠 때 외부에서 물이 밀려 들어올 수 있는 기성 샷시 접합부의 미세 공극을 찾아냅니다.",
          checkpoints: ["바람 압력 취약부 점검", "샤시 조인트 틈새 확인", "실리콘 들뜸 부위 탐색"]
        },
        {
          title: "02. 외벽/창틀 접합부 방수 진단",
          description: "콘크리트 옹벽 마감 상태와 외부 샷시 실리콘이 박리되어 빗물이 스며드는지 확인합니다.",
          checkpoints: ["골조 미세 균열 진단", "접합부 코킹 수명 측정", "상부 세대 낙수 피해 여부 점검"]
        },
        {
          title: "03. 실내 물자국 원인 점검",
          description: "실내 천장이나 창문 옆면의 물자국 분포를 파악하여 실질적인 강수 유입량과 원인을 짚어냅니다.",
          checkpoints: ["도배지 곰팡이 흔적 진단", "크랙부 습기 잔존율 체크", "내벽 누수 범위 매핑"]
        }
      ],
      processTitle: `${service} 원천 방수 및 누수 재발 방지 공법`,
      processSteps: [
        { title: "방수 시공 부위 스크래핑", description: "접합면의 이물질과 부식된 기존 마감재를 깨끗하게 제거하고 다듬어 줍니다." },
        { title: "하도 프라이머 침투제 도포", description: "콘크리트 내부에 흡수되어 접착력을 배가시키는 전용 약품을 도포합니다." },
        { title: "고성능 외벽 창호 방수재 충진", description: "빗물이 들이쳐도 기밀하게 방어할 수 있는 방수 코킹재를 두껍게 시공합니다." },
        { title: "건조 유도 및 기밀성 검수", description: "시공부가 완전 경화되도록 관리 안내를 드리고 최종 상태를 모니터링합니다." }
      ]
    },
    '창틀실리콘': {
      h1: `${keyword} 노후화 교체 시공`,
      summary: `${region} 지역 샷시 주변의 갈라지고 노후된 창틀실리콘을 전면 제거하고 창호 전용 실런트를 사용하여 완벽한 기밀성을 보강합니다.`,
      regionText: `${regionContext}의 오래된 주거 시설은 햇빛 자외선과 온도 변화로 인해 창틀실리콘이 서서히 수축하고 굳어 박리나 갈라짐이 일어납니다.`,
      analysisTitle: `${service} 노후화 점검 및 처방`,
      analysisDesc: `${region} ${service} 보수는 낡아서 수명이 다한 실리콘 부위를 정밀하게 짚어내고, 균열과 박리가 발생한 면을 다듬는 것부터 시작합니다.`,
      analysisBlocks: [
        {
          title: "01. 실리콘 노후화 및 수명 확인",
          description: "기존에 시공된 자재가 자외선으로 인해 딱딱하게 변형되거나 부스러지는 정도를 판별합니다.",
          checkpoints: ["탄성 소실도 측정", "변색 및 가루날림 상태 파악", "밀착도 하락 여부 확인"]
        },
        {
          title: "02. 박리/갈라짐 부위 집중 분석",
          description: "콘크리트나 알루미늄/PVC 창틀 프레임 면에서 실리콘이 들뜨거나 갈라져 틈새가 생긴 곳을 확인합니다.",
          checkpoints: ["창문 코너 균열부 관측", "층간 조인트 주변 박리 진단", "하단 프레임 분리도 측정"]
        },
        {
          title: "03. 기밀성 보강 및 자재 선택",
          description: "수명 주기가 길고 수축팽창 대응력이 뛰어난 정품 창호 전용 실런트를 선정하여 보수를 구상합니다.",
          checkpoints: ["비초산 창호형 실런트 선정", "결합력 강화를 위한 전처리 설계", "창틀 두께별 충진량 산정"]
        }
      ],
      processTitle: `${service} 노후 실리콘 전면 교체 과정`,
      processSteps: [
        { title: "노후 자재 한 올 없이 컷팅 제거", description: "박리되고 굳어버린 오래된 실리콘을 프레임 상하지 않게 정밀 컷팅해 냅니다." },
        { title: "프레임 유기물질 클리닝 및 면정리", description: "새 약품이 완벽히 고착될 수 있도록 접합면의 기름기와 미세 먼지를 닦아 냅니다." },
        { title: "창호 전용 특수 프라이머 인입", description: "접착력을 반영구적으로 지속시키기 위해 특수 프라이머를 충분히 바릅니다." },
        { title: "창호 전용 실런트 기밀 코킹 및 마감", description: "두툼한 두께로 압착 충진하고, 헤라로 눌러 빈틈없는 실링을 연출합니다." }
      ]
    },
    '샷시실리콘': {
      h1: `${keyword} 접합부 코킹 보강`,
      summary: `${region} 지역 노후화된 샷시 프레임 접합부와 하부 실리콘을 완벽하게 보강하여 외부 빗물 유입을 완벽히 방지하고 노후 실리콘을 교체합니다.`,
      regionText: `${regionContext}의 창호 샷시는 강풍으로 인한 프레임 흔들림과 창틀 유격이 발생해 기존 샷시실리콘이 파손되면서 누수로 이어지는 구조적 특징을 지닙니다.`,
      analysisTitle: `${service} 샷시 프레임 접합부 및 하부 실리콘 보강`,
      analysisDesc: `${region} ${service}은 샤시의 미세 흔들림까지 감안하여, 접합면의 신축 허용 범위를 견딜 수 있는 특수 실링 보강 공법으로 진단해야 합니다.`,
      analysisBlocks: [
        {
          title: "01. 샷시 프레임 접합부 흔들림 진단",
          description: "샷시 틀이 외벽 콘크리트 벽체에 고정되어 있는 유격 강도와 실리콘 인장 상태를 확인합니다.",
          checkpoints: ["샷시 앙카 고정성 확인", "창틀 흔들림 폭 관측", "접합부 응력 균열 탐색"]
        },
        {
          title: "02. 하부 실리콘 보강 상태 점검",
          description: "물이 가장 고이기 쉽고 노후화가 빠르게 일어나는 하부 창호 레일 하단의 접합 상태를 세밀하게 들여다봅니다.",
          checkpoints: ["하부 충진 공극 여부 확인", "배수 통로 간섭 여부 파악", "지면 접촉부 부식도 판별"]
        },
        {
          title: "03. 외부 빗물 유입 방지 마감 상태",
          description: "외기와 맞닿는 마감 실리콘 면의 노후 상태와 빗물이 고일 수 있는 턱진 구조인지 살펴봅니다.",
          checkpoints: ["물고임 경사(구배) 점검", "실리콘 찢어짐 현상 관측", "교체 주기 도래 여부 분석"]
        }
      ],
      processTitle: `${service} 샷시 틈새 보강 및 교체 공정`,
      processSteps: [
        { title: "갈라진 샷시 실리콘 전면 탈락 제거", description: "노화되어 결속력이 끊어진 샷시 주변 실리콘을 전면 박리하여 제거합니다." },
        { title: "접합면 표면 활성화 및 이물 정리", description: "강화 프라이머 도포 전에 면을 바짝 건조하고 유기 브러시로 클리닝합니다." },
        { title: "샷시 전용 탄성 프라이머 코팅", description: "흔들림을 감당하는 샷시 특성에 맞게 탄성이 가미된 결착 약품을 칠해 줍니다." },
        { title: "샷시용 광폭 코킹 실링 및 헤라 압착", description: "창틀 외부 전체를 넓은 폭으로 마감하여 기밀성과 누수 차단율을 극대화합니다." }
      ]
    },
    '외벽보수': {
      h1: `${keyword} 및 누수 예방 시공`,
      summary: `${region} 지역 건물의 안전을 저해하는 외벽 크랙 및 균열을 보수하고, 접합부 보강 작업을 진행하여 외부 누수의 근본 원인을 해결합니다.`,
      regionText: `${regionContext}의 빌라 및 상가 건물은 콘크리트 중성화와 지반 거동으로 인해 외벽에 미세한 크랙이 생기고, 이를 통해 빗물이 서서히 스며듭니다.`,
      analysisTitle: `${service} 크랙 추적 및 안전 진단`,
      analysisDesc: `${region} ${service}는 미관 개선뿐만 아니라 골조 내부에 철근 부식을 일으키는 균열 경로를 정밀히 추적하고 보강해야 재발을 막을 수 있습니다.`,
      analysisBlocks: [
        {
          title: "01. 외벽 크랙 및 균열 유형 진단",
          description: "건물 표면의 크랙이 단순 마감재 균열인지 골조의 구조적 균열인지 깊이와 폭을 정밀히 관찰합니다.",
          checkpoints: ["균열 폭(mm) 측정", "관통 크랙 여부 진단", "지속적인 균열 확대 확인"]
        },
        {
          title: "02. 접합부 보강 및 틈새 조사",
          description: "창틀과 옹벽이 만나는 경계선이나 이어치기 한 콘크리트 접합면의 틈새 탈락 여부를 집중 검사합니다.",
          checkpoints: ["조인트 실란트 노화 점검", "접합 틈새 깊이 분석", "물길 흐름 패턴 판독"]
        },
        {
          title: "03. 외부 누수 원인 보수 설계",
          description: "빗물이 건물 내부로 스며들 수 있는 마감 몰탈의 박리 상태와 균열 범위를 파악해 자재를 배합합니다.",
          checkpoints: ["크랙 퍼티 적합성 판정", "방수 실링제 접착성 테스트", "작업 안전 로프 설치 검토"]
        }
      ],
      processTitle: `${service} 외벽 균열 보강 공법`,
      processSteps: [
        { title: "균열 부위 V-컷팅 및 이물질 정리", description: "퍼티와 실란트가 틈새 깊숙이 메워지도록 균열을 V자로 넓혀 깎아 냅니다." },
        { title: "고부착 에폭시 프라이머 도포", description: "콘크리트 절단면의 부스러짐을 막고 메움 자재가 떨어지지 않게 접착제를 바릅니다." },
        { title: "고신율 균열 보수 퍼티제 충진", description: "진동과 수축팽창을 견디는 외벽 균열 보수재를 틈새에 빈틈없이 충진합니다." },
        { title: "보수 부위 표면 도막 마감", description: "보수제를 평탄화하여 외벽면을 매끄럽게 잡고 방수 성능을 완성합니다." }
      ]
    },
    '외벽방수': {
      h1: `${keyword} 균열 보강 및 차단`,
      summary: `${region} 지역 건물 외벽 균열로 발생하는 빗물 유입을 완벽히 차단하기 위해 외벽 방수층 보강 및 균열부/접합부 점검 서비스를 제공합니다.`,
      regionText: `${regionContext}의 빌딩이나 주택 외벽은 매년 얼고 녹는 과정과 산성비의 영향으로 콘크리트 외벽 방수 성능이 급격히 저하되어 누수가 유발됩니다.`,
      analysisTitle: `${service} 외벽 방수층 및 균열 보강`,
      analysisDesc: `${region} ${service}는 외부 표면 전반의 흡수율과 미세 크랙 분포를 고려하여, 수성/유성 발수제 주입 및 균열 코킹 처방을 과학적으로 설계합니다.`,
      analysisBlocks: [
        {
          title: "01. 외벽 균열 및 물 흡수율 점검",
          description: "외벽 벽돌이나 콘크리트 옹벽이 빗물을 머금고 내부로 통과시키는 표면 흡수율 상태를 평가합니다.",
          checkpoints: ["표면 노후 마모도 판정", "적벽돌 메지 탈락율 검사", "미세 모세관 크랙 분포 측정"]
        },
        {
          title: "02. 빗물 유입 차단 경로 설계",
          description: "비가 세차게 뿌릴 때 골조 균열을 타고 실내 천장이나 벽체 모서리로 누출되는 동선을 정확히 짚어냅니다.",
          checkpoints: ["내부 벽면 습도 프로파일링", "물길 유입 지점 흔적 진단", "외부 창틀과의 간섭 확인"]
        },
        {
          title: "03. 외벽 방수층 보강 계획 수립",
          description: "콘크리트 노후도에 맞춰 발수 코팅 시공이나 고탄성 도막 방수 공법 등 효율적인 방수 처방을 설계합니다.",
          checkpoints: ["하도 침투제 적합성 검토", "외벽 전용 발수제 자재 수급", "로프 고소 시공 준비"]
        }
      ],
      processTitle: `${service} 외벽 방수 및 발수 시공 단계`,
      processSteps: [
        { title: "외벽 균열부 실링 및 코킹 메움", description: "물이 유입되는 외벽 크랙을 방수용 고탄성 실런트로 꼼꼼하게 충진합니다." },
        { title: "외벽 고압 먼지 세척 및 건조", description: "방수제가 벽면에 고르게 안착되도록 이물질을 세척하고 바짝 말려 줍니다." },
        { title: "고성능 외벽 발수 코팅제 도포", description: "외벽면 전체에 수분이 침투하지 못하도록 방수 발수제를 2회 이상 도포합니다." },
        { title: "방수 도막 건조 및 방수 성능 확인", description: "발수 도막이 완전 경화되어 비가 오더라도 빗방울을 튕겨내는지 점검합니다." }
      ]
    },
    '옥상방수': {
      h1: `${keyword} 노후 우레탄 보수`,
      summary: `${region} 지역 건물의 옥상 바닥 균열과 방수층 노후화 문제를 정밀하게 파악하여 배수구 주변 누수 방지 및 우레탄 방수 보수 시공을 제공합니다.`,
      regionText: `${regionContext}의 빌라, 주택, 상가는 햇빛과 눈비를 직접 맞는 옥상 우레탄 방수층이 노후화되어 바닥이 갈라지거나 들뜨는 탈락 현상이 흔하게 발생합니다.`,
      analysisTitle: `${service} 옥상 바닥 균열 및 방수층 노후화 점검`,
      analysisDesc: `${region} ${service}는 들뜬 방수 도막 내부의 습기 유무를 측정하고 바닥 콘크리트 크랙 상태를 진단하여 하자를 미연에 방지합니다.`,
      analysisBlocks: [
        {
          title: "01. 옥상 바닥 균열 및 들뜸 상태 진단",
          description: "기존 우레탄 방수 도막이 찢어지거나 내부에 물이 차서 부풀어 오른 면적을 정확하게 측정합니다.",
          checkpoints: ["우레탄 부풀어오름 현상 체크", "바닥 몰탈 크랙 깊이 측정", "기존 도막 두께 판정"]
        },
        {
          title: "02. 배수구 주변 및 조인트 누수 진단",
          description: "옥상 낙수가 고여서 나가는 드레인(배수구) 주변 틈새나 파라펫(난간) 조인트 부위의 균열을 점검합니다.",
          checkpoints: ["배수구 틈새 균열 관측", "난간 코너 크랙 여부 진단", "구배 불량 고임 현상 조사"]
        },
        {
          title: "03. 우레탄/방수 보수 공법 설계",
          description: "바닥 습기를 배출하는 에어벤트를 설치할지, 들뜬 면적을 전면 연삭할지 최적의 옥상 우레탄 공법을 구상합니다.",
          checkpoints: ["습기 배출 벤트 설계", "연삭기 활용 바닥 면갈이 계획", "우레탄 중도 두께 설계"]
        }
      ],
      processTitle: `${service} 옥상 우레탄 방수 시공 공정`,
      processSteps: [
        { title: "들뜬 기존 방수층 철거 및 바닥 면갈이", description: "들떠서 제 기능을 잃은 우레탄을 걷어내고 바닥 콘크리트를 연삭기로 깎아 냅니다." },
        { title: "바닥 청소 및 우레탄 전용 프라이머 도포", description: "먼지를 완벽히 진공 흡입한 후 접착력을 잡는 하도 프라이머를 충분히 도포합니다." },
        { title: "우레탄 실란트 균열 메움 및 중도 시공", description: "크랙 부위를 실링하고 자외선 및 누수를 차단하는 고탄성 우레탄 중도를 깝니다." },
        { title: "자외선 차단 우레탄 탑코팅 마감", description: "중도 방수층을 보호하고 내구성을 확보하기 위해 상도 코팅으로 상도 마감합니다." }
      ]
    },
    '건물방수': {
      h1: `${keyword} 외부 누수 종합 진단`,
      summary: `${region} 지역 건물 외부 누수 차단을 위해 옥상, 외벽, 접합부의 노후 상태를 종합 점검하고 방수 취약부를 확실하게 보강합니다.`,
      regionText: `${regionContext}의 빌딩과 주거 단지는 건축 연한이 경과함에 따라 특정 한 곳이 아닌 옥상, 창틀, 외벽 균열 등 여러 방수층이 동시다발적으로 누수를 유발합니다.`,
      analysisTitle: `${service} 건물 외부 누수 및 접합부 종합 점검`,
      analysisDesc: `${region} ${service}는 단편적인 부분 땜질 방식의 한계를 넘어, 건물 골조 구조물 전반의 누수 유입 경로를 추적하는 종합 진단을 제안합니다.`,
      analysisBlocks: [
        {
          title: "01. 건물 외부 누수 통합 탐지",
          description: "옥상 크랙, 외벽 줄눈 탈락, 창호 실리콘 마모 등 건물 외부 마감재의 전반적인 누수 요소를 파악합니다.",
          checkpoints: ["옥상 바닥 노후 상태 확인", "줄눈 퍼티 탈락도 점검", "창틀 누수 가능 지점 파악"]
        },
        {
          title: "02. 옥상/외벽/접합부 종합 점검",
          description: "건물 각 부위가 만나는 층간 조인트 및 재료 분리대 경계선 틈새로 강수가 스며드는지 확인합니다.",
          checkpoints: ["조인트 틈새 파손 상태 체크", "창문 인근 콘크리트 균열 점검", "외벽 드라이비트 파손 확인"]
        },
        {
          title: "03. 방수 취약부 및 물길 유입 경로 분석",
          description: "지붕 낙수가 고이는 홈통 주변이나 외장 판넬 줄눈 틈새 등 방수층 중 취약 요소를 집중 선별해 물길 차단을 계획합니다.",
          checkpoints: ["물홈통 낙수 라인 균열 체크", "패널 줄눈 실리콘 마모 진단", "침투 경로 차단 공법 설계"]
        }
      ],
      processTitle: `${service} 종합 누수 차단 및 방수 솔루션`,
      processSteps: [
        { title: "취약 골조 부위 보수 및 균열 보강", description: "옥상, 외벽의 파손되고 노화된 균열 부위를 균열 보수제로 기밀하게 채웁니다." },
        { title: "창틀 및 외벽 조인트 실링 재시공", description: "외부 접합부 틈새의 노화 실리콘을 전면 교체하여 고탄성 자재로 코킹합니다." },
        { title: "옥상 우레탄 및 외벽 발수 종합 처리", description: "옥상은 탄성 우레탄으로, 외벽은 특수 침투 발수 도료로 방수 보강합니다." },
        { title: "종합 담수 테스트 및 마감 최종 검수", description: "수분이 건물 내부로 침투하지 못하는 것을 확인한 뒤 깔끔하게 현장을 청소합니다." }
      ]
    },
    '외벽도색': {
      h1: `${keyword} 및 보호 도장 관리`,
      summary: `${region} 지역 아파트 및 빌라의 노후된 외벽 색상을 선명하게 복원하고, 방수성 도료를 활용하여 외벽을 보호하는 건물 외관 관리 서비스를 실시합니다.`,
      regionText: `${regionContext}의 외벽 페인트 칠은 시간이 흐르며 쵸킹(가루날림) 현상이 발생하고 도막이 갈라져, 외벽 틈새로 미세 누수가 유입되기 시작합니다.`,
      analysisTitle: `${service} 방수성 도료 적용 및 건물 외관 관리`,
      analysisDesc: `${region} ${service}은 단순 미적 개선뿐만 아니라 콘크리트 외벽 표면을 코팅해 빗물이 직접적으로 흡수되는 것을 차단하는 보호막 역할을 진단합니다.`,
      analysisBlocks: [
        {
          title: "01. 외벽 페인트 들뜸 및 가루날림 점검",
          description: "도장 도막이 들떠서 껍질처럼 벗겨지거나 손으로 만졌을 때 흰 가루가 묻어나는 노후도를 진단합니다.",
          checkpoints: ["페인트 박리 상태 체크", "쵸킹(Chalking) 정도 검사", "도막 잔존 두께 확인"]
        },
        {
          title: "02. 방수성 도료 적용 가능 여부 검토",
          description: "일반 페인트가 아닌 신축성과 방수성을 겸비한 탄성 아크릴 페인트 시공이 필요한 외벽 크랙 깊이를 판독합니다.",
          checkpoints: ["탄성 페인트 적합성 판단", "벽면 바탕면 강도 테스트", "기존 도막과의 상성 판별"]
        },
        {
          title: "03. 건물 외관 관리 및 내구성 진단",
          description: "시공 후 빗물 오염을 방지하고 오랜 기간 동안 깔끔한 외관을 유지할 수 있는 내오염성 페인트 컬러와 자재를 결정합니다.",
          checkpoints: ["내오염성 도료 규격 확인", "바탕 처리(게라 작업) 범위 산정", "아파트/빌라 색상 배합 컨설팅"]
        }
      ],
      processTitle: `${service} 고품격 외벽 도장 및 코팅 공정`,
      processSteps: [
        { title: "바탕 정리 및 페인트 긁어내기", description: "부풀어 오르고 벗겨지기 직전인 페인트 도막을 게라 등으로 꼼꼼하게 긁어 냅니다." },
        { title: "외벽 미세 균열 퍼티 코킹 처리", description: "페인트 도포 전에 외벽의 자잘한 실금 크랙을 외부 퍼티로 기밀하게 메워 줍니다." },
        { title: "고성능 수성 도료/방수 탄성 페인트 도포", description: "외부 기후에 강하고 외벽을 보호하는 전용 도료를 고르게 2회 뿜칠 또는 롤러 시공합니다." },
        { title: "건물 주변 낙진 보양 철거 및 정리", description: "도료 비산을 막기 위해 주차장과 이웃집에 설치한 보양 비닐을 걷어내고 정돈합니다." }
      ]
    }
  };

  const config = configs[service];
  if (!config) {
    return configs['창틀코킹'];
  }

  const isWaterproof = WATERPROOF_SERVICES.includes(service);
  const serviceType = isWaterproof
    ? '방수'
    : ((service.includes('빗물') || service.includes('외벽')) ? '빗물누수' : (service.includes('샷시') ? '창틀누수' : '창틀코킹'));

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
    ],
    '방수': [
      `완벽한 방수막으로 빗물을 원천 차단! 레인가드만의 특수 방수 공법으로 건물의 수명을 연장하세요.`,
      `반복되는 외벽 누수와 균열, 이제 걱정 마세요. 수많은 방수 시공 실적으로 검증된 레인가드가 해결해 드립니다.`
    ]
  };

  const blocks = serviceBlocks[serviceType] || serviceBlocks['창틀코킹'];

  // dynamic FAQ 생성 (지역명 + 작업명을 질문 및 답변에 1회 이상 완벽하고 자연스럽게 반영)
  const faqs = [
    {
      question: `${region} 지역에서 ${service} 시공을 할 때 기존 실리콘을 완전히 떼어내나요?`,
      answer: `네, 당연합니다. ${region} 현장의 ${service} 보수 작업을 진행할 때는 낡고 경화되어 들뜬 노후 실리콘을 전면 스크래핑해 완전히 제거한 뒤, 창호 전용 특수 프라이머를 바르고 기밀 실링해야 누수가 완벽하게 차단됩니다.`
    },
    {
      question: `${region} ${service} 시공 견적은 어떻게 산출되나요?`,
      answer: `아파트인 경우 거주하시는 평형대와 창문의 개수, 상가나 주택인 경우 외벽 크랙 상태 및 현장 접근성에 따라 ${region} ${service} 견적이 결정됩니다. 전화로 대략적인 건물 상황을 설명해 주시면 무료 예상 비용을 친절하게 산정해 드립니다.`
    },
    {
      question: `비가 내리는 중에도 ${region}에서 ${service} 보수 공사가 가능한가요?`,
      answer: `아닙니다. 외벽이나 샷시 프레임 표면에 빗물 수분이 남아 있으면 자재 결착력이 현격히 떨어져 들뜸 하자가 생기기 쉽습니다. 따라서 비가 그치고 표면이 완전히 건조된 상태에서 작업을 실시하여 ${region} ${service}의 완벽한 수밀 성능을 보장해 드립니다.`
    }
  ];

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
    faqTitle: `${region} ${service} 관련 핵심 질문`,
    faqs: faqs,
    portfolioTitle: `레인가드 ${service} 시공 사례`,
    serviceBlock: blocks[hash % blocks.length],
    ctaHeader: `${keyword} 실시간 견적 상담`
  };
};
