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
            <h2 id="costs-title" className="text-3xl font-black text-gray-900 mb-6 leading-tight">
              합리적인 시공 <br className="hidden lg:block" /> 비용 결정 요소
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed font-medium">
              레인가드는 과도한 비용을 요구하지 않습니다. 현장 상황을 정밀하게 분석하여 꼭 필요한 시공만을 제안해 드립니니다.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {costFactors.map((factor, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <span className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black">
                  KW
                </span>
                <p className="text-gray-900 font-bold leading-tight">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
