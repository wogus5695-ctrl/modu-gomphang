/**
 * 레인가드 상담 프로필 데이터 정의
 * 전화번호와 문의 방식(카카오톡 노출 여부 등)을 독립된 속성으로 관리합니다.
 */

export interface ContactProfile {
  id: string;
  name: string;
  phone: string;
  phoneHref: string;
  enableKakao: boolean;
  kakaoUrl: string | null;
  description: string;
}

export const CONTACT_PROFILES: Record<string, ContactProfile> = {
  // 1. 기존 메인 / 서울 기본 프로필 (전화상담 + 카카오톡 상담)
  default: {
    id: "default",
    name: "기본 통합 상담 (서울/수도권)",
    phone: "010-7774-5823",
    phoneHref: "tel:01077745823",
    enableKakao: true,
    kakaoUrl: "http://pf.kakao.com/_xkAXxlX",
    description: "서울 및 수도권 기본 창틀코킹 전화상담 및 카카오톡 상담 제공"
  },

  // 2. 기존 인천 권역 코킹 프로필 (010-4667-5568 + 카카오톡 상담)
  incheonCaulking: {
    id: "incheonCaulking",
    name: "인천 권역 코킹 상담",
    phone: "010-4667-5568",
    phoneHref: "tel:01046675568",
    enableKakao: true,
    kakaoUrl: "http://pf.kakao.com/_xkAXxlX",
    description: "인천 권역 창틀코킹 전화상담 및 카카오톡 상담 제공"
  },

  // 3. 기존 방수/도색 서비스 프로필 (010-4667-5568 + 전화전용)
  waterproof: {
    id: "waterproof",
    name: "방수/도색 전용 상담",
    phone: "010-4667-5568",
    phoneHref: "tel:01046675568",
    enableKakao: false,
    kakaoUrl: null,
    description: "외벽방수, 옥상방수, 건물방수, 외벽도색 전화 전용 상담"
  },

  // 4. [신규] 경기 확장 지역 전화 전용 상담 프로필
  phoneOnly4667: {
    id: "phoneOnly4667",
    name: "신규 확장 지역 전화 전용 상담",
    phone: "010-4667-5568",
    phoneHref: "tel:01046675568",
    enableKakao: false,
    kakaoUrl: null,
    description: "신규 확장 지역(수원, 구리, 양주, 고양, 경기 광주, 안산, 군포, 의왕, 남양주, 의정부 등) 전화 전용 상담"
  }
};

/**
 * 프로필 ID 기반 프로필 정보 조회 헬퍼
 */
export function getContactProfile(profileId: string): ContactProfile {
  return CONTACT_PROFILES[profileId] || CONTACT_PROFILES.default;
}
