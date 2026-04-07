import React from 'react';

interface LocalProcessProps {
  process?: string[];
}

export default function LocalProcess({ process }: LocalProcessProps) {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 bg-white" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 id="process-title" className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
            투명하고 확실한 시공 프로세스
          </h2>
          <div className="w-20 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {process.map((step, i) => (
            <div key={i} className="group relative p-10 bg-gray-50 rounded-[40px] hover:bg-blue-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-blue-400">
              <span className="inline-flex items-center justify-center w-14 h-14 bg-white text-blue-600 rounded-2xl font-black text-2xl mb-8 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-xl font-extrabold text-gray-900 leading-snug group-hover:text-white transition-colors tracking-tight">
                {step}
              </p>
              
              {/* Connector line for desktop */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 w-8 h-px bg-gray-200 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
