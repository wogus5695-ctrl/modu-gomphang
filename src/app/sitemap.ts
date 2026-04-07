import { MetadataRoute } from 'next';
import { portfolioCases } from '@/data/portfolio';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import { WINDOW_CAULKING_ALLOWED_REGIONS } from '@/data/allowedKeywords';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sinbiroo.co.kr';

  // 1. 서비스별 지역 랜딩 페이지 URL 생성
  const regionalUrls: MetadataRoute.Sitemap = [];
  
  services.forEach(service => {
    if (service.slug === 'window-caulking') {
      // 창틀코킹은 화이트리스트에 등록된 모든 상세 지역(시/구/동) 포함
      Object.values(WINDOW_CAULKING_ALLOWED_REGIONS).forEach(region => {
        regionalUrls.push({
          url: `${baseUrl}/${service.slug}/${region.province}/${region.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    } else {
      // 기타 서비스는 기본 시/구 단위 지역 조합 순회
      regions.forEach(province => {
        province.cities.forEach(city => {
          regionalUrls.push({
            url: `${baseUrl}/${service.slug}/${province.slug}/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
          });
        });
      });
    }
  });

  // 2. 시공 사례 상세 페이지 URL 생성 (/portfolio/[id])
  const portfolioUrls: MetadataRoute.Sitemap = portfolioCases.map((post) => ({
    url: `${baseUrl}/portfolio/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
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
