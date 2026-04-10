import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import FAQSchema from "@/components/FAQSchema";
import { getMetadata } from "@/lib/seo";
import { BRAND_HUB_CONTENT } from "@/data/brandHub";
import { portfolioCases } from "@/data/portfolio";

// Modular Section Components (Same as Location Pages)
import LocalHero from "@/components/sections/LocalHero";
import LocalAnalysis from "@/components/sections/LocalAnalysis";
import LocalProcess from "@/components/sections/LocalProcess";
import LocalCosts from "@/components/sections/LocalCosts";
import LocalFAQ from "@/components/sections/LocalFAQ";
import LocalPortfolio from "@/components/sections/LocalPortfolio";
import { getDynamicHomeData, getHash } from "@/lib/dynamicHome";

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

  const decoded = decodeURIComponent(k);
  const [region = '서울', service = '창틀코킹'] = decoded.split('-');
  const hash = getHash(decoded);
  const data = getDynamicHomeData(region, service, hash);

  return getMetadata({
    title: data.metaTitle,
    description: data.metaDesc,
    path: `/?k=${k}`,
  });
}

export default async function Home({ searchParams }: Props) {
  const unresolvedParams = await searchParams;
  const k = typeof unresolvedParams.k === 'string' ? unresolvedParams.k : undefined;

  let heroLocation = "레인가드";
  let heroService = "창틀코킹 전문 브랜드";
  let heroIntro = `창틀코킹이 필요한 현장은\n비가 올 때 창틀실리콘 노후화로 인한\n창틀누수가 반복되는 경우가 많습니다.\n레인가드는 빗물누수의 근본적인 원인을 점검하고\n정확한 창틀코킹 보수로 해결해 드립니다.`;
  let analysisIntro = BRAND_HUB_CONTENT.localProblems;
  let ctaHeader = BRAND_HUB_CONTENT.ctaHeader;

  if (k) {
    const decoded = decodeURIComponent(k);
    const [region = '서울', service = '창틀코킹'] = decoded.split('-');
    const hash = getHash(decoded);
    const data = getDynamicHomeData(region, service, hash);

    heroLocation = region;
    heroService = `${service} 전문`;
    heroIntro = `${data.summary}\n\n${data.regionText}`;
    analysisIntro = [
      data.regionText,
      data.serviceBlock,
      "레인가드는 낡고 들뜬 기존 실리콘을 철저히 제거하고, 전용 프라이머와 고기능성 실런트로 정석 시공합니다."
    ].join('\n\n');
    ctaHeader = data.ctaHeader;
  }

  const content = BRAND_HUB_CONTENT;
  
  // 대표 시공 사례 (대표 3개 선정)
  const representativePortfolio = portfolioCases.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden">
      {/* FAQ 구조화 데이터 자동 주입 (SEO) */}
      <FAQSchema faqs={content.faqs} />
      
      <Header />

      <main className="flex-grow bg-white">
        {/* 히어로 섹션 (필수) */}
        <LocalHero 
          locationName={heroLocation} 
          serviceTitle={heroService} 
          intro={heroIntro}
          keywords={["100% 책임 시공제", "정밀 누수 진단", "전문가 직접 시공", "철저한 사후 관리"]}
        />

        {/* 문제 상황 및 분석 (서비스 안내 앵커 상단) */}
        <div id="services">
          <LocalAnalysis 
            locationName={k ? heroLocation : "창틀"}
            introDesc={analysisIntro}
          />
        </div>

        {/* 시공 프로세스 */}
        <LocalProcess 
          title="레인가드만의 정석 시공 프로세스"
          process={content.workProcess} 
        />

        {/* 비용 영향 요소 */}
        <LocalCosts costFactors={content.costFactors} />

        {/* FAQ */}
        <LocalFAQ 
          title="자주 묻는 질문"
          faqs={content.faqs} 
        />

        {/* 시공 사례 */}
        <div id="cases">
          <LocalPortfolio 
            title="대표 시공 사례"
            portfolio={representativePortfolio} 
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
                  {content.ctaSummary}
                </p>
                
                <div className="bg-transparent mt-8">
                  <ContactCTA />
                </div>
             </div>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
}
