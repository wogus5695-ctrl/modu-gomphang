import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { portfolioCases } from "@/data/portfolio";
import { getMetadata } from "@/lib/seo";

export const metadata: Metadata = getMetadata({
  title: "시공 사례 (포트폴리오)",
  description: "레인가드의 실제 창틀코킹 및 빗물누수 보수 시공 사례를 확인해 보세요. 아파트, 빌라, 주택의 누수 문제를 완벽하게 해결한 과정을 상세히 공개합니다.",
  path: "/portfolio",
});

export default function PortfolioListPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Portfolio Hero */}
        <section className="bg-gray-50 py-24 relative overflow-hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">Case Archive</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">레인가드 시공 사례</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed break-keep">
              가장 까다로운 누수 현장에서 검증된 레인가드의 기술력. <br />
              실제 시공 사례를 통해 투명한 해결 과정을 확인하세요.
            </p>
          </div>
        </section>

        {/* Case Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {portfolioCases.map((item) => (
                <article key={item.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={item.afterImg} 
                      alt={`${item.title} 시공 후 완료 상태`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-lg text-xs font-black shadow-sm">
                        {item.location}
                      </span>
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-black shadow-md">
                        {item.siteType}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-gray-400 text-sm font-bold mb-3">{item.date} 시공</div>
                    <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      <Link href={`/portfolio/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6 line-clamp-2">{item.summary}</p>
                    <Link 
                      href={`/portfolio/${item.id}`} 
                      className="mt-auto inline-flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all"
                    >
                      상세 보고서 보기 <span className="ml-2">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* List CTA */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">포트폴리오와 유사한 <br /> 상황이신가요?</h2>
            <p className="text-blue-100 mb-12 text-lg font-medium opacity-90">레인가드는 어떤 까다로운 누수 현장도 완벽히 해결할 준비가 되어 있습니다.</p>
            <Link 
              href="/#contact" 
              className="inline-block px-12 py-5 bg-white text-blue-600 font-black text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              무료 방문 견적 신청하기
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
