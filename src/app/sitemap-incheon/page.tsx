import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import { EXPANSION_REGIONS_DATA, SERVICES, WATERPROOF_SERVICES } from '@/data/sitemapKeywords';

export const metadata: Metadata = getMetadata({
  title: '인천 창틀코킹·방수 시공 서비스 안내',
  description: '인천 주요 지역의 창틀코킹, 창틀누수, 빗물누수 관련 페이지를 확인하실 수 있습니다.',
  path: '/sitemap-incheon',
  noIndex: true,
});

export default function SitemapIncheonPage() {
  const combinedServices = [...SERVICES, ...WATERPROOF_SERVICES];

  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10 md:p-16">
        
        {/* Header */}
        <header className="mb-16 text-center pb-12 border-b border-gray-100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 mb-6 tracking-tight leading-tight">
            인천 창틀코킹·방수 시공 서비스 안내
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            인천 주요 지역의 창틀코킹, 창틀누수, 빗물누수, 창틀실리콘, 샷시실리콘, 외벽보수, 외벽방수, 옥상방수, 건물방수, 외벽도색 시공 안내 페이지입니다. 기존 행정구 명칭과 개편 이후 사용되는 행정구 명칭을 함께 반영해 지역 검색 수요를 폭넓게 대응합니다.<br className="hidden md:block" />
            원하시는 지역과 시공 항목을 선택해 상세 안내를 확인해 주세요.
          </p>
        </header>

        {/* Content */}
        <main className="space-y-20">
          
          {/* =========================================================================
              SECTION 1: 인천 시/구 단위 확장 키워드
              ========================================================================= */}
          <section className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                인천 시/구 단위 시공 지역
              </h2>
              <p className="text-gray-600 text-sm">
                인천 각 행정구 및 메인 지명 단위의 10대 시공 서비스 바로가기입니다.
              </p>
            </div>

            <div className="space-y-8">
              {(() => {
                const incheonGus = ["인천", "인천 중구", "인천 동구", "인천 서구", "제물포구", "영종구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서해구", "검단구"];
                
                return incheonGus.map((guName, idx) => {
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
                              className="block px-3 py-3.5 bg-blue-50/20 border border-blue-100/50 text-blue-900 text-[14px] sm:text-[15px] font-semibold text-center hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300 transition-colors rounded-lg"
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
              SECTION 2: 인천 동 단위 확장 키워드
              ========================================================================= */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                인천 동 단위 시공 지역
              </h2>
              <p className="text-gray-500 text-sm">
                인천 권역의 읍·면 및 행정동별 상세 검색 키워드 목록입니다.
              </p>
            </div>

            <div className="space-y-8">
              {(() => {
                const incheonDongsGroups = [
                  { title: "제물포구 권역", guName: "제물포구" },
                  { title: "영종구 권역", guName: "영종구" },
                  { title: "미추홀구 권역", guName: "미추홀구" },
                  { title: "연수구 권역", guName: "연수구" },
                  { title: "남동구 권역", guName: "남동구" },
                  { title: "부평구 권역", guName: "부평구" },
                  { title: "계양구 권역", guName: "계양구" },
                  { title: "서해구 권역", guName: "서해구" },
                  { title: "검단구 권역", guName: "검단구" },
                  { title: "기존 인천 중구 alias", guName: "인천 중구" },
                  { title: "기존 인천 동구 alias", guName: "인천 동구" },
                  { title: "기존 인천 서구 alias", guName: "인천 서구" }
                ];

                return incheonDongsGroups.map((group, idx) => {
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
