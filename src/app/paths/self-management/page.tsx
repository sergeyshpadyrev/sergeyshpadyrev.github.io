import type { Metadata } from 'next';

import { getPathConfig, getPathPosts } from '@/lib/paths';
import { SelfManagement } from '@/screens/Path';

export const generateMetadata = async (): Promise<Metadata> => {
  const config = await getPathConfig('self-management');

  return {
    title: config.title,
    description: config.metaDescription,
    alternates: { canonical: '/paths/self-management/' },
  };
};

export default async function SelfManagementPage() {
  const [config, posts] = await Promise.all([
    getPathConfig('self-management'),
    getPathPosts('self-management'),
  ]);

  return (
    <SelfManagement
      title={config.title}
      mainPost={posts.mainPost}
      additionalPosts={posts.additionalPosts}
    />
  );
}
