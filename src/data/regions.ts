export interface Province {
  slug: string;
  name: string;
  cities: City[];
}

export interface City {
  slug: string;
  name: string;
}

export const regions: Province[] = [
  {
    slug: "gyeonggi",
    name: "경기도",
    cities: [
      { slug: "bucheon", name: "부천시" },
      { slug: "ansan", name: "안산시" },
      { slug: "suwon", name: "수원시" },
      { slug: "goyang", name: "고양시" },
      { slug: "gwangmyeong", name: "광명시" },
      { slug: "anyang", name: "안양시" },
      { slug: "siheung", name: "시흥시" },
      { slug: "gunpo", name: "군포시" },
      { slug: "uijeongbu", name: "의정부시" }
    ],
  },
  {
    slug: "seoul",
    name: "서울특별시",
    cities: [
      { slug: "gangnam-gu", name: "강남구" },
      { slug: "gangseo-gu", name: "강서구" },
      { slug: "songpa-gu", name: "송파구" },
      { slug: "yeongdeungpo-gu", name: "영등포구" },
      { slug: "mapo-gu", name: "마포구" },
      { slug: "guro-gu", name: "구로구" },
      { slug: "yangcheon-gu", name: "양천구" }
    ],
  },
  {
    slug: "incheon",
    name: "인천광역시",
    cities: [
      { slug: "bupyeong-gu", name: "부평구" },
      { slug: "gyeyang-gu", name: "계양구" },
      { slug: "namdong-gu", name: "남동구" },
      { slug: "michuhol-gu", name: "미추홀구" },
      { slug: "yeonsu-gu", name: "연수구" },
      { slug: "seo-gu", name: "서구" }
    ],
  }
];

/**
 * URL 슬러그를 기반으로 지역 정보를 조회하는 헬퍼 함수
 */
export function getRegionInfo(provinceSlug: string, citySlug: string) {
  const province = regions.find((p) => p.slug === provinceSlug);
  if (!province) return null;
  
  const city = province.cities.find((c) => c.slug === citySlug);
  if (!city) return null;
  
  return { province, city };
}

/**
 * 지역 이름(예: '부천', '강남구')으로 해당 지역의 슬러그 정보를 찾는 헬퍼
 */
export function getRegionByLocationName(name: string) {
  for (const province of regions) {
    const city = province.cities.find(c => c.name.includes(name) || name.includes(c.name));
    if (city) {
      return {
        provinceSlug: province.slug,
        citySlug: city.slug,
        provinceName: province.name,
        cityName: city.name
      };
    }
  }
  return null;
}
