import type { Metadata } from 'next';

import {
  getPathConfig,
  getPathPosts,
  getSelfManagementSections,
} from '@/lib/paths';
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
  const [config, posts, sections] = await Promise.all([
    getPathConfig('self-management'),
    getPathPosts('self-management'),
    getSelfManagementSections(),
  ]);

  return (
    <SelfManagement
      title={config.title}
      mainPost={posts.mainPost}
      additionalPosts={posts.additionalPosts}
      sections={sections}
    />
  );
}
