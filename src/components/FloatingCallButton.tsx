import React from 'react';

export default function FloatingCallButton() {
  return (
    <a 
      href="tel:010-3059-5695"
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95 group md:w-auto md:px-6 md:rounded-2xl"
      aria-label="전화 상담하기"
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
