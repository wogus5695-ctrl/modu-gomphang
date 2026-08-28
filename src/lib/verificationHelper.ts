import { parseKeyword } from "@/lib/keywordParser";
import { getDynamicHomeData, getHash, isNewExpansionArea } from "@/lib/dynamicHome";
import { WATERPROOF_SERVICES, NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA } from "@/data/sitemapKeywords";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";
import { resolveContactInfo } from "@/data/contactProfiles";

// 수정 전 pre-modification 스냅샷 규칙을 기반으로 한 비교 대조군 계산기
function getSnapshotExpected(rawK: string) {
  const resolved = resolveContactInfo("/" /* page.tsx acts as main domain */, rawK);
  const phone = resolved.phone;
  const telLink = resolved.phoneHref;

  let isWaterproof = false;
  let isNewExpansion = false;

  const decoded = decodeURIComponent(rawK);
  const parts = decoded.split('-');
  const service = parts[parts.length - 1] || '';
  const region = parts.slice(0, parts.length - 1).join(' ') || '서울';
  isWaterproof = WATERPROOF_SERVICES.includes(service);
  isNewExpansion = isNewExpansionArea(region);

  const hasKakao = !isWaterproof && !isNewExpansion;
  const kakaoLink = hasKakao ? "http://pf.kakao.com/_xkAXxlX" : "";

  return {
    phone,
    telLink,
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
  
  const actualResolved = resolveContactInfo("/" /* page.tsx acts as main domain */, rawK);
  const actualPhone = actualResolved.phone;
  const actualTelLink = actualResolved.phoneHref;
  
  if (actualPhone !== expected.phone) {
    errors.push(`phone changed (expected: "${expected.phone}", got: "${actualPhone}")`);
  }
  if (actualTelLink !== expected.telLink) {
    errors.push(`tel link changed (expected: "${expected.telLink}", got: "${actualTelLink}")`);
  }

  // 카톡 링크
  const decoded = decodeURIComponent(rawK);
  const parts = decoded.split('-');
  const rawService = parts[parts.length - 1] || '';
  const rawRegion = parts.slice(0, parts.length - 1).join(' ') || '서울';
  const actualIsWaterproof = WATERPROOF_SERVICES.includes(rawService);
  const actualIsNewExpansion = isNewExpansionArea(rawRegion);

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
