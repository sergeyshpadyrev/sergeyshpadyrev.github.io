import type { Metadata } from 'next';

import { getPostSummaries } from '@/lib/posts';
import { SelfManagement } from '@/screens/Path';

const mainPostId = '68_conveyer';
const additionalPostIds = [
  '04_procrastination',
  '18_managment_panel',
  '52_three_resources',
];

export const metadata: Metadata = {
  title: 'Конвейер управления собой',
  description: 'Инженерный подход к собственной жизни и управлению делами.',
  alternates: { canonical: '/paths/self-management/' },
};

export default async function SelfManagementPage() {
  const posts = await getPostSummaries();
  const postsById = new Map(posts.map((post) => [post.id, post]));
  const mainPost = postsById.get(mainPostId);
  const additionalPosts = additionalPostIds.flatMap((id) => {
    const post = postsById.get(id);
    return post ? [post] : [];
  });

  if (!mainPost) {
    throw new Error(`Не найден основной текст пути: ${mainPostId}`);
  }

  return (
    <SelfManagement
      mainPost={mainPost}
      additionalPosts={additionalPosts}
    />
  );
}
