/**
 * '창틀코킹' (window-caulking) 서비스에 대해 허용된 지역 키워드 및 슬러그 정의
 * 새 지역을 추가할 때 이 리스트에 등록하면 자동으로 페이지가 생성되고 본문이 치환됩니다.
 */
export interface AllowedRegion {
  slug: string;      // URL에 사용될 슬러그 (예: mapo-gu, sang-dong)
  name: string;      // 페이지에 노출될 표시 이름 (예: 마포, 상동)
  province: string;  // 부모 도/특별시 슬러그 (seoul, gyeonggi, incheon 등)
}

export const WINDOW_CAULKING_ALLOWED_REGIONS: Record<string, AllowedRegion> = {
  // 서울 지역
  "mapo-gu": { slug: "mapo-gu", name: "마포", province: "seoul" },
  "gangnam-gu": { slug: "gangnam-gu", name: "강남", province: "seoul" },
  "songpa-gu": { slug: "songpa-gu", name: "송파", province: "seoul" },
  
  // 경기 지역 (부천 및 인근 동)
  "bucheon": { slug: "bucheon", name: "부천", province: "gyeonggi" },
  "sang-dong": { slug: "sang-dong", name: "상동", province: "gyeonggi" },
  "jung-dong": { slug: "jung-dong", name: "중동", province: "gyeonggi" },
  "wonjong-dong": { slug: "wonjong-dong", name: "원종동", province: "gyeonggi" },
};

/**
 * 슬러그를 기반으로 허용된 지역 정보가 있는지 확인하는 헬퍼 함수
 */
export function getWindowCaulkingRegion(citySlug: string) {
  return WINDOW_CAULKING_ALLOWED_REGIONS[citySlug] || null;
}
