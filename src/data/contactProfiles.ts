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

/**
 * 중앙 집중식 연락처 조회 헬퍼 함수
 * pathname과 searchParams의 'k' 값을 기반으로 정확한 전화번호를 리턴합니다.
 */
export function resolveContactInfo(pathname: string, kParam: string | null | undefined): { phone: string; phoneHref: string } {
  // 1. 메인 페이지 판별 (?k= 파라미터가 없고 pathname이 '/'인 경우)
  const isMainPage = pathname === "/" && !kParam;
  if (isMainPage) {
    return { phone: "010-4667-5568", phoneHref: "tel:01046675568" };
  }

  if (kParam) {
    let decoded = "";
    try {
      decoded = decodeURIComponent(kParam);
    } catch (e) {
      decoded = kParam;
    }
    const parts = decoded.split('-');
    const service = parts[parts.length - 1] || '';
    const region = parts.slice(0, parts.length - 1).join(' ') || '서울';

    const waterproofKeywords = ["외벽방수", "옥상방수", "건물방수", "외벽도색"];
    const incheonRegions = [
      "인천", "인천시", "인천광역시", "강화", "강화군", "옹진", "옹진군", 
      "중구", "동구", "미추홀", "미추홀구", "연수", "연수구", "남동", "남동구", 
      "부평", "부평구", "계양", "계양구", "서구",
      "부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동",
      // 제물포구, 영종구, 서해구, 검단구 등 sitemap-incheon 기준 인천 지역 행정구/동 포함
      "제물포구", "영종구", "서해구", "검단구", "신포동", "연안동", "율목동", "동인천동", 
      "개항동", "만석동", "화수동", "화평동", "송현동", "송림동", "금창동", "운서동", 
      "용유동", "숭의동", "용현동", "학익동", "주안동", "관교동", "문학동", "옥련동", 
      "선학동", "연수동", "청학동", "동춘동", "송도동", "구월동", "간석동", "만수동", 
      "장수동", "서창동", "남촌동", "도림동", "고잔동", "효성동", "계산동", "작전동", 
      "서운동", "계양동", "임학동", "용종동", "병방동", "박촌동", "동양동", "귤현동", 
      "검암동", "경서동", "청라동", "가정동", "원창동", "석남동", "불로동", "대곡동", 
      "원당동", "당하동", "왕길동", "마전동", "아라동"
    ];

    const incheonCaulkingServices = ["창틀코킹", "창틀누수", "창틀실리콘", "샷시실리콘", "외벽보수"];
    const isWaterproof = waterproofKeywords.includes(service);

    // 인천 여부 판별
    const isIncheon = incheonRegions.some(r => region.includes(r));

    if (isIncheon) {
      if (incheonCaulkingServices.includes(service)) {
        return { phone: "010-8460-1530", phoneHref: "tel:01084601530" };
      }
      return { phone: "010-4667-5568", phoneHref: "tel:01046675568" };
    }

    // 경기 확장 지역인지 여부
    const suwonKeywords = ["수원", "장안", "권선", "팔달", "영통", "인계", "매탄", "망포", "광교"];
    const guriKeywords = ["구리", "인창", "교문", "수택", "토평", "갈매"];
    const yangjuKeywords = ["양주", "옥정", "고읍", "덕계", "삼숭", "회천"];
    const goyangKeywords = ["고양", "덕양", "일산", "화정", "행신", "식사", "탄현", "원흥", "삼송", "마두", "주엽", "대화"];
    const gwangjuKeywords = ["광주", "태전", "오포", "초월", "곤지암", "신현", "양벌"];
    const ansanKeywords = ["안산", "상록", "단원", "본오", "월피", "성포", "선부", "대부"];
    const gunpoKeywords = ["군포", "산본", "금정", "재궁", "궁내", "광정", "수리", "송부"];
    const uiwangKeywords = ["의왕", "고천", "오전", "내손", "청계"];
    const namyangjuKeywords = ["남양주", "와부", "진접", "화도", "진건", "오남", "퇴계원", "별내", "수동", "조안", "호평", "평내", "양정"];
    const uijeongbuKeywords = ["의정부", "호원", "장암", "송산", "자금", "가능", "흥선", "녹양"];

    const isGyeonggiExpansion = [
      ...suwonKeywords, ...guriKeywords, ...yangjuKeywords, ...goyangKeywords,
      ...gwangjuKeywords, ...ansanKeywords, ...gunpoKeywords, ...uiwangKeywords,
      ...namyangjuKeywords, ...uijeongbuKeywords
    ].some(kw => region.replace(/\s+/g, "").includes(kw));

    if (isWaterproof) {
      return { phone: "010-4667-5568", phoneHref: "tel:01046675568" };
    }

    // 경기 expansion 또는 김포/부천/광명 등 기존 경기/인천 지역
    const legacyGyeonggiIncheonList = [
      "김포", "부천", "부평", "광명", "안양", "과천", "시흥", "성남", "하남",
      "김포본동", "장기본동", "사우동", "풍무동", "장기동", "구래동", "마산동", "운양동",
      "상동", "약대동", "중동", "심곡동", "원미동", "소사동", "도당동", "춘의동", "역곡동",
      "송내동", "심곡본동", "소사본동", "괴안동", "범박동", "옥길동", "오정동", "신흥동",
      "원종동", "고강동", "성곡동", "부평동", "산곡동", "청천동", "갈산동", "삼산동",
      "부개동", "일신동", "십정동", "광명동", "철산동", "하안동", "소하동", "일직동",
      "학온동", "안양동", "석수동", "박달동", "비산동", "관양동", "평촌동", "호계동",
      "중앙동", "갈현동", "별양동", "부림동", "과천동", "문원동", "대야동", "신천동",
      "은행동", "매화동", "목감동", "군자동", "정왕동", "배곧동", "태평동", "상대원동",
      "야탑동", "서현동", "수내동", "정자동", "판교동", "천현동", "신장동", "덕풍동",
      "풍산동", "미사동", "감일동", "위례동"
    ];

    const isLegacyGyeonggiIncheon = legacyGyeonggiIncheonList.some(kw => region.includes(kw));

    if (isLegacyGyeonggiIncheon || isGyeonggiExpansion) {
      return { phone: "010-4667-5568", phoneHref: "tel:01046675568" };
    }

    // 서울 기본
    return { phone: "010-7774-5823", phoneHref: "tel:01077745823" };
  }

  // 기본값 (서울/수도권 기본 프로필)
  return { phone: "010-7774-5823", phoneHref: "tel:01077745823" };
}

