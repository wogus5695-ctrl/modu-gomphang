import React from 'react';
import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { PortfolioCase } from '@/data/portfolio';

interface LocalPortfolioProps {
  title?: string;
  portfolio: PortfolioCase[];
}

export default function LocalPortfolio({ title, portfolio }: LocalPortfolioProps) {
  if (!portfolio || portfolio.length === 0) return null;

  return (
    <section className="py-24 bg-white" aria-labelledby="portfolio-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black mb-6 uppercase tracking-wider">
            Our Portfolio
          </div>
          <h2 id="portfolio-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
            {title || "시공 사례"}
          </h2>
          <p className="text-gray-500 font-bold text-lg max-w-2xl mx-auto opacity-80">
            레인가드의 정밀한 기술력이 녹아든 <br className="hidden md:block" /> 실제 현장 비포&애프터를 확인해 보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {portfolio.map((item) => (
            <div key={item.id} className="group bg-white rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 flex flex-col">
              <div className="aspect-[16/10] relative overflow-hidden">
                <BeforeAfterSlider before={item.beforeImg} after={item.afterImg} alt={item.title} />
              </div>
              <div className="p-10 flex flex-col h-full bg-white relative z-10">
                <h3 className="font-black text-2xl mb-4 group-hover:text-blue-600 transition-colors line-clamp-1">
                  <Link 
                    href={`/portfolio/${item.id}`}
                    data-track-category="view"
                    data-track-action="case_detail_click"
                    data-track-label={`case_${item.id}`}
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-500 font-extrabold leading-relaxed mb-8 line-clamp-2">{item.summary}</p>
                
                <div className="mt-auto">
                  <Link 
                    href={`/portfolio/${item.id}`} 
                    className="inline-flex items-center px-6 py-3 bg-gray-50 text-blue-600 rounded-2xl font-black group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                    data-track-category="view"
                    data-track-action="case_detail_click"
                    data-track-label={`case_${item.id}`}
                  >
                    시공 상세 보기 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

