import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface LocalFAQProps {
  faqs?: FAQ[];
}

export default function LocalFAQ({ faqs }: LocalFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-white" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tighter">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-gray-500 font-medium tracking-tight opacity-80 underline underline-offset-8 decoration-blue-200">
            지역 고객님들이 궁금해하시는 핵심 내용을 정리했습니다
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-blue-600 mb-4 flex gap-3">
                <span className="text-2xl opacity-30 italic">Q</span> {faq.question}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed pl-8 border-l border-blue-100">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
