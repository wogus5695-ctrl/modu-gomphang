import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
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

export const metadata: Metadata = getMetadata({
  title: "RainGuard | 창틀코킹·빗물누수·창틀누수 보수 상담",
  description: "창틀코킹 전문가 RainGuard입니다. 아파트 및 빌라의 창틀 누수, 빗물 누수, 실리콘 손상 문제를 정밀 점검하고 완벽 보수합니다.",
  path: "/",
});

export default function Home() {
  const content = BRAND_HUB_CONTENT;
  
  // 대표 시공 사례 (대표 4개 선정)
  const representativePortfolio = portfolioCases.slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased overflow-x-hidden">
      {/* FAQ 구조화 데이터 자동 주입 (SEO) */}
      <FAQSchema faqs={content.faqs} />
      
      <Header />

      <main className="flex-grow bg-white">
        {/* 히어로 섹션 (필수) */}
        <LocalHero 
          locationName={content.title} 
          serviceTitle="" 
          intro={content.intro}
          keywords={content.secondaryKeywords}
        />

        {/* 문제 상황 및 분석 */}
        <LocalAnalysis 
          locationName="창틀"
          problems={content.localProblems}
          targets={content.targets}
        />

        {/* 시공 프로세스 */}
        <LocalProcess process={content.workProcess} />

        {/* 비용 영향 요소 */}
        <LocalCosts costFactors={content.costFactors} />

        {/* FAQ */}
        <LocalFAQ faqs={content.faqs} />

        {/* 시공 사례 */}
        <LocalPortfolio 
          locationName="RainGuard" 
          portfolio={representativePortfolio} 
        />

        {/* 문의 CTA 섹션 (지역 페이지와 구조 통일) */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
             <div className="bg-blue-600 text-white p-10 md:p-20 rounded-[60px] shadow-3xl text-center relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
                
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10">
                  {content.ctaHeader}
                </h2>
                <p className="text-blue-100 mb-12 text-lg font-medium opacity-90 relative z-10">
                  {content.ctaSummary}
                </p>
                
                <div className="bg-white text-gray-900 p-8 md:p-12 rounded-[40px] shadow-inner relative z-10">
                  <ContactForm />
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
