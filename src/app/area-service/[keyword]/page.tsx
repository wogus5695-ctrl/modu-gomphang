import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { getMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ keyword: string }>;
};

// 안정적인 해시 생성기 (SEO 페이지가 마운트될 때마다 내용이 바뀌지 않게 고정)
const getHash = (str: string) => {
  return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

// 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);
  const parts = decodedKeyword.split('-');
  
  const region = parts[0] || '서울';
  const service = parts[1] || '창틀코킹';

  const hash = getHash(decodedKeyword);
  
  const titlePatterns = [
    `${region} ${service} | 레인가드`,
    `${region} ${service} 점검 및 보수 | 레인가드`,
    `${region} 지역 ${service} 전문 | 레인가드`
  ];
  
  const descPatterns = [
    `${region} 지역의 ${service} 점검, 보수, 실리콘 재시공 안내. 레인가드 상담 가능.`,
    `${region} 지역에서 발생하는 ${service} 관련 점검 및 보수 안내 페이지입니다.`,
    `${region} ${service} 전문 시공. 노후 환경 점검 및 꼼꼼한 마감 보수 상담 환영.`
  ];

  return getMetadata({
    title: titlePatterns[hash % titlePatterns.length],
    description: descPatterns[hash % descPatterns.length],
    path: `/area-service/${keyword}`,
  });
}

