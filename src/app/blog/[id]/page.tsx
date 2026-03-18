import { portfolioCases } from "@/data/portfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = portfolioCases.find((c) => c.id === id);

  if (!post) {
    notFound();
  }

  // JSON-LD 구조화 데이터
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
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="flex-grow pt-8 pb-20">
        <article className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8 flex gap-2">
            <Link href="/" className="hover:text-primary transition-colors">홈</Link>
            <span>&gt;</span>
            <span className="text-gray-900 font-medium">시공 사례</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-3 py-1 bg-primary-bg text-primary font-bold rounded-full text-sm mb-4">
              {post.region} | {post.service}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            <div className="text-gray-500 text-sm">{post.date} 시공 완료</div>
          </header>

          {/* Main Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image 
              src={post.afterImg} 
              alt={`${post.region} ${post.service} 시공 완료 사진`} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">시공 상세 과정</h2>
            <p className="mb-8 whitespace-pre-line">{post.content}</p>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">🔎 이 사례의 주요 포인트</h3>
              <ul className="list-disc pl-5 space-y-2 font-medium">
                <li>{post.region} 지역의 특화된 결로 분석</li>
                <li>오염 부위 정밀 세척 및 100% 포자균 박멸</li>
                <li>친환경 항균 코팅막 형성으로 재발 방지</li>
                <li>작업 후 즉시 일상생활 가능 (냄새 없음)</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100 mb-16" />

          {/* CTA */}
          <div className="bg-primary-bg rounded-3xl p-8 md:p-12 text-center shadow-inner">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">우리 집도 곰팡이 해결이 필요하신가요?</h3>
            <p className="text-gray-600 mb-8 font-medium">무료 견적 상담을 신청하시면 전문가가 직접 확인해 드립니다.</p>
            <Link 
              href="/#contact" 
              className="inline-block px-10 py-4 bg-primary text-white font-black text-xl rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all transform hover:-translate-y-1"
            >
              지금 바로 무료 견적 상담하기
            </Link>
          </div>

          {/* Other Cases */}
          <section className="mt-20">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">유사한 지역/서비스 후기 더보기</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioCases.filter(c => c.id !== post.id).slice(0, 3).map((item) => (
                <Link key={item.id} href={`/blog/${item.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.afterImg} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
