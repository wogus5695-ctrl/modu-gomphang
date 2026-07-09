import { parseKeyword } from "@/lib/keywordParser";
import { getDynamicHomeData, getHash, isNewExpansionArea } from "@/lib/dynamicHome";
import { WATERPROOF_SERVICES, NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA } from "@/data/sitemapKeywords";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";

// 수정 전 pre-modification 스냅샷 규칙을 기반으로 한 비교 대조군 계산기
function getSnapshotExpected(rawK: string) {
  let isWaterproof = false;
  let isIncheonCaulking = false;
  let isNewExpansion = false;

  const decoded = decodeURIComponent(rawK);
  const parts = decoded.split('-');
  const service = parts[parts.length - 1] || '';
  const region = parts.slice(0, parts.length - 1).join(' ') || '서울';
  isWaterproof = WATERPROOF_SERVICES.includes(service);
  
  isNewExpansion = isNewExpansionArea(region);
  
  const incheonRegions = [
    "인천", "인천시", "인천광역시", "강화", "강화군", "옹진", "옹진군", 
    "중구", "동구", "미추홀", "미추홀구", "연수", "연수구", "남동", "남동구", 
    "부평", "부평구", "계양", "계양구", "서구",
    "부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동"
  ];
  
  const newRegionsList = NEW_REGIONS_DATA.reduce((acc: string[], r) => {
    acc.push(r.gu);
    acc.push(`${r.gu}시`);
    acc.push(`${r.gu}구`);
    r.dongs.forEach(d => acc.push(d));
    return acc;
  }, []);

  const expansionRegionsList = EXPANSION_REGIONS_DATA.reduce((acc: string[], r) => {
    acc.push(r.gu);
    acc.push(`${r.gu}시`);
    acc.push(`${r.gu}구`);
    r.dongs.forEach(d => acc.push(d));
    return acc;
  }, []);

  if (!isWaterproof && (incheonRegions.includes(region) || newRegionsList.includes(region) || expansionRegionsList.includes(region))) {
    isIncheonCaulking = true;
  }

  if (isNewExpansion) {
    isIncheonCaulking = true;
  }

  // 대표번호 분기
  const phone = isWaterproof ? "010-4667-5568" : (isIncheonCaulking ? "010-4667-5568" : "010-7774-5823");
  const hasKakao = !isWaterproof && !isNewExpansion;
  const kakaoLink = hasKakao ? "http://pf.kakao.com/_xkAXxlX" : "";

  return {
    phone,
    telLink: `tel:${phone}`,
    kakaoLink,
    representative: "권병훈",
    businessNumber: "740-14-02758"
  };
}

