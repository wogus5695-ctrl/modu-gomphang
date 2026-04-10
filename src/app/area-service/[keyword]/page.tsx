import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { getMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ keyword: string }>;
};

// 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword); // 예: 등촌동-창틀코킹
  const parts = decodedKeyword.split('-');
  
  const region = parts[0] || '서울';
  const service = parts[1] || '창틀코킹';

  return getMetadata({
    title: `${region} ${service} | 레인가드`,
    description: `${region} 지역의 ${service} 점검, 보수, 실리콘 재시공 전문 안내. 건물 외벽 및 누수 차단에 대해 레인가드 전문가와 즉시 상담해 보세요.`,
    path: `/area-service/${keyword}`,
  });
}

export default async function AreaServiceDetail({ params }: Props) {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);
  const parts = decodedKeyword.split('-');
  
  const region = parts[0] || '';
  const service = parts[1] || '';

  // 작업명(Service)별 텍스트 블록 매핑
  let serviceDescription = '';
  let serviceKeywords = '';
  
  if (service === '창틀코킹') {
    serviceDescription = "주요 작업: 창틀 실리콘 노후 확인, 갈라진 틈새 보수, 전문 코킹 재시공을 통한 완벽한 마감 보수 및 빗물 유입 예방 작업.";
    serviceKeywords = "창틀 실리콘 노후, 틈새 보수, 코킹 재시공, 마감 보수, 빗물 유입 예방";
  } else if (service === '창틀누수') {
    serviceDescription = "주요 작업: 창호 틈새 누수와 실리콘 열화 상태 파악, 누수 원인 정밀 점검, 창틀 주변 누수 보수 및 우천 시 유입 점검.";
    serviceKeywords = "창호 틈새 누수, 실리콘 열화, 누수 원인 점검, 창틀 주변 누수 보수, 우천 시 유입 점검";
  } else if (service === '빗물누수') {
    serviceDescription = "주요 작업: 비올 때 유입되는 누수 확인, 외벽 접합부 및 창틀 주변 점검, 실내 벽면과 천장 오염 원인 확인, 누수 경로 점검 및 재유입 방지 보수.";
    serviceKeywords = "비올 때 유입되는 누수, 외벽 접합부 및 창틀 주변 점검, 실내 벽면/천장 오염 원인 확인, 누수 경로 점검, 재유입 방지 보수";
  } else {
    serviceDescription = "실리콘 노후 점검 및 누수 차단을 위한 외벽 접합부 정밀 코킹 시공.";
    serviceKeywords = "창틀실리콘, 누수점검, 실리콘재시공, 외벽보수";
  }

  // 지역별 자연스러운 보조 문장 생성 (지역명 Hash 기반으로 3가지 중 택1)
  const getRegionText = (loc: string, svc: string) => {
    const hash = loc.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const mod = hash % 3;
    if (mod === 0) {
      return `${loc} 지역의 아파트, 빌라, 상가 등 다양한 시설에서 최근 ${svc} 문의가 이어지고 있습니다. 건물 노후화에 따른 창틀 및 외벽 틈새를 정기적으로 살펴보는 것이 매우 중요합니다.`;
    } else if (mod === 1) {
      return `${loc} 지역은 다양한 주거지와 다세대 주택이 혼재된 특성상, 우천 시 창틀 주변 누수 점검 요청이 꾸준히 발생합니다. 빠른 점검을 통해 추가적인 피해를 막는 ${svc} 대응이 필수적입니다.`;
    } else {
      return `${loc} 지역 내 구축 건물이나 대형 단지 아파트에서는 세월이 지나며 기존 실리콘이 삭아 내리고 들뜨는 경우가 많아, 사전에 ${svc} 진단을 의뢰하는 세대가 늘고 있습니다.`;
    }
  };

  const regionIntroText = region && service ? getRegionText(region, service) : '';

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased text-gray-800">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* H1 Titles */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {region} {service} 전문 시공
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-bold tracking-tight">
              {region} 지역의 {service} 관련 점검 및 보수 안내
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col gap-10">
            
            {/* 지역 보조 문구 Section */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4 mb-4">지역 맞춤 현황 점검</h2>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                {regionIntroText}
              </p>
            </section>

            {/* 분기된 공통 문장 Section */}
            <section className="bg-gray-50 p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-gray-900 mb-3 block">핵심 작업 상세</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {serviceDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {serviceKeywords.split(', ').map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-600 rounded-full font-medium">
                    #{kw.trim()}
                  </span>
                ))}
              </div>
            </section>

            {/* 레인가드 공통 안내 (과장 금지, 신뢰형) */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">레인가드의 정밀 시공 원칙</h2>
              <p className="text-gray-600 leading-relaxed">
                창틀 주변의 빗물누수는 단편적인 실리콘 덧방만으로는 해결되지 않습니다. 레인가드는 낡고 들뜬 기존 실리콘을 철저히 제거하고, 외벽 접합부 상태에 꼭 맞는 전용 프라이머와 고기능성 실런트를 사용합니다. 시공 매뉴얼을 준수하는 책임 있는 작업으로 안전하고 쾌적한 주거환경을 조성해 드립니다.
              </p>
            </section>

          </div>

          {/* Contact Section */}
          <section className="mt-16 bg-blue-600 text-white rounded-[40px] p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-black mb-6 relative z-10 tracking-tight">
              {region} {service} 상담 문의
            </h2>
            <p className="text-blue-100 mb-10 text-lg relative z-10">
              전문가에게 {region} {service} 빠른 견적 상담을 받아보세요. 
              <br className="hidden sm:block" />안전하게 원인을 찾아드리고 투명하게 안내해 드립니다.
            </p>
            <div className="relative z-10 max-w-sm mx-auto">
              <ContactCTA />
            </div>
            
            {/* Decor */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white opacity-5 rounded-full"></div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
