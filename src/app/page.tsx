import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import FAQSchema from "@/components/FAQSchema";
import { getMetadata } from "@/lib/seo";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";
import { portfolioCases, waterproofPortfolioCases } from "@/data/portfolio";

// Modular Section Components (Same as Location Pages)
import LocalHero from "@/components/sections/LocalHero";
import LocalAnalysis from "@/components/sections/LocalAnalysis";
import LocalProcess from "@/components/sections/LocalProcess";
import LocalCosts from "@/components/sections/LocalCosts";
import LocalFAQ from "@/components/sections/LocalFAQ";
import LocalPortfolio from "@/components/sections/LocalPortfolio";
import { getDynamicHomeData, getHash, isNewExpansionArea } from "@/lib/dynamicHome";
import { parseKeyword } from "@/lib/keywordParser";
import { WATERPROOF_SERVICES, NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA } from "@/data/sitemapKeywords";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const unresolvedParams = await searchParams;
  const k = typeof unresolvedParams.k === 'string' ? unresolvedParams.k : undefined;

  if (!k) {
    return getMetadata({
      title: BRAND_HUB_CONTENT.subtitle,
      description: BRAND_HUB_CONTENT.intro,
      path: "/",
    });
  }

  const parsed = parseKeyword(k);
  const region = parsed.location;
  const service = parsed.service;
  const hash = getHash(decodeURIComponent(k));
  const data = getDynamicHomeData(region, service, hash);

  const decoded = decodeURIComponent(k);
  const parts = decoded.split('-');
  const rawService = parts[parts.length - 1] || '창틀코킹';
  const isWaterproof = WATERPROOF_SERVICES.includes(rawService);
  const ogImage = isWaterproof ? "/waterproof-thumbnail.jpg" : undefined;

  return getMetadata({
    title: data.metaTitle,
    description: data.metaDesc,
    path: `/?k=${k}`,
    ogImage: ogImage,
  });
}

