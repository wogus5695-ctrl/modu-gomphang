"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { resolveContactInfo } from '@/data/contactProfiles';

interface FooterProps {
  dynamicKeyword?: string;
  isWaterproof?: boolean;
  isMainPage?: boolean;
  isIncheonCaulking?: boolean;
  isNewExpansion?: boolean;
  footerDesc?: string;
}

export default function Footer({ dynamicKeyword, isWaterproof = false, isMainPage = false, isIncheonCaulking = false, isNewExpansion = false, footerDesc }: FooterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // 메인 페이지 판별 (?k= 파라미터가 없고 pathname이 '/'인 경우)
  const isMainPageActual = pathname === "/" && !searchParams.get("k");

  // 중앙 집중식 연락처 조회 함수 사용
  const resolved = resolveContactInfo(pathname, searchParams.get("k"));
  const phone = resolved.phone;

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="레인가드 창틀코킹 방수 전문 브랜드 로고" 
                width={120} 
                height={30} 
                className="h-6 md:h-7 w-auto opacity-80" 
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              {footerDesc || (
                <>레인가드는 {dynamicKeyword ? <strong>{dynamicKeyword}</strong> : "아파트 및 주거 시설의 빗물누수"} 문제를 완벽하게 해결하는 창틀코킹 및 누수 보수 전문 브랜드입니다. 정밀 점검과 전문 실리콘 코킹 공법으로 안전한 주거 환경을 약속합니다.</>
              )}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-900 font-bold text-lg mb-4">고객센터</p>
            <div className="space-y-2">
              <a 
                href={`tel:${phone}`} 
                className="text-3xl font-black text-blue-600 hover:text-blue-700 transition-colors block"
              >
                {phone}
              </a>
              <p className="text-gray-500 text-sm">평일/주말 09:00 ~ 20:00 (연중무휴)</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">
            <p className="text-gray-400 text-xs tracking-tight">
              {isMainPageActual ? (
                <>상호명: 올케어서비스 | 대표: 김재현 | 사업자등록번호: 405-15-02677</>
              ) : (
                <>대표: 권병훈 | 사업자등록번호: 740-14-02758</>
              )}
            </p>
            <div className="flex items-center gap-3">
              <Link href="/service-area" className="hidden text-gray-400 hover:text-gray-600 text-xs underline decoration-gray-200 underline-offset-2 transition-colors tracking-tight">
                서비스 지역 전체보기
              </Link>
              <span className="hidden text-gray-200 text-xs">|</span>
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} 레인가드. All rights reserved.
              </p>
            </div>
          </div>
          <p className="text-gray-400/70 text-[11px] tracking-tight text-center md:text-left break-keep">
            * {dynamicKeyword ? <strong>{dynamicKeyword}</strong> : "서울·경기·인천·강원"} 지역 창틀코킹 및 빗물누수 보수 상담 가능
          </p>
        </div>
      </div>
    </footer>
  );
}
