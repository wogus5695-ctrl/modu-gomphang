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
              합리적인 시공 <br className="hidden lg:block" /> 비용 결정 요소
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium tracking-tight opacity-90">
              레인가드는 투명한 견적 시스템을 지향합니다. 불필요한 공정을 제외하고 오직 현장에 꼭 필요한 시공만을 제안하여 최적의 비용으로 해결해 드립니다.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {costFactors.map((factor, i) => (
              <div key={i} className="group flex items-center gap-5 p-8 bg-white rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <span className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-900 font-extrabold text-lg leading-snug tracking-tight">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