export default async function Home({ searchParams }: Props) {
  const unresolvedParams = await searchParams;
  const k = typeof unresolvedParams.k === 'string' ? unresolvedParams.k : undefined;

  let isWaterproof = false;
  let isIncheonCaulking = false;
  let isNewExpansion = false;
  if (k) {
    const decoded = decodeURIComponent(k);
    const parts = decoded.split('-');
    const service = parts[parts.length - 1] || '';
    const region = parts.slice(0, parts.length - 1).join(' ') || '서울';
    isWaterproof = WATERPROOF_SERVICES.includes(service);
    
    // Check if new expansion region
    isNewExpansion = isNewExpansionArea(region);
    
    // 인천 지역 (부평 및 동 포함) + 방수가 아닐 때 (창틀코킹 등)
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

    if (!isWaterproof && (incheonRegions.includes(region) || newRegionsList.includes(region) || expansionRegionsList.includes(region))) {
      isIncheonCaulking = true;
    }

    if (isNewExpansion) {
      isIncheonCaulking = true;
    }
  }

  let heroLocation = "레인가드";
  let heroService = isWaterproof ? "건물방수 전문 브랜드" : "창틀코킹 전문 브랜드";
  let heroIntro = isWaterproof
    ? `건물 방수가 필요한 현장은\n비가 올 때 외벽 균열이나\n옥상 방수층 노후화로 인한 누수가 반복되는 경우가 많습니다.\n레인가드는 누수의 근본적인 원인을 점검하고\n정확한 건물방수 시공으로 해결해 드립니다.`
    : `창틀코킹이 필요한 현장은\n비가 올 때 창틀실리콘 노후화로 인한\n창틀누수가 반복되는 경우가 많습니다.\n레인가드는 빗물누수의 근본적인 원인을 점검하고\n정확한 창틀코킹 보수로 해결해 드립니다.`;
  
  let analysisTitle = ""; // introTitle
  let analysisIntro = BRAND_HUB_CONTENT.localProblems; // introDesc
  let analysisBlocks: any[] | undefined = undefined;
  
  let processTitle = "레인가드만의 정석 시공 프로세스";
  let processSteps: any[] = BRAND_HUB_CONTENT.workProcess;
  
  let faqTitle = "자주 묻는 질문";
  let faqList = BRAND_HUB_CONTENT.faqs;
  
  let portfolioTitle = "대표 시공 사례";
  let ctaHeader = BRAND_HUB_CONTENT.ctaHeader;
  let analysisDynamicKeyword = "";
  let dynamicHomeData: any = null;

  if (k) {
    const parsed = parseKeyword(k);
    const region = parsed.location;
    const service = parsed.service;
    const hash = getHash(decodeURIComponent(k));
    dynamicHomeData = getDynamicHomeData(region, service, hash);

    // H1 텍스트 누락 방지를 위해 heroLocation, heroService 업데이트
    heroLocation = region;
    heroService = service;
    heroIntro = dynamicHomeData.summary;

    // 3번. 원인 진단 및 분석
    analysisTitle = dynamicHomeData.analysisTitle;
    analysisIntro = [
      dynamicHomeData.regionText,
      dynamicHomeData.analysisDesc || "",
      dynamicHomeData.serviceBlock
    ].filter(Boolean).join('\n\n');
    analysisBlocks = dynamicHomeData.analysisBlocks;

    // 4번. 시공 프로세스
    processTitle = dynamicHomeData.processTitle;
    processSteps = dynamicHomeData.processSteps;

    // 5번. FAQ
    faqTitle = dynamicHomeData.faqTitle;
    faqList = dynamicHomeData.faqs;

    // 6번. 포트폴리오 제목
    portfolioTitle = dynamicHomeData.portfolioTitle;

    // 7번. CTA 문구
    ctaHeader = dynamicHomeData.ctaHeader;

    // 추가: Expert Analysis 꼬릿말용 동적 키워드
    analysisDynamicKeyword = parsed.keyword;
  }

  const content = BRAND_HUB_CONTENT;

  let ctaSummaryText = dynamicHomeData ? dynamicHomeData.ctaSummary : content.ctaSummary;
  if (isNewExpansion) {
    ctaSummaryText = "시공 가능 여부와 대략적인 범위를 전화로 먼저 확인해 보세요.";
  }

  // 대표 시공 사례 (대표 3개 선정)
  const representativePortfolio = portfolioCases.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden">
      {/* FAQ 구조화 데이터 자동 주입 (SEO) */}
      <FAQSchema faqs={faqList} />

      <Header isWaterproof={isWaterproof} isIncheonCaulking={isIncheonCaulking} isNewExpansion={isNewExpansion} />

      <main className="flex-grow bg-white">
        {/* 히어로 섹션 (필수) */}
        <LocalHero
          locationName={heroLocation}
          serviceTitle={heroService}
          intro={heroIntro}
          keywords={[
            "100% 책임 시공제",
            analysisDynamicKeyword ? `${analysisDynamicKeyword} 정밀 진단` : "정밀 누수 진단",
            "전문가 직접 시공",
            "철저한 사후 관리"
          ]}
          imageSrc={isWaterproof ? "/waterproof-thumbnail.jpg" : "/hero-caulking.jpg"}
        />

        {/* 문제 상황 및 분석 (서비스 안내 앵커 상단) */}
        <div id="services">
          <LocalAnalysis
            locationName={k ? heroLocation : "레인가드"}
            introTitle={analysisTitle}
            introDesc={analysisIntro}
            blocks={analysisBlocks}
            dynamicKeyword={analysisDynamicKeyword || undefined}
          />
        </div>

        {/* 시공 프로세스 */}
        <LocalProcess
          title={processTitle}
          process={processSteps}
          imageSrc={isWaterproof ? "/waterproof-thumbnail.jpg" : "/process-caulking.jpg"}
        />

        {/* 비용 영향 요소 */}
        <LocalCosts costFactors={content.costFactors} />

        {/* FAQ */}
        <LocalFAQ
          title={faqTitle}
          faqs={faqList}
        />

        {/* 시공 사례 */}
        <div id="cases">
          <LocalPortfolio
            title={portfolioTitle}
            portfolio={isWaterproof ? waterproofPortfolioCases : representativePortfolio}
            isWaterproof={isWaterproof}
          />
        </div>

        {/* 문의 CTA 섹션 (지역 페이지와 구조 통일) */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-blue-600 text-white p-10 md:p-20 rounded-[60px] shadow-3xl text-center relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>

              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10">
                {ctaHeader}
              </h2>
              <p className="text-blue-100 mb-12 text-lg font-medium opacity-90 relative z-10">
                {ctaSummaryText}
              </p>

              <div className="bg-transparent mt-8">
                <ContactCTA isWaterproof={isWaterproof} isIncheonCaulking={isIncheonCaulking} isNewExpansion={isNewExpansion} />
              </div>
            </div>
          </div>
        </section>
      </main>


      <Footer dynamicKeyword={analysisDynamicKeyword} isWaterproof={isWaterproof} isMainPage={!k} isIncheonCaulking={isIncheonCaulking} isNewExpansion={isNewExpansion} footerDesc={k && dynamicHomeData ? dynamicHomeData.footerDesc : undefined} />
    </div>
  );
}
