import React from 'react';

interface LocalHeroProps {
  locationName: string;
  serviceTitle: string;
  title?: string;
  intro?: string;
  keywords?: string[];
}

export default function LocalHero({ locationName, serviceTitle, title, intro, keywords }: LocalHeroProps) {
  return (
    <section className="relative bg-white py-24 overflow-hidden" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-extrabold tracking-widest uppercase mb-4 block">레인가드 로컬 프리미엄</span>
          <h1 id="hero-title" className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
            {title || `${locationName} 창틀코킹 전문가`}
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
            {intro || `${locationName} 지역의 창틀누수 고민, 레인가드가 해결해 드립니다.`}
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-blue-600 text-white text-xl font-bold rounded-2xl shadow-blue-200 shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all text-center"
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
