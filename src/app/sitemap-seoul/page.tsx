import React from 'react';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/seo';

export const metadata: Metadata = getMetadata({
  title: '서울 서비스 지역 sitemap',
  description: '레인가드 서울 지역 창틀코킹, 창틀누수, 빗물누수 키워드 및 서비스 지역 구조 안내',
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

export default function SitemapSeoulPage() {
  return (
    <div className="font-sans antialiased bg-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-10 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">서울 서비스 지역 sitemap</h1>
          <p className="text-gray-600">
            레인가드 서울 지역 창틀코킹 전문 시공을 위한 키워드 구조 리스트입니다.
          </p>
        </header>

        {/* Content */}
        <main>
          <div className="space-y-12">
            {SEOUL_DATA.map((region, idx) => (
              <section key={idx}>
                {/* 구 단위 키워드 */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 bg-gray-100 p-2 rounded">{region.gu}</h2>
                <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-700">
                  {SERVICES.map((service, sIdx) => (
                    <li key={`gu-${idx}-${sIdx}`}>{region.gu}-{service}</li>
                  ))}
                </ul>

                {/* 동 단위 키워드 */}
                <div className="pl-4 border-l-2 border-gray-200 space-y-6">
                  {region.dongs.map((dong, dIdx) => (
                    <div key={`dong-${idx}-${dIdx}`}>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{dong}</h3>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600">
                        {SERVICES.map((service, sIdx) => (
                          <li key={`dong-item-${idx}-${dIdx}-${sIdx}`}>{dong}-{service}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
        
      </div>
    </div>
  );
}
