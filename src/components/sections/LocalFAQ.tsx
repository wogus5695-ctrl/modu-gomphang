import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface LocalFAQProps {
  title?: string;
  faqs?: FAQ[];
}

export default function LocalFAQ({ title, faqs }: LocalFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-white" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-black mb-6 uppercase tracking-wider">
            Common Questions
          </div>
          <h2 id="faq-title" className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">
            {title || "자주 묻는 질문 (FAQ)"}
          </h2>
          <p className="text-gray-500 font-bold text-lg max-w-2xl mx-auto opacity-80">
            고객님들이 가장 궁금해하시는 핵심 내용을 정리했습니다. <br className="hidden md:block" /> 더 자세한 상담은 언제든 문의해 주세요.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group p-8 bg-gray-50 rounded-[32px] border border-gray-100/50 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-extrabold text-gray-900 mb-4 flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center text-sm font-black italic">Q</span> 
                {faq.question}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed pl-12">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

