import { MetadataRoute } from 'next';
import { portfolioCases } from '@/data/portfolio';
import { services } from '@/data/services';
import { regions } from '@/data/regions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sinbiroo.co.kr';

  // 1. 서비스별 전체 지역 랜딩 페이지 URL 생성 (/[service]/[province]/[city])
  // 서비스(4종) x 전체 지역 조합 순회
  const regionalUrls: MetadataRoute.Sitemap = [];
  
  services.forEach(service => {
    regions.forEach(province => {
      province.cities.forEach(city => {
        regionalUrls.push({
          url: `${baseUrl}/${service.slug}/${province.slug}/${city.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        });
      });
    });
  });

  // 2. 시공 사례 상세 페이지 URL 생성 (/portfolio/[id])
  const portfolioUrls = portfolioCases.map((post) => ({
    url: `${baseUrl}/portfolio/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. 서비스 허브 상세 페이지 URL 생성 (/services/[slug])
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
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
