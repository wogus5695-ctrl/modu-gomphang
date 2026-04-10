import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo';
import { WINDOW_CAULKING_ALLOWED_REGIONS } from '@/data/allowedKeywords';

export const metadata: Metadata = getMetadata({
  title: '서울 창틀코킹 시공 서비스 안내',
  description: '서울 지역 창틀코킹, 창틀누수, 빗물누수 관련 페이지를 확인하실 수 있습니다.',
  path: '/sitemap-seoul',
  noIndex: false,
});

const SEOUL_DATA = [
  {
    gu: "강서구",
    dongs: ["염창동", "등촌동", "화곡본동", "화곡동", "우장산동", "가양동", "발산동", "공항동", "방화동"]
  },
  {
    gu: "마포구",
    dongs: ["아현동", "공덕동", "도화동", "용강동", "대흥동", "염리동", "신수동", "서강동", "서교동", "합정동", "망원동", "연남동", "성산동", "상암동"]
  },
  {
    gu: "서대문구",
    dongs: ["충현동", "천연동", "북아현동", "신촌동", "연희동", "홍제동", "홍은동", "남가좌동", "북가좌동"]
  },
  {
    gu: "은평구",
    dongs: ["녹번동", "불광동", "갈현동", "구산동", "대조동", "응암동", "역촌동", "신사동", "증산동", "수색동", "진관동"]
  }
];

const SERVICES = ["창틀코킹", "창틀누수", "빗물누수"];

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
    <div className="font-sans antialiased bg-white p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 text-center pb-8 border-b border-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">서울 창틀코킹 시공 서비스 안내</h1>
          <p className="text-gray-600">
            서울 지역 창틀코킹, 창틀누수, 빗물누수 관련 페이지를 확인하실 수 있습니다.<br className="hidden sm:block" />
            원하시는 시공 지역과 서비스를 선택하여 확인해 주세요.
          </p>
        </header>

        {/* Content */}
        <main>
          {SEOUL_DATA.map((region, idx) => {
            // 구와 동을 평탄화된 단일 목록으로 합침
            const allKeywords: { label: string, locationName: string }[] = [];
            
            // 1. 구 단위 키워드 축적
            SERVICES.forEach(service => {
              allKeywords.push({ label: `${region.gu}-${service}`, locationName: region.gu });
            });

            // 2. 동 단위 키워드 축적
            region.dongs.forEach(dong => {
              SERVICES.forEach(service => {
                allKeywords.push({ label: `${dong}-${service}`, locationName: dong });
              });
            });

            return (
              <section key={idx} className="mb-16">
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-900 inline-block">
                  {region.gu}
                </h2>
                
                {/* 
                  레퍼런스(map.php) 스타일의 박스형 그리드 배열 적용
                  접기/펼치기 구조 없이 모든 키워드를 처음부터 평면적으로 노출
                */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {allKeywords.map((kw, i) => {
                    const targetUrl = `/?k=${encodeURIComponent(kw.label)}`;

                    return (
                      <Link 
                        key={i} 
                        href={targetUrl}
                        className="block px-3 py-3.5 bg-gray-50 border border-gray-200 text-gray-700 text-[14px] sm:text-[15px] font-medium text-center hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                      >
                        {kw.label}
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>

        <div className="mt-16 text-center pt-8 border-t border-gray-100">
           <Link href="/" className="text-gray-500 hover:text-gray-800 text-sm underline decoration-gray-300 underline-offset-4">
             홈으로 돌아가기
           </Link>
        </div>
        
      </div>
    </div>
  );
}
