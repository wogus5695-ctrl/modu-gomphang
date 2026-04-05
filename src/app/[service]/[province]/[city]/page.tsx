import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { getRegionInfo } from "@/data/regions";
import { getLocalizedContent } from "@/data/localizedContent";
import { WINDOW_CAULKING_ALLOWED_REGIONS } from "@/data/allowedKeywords";
import { portfolioCases } from "@/data/portfolio";
import { getMetadataByLocation } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQSchema from "@/components/FAQSchema";
import Breadcrumbs from "@/components/Breadcrumbs";

// Modular Section Components
import LocalHero from "@/components/sections/LocalHero";
import LocalAnalysis from "@/components/sections/LocalAnalysis";
import LocalProcess from "@/components/sections/LocalProcess";
import LocalCosts from "@/components/sections/LocalCosts";
import LocalFAQ from "@/components/sections/LocalFAQ";
import LocalPortfolio from "@/components/sections/LocalPortfolio";
import LocalNearbyLinks from "@/components/sections/LocalNearbyLinks";

type Props = {
  params: Promise<{
    service: string;
    province: string;
    city: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, province: provinceSlug, city: citySlug } = await params;
  
  const serviceInfo = services.find((s) => s.slug === service);
  const regionInfo = getRegionInfo(provinceSlug, citySlug);
  const allowedRegion = service === 'window-caulking' ? WINDOW_CAULKING_ALLOWED_REGIONS[citySlug] : null;

  // 창틀코킹인 경우 화이트리스트 검증 (지역이 없거나 province가 다르면 차단)
  if (service === 'window-caulking') {
    if (!allowedRegion || allowedRegion.province !== provinceSlug) {
      return { title: "존재하지 않는 페이지입니다" };
    }
  } else if (!serviceInfo || !regionInfo) {
    return { title: "존재하지 않는 페이지입니다" };
  }

  const localContent = getLocalizedContent(service, provinceSlug, citySlug);
  const provinceName = regionInfo?.province.name || (allowedRegion?.province === 'seoul' ? '서울특별시' : '경기도');
  const cityName = regionInfo?.city.name || allowedRegion?.name || "";

  // 자동 생성된 메타데이터 + H1 정보
  const seo = getMetadataByLocation({
    serviceSlug: service,
    serviceTitle: serviceInfo?.title || "창틀코킹",
    provinceName: provinceName,
    cityName: citySlug,
    path: localContent?.canonicalSlug || `/${service}/${provinceSlug}/${citySlug}`,
    metaTitle: localContent?.metaTitle,
    metaDescription: localContent?.metaDescription,
  });

  return seo; // Next.js는 Metadata 타입만 취하고 h1 속도는 무시함
}

export default async function LocationServicePage({ params }: Props) {
  const { service: serviceSlug, province: provinceSlug, city: citySlug } = await params;
  
  const service = services.find((s) => s.slug === serviceSlug);
  const region = getRegionInfo(provinceSlug, citySlug);
  const allowedRegion = serviceSlug === 'window-caulking' ? WINDOW_CAULKING_ALLOWED_REGIONS[citySlug] : null;

  // 창틀코킹 화이트리스트 검증
  if (serviceSlug === 'window-caulking') {
    if (!allowedRegion || allowedRegion.province !== provinceSlug) {
      notFound();
    }
  } else if (!service || !region) {
    notFound();
  }

  const local = getLocalizedContent(serviceSlug, provinceSlug, citySlug);

  // region이 명시적 데이터에 없을 수 있으므로(상동 등) 정규화
  const provinceName = region?.province.name || (allowedRegion?.province === 'seoul' ? '서울특별시' : '경기도');
  const cityName = region?.city.name || allowedRegion?.name || "";
  const locationName = `${provinceName} ${cityName}`;
  const displayName = allowedRegion ? allowedRegion.name : cityName.replace(/[구시군]$/, '');
  
  // SEO 헬퍼로부터 동일한 H1 타이틀 획득 (일관성 유지)
  const { h1 } = getMetadataByLocation({
    serviceSlug,
    serviceTitle: service?.title || "창틀코킹",
    provinceName: provinceName,
    cityName: citySlug, // 헬퍼 내부에서 화이트리스트 참조를 위해 slug 전달
    path: `/`, // 임시
  });

  // 관련 포트폴리오 필터링
  const relatedPortfolio = portfolioCases.filter(p => local?.relatedPortfolioIds.includes(p.id));

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      {/* FAQ 구조화 데이터 자동 주입 (SEO) */}
      {local?.faqs && <FAQSchema faqs={local.faqs} />}
      
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Breadcrumbs Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Breadcrumbs items={[
            { label: "서비스 안내", href: "/services" },
            { label: service?.title || "창틀코킹", href: `/services/${serviceSlug}` },
            { label: provinceName },
            { label: cityName, active: true }
          ]} />
        </div>

        {/* 히어로 섹션 (필수) */}
        <LocalHero 
          locationName={h1} 
          serviceTitle="" 
          intro={local?.intro}
          keywords={local?.secondaryKeywords}
        />

        {/* 지역 맞춤 문제 및 특성 (조건부) */}
        {local && (local.localProblems || local.targets) && (
          <LocalAnalysis 
            locationName={locationName}
            problems={local.localProblems}
            targets={local.targets}
          />
        )}

        {/* 시공 프로세스 (조건부) */}
        {local?.workProcess && local.workProcess.length > 0 && (
          <LocalProcess process={local.workProcess} />
        )}

        {/* 비용 영향 요소 (조건부) */}
        {local?.costFactors && local.costFactors.length > 0 && (
          <LocalCosts costFactors={local.costFactors} />
        )}

        {/* FAQ (조건부) */}
        {local?.faqs && local.faqs.length > 0 && (
          <LocalFAQ faqs={local.faqs} />
        )}

        {/* 관련 사례 (조건부) */}
        {relatedPortfolio.length > 0 && (
          <LocalPortfolio 
            locationName={locationName} 
            portfolio={relatedPortfolio} 
          />
        )}

        {/* 인접 지역 링크 (조건부) */}
        {local?.nearbyLinks && local.nearbyLinks.length > 0 && (
          <LocalNearbyLinks 
            locationName={locationName}
            serviceSlug={serviceSlug}
            provinceSlug={provinceSlug}
            links={local.nearbyLinks}
          />
        )}

        {/* 문의 CTA 섹션 (고정항목) */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
             <div className="bg-blue-600 text-white p-10 md:p-20 rounded-[60px] shadow-3xl text-center relative overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
                
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight relative z-10">
                  {serviceSlug === 'window-caulking' 
                    ? `${displayName} 창틀코킹 상담이 필요하시면 현장 상황을 확인한 뒤 작업 범위와 보수 방향을 안내해드립니다`
                    : `${locationName} 전문가에게 지금 바로 문의하세요`}
                </h2>
                <p className="text-blue-100 mb-12 text-lg font-medium opacity-90 relative z-10">
                  망설임은 해결을 늦출 뿐입니다. 사진 한 장으로 시작되는 건강한 변화를 경험해 보세요.
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
