import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://sinbiroo.co.kr/sitemap.xml', // 사용자 도메인으로 업데이트 완료
  };
}