export default async function AreaServiceDetail({ params }: Props) {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);
  const parts = decodedKeyword.split('-');
  
  const region = parts[0] || '서울';
  const service = parts[1] || '창틀코킹';

  const hash = getHash(decodedKeyword);

  // 1. H1 및 상단 요약 템플릿
  const h1Patterns = [
    `${region} ${service} 전문 시공`,
    `${region} ${service} 점검 및 보수`,
    `${region} 지역 ${service} 전문 안내`
  ];
  
  const summaryPatterns = [
    `${region} 지역의 ${service} 관련 점검 및 보수 안내`,
    `${region} 지역에서 발생할 수 있는 ${service} 관련 점검 안내`,
    `${region} 일대의 ${service} 보수 및 정밀 시공 과정 안내`
  ];

  // 2. 지역명별 보조 문장 템플릿
  const regionPatterns = [
    `${region} 지역의 아파트, 빌라, 상가에서는 창틀 주변 실리콘 노후나 마감 손상으로 인해 점검 문의가 이어질 수 있습니다.`,
    `${region} 지역은 주거 형태가 다양한 만큼 창틀 주변 틈새, 실리콘 열화, 우천 시 유입 여부를 함께 살펴보는 것이 중요합니다.`,
    `${region} 지역에서 비 오는 날 창틀 주변 물자국이나 실내 오염이 반복된다면 창틀 및 접합부 상태를 점검해볼 필요가 있습니다.`,
    `${region} 일대에서는 노후된 창틀 마감이나 접합부 손상으로 인해 보수 상담이 필요한 경우가 발생할 수 있습니다.`,
    `${region} 지역의 주택 및 공동주택에서는 창틀 주변 마감 상태에 따라 우천 시 누수 증상이 나타날 수 있어 초기 점검이 중요합니다.`
  ];

  // 3. 작업명별 공통 문장 블록 템플릿
  const serviceBlocks: Record<string, string[]> = {
    '창틀코킹': [
      `창틀코킹은 노후된 실리콘 마감이나 벌어진 틈새를 점검하고, 필요한 부위에 맞춰 보수 또는 재시공을 진행하는 작업입니다. 창틀 주변 마감 상태가 좋지 않으면 비바람이 강한 날 빗물 유입으로 이어질 수 있어, 초기 점검과 보수가 중요합니다.`,
      `창틀 실리콘은 시간이 지나면서 갈라짐, 들뜸, 수축 현상이 생길 수 있습니다. 이런 경우 창틀코킹 작업을 통해 틈새를 정리하고 마감을 보완하면 빗물 유입 가능성을 줄이는 데 도움이 됩니다.`,
      `창틀코킹은 단순히 실리콘을 덧바르는 작업이 아니라, 기존 마감 상태와 틈새 원인을 확인한 뒤 필요한 범위에 맞춰 보수 방향을 잡는 것이 중요합니다. 창틀 주변의 실리콘 열화나 접합부 손상이 확인되면 재시공이 필요한 경우도 있습니다.`,
      `창틀 주변 코킹 상태가 불안정하면 우천 시 실내 유입 문제로 이어질 수 있습니다. 실리콘 마감, 틈새, 접합부 상태를 함께 점검하고 적절히 보수하는 것이 창틀코킹 작업의 핵심입니다.`
    ],
    '창틀누수': [
      `창틀누수는 창호 틈새, 실리콘 열화, 접합부 손상 등 여러 원인으로 발생할 수 있습니다. 겉으로 보이는 물자국만 확인하기보다, 누수가 시작되는 지점을 함께 점검하는 과정이 중요합니다.`,
      `비 오는 날 창틀 주변으로 물이 스며들거나 실내 벽지·마감재에 얼룩이 생긴다면 창틀누수를 의심해볼 수 있습니다. 이 경우 창틀 주변 실리콘, 샷시 접합부, 외부 유입 가능성까지 함께 확인해야 정확한 보수 방향을 잡을 수 있습니다.`,
      `창틀누수는 단순 결로와 달리 외부에서 유입되는 물길이 원인인 경우가 많습니다. 누수 원인을 제대로 확인하지 않으면 같은 문제가 반복될 수 있어, 보수 전 점검이 우선되어야 합니다.`,
      `창틀누수는 실리콘 마감 불량, 노후화, 틈새 벌어짐, 외부 접합부 문제로 이어질 수 있습니다. 누수 흔적만 정리하는 것이 아니라, 실제 유입 경로를 확인하고 필요한 보수를 진행하는 것이 중요합니다.`
    ],
    '빗물누수': [
      `빗물누수는 비가 올 때만 증상이 나타나는 경우가 많아, 외벽 접합부와 창틀 주변 상태를 함께 확인하는 것이 중요합니다. 실내 천장이나 벽면에 물자국이 생긴다면 유입 경로 점검부터 진행해야 합니다.`,
      `우천 시 반복적으로 발생하는 빗물누수는 창틀 주변 마감 손상이나 외부 접합부 틈새와 연결되는 경우가 있습니다. 표면만 보수하기보다 실제 유입 가능 부위를 확인한 뒤 필요한 보수를 진행해야 재발을 줄일 수 있습니다.`,
      `빗물누수는 비바람 방향, 외부 균열, 실리콘 노후 상태에 따라 발생 양상이 달라질 수 있습니다. 이 때문에 누수 흔적만 보는 것이 아니라, 창틀 주변과 외부 접합 상태를 함께 점검하는 접근이 필요합니다.`,
      `비 올 때만 물이 들어오거나 벽면 오염이 반복된다면 빗물누수 가능성을 먼저 살펴봐야 합니다. 창틀 주변 실리콘과 접합부 상태를 점검하고 필요한 범위에 맞춰 보수 방향을 잡는 것이 중요합니다.`
    ]
  };

  const blocks = serviceBlocks[service] || serviceBlocks['창틀코킹'];

  // 4. CTA 템플릿
  const ctaPatterns = [
    `${region} ${service} 상담 문의`,
    `${region} ${service} 빠른 견적 상담`,
    `${region} 지역 ${service} 진단 문의`
  ];

  const currentH1 = h1Patterns[hash % h1Patterns.length];
  const currentSummary = summaryPatterns[hash % summaryPatterns.length];
  const currentRegionText = regionPatterns[hash % regionPatterns.length];
  const currentServiceBlock = blocks[hash % blocks.length];
  const currentCta = ctaPatterns[hash % ctaPatterns.length];

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased text-gray-800">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {currentH1}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-bold tracking-tight">
              {currentSummary}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col gap-10">
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4">지역 동향 안내</h2>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                {currentRegionText}
              </p>
            </section>

            <section className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4 block">작업 상세 프로세스</h2>
              <p className="text-gray-700 leading-relaxed text-lg break-keep whitespace-pre-line">
                {currentServiceBlock}
              </p>
            </section>

          </div>

          <section className="mt-16 bg-blue-600 text-white rounded-[40px] p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-black mb-6 relative z-10 tracking-tight">
              {currentCta}
            </h2>
            <p className="text-blue-100 mb-10 text-lg relative z-10 break-keep">
              가장 확실하고 투명한 점검과 보수를 약속드립니다.<br className="hidden sm:block" />
              전문가와 빠른 상담을 진행해 보세요.
            </p>
            <div className="relative z-10 max-w-sm mx-auto">
              <ContactCTA />
            </div>
            
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white opacity-5 rounded-full"></div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
