import { MetadataRoute } from 'next';
import { portfolioCases } from '@/data/portfolio';
import { services } from '@/data/services';
import { SEOUL_DATA, NEW_REGIONS_DATA, EXPANSION_REGIONS_DATA, SERVICES, WATERPROOF_SERVICES } from '@/data/sitemapKeywords';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sinbiroo.co.kr';

  // 1. 대표 동적변환 랜딩 URL 생성 (/?k=지역명-작업명)
  const regionalUrls: MetadataRoute.Sitemap = [];
  const generatedKeysSet = new Set<string>();

  const addRegionalUrl = (regionName: string, service: string, priority: number) => {
    const rawKey = `${regionName}-${service}`;
    const urlKey = rawKey.replace(/\s+/g, '-');
    if (generatedKeysSet.has(urlKey)) return;
    generatedKeysSet.add(urlKey);

    regionalUrls.push({
      url: `${baseUrl}/?k=${encodeURIComponent(urlKey)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority,
    });
  };
  
  const allRegions = [...SEOUL_DATA, ...NEW_REGIONS_DATA];

  allRegions.forEach(region => {
    // 구 단위 (또는 큰 지역명) - 기존 서비스
    SERVICES.forEach(service => {
      addRegionalUrl(region.gu, service, 0.8);
    });

    // 구 단위 (또는 큰 지역명) - 방수 신규 서비스 추가
    WATERPROOF_SERVICES.forEach(service => {
      addRegionalUrl(region.gu, service, 0.8);
    });

    // 동 단위 - 기존 서비스
    region.dongs.forEach(dong => {
      SERVICES.forEach(service => {
        addRegionalUrl(dong, service, 0.7);
      });
    });

    // 동 단위 - 방수 신규 서비스 추가
    region.dongs.forEach(dong => {
      WATERPROOF_SERVICES.forEach(service => {
        addRegionalUrl(dong, service, 0.7);
      });
    });
  });

  // 신규 확장 지역 10대 키워드 추가 (기구축된 키워드와 중복될 경우 자동 생략)
  EXPANSION_REGIONS_DATA.forEach(region => {
    const combinedServices = [...SERVICES, ...WATERPROOF_SERVICES];
    // 1. 구 단위
    combinedServices.forEach(service => {
      addRegionalUrl(region.gu, service, 0.8);
    });
    // 2. 동/읍/면 단위
    region.dongs.forEach(dong => {
      combinedServices.forEach(service => {
        addRegionalUrl(dong, service, 0.7);
      });
    });
  });

  // 2. 시공 사례 상세 페이지 URL 생성 (/portfolio/[id])
  const portfolioUrls: MetadataRoute.Sitemap = portfolioCases.map((post) => ({
    url: `${baseUrl}/portfolio/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // 3. 서비스 허브 상세 페이지 URL 생성 (/services/[slug])
  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. 고정 정적 페이지 및 서비스 허브/포트폴리오 목록
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sitemap-seoul`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sitemap-incheon`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sitemap-gyeonggi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  return [
    ...staticUrls,
    ...serviceUrls,
    ...portfolioUrls,
    ...regionalUrls,
  ];
}
