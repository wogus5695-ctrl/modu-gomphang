/**
 * '창틀코킹' (window-caulking) 서비스에 대해 허용된 지역 키워드 및 슬러그 정의
 * 새 지역을 추가할 때 이 리스트에 등록하면 자동으로 페이지가 생성되고 본문이 치환됩니다.
 */
export interface AllowedRegion {
  slug: string;           // URL에 사용될 슬러그 (예: mapo, mangwon-dong)
  name: string;           // 페이지에 노출될 표시 이름 (예: 마포, 망원동)
  province: string;       // 부모 도/특별시 슬러그 (seoul, gyeonggi, incheon 등)
  parentDistrict?: string; // 상위 구/시 명칭 (동 단위 키워드 생성 시 필수 결합용)
}

export const WINDOW_CAULKING_ALLOWED_REGIONS: Record<string, AllowedRegion> = {
  // 서울 지역 (25개 구 전체 - '구' 제외, 중구 예외)
  "gangnam-gu": { slug: "gangnam-gu", name: "강남", province: "seoul" },
  "gangdong-gu": { slug: "gangdong-gu", name: "강동", province: "seoul" },
  "gangbuk-gu": { slug: "gangbuk-gu", name: "강북", province: "seoul" },
  "gangseo-gu": { slug: "gangseo-gu", name: "강서", province: "seoul" },
  "gwanak-gu": { slug: "gwanak-gu", name: "관악", province: "seoul" },
  "gwangjin-gu": { slug: "gwangjin-gu", name: "광진", province: "seoul" },
  "guro-gu": { slug: "guro-gu", name: "구로", province: "seoul" },
  "geumcheon-gu": { slug: "geumcheon-gu", name: "금천", province: "seoul" },
  "nowon-gu": { slug: "nowon-gu", name: "노원", province: "seoul" },
  "dobong-gu": { slug: "dobong-gu", name: "도봉", province: "seoul" },
  "dongdaemun-gu": { slug: "dongdaemun-gu", name: "동대문", province: "seoul" },
  "dongjak-gu": { slug: "dongjak-gu", name: "동작", province: "seoul" },
  "mapo-gu": { slug: "mapo-gu", name: "마포", province: "seoul" },
  "seodaemun-gu": { slug: "seodaemun-gu", name: "서대문", province: "seoul" },
  "seocho-gu": { slug: "seocho-gu", name: "서초", province: "seoul" },
  "seongdong-gu": { slug: "seongdong-gu", name: "성동", province: "seoul" },
  "seongbuk-gu": { slug: "seongbuk-gu", name: "성북", province: "seoul" },
  "songpa-gu": { slug: "songpa-gu", name: "송파", province: "seoul" },
  "yangcheon-gu": { slug: "yangcheon-gu", name: "양천", province: "seoul" },
  "yeongdeungpo-gu": { slug: "yeongdeungpo-gu", name: "영등포", province: "seoul" },
  "yongsan-gu": { slug: "yongsan-gu", name: "용산", province: "seoul" },
  "eunpyeong-gu": { slug: "eunpyeong-gu", name: "은평", province: "seoul" },
  "jongno-gu": { slug: "jongno-gu", name: "종로", province: "seoul" },
  "junggu": { slug: "junggu", name: "중구", province: "seoul" },
  "jungnang-gu": { slug: "jungnang-gu", name: "중랑", province: "seoul" },
  
  // 서울 지역 (동 단위 - 상위 구 명칭 필수 결합)
  "mangwon-dong": { slug: "mangwon-dong", name: "망원동", province: "seoul", parentDistrict: "마포" },
  "seongsan-dong": { slug: "seongsan-dong", name: "성산동", province: "seoul", parentDistrict: "마포" },
  "yeoksam-dong": { slug: "yeoksam-dong", name: "역삼동", province: "seoul", parentDistrict: "강남" },
  "gaepo-dong": { slug: "gaepo-dong", name: "개포동", province: "seoul", parentDistrict: "강남" },
  "jam-sill": { slug: "jam-sill", name: "잠실동", province: "seoul", parentDistrict: "송파" },
  "sindang-dong": { slug: "sindang-dong", name: "신당동", province: "seoul", parentDistrict: "중구" },
  "hwigyeong-dong": { slug: "hwigyeong-dong", name: "휘경동", province: "seoul", parentDistrict: "동대문" },
  "sanggye-dong": { slug: "sanggye-dong", name: "상계동", province: "seoul", parentDistrict: "노원" },
  
  // 경기 지역 (28개 시 전체 - '시' 제외)
  "suwon": { slug: "suwon", name: "수원", province: "gyeonggi" },
  "yongin": { slug: "yongin", name: "용인", province: "gyeonggi" },
  "hwaseong": { slug: "hwaseong", name: "화성", province: "gyeonggi" },
  "seongnam": { slug: "seongnam", name: "성남", province: "gyeonggi" },
  "bucheon": { slug: "bucheon", name: "부천", province: "gyeonggi" },
  "ansan": { slug: "ansan", name: "안산", province: "gyeonggi" },
  "pyeongtaek": { slug: "pyeongtaek", name: "평택", province: "gyeonggi" },
  "anyang": { slug: "anyang", name: "안양", province: "gyeonggi" },
  "siheung": { slug: "siheung", name: "시흥", province: "gyeonggi" },
  "gimpo": { slug: "gimpo", name: "김포", province: "gyeonggi" },
  "gwangju-si": { slug: "gwangju-si", name: "광주", province: "gyeonggi" },
  "hanam": { slug: "hanam", name: "하남", province: "gyeonggi" },
  "gwangmyeong": { slug: "gwangmyeong", name: "광명", province: "gyeonggi" },
  "gunpo": { slug: "gunpo", name: "군포", province: "gyeonggi" },
  "osan": { slug: "osan", name: "오산", province: "gyeonggi" },
  "icheon": { slug: "icheon", name: "이천", province: "gyeonggi" },
  "anseong": { slug: "anseong", name: "안성", province: "gyeonggi" },
  "uiwang": { slug: "uiwang", name: "의왕", province: "gyeonggi" },
  "yeoju": { slug: "yeoju", name: "여주", province: "gyeonggi" },
  "gwacheon": { slug: "gwacheon", name: "과천", province: "gyeonggi" },
  "goyang": { slug: "goyang", name: "고양", province: "gyeonggi" },
  "namyangju": { slug: "namyangju", name: "남양주", province: "gyeonggi" },
  "paju": { slug: "paju", name: "파주", province: "gyeonggi" },
  "uijeongbu": { slug: "uijeongbu", name: "의정부", province: "gyeonggi" },
  "yangju": { slug: "yangju", name: "양주", province: "gyeonggi" },
  "guri": { slug: "guri", name: "구리", province: "gyeonggi" },
  "pocheon": { slug: "pocheon", name: "포천", province: "gyeonggi" },
  "dongducheon": { slug: "dongducheon", name: "동두천", province: "gyeonggi" },
  
  // 경기 지역 (동 단위)
  "sang-dong": { slug: "sang-dong", name: "상동", province: "gyeonggi", parentDistrict: "부천" },
  "jung-dong": { slug: "jung-dong", name: "중동", province: "gyeonggi", parentDistrict: "부천" },
  "wonjong-dong": { slug: "wonjong-dong", name: "원종동", province: "gyeonggi", parentDistrict: "부천" },
};

/**
 * 슬러그를 기반으로 허용된 지역 정보가 있는지 확인하는 헬퍼 함수
 */
export function getWindowCaulkingRegion(citySlug: string) {
  return WINDOW_CAULKING_ALLOWED_REGIONS[citySlug] || null;
}
