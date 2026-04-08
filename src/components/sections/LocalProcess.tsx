import React from 'react';

interface LocalProcessProps {
  title?: string;
  process?: string[];
}

export default function LocalProcess({ title, process }: LocalProcessProps) {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50/50" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black mb-6 uppercase tracking-wider">
            Work Process
          </div>
          <h2 id="process-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
            {title || "투명하고 확실한 시공 프로세스"}
          </h2>
          <p className="text-gray-500 font-bold text-lg max-w-2xl mx-auto">
            레인가드는 정해진 원칙과 공법을 철저히 준수하여 <br className="hidden md:block" /> 단 한 번의 시공으로 완벽한 결과를 만듭니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, i) => (
            <div key={i} className="group relative p-10 bg-white rounded-[48px] hover:bg-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-transparent">
              <span className="inline-flex items-center justify-center w-14 h-14 bg-gray-50 text-blue-600 rounded-2xl font-black text-2xl mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-xl font-extrabold text-gray-900 leading-[1.4] group-hover:text-white transition-colors tracking-tight">
                {step}
              </p>
              
              {/* Connector line for desktop */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 w-8 h-px bg-gray-100 z-10 group-hover:bg-blue-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

