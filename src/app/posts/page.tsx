import { getPostSummaries } from '@/lib/posts';

import Posts from '@/components/screens/Posts';

export const metadata = {
  title: 'Посты — Сергей Шпадырев',
  description: 'Все публикации и эссе Сергея Шпадырева.',
};

export default async function PostsPage() {
  const posts = await getPostSummaries();
  return <Posts posts={posts} />;
}
