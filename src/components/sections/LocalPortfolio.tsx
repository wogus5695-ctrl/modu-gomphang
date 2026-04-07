import React from 'react';
import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { PortfolioCase } from '@/data/portfolio';

interface LocalPortfolioProps {
  locationName: string;
  portfolio: PortfolioCase[];
}

export default function LocalPortfolio({ locationName, portfolio }: LocalPortfolioProps) {
  if (!portfolio || portfolio.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" aria-labelledby="portfolio-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="portfolio-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-16 text-center tracking-tighter leading-tight">
          {locationName} <br className="md:hidden" /> 시공 사례
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item) => (
            <div key={item.id} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group">
              <div className="aspect-video relative overflow-hidden">
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
                <p className="text-gray-500 font-medium leading-relaxed mb-6 line-clamp-2">{item.summary}</p>
                <Link 
                  href={`/portfolio/${item.id}`} 
                  className="mt-auto inline-flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all"
                  data-track-category="view"
                  data-track-action="case_detail_click"
                  data-track-label={`case_${item.id}`}
                >
                  상세 보기 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
