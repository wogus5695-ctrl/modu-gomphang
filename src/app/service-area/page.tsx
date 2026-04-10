import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WINDOW_CAULKING_ALLOWED_REGIONS } from '@/data/allowedKeywords';
import { getMetadata } from '@/lib/seo';

export const metadata: Metadata = getMetadata({
  title: '서비스 지역 전체보기 | 창틀코킹 레인가드',
  description: '레인가드의 전문 창틀코킹 및 빗물누수 보수 서비스가 가능한 서울, 경기 지역의 안내 페이지 목록입니다.',
  path: '/service-area',
});

export default function ServiceAreaPage() {
  const regions = Object.values(WINDOW_CAULKING_ALLOWED_REGIONS);
  
  // 가나다 순 정렬
  regions.sort((a, b) => a.name.localeCompare(b.name));
  
  const seoul = regions.filter(r => r.province === 'seoul');
  const gyeonggi = regions.filter(r => r.province === 'gyeonggi');

  const renderLinks = (items: typeof seoul, prov: string) => {
    if (items.length === 0) return null;
    return (
      <div className="mb-12 last:mb-0">
        <h3 className="text-xl font-black text-gray-900 mb-6 pb-3 border-b border-gray-200">
          {prov === 'seoul' ? '서울특별시' : '경기도'}
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3">
          {items.map(item => {
            const displayName = item.parentDistrict ? `${item.parentDistrict} ${item.name}` : item.name;
            return (
              <li key={item.slug}>
                <Link 
                  href={`/window-caulking/${item.province}/${item.slug}`}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors block text-[15px]"
                >
                  {displayName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header />
      <main className="flex-grow bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">
              지역별 창틀코킹 서비스 안내
            </h1>
            <p className="text-gray-500 font-medium text-[15px] sm:text-lg max-w-2xl mx-auto leading-relaxed">
              레인가드는 지역별 창틀코킹, 창틀누수, 빗물누수 관련 안내 페이지를 운영하고 있습니다. 
              원하시는 지역을 선택해 자세한 작업 안내를 확인해 보세요.
            </p>
          </div>
          
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm">
            {renderLinks(seoul, 'seoul')}
            {renderLinks(gyeonggi, 'gyeonggi')}
            
            <div className="mt-12 text-center pt-8 border-t border-gray-100">
              <Link href="/services/window-caulking" className="inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors font-bold text-[15px]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                창틀코킹 서비스 전체 안내로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
