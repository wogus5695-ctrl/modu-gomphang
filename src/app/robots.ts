import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://modu-gomphang.netlify.app/sitemap.xml', // 사용자 도메인으로 변경 필요
  };
}
