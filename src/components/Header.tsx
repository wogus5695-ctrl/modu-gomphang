"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isWaterproof?: boolean;
  isIncheonCaulking?: boolean;
}

export default function Header({ isWaterproof = false, isIncheonCaulking = false }: HeaderProps) {
  const pathname = usePathname();
  
  // 현재 페이지가 지역 랜딩 페이지인 경우 현재 URL을 유지, 그 외엔 메인홈 기준 앵커로 이동
  const isLocalPage = pathname && pathname !== '/' && !pathname.startsWith('/portfolio') && !pathname.startsWith('/services');
  const navPrefix = isLocalPage ? '' : '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.png" 
            alt="레인가드 로고" 
            width={320} 
            height={80} 
            className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105" 
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm sm:text-base">
          <Link href={`${navPrefix}#services`} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">서비스 안내</Link>
          <Link href={`${navPrefix}#cases`} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">시공 사례</Link>
          <Link 
            href={`${navPrefix}#contact`} 
            className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            data-track-category="conversion"
            data-track-action="inquiry_click"
            data-track-label="header_nav"
          >
            견적 문의
          </Link>
        </nav>
        <a 
          href={isWaterproof ? "tel:010-4667-5568" : (isIncheonCaulking ? "tel:010-4467-5568" : "tel:010-7774-5823")} 
          className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white text-sm sm:text-base font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          data-track-category="conversion"
          data-track-action="call_click"
          data-track-label="header_button"
        >
          📞 전화 문의
        </a>
      </div>
    </header>
  );
}
