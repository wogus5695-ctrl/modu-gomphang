"use client";

import React, { useEffect, useState } from 'react';
import { NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA } from '@/data/sitemapKeywords';

export default function FloatingCallButton() {
  const [phoneNumber, setPhoneNumber] = useState("010-7774-5823");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const k = params.get("k");
      if (k) {
        const decoded = decodeURIComponent(k);
        const [region = '서울', service = ''] = decoded.split('-');
        const waterproofKeywords = ["외벽방수", "옥상방수", "건물방수", "외벽도색"];
        const incheonRegions = [
          "인천", "인천시", "인천광역시", "강화", "강화군", "옹진", "옹진군", 
          "중구", "동구", "미추홀", "미추홀구", "연수", "연수구", "남동", "남동구", 
          "부평", "부평구", "계양", "계양구", "서구",
          "부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동"
        ];
        
        // NEW_REGIONS_DATA 기반 신규 확장 지역 동적 키워드 리스트 생성
        const newRegionsList = NEW_REGIONS_DATA.reduce((acc: string[], r) => {
          acc.push(r.gu);
          acc.push(`${r.gu}시`);
          acc.push(`${r.gu}구`);
          r.dongs.forEach(d => acc.push(d));
          return acc;
        }, []);

        // EXPANSION_REGIONS_DATA 기반 신규 확장 지역 동적 키워드 리스트 생성
        const expansionRegionsList = EXPANSION_REGIONS_DATA.reduce((acc: string[], r) => {
          acc.push(r.gu);
          acc.push(`${r.gu}시`);
          acc.push(`${r.gu}구`);
          r.dongs.forEach(d => acc.push(d));
          return acc;
        }, []);
        
        if (waterproofKeywords.includes(service)) {
          setPhoneNumber("010-4667-5568");
        } else if (incheonRegions.includes(region) || newRegionsList.includes(region) || expansionRegionsList.includes(region)) {
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
