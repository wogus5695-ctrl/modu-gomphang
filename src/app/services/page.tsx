import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { getMetadata } from "@/lib/seo";

export const metadata: Metadata = getMetadata({
  title: "전문 서비스 안내",
  description: "레인가드의 전문 분야별 창틀코킹 및 빗물누수 보수 서비스를 확인하세요. 아파트, 빌라, 주택의 누수 문제를 완벽하게 해결해 드립니다.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hub Hero */}
        <section className="bg-gray-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600" 
              alt="레인가드 창틀코킹 및 빗물누수 전문 시공 배경 이미지" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6">전문 서비스 안내</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed break-keep">
              레인가드는 다년간의 노하우와 검증된 창호 전용 실런트를 사용하여 빗물누수를 근본적으로 해결합니다.
            </p>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <article key={idx} className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={service.heroImage} 
                      alt={
                        service.title.includes('방수') || service.title.includes('도색')
                          ? `${service.title} 누수 보수 및 방수 시공 이미지`
                          : `${service.title} 정밀 점검 및 창틀코킹 시공 이미지`
                      } 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <span className="text-sm font-bold" aria-hidden="true">0{idx + 1}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">{service.shortDesc}</p>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
                    >
                      자세히 보기 <span className="ml-2">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Common CTA */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">어떤 서비스가 필요하신가요?</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              전문가 상담은 언제나 무료입니다. 상황에 맞는 최적의 솔루션을 제안해 드립니다.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block px-10 py-4 bg-blue-600 text-white font-black text-xl rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            >
              무료 상담 및 견적 신청하기
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
