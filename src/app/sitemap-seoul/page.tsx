import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import { WINDOW_CAULKING_ALLOWED_REGIONS } from '@/data/allowedKeywords';
import { SEOUL_DATA, SERVICES, WATERPROOF_SERVICES } from '@/data/sitemapKeywords';

export const metadata: Metadata = getMetadata({
  title: '서울 창틀코킹·방수 시공 서비스 안내',
  description: '서울 주요 지역의 창틀코킹, 창틀누수, 빗물누수 관련 페이지를 확인하실 수 있습니다.',
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
            서울 창틀코킹·방수 시공 서비스 안내
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            서울 주요 지역의 창틀코킹, 창틀누수, 빗물누수, 창틀실리콘, 샷시실리콘, 외벽보수, 외벽방수, 옥상방수, 건물방수, 외벽도색 시공 안내 페이지를 확인하실 수 있습니다.<br className="hidden md:block" />
            원하시는 지역과 시공 항목을 선택해 상세 안내를 확인해 주세요.
          </p>
        </header>

        {/* Content */}
        <main className="space-y-20">
          
          {/* =========================================================================
              SECTION 1: 서울 창틀코킹 시공 지역
              ========================================================================= */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                서울 창틀코킹 시공 지역
              </h2>
              <p className="text-gray-500 text-sm">
                서울 전지역의 창틀코킹, 누수 점검 시공 안내 페이지입니다.
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
              SECTION 2: 서울 방수 시공 서비스 안내 섹션
              ========================================================================= */}
          <div className="my-16 border-t border-gray-200 pt-16"></div>
          <section className="bg-slate-50/30 rounded-2xl border border-gray-100 p-6 sm:p-8">
            <header className="mb-12 text-center pb-8 border-b border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">서울 방수 시공 서비스 안내</h2>
              <p className="text-gray-600">
                외벽방수, 옥상방수, 건물방수, 외벽보수 등 방수 관련 시공이 필요한 서울 전지역을 선택해 주세요.
              </p>
            </header>

            <div className="space-y-16">
              <div>
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
                      const targetUrl = `/?k=${encodeURIComponent(label.replace(/\s+/g, '-'))}`;
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
