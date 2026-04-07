import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { regions } from "@/data/regions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";
import { getMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "서비스를 찾을 수 없습니다",
    };
  }

  return getMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    ogImage: service.heroImage,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // 주요 활동 지역 추출 (샘플)
  const activeRegions = [
    { p: 'gyeonggi', c: 'bucheon', n: '부천시' },
    { p: 'seoul', c: 'gangnam-gu', n: '강남구' },
    { p: 'gyeonggi', c: 'siheung', n: '시흥시' },
    { p: 'gyeonggi', c: 'ansan', n: '안산시' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Breadcrumbs Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Breadcrumbs items={[
            { label: "서비스 안내", href: "/services" },
            { label: service.title, active: true }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="service-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 id="service-title" className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8 break-keep">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? 'text-blue-600' : ''}>{word} </span>
                  ))}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed font-medium break-keep">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="px-10 py-5 bg-blue-600 text-white text-xl font-bold rounded-2xl shadow-blue-200 shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all text-center">
                    실시간 무료 견적 신청
                  </a>
                </div>
              </div>
              <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-3xl border-8 border-white transform rotate-1">
                <img 
                  src={service.heroImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">RainGuard 프리미엄 시공 솔루션</h2>
            <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed whitespace-pre-line mb-20 font-medium text-center break-keep">
              {service.content}
            </div>

            {service.features.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 text-center group">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <h4 className="font-black text-gray-900 text-xl mb-4">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Internal Linking: Regional Services */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">지역별 전문 서비스 안내</h2>
            <p className="text-gray-500 mb-16 text-lg font-medium">RainGuard는 수도권 전 지역에서 동일한 품질의 프리미엄 서비스를 제공합니다.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {activeRegions.map((reg, i) => (
                <Link 
                  key={i} 
                  href={`/${slug}/${reg.p}/${reg.c}`}
                  className="px-8 py-5 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-2xl font-black transition-all border border-gray-100 hover:border-blue-600 hover:shadow-xl transform hover:-translate-y-1"
                >
                  {reg.n} {service.title} 전용 페이지 →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Contact Section */}
        <section id="contact" className="py-24 bg-blue-600 text-white relative overflow-hidden" aria-labelledby="contact-title">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 id="contact-title" className="text-3xl md:text-6xl font-black mb-8 leading-tight">RainGuard 전문가가 <br /> 직접 안내해 드립니다</h2>
            <p className="text-blue-100 mb-16 text-xl font-medium opacity-90">사진 한 장만 보내주셔도 대략적인 견적 확인이 가능합니다.</p>
            
            <div className="bg-white p-10 md:p-16 rounded-[48px] shadow-3xl text-left">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
