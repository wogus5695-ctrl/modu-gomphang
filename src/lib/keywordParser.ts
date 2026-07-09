export const SERVICES = [
  "창틀코킹",
  "창틀누수",
  "빗물누수",
  "창틀실리콘",
  "샷시실리콘",
  "외벽보수",
  "외벽방수",
  "옥상방수",
  "건물방수",
  "외벽도색"
];

export interface ParsedResult {
  location: string;
  service: string;
  keyword: string;
}

export function parseKeyword(rawK: string): ParsedResult {
  if (!rawK) {
    return {
      location: "레인가드",
      service: "창틀코킹",
      keyword: "레인가드 창틀코킹"
    };
  }

  // 1. decodeURIComponent 처리
  let decoded = "";
  try {
    decoded = decodeURIComponent(rawK);
  } catch (e) {
    decoded = rawK;
  }

  // 2. 하이픈(-)은 공백으로 변환
  // 3. 연속 공백은 1칸으로 정리
  const cleaned = decoded.replace(/-/g, " ").replace(/\s+/g, " ").trim();

  // 4. SERVICES 배열에서 현재 keyword가 어떤 작업명으로 끝나는지 확인
  // 5. 가장 긴 작업명부터 매칭
  const sortedServices = [...SERVICES].sort((a, b) => b.length - a.length);

  let matchedService = "";
  for (const s of sortedServices) {
    if (cleaned.endsWith(s)) {
      matchedService = s;
      break;
    }
  }

  // 9. 작업명 매칭 실패 시 warning을 남김
  if (!matchedService) {
    console.warn(`[Warning] No matching service found in SERVICES for keyword: "${cleaned}". Falling back to default (창틀코킹).`);
    // 매칭 실패 시, 마지막 단어를 서비스로 보고 나머지를 지역으로 추출 시도하거나 기본값 적용
    const lastSpaceIndex = cleaned.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      const location = cleaned.substring(0, lastSpaceIndex).trim();
      const service = cleaned.substring(lastSpaceIndex + 1).trim();
      return {
        location: location || "레인가드",
        service: service || "창틀코킹",
        keyword: `${location || "레인가드"} ${service || "창틀코킹"}`
      };
    }
    return {
      location: cleaned || "레인가드",
      service: "창틀코킹",
      keyword: `${cleaned || "레인가드"} 창틀코킹`
    };
  }

  // 6. 매칭된 작업명을 service로 사용
  const service = matchedService;

  // 7. service 앞의 나머지 문자열 전체를 location으로 사용
  const serviceStartIndex = cleaned.lastIndexOf(service);
  let location = cleaned.substring(0, serviceStartIndex).trim();

  // 인천 구 단위 누락 교정을 위한 정규화 처리
  const incheonGuMap: Record<string, string> = {
    "인천 부평": "인천 부평구",
    "인천 계양": "인천 계양구",
    "인천 미추홀": "인천 미추홀구",
    "인천 남동": "인천 남동구",
    "인천 연수": "인천 연수구",
    "인천 서구": "인천 서구",
    "인천 동구": "인천 동구",
    "인천 중구": "인천 중구",
    "부평": "부평구",
    "계양": "계양구",
    "미추홀": "미추홀구",
    "남동": "남동구",
    "연수": "연수구",
    "제물포": "제물포구",
    "영종": "영종구",
    "서해": "서해구",
    "검단": "검단구"
  };

  if (incheonGuMap[location]) {
    location = incheonGuMap[location];
  }

  // 8. keyword는 `${location} ${service}` 형태로 생성
  return {
    location: location || "레인가드",
    service: service,
    keyword: `${location || "레인가드"} ${service}`
  };
}
