import React from 'react';
import Image from 'next/image';

interface ProcessStep {
  title: string;
  description: string;
}

interface LocalProcessProps {
  title?: string;
  process?: string[] | ProcessStep[];
  imageSrc?: string;
}

export default function LocalProcess({ title, process, imageSrc }: LocalProcessProps) {
  const finalImageSrc = imageSrc || "/process-caulking.jpg";
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black mb-6 uppercase tracking-wider">
            Work Process
          </div>
          <h2 id="process-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter leading-[1.15]">
            {title || "레인가드만의 정석 시공 프로세스"}
          </h2>
          <p className="text-gray-500 font-bold text-lg md:text-xl max-w-2xl border-l-4 border-blue-600 pl-6 leading-relaxed">
            원칙을 지키는 정석 공법과 꼼꼼한 마무리를 통해 <br className="hidden md:block" /> 단 한 번의 시공으로 완벽한 누수 해결을 약속드립니다.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Left: Step Boxes (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            {process.map((step, i) => {
              const isStructured = typeof step !== 'string';
              const stepTitle = isStructured ? (step as ProcessStep).title : step;
              const stepDesc = isStructured ? (step as ProcessStep).description : "";

              return (
                <div key={i} className="group flex flex-col md:flex-row gap-6 p-8 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-2xl font-black text-2xl shadow-lg shadow-blue-100">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {stepTitle}
                    </h3>
                    {stepDesc && (
                      <p className="text-gray-500 font-bold leading-relaxed whitespace-pre-line opacity-90">
                        {stepDesc}
                      </p>
                    )}
                  </div>
                  
                  {/* Decorative faint number in background */}
                  <span className="absolute -bottom-4 -right-2 text-9xl font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
                    {i + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Construction Image (5 Columns) */}
          <div className="lg:col-span-5 relative order-first lg:order-last mb-12 lg:mb-0">
            <div className="sticky top-24">
              <div className="relative rounded-[56px] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                <Image 
                  src={finalImageSrc} 
                  alt="레인가드 정석 시공 현장"
                  fill
                  className="object-cover object-right"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                
                {/* Image Caption */}
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-[32px] border border-white/20">
                  <div className="text-white">
                    <p className="font-black text-xl mb-1">정밀 시공 현장</p>
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Premium Caulking Solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


