import { MetadataRoute } from 'next';
import { portfolioCases } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modu-gomphang.netlify.app'; // 사용자 도메어로 변경 필요

  // 시공 사례(블로그) URL 생성
  const blogUrls = portfolioCases.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogUrls,
  ];
}
