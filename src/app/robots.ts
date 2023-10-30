import { DOMAIN_URL } from '@utils/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
  };
}
