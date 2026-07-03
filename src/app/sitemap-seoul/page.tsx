import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import { WINDOW_CAULKING_ALLOWED_REGIONS } from '@/data/allowedKeywords';
import { SEOUL_DATA, NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA, SERVICES, WATERPROOF_SERVICES } from '@/data/sitemapKeywords';

export const metadata: Metadata = getMetadata({
  title: '서울·경기·인천 창틀코킹·방수 시공 서비스 안내',
  description: '서울, 경기, 인천 주요 지역의 창틀코킹, 창틀누수, 빗물누수 관련 페이지를 확인하실 수 있습니다.',
  path: '/sitemap-seoul',
  noIndex: true,
});

// 역방향 조회를 위한 맵 (한글 이름 -> 슬러그)
const nameToSlug: Record<string, string> = {};
Object.values(WINDOW_CAULKING_ALLOWED_REGIONS).forEach(region => {
  nameToSlug[region.name] = region.slug;
  if (!region.parentDistrict) {
    nameToSlug[`${region.name}구`] = region.slug;
  }
});

export default function SitemapSeoulPage() {
  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10 md:p-16">
        
        {/* Header */}
        <header className="mb-16 text-center pb-12 border-b border-gray-100">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 mb-6 tracking-tight leading-tight">
            서울·경기·인천 창틀코킹·방수 시공 서비스 안내
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            서울, 경기, 인천 주요 지역의 창틀코킹, 창틀누수, 빗물누수, 창틀실리콘, 샷시실리콘, 외벽보수, 외벽방수, 옥상방수, 건물방수, 외벽도색 시공 안내 페이지를 확인하실 수 있습니다.<br className="hidden md:block" />
            원하시는 지역과 시공 항목을 선택해 상세 안내를 확인해 주세요.
          </p>
        </header>

        {/* Content */}
        <main className="space-y-20">
          
          {/* =========================================================================
              SECTION 1: 기존 서울/수도권 키워드 (Caulking)
              ========================================================================= */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                기존 서울/수도권 창틀코킹 시공 지역
              </h2>
              <p className="text-gray-500 text-sm">
                서울 및 일부 경기 인접 지역의 창틀코킹, 누수 점검 시공 안내 페이지입니다.
              </p>
            </div>
            
            <div className="space-y-12">
              {SEOUL_DATA.map((region, idx) => {
                const allKeywords: { label: string, locationName: string }[] = [];
                SERVICES.forEach(service => {
                  allKeywords.push({ label: `${region.gu}-${service}`, locationName: region.gu });
                });
                region.dongs.forEach(dong => {
                  SERVICES.forEach(service => {
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
                        const targetUrl = `/?k=${encodeURIComponent(kw.label)}`;
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

              {NEW_REGIONS_DATA.map((region, idx) => {
                const allKeywords: { label: string, locationName: string }[] = [];
                SERVICES.forEach(service => {
                  allKeywords.push({ label: `${region.gu}-${service}`, locationName: region.gu });
                });
                region.dongs.forEach(dong => {
                  SERVICES.forEach(service => {
                    allKeywords.push({ label: `${dong}-${service}`, locationName: dong });
                  });
                });

                return (
                  <div key={`new-${idx}`} className="border-b border-gray-50 pb-8 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 inline-block px-3 py-1 bg-gray-100 rounded-lg">
                      {region.gu}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {allKeywords.map((kw, i) => {
                        const targetUrl = `/?k=${encodeURIComponent(kw.label)}`;
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
              중복 생성 방지를 위한 공통 셋 생성
              ========================================================================= */}
          {(() => {
            const existingLabelsSet = new Set<string>();
            
            // 1. 기존 서울 수집
            SEOUL_DATA.forEach(region => {
              SERVICES.forEach(service => existingLabelsSet.add(`${region.gu}-${service}`));
              region.dongs.forEach(dong => {
                SERVICES.forEach(service => existingLabelsSet.add(`${dong}-${service}`));
              });
              WATERPROOF_SERVICES.forEach(service => existingLabelsSet.add(`${region.gu}-${service}`));
              region.dongs.forEach(dong => {
                WATERPROOF_SERVICES.forEach(service => existingLabelsSet.add(`${dong}-${service}`));
              });
            });

            // 2. 기존 경기 수집
            NEW_REGIONS_DATA.forEach(region => {
              SERVICES.forEach(service => existingLabelsSet.add(`${region.gu}-${service}`));
              region.dongs.forEach(dong => {
                SERVICES.forEach(service => existingLabelsSet.add(`${dong}-${service}`));
              });
              WATERPROOF_SERVICES.forEach(service => existingLabelsSet.add(`${region.gu}-${service}`));
              region.dongs.forEach(dong => {
                WATERPROOF_SERVICES.forEach(service => existingLabelsSet.add(`${dong}-${service}`));
              });
            });

            const combinedServices = [...SERVICES, ...WATERPROOF_SERVICES];

            return (
              <>
                {/* =========================================================================
                    SECTION 2: 인천 시/구 단위 확장 키워드
                    ========================================================================= */}
                <section className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 sm:p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                      인천 시/구 단위 확장 키워드
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
                      인천 주요 지역의 창틀코킹, 창틀누수, 빗물누수, 외벽방수, 옥상방수, 건물방수, 외벽도색 시공 안내 페이지입니다. 기존 행정구 명칭과 개편 이후 사용되는 행정구 명칭을 함께 반영해 지역 검색 수요를 폭넓게 대응합니다.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {(() => {
                      const incheonGus = ["인천", "인천 중구", "인천 동구", "인천 서구", "제물포구", "영종구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서해구", "검단구"];
                      
                      return incheonGus.map((guName, idx) => {
                        const localKeywords = combinedServices
                          .map(service => `${guName}-${service}`)
                          .filter(label => !existingLabelsSet.has(label));

                        if (localKeywords.length === 0) return null;

                        return (
                          <div key={idx} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-md font-bold text-gray-800 mb-4 inline-block px-3 py-1 bg-slate-100 rounded-lg">
                              {guName}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                              {localKeywords.map((label, i) => {
                                const targetUrl = `/?k=${encodeURIComponent(label)}`;
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
                    SECTION 3: 인천 동 단위 확장 키워드
                    ========================================================================= */}
                <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-indigo-600 rounded-full inline-block"></span>
                      인천 동 단위 확장 키워드
                    </h2>
                    <p className="text-gray-500 text-sm max-w-4xl">
                      인천 신구 행정구역 및 기존 명칭의 행정동별 세부 검색 키워드입니다. 각 동별 10대 서비스가 통합 지원됩니다.
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

                        const filteredKeywords = localKeywords.filter(label => !existingLabelsSet.has(label));
                        if (filteredKeywords.length === 0) return null;

                        return (
                          <div key={idx} className="bg-slate-50/55 rounded-xl p-5 border border-slate-100">
                            <h3 className="text-md font-bold text-slate-800 mb-4 inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg">
                              {group.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                              {filteredKeywords.map((label, i) => {
                                const targetUrl = `/?k=${encodeURIComponent(label)}`;
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

                {/* =========================================================================
                    SECTION 4: 경기 시/구 단위 확장 키워드
                    ========================================================================= */}
                <section className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6 sm:p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-cyan-600 rounded-full inline-block"></span>
                      경기 시/구 단위 확장 키워드
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
                      수원, 구리, 양주, 고양, 경기 광주 주요 지역의 창틀코킹 및 방수 시공 안내 페이지입니다. 시·구 단위뿐 아니라 동·읍·면 단위까지 확장해 세부 지역 검색에 대응합니다.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {(() => {
                      const gyeonggiGus = ["수원", "수원시", "장안구", "권선구", "팔달구", "영통구", "구리", "구리시", "양주", "양주시", "고양", "고양시", "덕양구", "일산동구", "일산서구", "경기 광주", "광주시"];

                      return gyeonggiGus.map((guName, idx) => {
                        const localKeywords = combinedServices
                          .map(service => `${guName}-${service}`)
                          .filter(label => !existingLabelsSet.has(label));

                        if (localKeywords.length === 0) return null;

                        return (
                          <div key={idx} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                            <h3 className="text-md font-bold text-gray-800 mb-4 inline-block px-3 py-1 bg-slate-100 rounded-lg">
                              {guName}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                              {localKeywords.map((label, i) => {
                                const targetUrl = `/?k=${encodeURIComponent(label)}`;
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
                    SECTION 5: 경기 동·읍·면 단위 확장 키워드
                    ========================================================================= */}
                <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-cyan-600 rounded-full inline-block"></span>
                      경기 동·읍·면 단위 확장 키워드
                    </h2>
                    <p className="text-gray-500 text-sm max-w-4xl">
                      경기 권역의 세부 행정구역, 읍·면 및 행정동별 상세 검색 키워드 목록입니다. 10개 시공 서비스와 연계되어 검색 환경을 최적화합니다.
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
                        { title: "경기 광주 동·읍·면 권역", guName: "경기 광주" }
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

                        const filteredKeywords = localKeywords.filter(label => !existingLabelsSet.has(label));
                        if (filteredKeywords.length === 0) return null;

                        return (
                          <div key={idx} className="bg-slate-50/55 rounded-xl p-5 border border-slate-100">
                            <h3 className="text-md font-bold text-slate-800 mb-4 inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg">
                              {group.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                              {filteredKeywords.map((label, i) => {
                                const targetUrl = `/?k=${encodeURIComponent(label)}`;
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
              </>
            );
          })()}

          {/* =========================================================================
              SECTION 6: 기존 방수 시공 서비스 안내 섹션
              ========================================================================= */}
          <div className="my-16 border-t border-gray-200 pt-16"></div>
          <section className="bg-slate-50/30 rounded-2xl border border-gray-100 p-6 sm:p-8">
            <header className="mb-12 text-center pb-8 border-b border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">기존 방수 시공 서비스 안내</h2>
              <p className="text-gray-600">
                외벽방수, 옥상방수, 건물방수, 외벽보수 등 방수 관련 시공이 필요한 기존 지역을 선택해 주세요.
              </p>
            </header>

            <div className="space-y-16">
              {/* 서울 지역 방수 */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 inline-block">
                  서울 지역 방수 키워드
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {SEOUL_DATA.map((region) => {
                    const localKeywords: string[] = [];
                    WATERPROOF_SERVICES.forEach(service => {
                      localKeywords.push(`${region.gu}-${service}`);
                    });
                    region.dongs.forEach(dong => {
                      WATERPROOF_SERVICES.forEach(service => {
                        localKeywords.push(`${dong}-${service}`);
                      });
                    });

                    return localKeywords.map((label, i) => {
                      const targetUrl = `/?k=${encodeURIComponent(label)}`;
                      return (
                        <Link
                          key={`${label}-${i}`}
                          href={targetUrl}
                          className="block px-3 py-3.5 bg-blue-50/30 border border-blue-100 text-blue-900 text-[14px] sm:text-[15px] font-semibold text-center hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300 transition-colors rounded-lg"
                        >
                          {label}
                        </Link>
                      );
                    });
                  })}
                </div>
              </div>

              {/* 경기 지역 방수 */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200 inline-block">
                  경기 지역 방수 키워드
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {NEW_REGIONS_DATA.map((region) => {
                    const localKeywords: string[] = [];
                    WATERPROOF_SERVICES.forEach(service => {
                      localKeywords.push(`${region.gu}-${service}`);
                    });
                    region.dongs.forEach(dong => {
                      WATERPROOF_SERVICES.forEach(service => {
                        localKeywords.push(`${dong}-${service}`);
                      });
                    });

                    return localKeywords.map((label, i) => {
                      const targetUrl = `/?k=${encodeURIComponent(label)}`;
                      return (
                        <Link
                          key={`${label}-${i}`}
                          href={targetUrl}
                          className="block px-3 py-3.5 bg-blue-50/30 border border-blue-100 text-blue-900 text-[14px] sm:text-[15px] font-semibold text-center hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300 transition-colors rounded-lg"
                        >
                          {label}
                        </Link>
                      );
                    });
                  })}
                </div>
              </div>
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
