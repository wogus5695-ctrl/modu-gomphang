import React from 'react';
import Image from 'next/image';

interface LocalHeroProps {
  locationName: string;
  serviceTitle: string;
  title?: string;
  intro?: string;
  keywords?: string[];
}

export default function LocalHero({ locationName, serviceTitle, title, intro, keywords }: LocalHeroProps) {
  return (
    <section className="relative bg-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden" aria-labelledby="hero-title">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content Block */}
          <div className="text-left order-2 lg:order-1">
            {/* 1. Brand Logo + Name */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-1.5 rounded-xl shadow-lg shadow-blue-100">
                <Image 
                  src="/logo.png" 
                  alt="레인가드 로고" 
                  width={28} 
                  height={28} 
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-blue-600 font-black tracking-widest text-base uppercase">레인가드</span>
            </div>

            {/* 2. H1 Title */}
            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.15] tracking-tight">
              {title || locationName}
            </h1>
            
            {/* 3. Description */}
            <p className="text-gray-600 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-2xl opacity-90 whitespace-pre-line">
              {intro || `${locationName} 지역의 창틀누수 고민, 레인가드가 정밀 점검부터 책임 시공까지 완벽하게 해결해 드립니다.`}
            </p>

            {/* 4. Core Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {keywords?.slice(0, 4).map((kw, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-bold text-sm md:text-base">{kw}</span>
                </div>
              ))}
              {!keywords && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-bold">100% 책임 시공제</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-bold">정밀 누수 진단 서비스</span>
                  </div>
                </>
              )}
            </div>
            
            {/* 5. CTA Button */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-blue-600 text-white text-lg font-black rounded-2xl shadow-xl shadow-blue-100 hover:shadow-2xl hover:bg-blue-700 transition-all text-center hover:-translate-y-1 block sm:inline-block"
                data-track-category="conversion"
                data-track-action="inquiry_click"
                data-track-label={`hero_${locationName}`}
              >
                실시간 무료 견적 신청
              </a>
            </div>
          </div>

          {/* Right: Visual Block */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl z-20 aspect-[4/3] md:aspect-square lg:aspect-[4/5]">
              <Image 
                src="/hero-caulking.png"
                alt={`${locationName} 창틀코킹 시공 현장`}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
            
            {/* Decoration Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10 blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100/50 rounded-full -z-10 blur-2xl" />
            
            {/* Floating Badge (Trust Point) */}
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-30 hidden md:block border border-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">
                  10+
                </div>
                <div>
                  <div className="text-gray-900 font-black text-lg leading-tight">시공 경력</div>
                  <div className="text-gray-500 font-bold text-sm">전문 기술팀 운용</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

