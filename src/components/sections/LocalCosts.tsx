import React from 'react';

interface LocalCostsProps {
  costFactors?: string[];
}

export default function LocalCosts({ costFactors }: LocalCostsProps) {
  if (!costFactors || costFactors.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100" aria-labelledby="costs-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 id="costs-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
              <span className="text-blue-600 block lg:inline">합리적인 시공</span> <br className="hidden lg:block" /> 비용 결정 요소
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-bold tracking-tight opacity-95">
              <span className="block mb-1">
                레인가드는 <span className="relative inline-block overflow-visible after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600/30 after:rounded-full">투명한 견적 시스템</span>을 지향합니다.
              </span>
              <span className="block mb-1 md:inline lg:block">불필요한 공정을 제외하고</span>
              <span className="block mb-1 md:inline lg:block">현장에 꼭 필요한 시공만을 제안하여</span>
              <span className="block">
                <span className="text-blue-600 font-black">최적의 비용</span>으로 해결해 드립니다.
              </span>
            </p>
          </div>
          
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end gap-5">
            <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[450px]">
              {costFactors.map((factor, i) => (
                <div key={i} className="group flex items-center gap-5 px-8 py-6 bg-white rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-gray-900 font-bold text-lg md:text-xl leading-none tracking-tight md:whitespace-nowrap">
                    {factor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

