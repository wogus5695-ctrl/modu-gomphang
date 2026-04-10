import React from 'react';
import Image from 'next/image';

interface AnalysisBlock {
  title: string;
  description: string;
  checkpoints: string[];
}

interface LocalAnalysisProps {
  locationName: string;
  dynamicKeyword?: string;
  introTitle?: string;
  introDesc?: string;
  blocks?: AnalysisBlock[];
}

export default function LocalAnalysis({
  locationName,
  dynamicKeyword,
  introTitle,
  introDesc,
  blocks
}: LocalAnalysisProps) {
  // Default blocks for Window Caulking if not provided
  const defaultBlocks: AnalysisBlock[] = [
    {
      title: "01. 근본 원인 정밀 진단",
      description: "단순한 실리콘 덧방은 임시방편일 뿐입니다. 창틀, 외벽 균열, 프레임 구조를 입체적으로 분석하여 누수의 근본 원인을 찾아냅니다.",
      checkpoints: ["전문 장비를 활용한 누수 지점 추적", "외벽 접합부 및 미세 균열 동시 점검", "재발 방지를 위한 구조적 취약점 분석"]
    },
    {
      title: "02. 고품질 정석 공정 시공",
      description: "기존의 노후된 실리콘을 완전히 제거하는 것부터 시작합니다. 전용 프라이머 도포와 고성능 실런트 사용으로 완벽한 밀착력을 보장합니다.",
      checkpoints: ["노후 실리콘 100% 제거 선행", "샷시 전용 고기능성 실런트 사용", "기밀성을 높이는 전문가의 정밀 코킹"]
    },
    {
      title: "03. 철저한 사후 대응 및 관리",
      description: "시공 후에도 비가 올 때의 상태를 함께 체크하며 책임 있는 사후 관리를 약속합니다. 레인가드는 정직한 기술력을 끝까지 책임집니다.",
      checkpoints: ["시공 부위 책임 보증제 실시", "현장 맞춤형 유지 관리 가이드 제공", "하자 발생 시 신속한 전담 팀 대응"]
    }
  ];

  const displayBlocks = blocks || defaultBlocks;

  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="analysis-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black mb-6 uppercase tracking-wider">
            Expert Analysis
          </div>
          <h2 id="analysis-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.15] tracking-tighter">
            {introTitle || `${locationName} 창틀누수,\n왜 전문 브랜드로 해결해야 할까요?`}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-bold opacity-90 whitespace-pre-line tracking-tight border-l-4 border-blue-600 pl-6">
            {introDesc || "창틀누수는 단순한 소모품 교체가 아닙니다.\n노후 실리콘 제거부터 외벽 접합부 상태까지 정확히 읽어내야\n비로소 빗물로부터 안전한 주거 공간이 완성됩니다."}
          </p>
        </div>

        {/* 3-Column Strength Blocks */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {displayBlocks.map((block, idx) => (
            <div key={idx} className="group p-10 bg-gray-50 rounded-[48px] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-50">
              <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                {block.title}
              </h3>
              <p className="text-gray-600 font-extrabold leading-relaxed mb-8 opacity-80">
                {block.description}
              </p>
              <ul className="space-y-4">
                {block.checkpoints.map((check, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-bold text-[15px]">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO Footnote - Clean finishing note without visual distractions */}
        <div className="mt-20 pt-12 border-t border-gray-100 text-gray-400 text-sm font-bold leading-relaxed px-4 text-center max-w-4xl mx-auto">
          <p>
            ※ 레인가드는 {dynamicKeyword ? dynamicKeyword : (locationName ? `${locationName} 창틀코킹` : "창틀코킹")} 전문가가 현장에 맞는 작업으로 주거 환경의 가치를 지켜드립니다.
            <br className="hidden sm:block" />
            본 페이지는 고객님들을 위한 주거 환경 분석과 시공 가이드를 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

