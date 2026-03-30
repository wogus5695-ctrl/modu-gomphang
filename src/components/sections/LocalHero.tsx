import React from 'react';

interface LocalHeroProps {
  locationName: string;
  serviceTitle: string;
  intro?: string;
  keywords?: string[];
}

export default function LocalHero({ locationName, serviceTitle, intro, keywords }: LocalHeroProps) {
  return (
    <section className="relative bg-white py-24 overflow-hidden" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-blue-600 font-black tracking-widest uppercase mb-4 block">Zium Local Premium</span>
          <h1 id="hero-title" className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8 break-keep">
            {locationName} <br className="md:hidden" /> <span className="text-blue-600">{serviceTitle}</span> 완벽 해결
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium break-keep mb-10">
            {intro || `${locationName} 지역의 곰팡이 고민, 지움(Zium)이 해결해 드립니다.`}
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
        
        {keywords && keywords.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {keywords.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold border border-blue-100">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
