"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxUpW4LtbQhYF_zqGHjSCUuDDQ4-ixlwSWKcv_d000OY9oLShYesbQq48Rr2wZCzDPHTQ/exec', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };


  return (
    <div className="antialiased flex min-h-screen flex-col font-sans overflow-x-hidden">
      {/* Header */}
      <Header />


      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-blue-50 overflow-hidden py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 break-keep">
                  우리 집 숨어있는 <span className="text-blue-600 italic">곰팡이</span>,<br />
                  건강을 위해 지금 제거하세요
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium break-keep">
                  지움 (Zium)은 말뿐인 청소가 아닌, 과학적이고 체계적인<br className="hidden md:block" />
                  박멸 프로세스로 당신의 가족에게 건강한 숨을 선물합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-blue-200 shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all text-center">
                    실시간 견적 문의하기
                  </Link>
                  <Link href="#services" className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 text-lg font-bold rounded-xl hover:bg-blue-50 transition-all text-center">
                    시공 서비스 보기
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-video rounded-2xl bg-white shadow-2xl overflow-hidden border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
                    alt="밝고 따스한 현대적 거실"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-3">Professional Services</h2>
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">곰팡이 제거 전문 서비스</p>
              <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "욕실 곰팡이", desc: "타일 줄눈과 실리콘 깊숙이 침투한 검은 곰팡이, 줄눈과 실리콘 재 시공", img: "/images/service-bathroom.png" },
                { title: "에어컨 곰팡이", desc: "내부 냉각핀과 필터의 독소 포자균을 전문 약품으로 세척!", img: "/images/service-aircon.png" },
                { title: "벽 곰팡이", desc: "결로, 단열 등 곰팡이 발생 원인을 분석하고 작업을 통해 근본적인 원인 해결!", img: "/images/service-wall.png" },
                { title: "베란다 곰팡이", desc: "넓게 퍼져 직접 제거하기 어려운 곰팡이, 전용세제로 제거하고, 방지제 코팅으로 재발 방지!", img: "/images/service-balcony.png" }
              ].map((service, idx) => (
                <div key={idx} className="group bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <span className="text-sm font-bold">0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section (New) */}
        <section className="py-20 bg-gray-50/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    num: "1",
                    title: "포자균 완전 박멸",
                    desc: "과장 없는 정직한 함량의 전용 세제를 사용하여 표면뿐만 아니라 깊숙한 균까지 박멸",
                    color: "bg-blue-600"
                  },
                  {
                    num: "2",
                    title: "완벽 세척 및 건조",
                    desc: "독한 세제 냄새가 남지 않도록 고압 세척과 열풍 건조를 거쳐 즉시 생활이 가능한 상태 확보",
                    color: "bg-green-500"
                  },
                  {
                    num: "3",
                    title: "재발 방지 코팅",
                    desc: "곰팡이가 다시는 발붙이지 못하도록 친환경 항균 코팅막을 형성하여 장기적인 청결 유지",
                    color: "bg-slate-900"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className={`flex-shrink-0 w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg transform group-hover:scale-110 transition-transform`}>
                      {item.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                    재발을 막는<br />
                    <span className="text-blue-600">3단계 책임시공</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed break-keep">
                    일시적인 눈가림은 하지 않습니다. 근본적인 원인을 제거하고 다시 발생하지 않도록 코팅까지 매듭지어야 진정한 전문가라고 부를 수 있습니다.
                  </p>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                    <p className="text-xl font-bold text-gray-900 italic leading-relaxed">
                      "지움 (Zium)은 결과물로 보답합니다."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-3 text-sm">Real Work History</h2>
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">시공 사례</p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  region: "부천시 역곡동",
                  keyword: "베란다 곰팡이 제거",
                  title: "역곡동 아파트 베란다 벽면 곰팡이 완벽 해결",
                  desc: "베란다 벽에 핀 곰팡이를 약품을 사용하여 제거하고, 재발 방지 코팅작업 완료",
                  tags: ["#부천곰팡이제거", "#베란다곰팡이", "#결로해결"],
                  imgBefore: "/images/portfolio-1-before.jpg",
                  imgAfter: "/images/portfolio-1-after.jpg"
                },
                {
                  region: "부천시 심곡동",
                  keyword: "벽 곰팡이 제거",
                  title: "심곡동 빌라 안방 외벽 결로 곰팡이 치료",
                  desc: "결로로 인해 곰팡이 발생, 곰팡이 약품제거 및 석고보드 교체",
                  tags: ["#심곡동벽곰팡이", "#부천결로공사", "#곰팡이방지"],
                  imgBefore: "/images/portfolio-2-before.jpg",
                  imgAfter: "/images/portfolio-2-after.jpg"
                },
                {
                  region: "부천시 원미동",
                  keyword: "에어컨 곰팡이",
                  title: "원미동 오피스텔 벽걸이 에어컨 포자 세척",
                  desc: "냉각핀과 송풍팬 내부의 검은 곰팡이를 고압 살균 세척하여 불쾌한 냄새와 포자균 제거",
                  tags: ["#부천에어컨청소", "#원미동에어컨곰팡이", "#살균세척"],
                  imgBefore: "/images/portfolio-3-before.jpg",
                  imgAfter: "/images/portfolio-3-after.jpg"
                },
                {
                  region: "부천시 상동",
                  keyword: "베란다 곰팡이",
                  title: "상동 아파트 베란다 창틀 곰팡이 박멸",
                  desc: "환기 부족으로 벽면에 곰팡이 발생, 전용 약품으로 제거 후 재발방지 코팅 작업 완료",
                  tags: ["#상동베란다곰팡이", "#부천창틀곰팡이", "#항균코팅"],
                  imgBefore: "/images/portfolio-4-before.jpg",
                  imgAfter: "/images/portfolio-4-after.jpg"
                }
              ].map((item, idx) => (
                <div key={idx} className="group bg-blue-50/20 rounded-2xl overflow-hidden border border-blue-100 hover:border-green-200 hover:shadow-xl transition-all duration-500 flex flex-col">
                  {/* Before & After 시각화 영역 */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                    <img
                      src={item.imgBefore}
                      alt={`부천 곰팡이제거 전문 업체 지움 (Zium) - ${item.region} ${item.keyword} 시공 사례 (Before)`}
                      className="w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={item.imgAfter}
                      alt={`부천 곰팡이제거 전문 업체 지움 (Zium) - ${item.region} ${item.keyword} 시공 사례 (After)`}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100"
                    />
                    {/* 라벨 오버레이 */}
                    <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm group-hover:opacity-0 transition-opacity">BEFORE</div>
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">AFTER CHECK</div>
                  </div>

                  {/* 정보 요약 영역 */}
                  <div className="p-5 flex-grow flex flex-col">
                    <p className="text-blue-600 text-[11px] font-black mb-1.5 uppercase tracking-wider">{item.region} | {item.keyword}</p>
                    <h3 className="text-gray-900 font-bold text-base mb-3 line-clamp-1 break-keep leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2 break-keep">
                      {item.desc}
                    </p>
                    <div className="mt-auto pt-4 border-t border-blue-50 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-medium text-blue-400/80">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">집안의 곰팡이 고민,<br />지금 바로 해결하세요</h2>
            <p className="text-blue-100 mb-12 text-lg">전문가 상담은 언제나 무료입니다. 사진 한 장으로 시작되는 건강한 변화를 경험해보세요.</p>
            <form 
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl"
            >
              {status === 'success' ? (
                <div className="py-12 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-2">무료 견적 신청 완료!</h3>
                  <p className="text-blue-100 italic">담당 전문가가 곧 연락드리겠습니다.</p>
                  <button 
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-white/60 hover:text-white text-sm transition-colors border-b border-white/20"
                  >
                    새로운 문의 작성하기
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <input 
                      name="name" 
                      type="text" 
                      placeholder="성함" 
                      required 
                      disabled={status === 'loading'}
                      className="bg-white/90 text-gray-900 placeholder:text-gray-400 w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 ring-blue-400/50 transition-all font-medium disabled:opacity-50" 
                    />
                    <input 
                      name="phone" 
                      type="tel" 
                      placeholder="연락처 ('-' 없이 입력)" 
                      required 
                      disabled={status === 'loading'}
                      className="bg-white/90 text-gray-900 placeholder:text-gray-400 w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 ring-blue-400/50 transition-all font-medium disabled:opacity-50" 
                    />
                  </div>
                  <textarea 
                    name="message" 
                    placeholder="문의 내용 및 지역 (예: 거실 벽면 곰팡이, 부천 상동 아파트)" 
                    required 
                    rows={4} 
                    disabled={status === 'loading'}
                    className="bg-white/90 text-gray-900 placeholder:text-gray-400 w-full px-6 py-4 rounded-xl mb-8 focus:outline-none focus:ring-4 ring-blue-400/50 transition-all font-medium resize-none disabled:opacity-50"
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-white text-blue-600 font-black text-xl py-5 rounded-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-2xl disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                        전송 중...
                      </>
                    ) : (
                      "실시간 무료 견적 신청하기"
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="mt-4 text-red-200 text-sm">오류가 발생했습니다. 다시 시도해 주세요.</p>
                  )}
                  <p className="mt-4 text-blue-200 text-sm">상담 신청 연락은 순차적으로 진행됩니다.</p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
