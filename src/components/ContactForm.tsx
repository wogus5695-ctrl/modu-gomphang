"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxUpW4LtbQhYF_zqGHjSCUuDDQ4-ixlwSWKcv_d000OY9oLShYesbQq48Rr2wZCzDPHTQ/exec', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        // 전환 추적 이벤트 발생 지점 (GA4/GTM 등 연결 가능)
        console.log('Conversion: inquiry_success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleFocus = () => {
    // 폼 진입(입력 시작) 이벤트 추적
    console.log('Conversion: form_focus');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl"
    >
      {status === 'success' ? (
        <div className="py-12 text-center animate-fade-in">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-black mb-2">무료 견적 신청 완료!</h3>
          <p className="text-blue-100 italic">담당 전문가가 곧 연락드리겠습니다.</p>
          <button 
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-8 text-white/60 hover:text-white text-sm transition-colors border-b border-white/20"
          >
            새로운 문의 작성하기
          </button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input 
              name="name" 
              type="text" 
              placeholder="성함" 
              required 
              disabled={status === 'loading'}
              onFocus={handleFocus}
              className="bg-white/90 text-gray-900 placeholder:text-gray-400 w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 ring-blue-400/50 transition-all font-medium disabled:opacity-50" 
            />
            <input 
              name="phone" 
              type="tel" 
              placeholder="연락처 ('-' 없이 입력)" 
              required 
              disabled={status === 'loading'}
              onFocus={handleFocus}
              className="bg-white/90 text-gray-900 placeholder:text-gray-400 w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 ring-blue-400/50 transition-all font-medium disabled:opacity-50" 
            />
          </div>
          <textarea 
            name="message" 
            placeholder="문의 내용 및 지역 (예: 거실 창틀 실리콘 벌어짐, 빗물 누수 점검, 부천 상동 아파트)" 
            required 
            rows={4} 
            disabled={status === 'loading'}
            onFocus={handleFocus}
            className="bg-white/90 text-gray-900 placeholder:text-gray-400 w-full px-6 py-4 rounded-xl mb-8 focus:outline-none focus:ring-4 ring-blue-400/50 transition-all font-medium resize-none disabled:opacity-50"
          ></textarea>
          <button 
            type="submit" 
            disabled={status === 'loading'}
            data-track-category="conversion"
            data-track-action="form_submit_attempt"
            data-track-label="inquiry_form"
            className="w-full bg-white text-blue-600 font-black text-xl py-5 rounded-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-2xl disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {status === 'loading' ? (
              <>
                <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                전송 중...
              </>
            ) : (
              "실시간 무료 견적 신청하기"
            )}
          </button>
          {status === 'error' && (
            <p className="mt-4 text-red-200 text-sm">오류가 발생했습니다. 다시 시도해 주세요.</p>
          )}
          <p className="mt-4 text-blue-200 text-sm">상담 신청 연락은 순차적으로 진행됩니다.</p>
        </>
      )}
    </form>
  );
}
