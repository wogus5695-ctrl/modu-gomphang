import React from 'react';
import Link from 'next/link';

interface NearbyLink {
  name: string;
  slug: string;
}

interface LocalNearbyLinksProps {
  locationName: string;
  serviceSlug: string;
  provinceSlug: string;
  links?: NearbyLink[];
}

export default function LocalNearbyLinks({ locationName, serviceSlug, provinceSlug, links }: LocalNearbyLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-24 bg-blue-600 text-white overflow-hidden relative" aria-labelledby="nearby-title">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full -mr-48 -mt-48 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32 opacity-10 blur-2xl"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 id="nearby-title" className="text-3xl md:text-4xl font-black mb-8 tracking-tighter">
          {locationName} 인근 지역 창틀코킹 안내
        </h2>
        <p className="text-blue-100 mb-12 text-lg font-medium opacity-80">
          인근 지역에서도 RainGuard의 프리미엄 창틀코킹 서비스를 동일하게 이용하실 수 있습니다.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, i) => (
            <Link 
              key={i} 
              href={`/${serviceSlug}/${provinceSlug}/${link.slug}`} 
              className="px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-blue-600 border border-white/20 rounded-2xl font-bold transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              {link.name} 창틀코킹 보기
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
