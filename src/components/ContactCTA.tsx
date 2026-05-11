"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6">
      {/* 전화상담 버튼 */}
      <a
        href="tel:010-7774-5823"
        className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#1B61FC] text-white text-xl md:text-2xl font-black rounded-3xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 group"
        data-track-category="conversion"
        data-track-action="call_click"
        data-track-label="main_cta_section"
      >
        <Phone className="w-6 h-6 md:w-8 md:h-8 group-hover:animate-bounce" />
        <span>전화상담 바로가기</span>
      </a>

      {/* 카톡상담 버튼 */}
      <div className="flex-1 relative">
        <a
          href="http://pf.kakao.com/_xkAXxlX"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#F7E600] text-gray-900 text-xl md:text-2xl font-black rounded-3xl hover:bg-[#e6d500] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 group"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          <span>카톡상담 바로가기</span>
        </a>
        
        {/* Placeholder tag for future link update */}
        <span className="sr-only">카카오톡 연동 대기 중</span>
      </div>
    </div>
  );
}
