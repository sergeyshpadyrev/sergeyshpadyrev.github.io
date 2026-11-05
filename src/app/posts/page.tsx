import type { Metadata } from 'next';

import { getPostSummaries } from '@/lib/posts';
import { defaultImage } from '@/lib/seo';

import Posts from '@/screens/Posts';

export const metadata: Metadata = {
  title: 'Эссе',
  description: 'Все публикации и эссе Сергея Шпадырева.',
  alternates: { canonical: '/posts/' },
  openGraph: {
    url: '/posts/',
    title: 'Эссе Сергея Шпадырева',
    description: 'Все публикации и эссе Сергея Шпадырева.',
    images: [{ url: defaultImage, alt: 'Сергей Шпадырев' }],
  },
};

export default async function PostsPage() {
  const posts = await getPostSummaries();
  return <Posts posts={posts} />;
}
