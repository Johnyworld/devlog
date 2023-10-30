import { DOMAIN_URL } from '@utils/constants';
import { MetadataRoute } from 'next';
import { getPostList } from 'src/calls/getPostList';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostList();

  const routes = ['', '/work', '/cv'].map(route => ({
    url: `${DOMAIN_URL}${route}`,
    lastModified: new Date(),
  }));

  const postsMap = posts.map(post => ({
    url: `${DOMAIN_URL}/post/${post.title}.md`,
    lastModified: post.modifiedAt,
  }));

  return [...routes, ...postsMap];
}