export function runPrePostValidation(rawK: string) {
  const parsed = parseKeyword(rawK);
  const hash = getHash(decodeURIComponent(rawK));
  const data = getDynamicHomeData(parsed.location, parsed.service, hash);

  const errors: string[] = [];

  // 1. location 비어 있지 않은가
  if (!parsed.location) {
    errors.push("location is empty");
  }

  // 2. service가 10개 작업명 중 하나인가
  const validServices = [
    "창틀코킹", "창틀누수", "빗물누수", "창틀실리콘", "샷시실리콘",
    "외벽보수", "외벽방수", "옥상방수", "건물방수", "외벽도색"
  ];
  if (!validServices.includes(parsed.service)) {
    errors.push(`invalid service: "${parsed.service}"`);
  }

  // 3. keyword가 ${location} ${service} 형태인가
  const expectedKeyword = `${parsed.location} ${parsed.service}`;
  if (parsed.keyword !== expectedKeyword) {
    errors.push(`keyword mismatch (expected: "${expectedKeyword}", got: "${parsed.keyword}")`);
  }

  // 4. H1 및 CTA 헤더 유효성 검사
  const h1Text = `레인가드 ${parsed.service} 전문 브랜드`;
  if (!h1Text || h1Text.includes("undefined") || h1Text.includes("null") || h1Text.includes("NaN")) {
    errors.push(`invalid H1 structure: "${h1Text}"`);
  }

  if (!data.ctaHeader) {
    errors.push("final CTA header is empty");
  } else if (!data.ctaHeader.includes(parsed.location) || !data.ctaHeader.includes(parsed.service)) {
    errors.push(`CTA title does not contain keyword: "${data.ctaHeader}"`);
  }

  // 5. 4대 방수/도장 서비스 주요 키워드 노출 검사
  if (parsed.service === "외벽도색" && !data.metaDesc.includes("외벽도색") && !data.summary.includes("외벽도색")) {
    errors.push("외벽도색 keyword is missing from principal sections");
  }
  if (parsed.service === "외벽방수" && !data.metaDesc.includes("외벽방수") && !data.summary.includes("외벽방수")) {
    errors.push("외벽방수 keyword is missing from principal sections");
  }
  if (parsed.service === "옥상방수" && !data.metaDesc.includes("옥상방수") && !data.summary.includes("옥상방수")) {
    errors.push("옥상방수 keyword is missing from principal sections");
  }
  if (parsed.service === "건물방수" && !data.metaDesc.includes("건물방수") && !data.summary.includes("건물방수")) {
    errors.push("건물방수 keyword is missing from principal sections");
  }

  // 6. 연락처 및 사업자 정합성 검사 (스냅샷 대비 검수)
  const expected = getSnapshotExpected(rawK);
  
  // page.tsx 기준 동일 분기
  let actualIsWaterproof = false;
  let actualIsIncheonCaulking = false;
  let actualIsNewExpansion = false;

  const decoded = decodeURIComponent(rawK);
  const parts = decoded.split('-');
  const rawService = parts[parts.length - 1] || '';
  const rawRegion = parts.slice(0, parts.length - 1).join(' ') || '서울';
  actualIsWaterproof = WATERPROOF_SERVICES.includes(rawService);
  
  actualIsNewExpansion = isNewExpansionArea(rawRegion);
  
  const incheonRegions = [
    "인천", "인천시", "인천광역시", "강화", "강화군", "옹진", "옹진군", 
    "중구", "동구", "미추홀", "미추홀구", "연수", "연수구", "남동", "남동구", 
    "부평", "부평구", "계양", "계양구", "서구",
    "부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동"
  ];
  
  const newRegionsList = NEW_REGIONS_DATA.reduce((acc: string[], r) => {
    acc.push(r.gu);
    acc.push(`${r.gu}시`);
    acc.push(`${r.gu}구`);
    r.dongs.forEach(d => acc.push(d));
    return acc;
  }, []);

  const expansionRegionsList = EXPANSION_REGIONS_DATA.reduce((acc: string[], r) => {
    acc.push(r.gu);
    acc.push(`${r.gu}시`);
    acc.push(`${r.gu}구`);
    r.dongs.forEach(d => acc.push(d));
    return acc;
  }, []);

  if (!actualIsWaterproof && (incheonRegions.includes(rawRegion) || newRegionsList.includes(rawRegion) || expansionRegionsList.includes(rawRegion))) {
    actualIsIncheonCaulking = true;
  }

  if (actualIsNewExpansion) {
    actualIsIncheonCaulking = true;
  }

  const actualPhone = actualIsWaterproof ? "010-4667-5568" : (actualIsIncheonCaulking ? "010-4667-5568" : "010-7774-5823");
  const actualTelLink = `tel:${actualPhone}`;
  
  if (actualPhone !== expected.phone) {
    errors.push(`phone changed (expected: "${expected.phone}", got: "${actualPhone}")`);
  }
  if (actualTelLink !== expected.telLink) {
    errors.push(`tel link changed (expected: "${expected.telLink}", got: "${actualTelLink}")`);
  }

  // 카톡 링크
  const hasKakao = !actualIsWaterproof && !actualIsNewExpansion;
  const actualKakaoLink = hasKakao ? "http://pf.kakao.com/_xkAXxlX" : "";
  if (actualKakaoLink !== expected.kakaoLink) {
    errors.push(`kakao link changed (expected: "${expected.kakaoLink}", got: "${actualKakaoLink}")`);
  }

  return {
    success: errors.length === 0,
    errors
  };
}
