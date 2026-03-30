import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioCases } from "@/data/portfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { getMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getRegionByLocationName } from "@/data/regions";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = portfolioCases.find((c) => c.id === id);

  if (!post) {
    return { title: "시공 사례를 찾을 수 없습니다" };
  }

  return getMetadata({
    title: post.title,
    description: post.summary,
    path: `/portfolio/${post.id}`,
    ogImage: post.afterImg,
  });
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params;
  const post = portfolioCases.find((c) => c.id === id);

  if (!post) {
    notFound();
  }

  // 해당 현장 지역의 전용 랜딩 페이지 정보 조회
  const localRegion = getRegionByLocationName(post.location);

  // JSON-LD 구조화 데이터 (CaseStudy/Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.summary,
    "image": post.afterImg,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "지움 (Zium)"
    },
    "publisher": {
      "@type": "Organization",
      "name": "지움 (Zium)",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sinbiroo.co.kr/icon.png"
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased text-gray-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumbs Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Breadcrumbs items={[
            { label: "시공 사례", href: "/portfolio" },
            { label: post.title, active: true }
          ]} />
        </div>

        {/* Detail Hero Section */}
        <section className="bg-gray-50 py-12 md:py-20 border-b border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <nav className="text-sm font-bold text-blue-600 mb-6 flex gap-2">
                   <Link href="/portfolio" className="hover:underline">시공 사례 아카이브</Link>
                   <span>/</span>
                   <span className="text-gray-400">{post.location}</span>
                </nav>
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8 break-keep">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-4 mb-10">
                   <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">현장 유형</span>
                      <span className="font-bold text-gray-800">{post.siteType}</span>
                   </div>
                   <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">시공 서비스</span>
                      <span className="font-bold text-gray-800">{post.service}</span>
                   </div>
                   <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">시공 날짜</span>
                      <span className="font-bold text-gray-800">{post.date}</span>
                   </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1">
                 <BeforeAfterSlider before={post.beforeImg} after={post.afterImg} alt={post.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Report Content */}
        <section className="py-24">
           <div className="max-w-4xl mx-auto px-4">
              {/* Problem Analysis */}
              <article className="mb-20">
                <header className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner">!</div>
                  <h2 className="text-3xl font-black text-gray-900">현장 문제 상황</h2>
                </header>
                <p className="text-xl text-gray-600 leading-relaxed font-medium whitespace-pre-line border-l-4 border-red-500 pl-8">
                  {post.problem}
                </p>
              </article>

              {/* Internal Linking Bridge: Regional Page */}
              {localRegion && (
                <div className="mb-20 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-black text-blue-900 mb-2">{localRegion.cityName} 지역 청소는 지움(Zium)이 최고입니다</h3>
                    <p className="text-blue-700 font-medium">해당 지역의 서비스 안내와 견적 정보를 확인하세요.</p>
                  </div>
                  <Link 
                    href={`/${post.relatedServiceSlug}/${localRegion.provinceSlug}/${localRegion.citySlug}`}
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all whitespace-nowrap"
                    data-track-category="conversion"
                    data-track-action="inquiry_click"
                    data-track-label={`bridge_region_${localRegion.citySlug}`}
                  >
                    {localRegion.cityName} 전용 페이지 이동 →
                  </Link>
                </div>
              )}

              {/* Work Details Grid */}
              <article className="mb-20">
                 <header className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner">⚙</div>
                   <h2 className="text-3xl font-black text-gray-900">단계별 시공 과정</h2>
                 </header>
                 <div className="grid gap-4">
                    {post.workDetails.map((step, i) => (
                      <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all font-bold text-gray-800">
                        <span className="text-blue-600 opacity-30 text-4xl italic">{i+1}</span>
                        <p className="pt-2 leading-relaxed">{step}</p>
                      </div>
                    ))}
                 </div>
              </article>

              {/* Result Summary */}
              <article className="mb-24 p-12 bg-blue-600 text-white rounded-[40px] shadow-3xl text-center">
                 <h2 className="text-3xl font-black mb-8">시공 후기 및 결과 요약</h2>
                 <p className="text-2xl font-medium leading-relaxed mb-10 opacity-90 break-keep">
                   "{post.resultSummary}"
                 </p>
                 <div className="h-0.5 w-16 bg-blue-300 mx-auto opacity-50"></div>
              </article>

              {/* Related Service Bridge */}
              <div className="bg-gray-900 rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                 <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight">유사한 시공 환경이신가요?</h3>
                 <p className="text-gray-400 mb-10 font-medium">지움의 전문 {post.service}를 통해 <br /> 쾌적한 주거 환경을 선물해 드립니다.</p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href={`/services/${post.relatedServiceSlug}`} 
                      className="px-10 py-5 bg-white text-gray-900 font-extrabold rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                      data-track-category="view"
                      data-track-action="service_bridge_click"
                      data-track-label={`bridge_service_${post.relatedServiceSlug}`}
                    >
                      해당 서비스 상세 안내 <span className="text-blue-600">→</span>
                    </Link>
                    <Link 
                      href="/#contact" 
                      className="px-10 py-5 bg-blue-600 text-white font-extrabold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                      data-track-category="conversion"
                      data-track-action="inquiry_click"
                      data-track-label="case_bottom_cta"
                    >
                      📞 실시간 견적 문의하기
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* Other Cases Navigation */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
           <div className="max-w-7xl mx-auto px-4 text-center mb-12">
             <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">지움 시공 갤러리</h4>
             <h2 className="text-3xl md:text-4xl font-black text-gray-900">최근 완료된 다른 시공 사례</h2>
           </div>
           <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
              {portfolioCases.filter(c => c.id !== post.id).slice(0, 3).map((item) => (
                <Link key={item.id} href={`/portfolio/${item.id}`} className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
                   <div className="aspect-video relative overflow-hidden">
                      <img src={item.afterImg} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                   </div>
                   <div className="p-6">
                      <h5 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{item.title}</h5>
                   </div>
                </Link>
              ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
