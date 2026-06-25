"use client";

import React, { useState, useEffect } from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { PortfolioCase } from '@/data/portfolio';

interface LocalPortfolioProps {
  title?: string;
  portfolio: PortfolioCase[];
  isWaterproof?: boolean;
}

export default function LocalPortfolio({ title, portfolio, isWaterproof = false }: LocalPortfolioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isWaterproof) return;
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isWaterproof]);

  const totalSlides = portfolio.length;
  const maxIndex = Math.max(0, totalSlides - visibleCount);

  useEffect(() => {
    if (isWaterproof && !isPaused && maxIndex > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isWaterproof, isPaused, maxIndex]);

  if (!portfolio || portfolio.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

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
            {isWaterproof 
              ? "레인가드의 정밀한 기술력으로 해결한 다양한 방수 시공 현장을 확인해 보세요."
              : "레인가드의 정밀한 기술력이 녹아든 실제 현장 비포&애프터를 확인해 보세요."}
          </p>
        </div>

        {isWaterproof ? (
          /* 방수 시공 사례: 자동 슬라이드 Carousel */
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden mx-[-16px]">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {portfolio.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                      <div className="aspect-[1.1/1] relative overflow-hidden bg-gray-50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={item.beforeImg} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          loading="lazy"
                        />
                      </div>
                      <div className="p-8 md:p-10 flex flex-col flex-grow bg-white">
                        <h3 className="font-black text-xl md:text-2xl mb-4 group-hover:text-blue-600 transition-colors leading-tight break-keep">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 font-bold leading-relaxed opacity-85 whitespace-pre-line break-keep min-h-[48px]">
                          {item.summary}
                        </p>

                        <div className="mt-8 pt-6 border-t border-gray-50">
                          <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="w-8 h-px bg-blue-600"></span>
                            Waterproof Work
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 좌우 이동 화살표 (슬라이드가 필요한 경우에만 노출) */}
            {maxIndex > 0 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-[-20px] md:left-[-40px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all z-10"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-[-20px] md:right-[-40px] top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all z-10"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* 하단 점 표시 (인디케이터) */}
            {maxIndex > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'bg-blue-600 w-6' : 'bg-gray-200 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* 기존 창틀코킹: 3열 격자 & 비포애프터 비교 슬라이더 */
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
        )}

        {/* 추가 이미지 갤러리 영역 (슬라이드 대신 단순 그리드 배치 - 유지) */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {['/portfolio-extra-1.png', '/portfolio-extra-2.jpg', '/portfolio-extra-3.jpg', '/portfolio-extra-4.jpg'].map((imgSrc, index) => (
              <div key={index} className="aspect-[4/3] relative rounded-[32px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={imgSrc} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


