import { runPrePostValidation } from "@/lib/verificationHelper";
import { parseKeyword } from "@/lib/keywordParser";
import { SEOUL_DATA, NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA, SERVICES, WATERPROOF_SERVICES } from "@/data/sitemapKeywords";

export default function runAllSitemapValidation() {
  const combinedServices = [...SERVICES, ...WATERPROOF_SERVICES];
  const allRawKKeywords: string[] = [];

  // 1. 서울 사이트맵 키워드 수집
  SEOUL_DATA.forEach(region => {
    SERVICES.forEach(service => {
      allRawKKeywords.push(`${region.gu}-${service}`);
    });
    region.dongs.forEach(dong => {
      SERVICES.forEach(service => {
        allRawKKeywords.push(`${dong}-${service}`);
      });
    });
  });

  // 2. 경기 사이트맵 키워드 수집
  NEW_REGIONS_DATA.forEach(region => {
    SERVICES.forEach(service => {
      allRawKKeywords.push(`${region.gu}-${service}`);
    });
    region.dongs.forEach(dong => {
      SERVICES.forEach(service => {
        allRawKKeywords.push(`${dong}-${service}`);
      });
    });
    WATERPROOF_SERVICES.forEach(service => {
      allRawKKeywords.push(`${region.gu}-${service}`);
    });
    region.dongs.forEach(dong => {
      WATERPROOF_SERVICES.forEach(service => {
        allRawKKeywords.push(`${dong}-${service}`);
      });
    });
  });

  const gyeonggiGus = [
    "수원", "수원시", "장안구", "권선구", "팔달구", "영통구", 
    "구리", "구리시", 
    "양주", "양주시", 
    "고양", "고양시", "덕양구", "일산동구", "일산서구", 
    "경기 광주", "광주시",
    "안산", "안산시", "상록구", "단원구",
    "군포", "군포시",
    "의왕", "의왕시",
    "남양주", "남양주시",
    "의정부", "의정부시"
  ];
  gyeonggiGus.forEach(guName => {
    combinedServices.forEach(service => {
      allRawKKeywords.push(`${guName}-${service}`);
    });
  });

  const gyeonggiDongsGroups = [
    "장안구", "권선구", "팔달구", "영통구", "구리", "양주", "덕양구", "일산동구", "일산서구", "경기 광주",
    "상록구", "단원구", "군포시", "의왕시", "남양주시", "의정부시"
  ];
  gyeonggiDongsGroups.forEach(guName => {
    const targetRegion = EXPANSION_REGIONS_DATA.find(r => r.gu === guName);
    if (targetRegion && targetRegion.dongs) {
      targetRegion.dongs.forEach(dong => {
        combinedServices.forEach(service => {
          allRawKKeywords.push(`${dong}-${service}`);
        });
      });
    }
  });

  // 3. 인천 사이트맵 키워드 수집
  const incheonGus = ["인천", "인천 중구", "인천 동구", "인천 서구", "제물포구", "영종구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서해구", "검단구"];
  incheonGus.forEach(guName => {
    combinedServices.forEach(service => {
      allRawKKeywords.push(`${guName}-${service}`);
    });
  });

  const incheonDongsGroups = ["제물포구", "영종구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서해구", "검단구", "인천 중구", "인천 동구", "인천 서구"];
  incheonDongsGroups.forEach(guName => {
    const targetRegion = EXPANSION_REGIONS_DATA.find(r => r.gu === guName);
    if (targetRegion && targetRegion.dongs) {
      targetRegion.dongs.forEach(dong => {
        combinedServices.forEach(service => {
          allRawKKeywords.push(`${dong}-${service}`);
        });
      });
    }
  });

  // 전수 검사 루프
  const results = {
    total: allRawKKeywords.length,
    passed: 0,
    failed: 0,
    failLogs: [] as string[]
  };

  allRawKKeywords.forEach(rawK => {
    const res = runPrePostValidation(rawK);
    const parsed = parseKeyword(rawK);
    const label = `${parsed.location} ${parsed.service}`;

    if (res.success) {
      results.passed++;
      console.log(`PASS: ${label}`);
    } else {
      results.failed++;
      const errMsg = `FAIL: ${label} - ${res.errors.join(", ")}`;
      results.failLogs.push(errMsg);
      console.error(errMsg);
    }
  });

  return results;
}
