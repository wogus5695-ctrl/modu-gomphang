import React from 'react';
import Image from 'next/image';

interface LocalAnalysisProps {
  locationName: string;
  problems?: string;
  targets?: string[];
}

export default function LocalAnalysis({ locationName, problems, targets }: LocalAnalysisProps) {
  if (!problems && (!targets || targets.length === 0)) return null;

  return (
    <section className="py-24 bg-white" aria-labelledby="analysis-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black mb-6 uppercase tracking-wider">
                Regional Analysis
              </div>
              <h2 id="analysis-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
                {locationName} <br /> 주거 환경 맞춤 분석
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium whitespace-pre-line tracking-tight opacity-90">
                {problems || `${locationName} 지역의 기후 조건과 건축물 특성을 고려하여 누수 원인을 사전에 정밀하게 분석하고 최적의 공법을 적용합니다.`}
              </p>
            </div>
            
            {targets && targets.length > 0 && (
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                  주요 시공 대상
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {targets.map((target, i) => (
                    <li key={i} className="flex items-center gap-3 p-5 bg-gray-50 rounded-2xl font-extrabold text-gray-800 border border-gray-100/50">
                      <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-blue-600 text-sm">✔</span>
                      </div>
                      {target}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-[50px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white p-10 md:p-14 rounded-[50px] shadow-2xl border border-blue-50 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 opacity-40"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900">전문가 진단</h3>
              </div>

              <p className="text-blue-900 font-extrabold italic leading-relaxed text-xl md:text-2xl mb-6">
                "단순한 실리콘 덧칠은 임시방편일 뿐입니다. {locationName}의 창호 특성에 맞는 근본적인 누수 원인을 해결해야 10년 이상 지속되는 완벽한 방수를 보장할 수 있습니다."
              </p>
              
              <div className="flex items-center gap-3 pt-6 border-t border-blue-50">
                <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/logo.png" alt="레인가드" width={40} height={40} className="grayscale" />
                </div>
                <div>
                  <div className="text-gray-900 font-black text-sm uppercase">RainGuard Technical Team</div>
                  <div className="text-blue-600 font-bold text-xs uppercase tracking-widest">Master Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
