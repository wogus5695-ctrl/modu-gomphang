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
    <section className="relative bg-white py-24 md:py-32 overflow-hidden" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Brand Tag - Above Title */}
          <div className="flex items-center justify-center gap-2 mb-8 opacity-90">
            <Image 
              src="/logo.png" 
              alt="레인가드 로고" 
              width={24} 
              height={24} 
              className="rounded-md shadow-sm"
            />
            <span className="text-blue-600 font-extrabold tracking-widest text-sm uppercase">레인가드</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-7xl font-black text-gray-900 mb-10 leading-[1.1] tracking-tighter">
            {title || locationName}
          </h1>
          
          <p className="text-gray-600 text-lg md:text-2xl font-medium mb-12 leading-relaxed max-w-3xl mx-auto tracking-tight opacity-80 whitespace-pre-line">
            {intro || `${locationName} 지역의 창틀누수 고민, 레인가드가 정밀 점검부터 책임 시공까지 완벽하게 해결해 드립니다.`}
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="px-12 py-5 bg-blue-600 text-white text-lg md:text-xl font-bold rounded-2xl shadow-blue-100 shadow-2xl hover:shadow-3xl hover:bg-blue-700 transition-all text-center hover:-translate-y-1"
              data-track-category="conversion"
              data-track-action="inquiry_click"
              data-track-label={`hero_${locationName}`}
            >
              실시간 무료 견적 신청
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
