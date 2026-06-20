"use client";

import React, { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const [phoneNumber, setPhoneNumber] = useState("010-7774-5823");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const k = params.get("k");
      if (k) {
        const decoded = decodeURIComponent(k);
        const [, service = ''] = decoded.split('-');
        const waterproofKeywords = ["외벽방수", "옥상방수", "건물방수", "외벽보수"];
        if (waterproofKeywords.includes(service)) {
          setPhoneNumber("010-4667-5568");
        }
      }
    }
  }, []);

  return (
    <a 
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95 group md:w-auto md:px-6 md:rounded-2xl"
      aria-label="전화 상담하기"
      data-track-category="conversion"
      data-track-action="call_click"
      data-track-label="floating_button"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl animate-bounce group-hover:animate-none">📞</span>
        <span className="hidden md:inline font-black text-lg">실시간 전화 상담</span>
      </div>
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 -z-10"></span>
    </a>
  );
}
