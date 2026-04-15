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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolio.map((item) => (
            <div key={item.id} className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
              <div className="aspect-[1.1/1] relative overflow-hidden">
                <BeforeAfterSlider before={item.beforeImg} after={item.afterImg} alt={item.title} />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow bg-white">
                <h3 className="font-black text-xl md:text-2xl mb-4 group-hover:text-blue-600 transition-colors leading-tight break-keep">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-bold leading-relaxed opacity-85 whitespace-pre-line break-keep">
                  {item.summary}
                </p>

                {/* Decorative bar at the bottom for balanced look since button is removed */}
                <div className="mt-8 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-px bg-blue-600"></span>
                    Professional Work
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 새 이미지 슬라이드 영역 */}
        <div className="mt-16 md:mt-24">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-6 px-4 sm:px-6 lg:px-0 -mx-4 sm:-mx-6 lg:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {['/그림1.png', '/그림2.png', '/그림3.png', '/그림4.png'].map((imgSrc, index) => (
              <div key={index} className="flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] snap-center lg:snap-start first:ml-4 sm:first:ml-6 lg:first:ml-0 last:mr-4 sm:last:mr-6 lg:last:mr-0">
                <div className="aspect-[4/3] relative rounded-[32px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

