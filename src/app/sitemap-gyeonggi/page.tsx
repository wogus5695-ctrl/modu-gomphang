import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import { NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA, SERVICES, WATERPROOF_SERVICES } from '@/data/sitemapKeywords';

export const metadata: Metadata = getMetadata({
  title: '경기 창틀코킹·방수 시공 서비스 안내',
  description: '경기 주요 지역의 창틀코킹, 창틀누수, 빗물누수 관련 페이지를 확인하실 수 있습니다.',
  path: '/sitemap-gyeonggi',
  noIndex: true,
});

export default function SitemapGyeonggiPage() {
  const combinedServices = [...SERVICES, ...WATERPROOF_SERVICES];

  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10 md:p-16">
        
        {/* Header */}
        <header className="mb-16 text-center pb-12 border-b border-gray-100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 mb-6 tracking-tight leading-tight">
            경기 창틀코킹·방수 시공 서비스 안내
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            수원, 구리, 양주, 고양, 경기 광주 등 경기 주요 지역의 창틀코킹, 창틀누수, 빗물누수, 창틀실리콘, 샷시실리콘, 외벽보수, 외벽방수, 옥상방수, 건물방수, 외벽도색 시공 안내 페이지입니다.<br className="hidden md:block" />
            원하시는 지역과 시공 항목을 선택해 상세 안내를 확인해 주세요.
          </p>
        </header>

        {/* Content */}
        <main className="space-y-20">
          
          {/* =========================================================================
              SECTION 1: 기존 경기 권역 (김포, 부천, 광명, 안양, 과천, 시흥, 성남, 하남 등)
              ========================================================================= */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                기존 경기 권역 시공 지역
              </h2>
              <p className="text-gray-500 text-sm">
                김포, 부천, 광명, 안양 등 기존 수도권 핵심 지역의 창틀코킹 및 방수 시공 안내입니다.
              </p>
            </div>

            <div className="space-y-12">
              {NEW_REGIONS_DATA.map((region, idx) => {
                const allKeywords: { label: string, locationName: string }[] = [];
                // 1. 코킹 서비스
                SERVICES.forEach(service => {
                  allKeywords.push({ label: `${region.gu}-${service}`, locationName: region.gu });
                });
                region.dongs.forEach(dong => {
                  SERVICES.forEach(service => {
                    allKeywords.push({ label: `${dong}-${service}`, locationName: dong });
                  });
                });
                // 2. 방수 서비스
                WATERPROOF_SERVICES.forEach(service => {
                  allKeywords.push({ label: `${region.gu}-${service}`, locationName: region.gu });
                });
                region.dongs.forEach(dong => {
                  WATERPROOF_SERVICES.forEach(service => {
                    allKeywords.push({ label: `${dong}-${service}`, locationName: dong });
                  });
                });

                return (
                  <div key={idx} className="border-b border-gray-50 pb-8 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 inline-block px-3 py-1 bg-gray-100 rounded-lg">
                      {region.gu}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {allKeywords.map((kw, i) => {
                        const targetUrl = `/?k=${encodeURIComponent(kw.label.replace(/\s+/g, '-'))}`;
                        return (
                          <Link 
                            key={i} 
                            href={targetUrl}
                            className="block px-3 py-3.5 bg-gray-50 border border-gray-200 text-gray-700 text-[14px] sm:text-[15px] font-medium text-center hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors rounded-lg"
                          >
                            {kw.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              SECTION 2: 경기 시/구 단위 신규 확장 키워드
              ========================================================================= */}
          <section className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-600 rounded-full inline-block"></span>
                경기 시/구 단위 신규 확장 지역
              </h2>
              <p className="text-gray-655 text-sm">
                수원, 구리, 양주, 고양, 경기 광주 등 신규 확장 시·구 단위의 10대 서비스 안내입니다.
              </p>
            </div>

            <div className="space-y-8">
              {(() => {
                const gyeonggiGus = [
                  "수원", "수원시", "장안구", "권선구", "팔달구", "영통구", 
                  "구리", "구리시", 
                  "양주", "양주시", 
                  "고양", "고양시", "덕양구", "일산동구", "일산서구", 
                  "경기 광주", "광주시",
                  "안산", "안산시", "상록구", "단원구",
                  "군포", "군포시",
                  "의왕", "의왕시",
                  "남양주", "남양주시",
                  "의정부", "의정부시"
                ];

                return gyeonggiGus.map((guName, idx) => {
                  const localKeywords = combinedServices.map(service => `${guName}-${service}`);

                  return (
                    <div key={idx} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                      <h3 className="text-md font-bold text-gray-800 mb-4 inline-block px-3 py-1 bg-slate-100 rounded-lg">
                        {guName}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {localKeywords.map((label, i) => {
                          const targetUrl = `/?k=${encodeURIComponent(label.replace(/\s+/g, '-'))}`;
                          return (
                            <Link
                              key={`${label}-${i}`}
                              href={targetUrl}
                              className="block px-3 py-3.5 bg-cyan-50/20 border border-cyan-100/50 text-cyan-950 text-[14px] sm:text-[15px] font-semibold text-center hover:bg-cyan-100 hover:text-cyan-800 hover:border-cyan-300 transition-colors rounded-lg"
                            >
                              {label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </section>

          {/* =========================================================================
              SECTION 3: 경기 동·읍·면 단위 신규 확장 키워드
              ========================================================================= */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-cyan-600 rounded-full inline-block"></span>
                경기 동·읍·면 단위 신규 확장 지역
              </h2>
              <p className="text-gray-500 text-sm">
                경기 권역의 세부 행정구역, 읍·면 및 행정동별 상세 시공 안내입니다.
              </p>
            </div>

            <div className="space-y-8">
              {(() => {
                const gyeonggiDongsGroups = [
                  { title: "수원 장안구 권역", guName: "장안구" },
                  { title: "수원 권선구 권역", guName: "권선구" },
                  { title: "수원 팔달구 권역", guName: "팔달구" },
                  { title: "수원 영통구 권역", guName: "영통구" },
                  { title: "구리 권역", guName: "구리" },
                  { title: "양주 동·읍·면 권역", guName: "양주" },
                  { title: "고양 덕양구 권역", guName: "덕양구" },
                  { title: "고양 일산동구 권역", guName: "일산동구" },
                  { title: "고양 일산서구 권역", guName: "일산서구" },
                  { title: "경기 광주 동·읍·면 권역", guName: "경기 광주" },
                  { title: "안산 상록구 권역", guName: "상록구" },
                  { title: "안산 단원구 권역", guName: "단원구" },
                  { title: "군포 동 권역", guName: "군포시" },
                  { title: "의왕 동 권역", guName: "의왕시" },
                  { title: "남양주 읍·면·동 권역", guName: "남양주시" },
                  { title: "의정부 동 권역", guName: "의정부시" }
                ];

                return gyeonggiDongsGroups.map((group, idx) => {
                  const targetRegion = EXPANSION_REGIONS_DATA.find(r => r.gu === group.guName);
                  if (!targetRegion || !targetRegion.dongs || targetRegion.dongs.length === 0) return null;

                  const localKeywords: string[] = [];
                  targetRegion.dongs.forEach(dong => {
                    combinedServices.forEach(service => {
                      localKeywords.push(`${dong}-${service}`);
                    });
                  });

                  return (
                    <div key={idx} className="bg-slate-50/55 rounded-xl p-5 border border-slate-100">
                      <h3 className="text-md font-bold text-slate-800 mb-4 inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg">
                        {group.title}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {localKeywords.map((label, i) => {
                          const targetUrl = `/?k=${encodeURIComponent(label.replace(/\s+/g, '-'))}`;
                          return (
                            <Link
                              key={`${label}-${i}`}
                              href={targetUrl}
                              className="block px-3 py-3.5 bg-white border border-gray-200 text-gray-700 text-[14px] sm:text-[15px] font-medium text-center hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors rounded-lg shadow-sm"
                            >
                              {label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </section>
        </main>

        <div className="mt-16 text-center pt-8 border-t border-gray-100">
          <Link href="/" className="text-gray-500 hover:text-gray-800 text-sm underline decoration-gray-300 underline-offset-4 font-semibold">
            홈으로 돌아가기
          </Link>
        </div>
        
      </div>
    </div>
  );
}
