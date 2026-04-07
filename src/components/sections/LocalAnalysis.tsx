import React from 'react';

interface LocalAnalysisProps {
  locationName: string;
  problems?: string;
  targets?: string[];
}

export default function LocalAnalysis({ locationName, problems, targets }: LocalAnalysisProps) {
  if (!problems && (!targets || targets.length === 0)) return null;

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100" aria-labelledby="analysis-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div>
              <h2 id="analysis-title" className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-l-8 border-blue-600 pl-6 tracking-tighter">
                {locationName} 지역 특성 분석
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium whitespace-pre-line tracking-tight opacity-90">
                {problems || `${locationName} 지역의 기후와 주거 특성을 고려한 맞춤형 시공을 진행합니다.`}
              </p>
            </div>
            
            {targets && targets.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 시공 대상</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {targets.map((target, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 font-bold text-gray-700">
                      <span className="text-blue-600 text-xl font-black">✔</span> {target}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <h3 className="text-2xl font-black text-gray-900 mb-6">전문가 한마디</h3>
            <p className="text-blue-900 font-bold italic leading-relaxed text-lg">
              "단순한 덧방 시공으로는 누수를 해결할 수 없습니다. {locationName}의 창호 특성에 맞는 정밀한 원인 분석과 정석 시공은 오직 레인가드만이 약속하는 품질입니다."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
