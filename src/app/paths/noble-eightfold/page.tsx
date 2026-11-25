import type { Metadata } from 'next';

import {
  getNobleEightfoldSections,
  getPathConfig,
  getPathPosts,
} from '@/lib/paths';
import { NobleEightfold } from '@/screens/Path';

export const generateMetadata = async (): Promise<Metadata> => {
  const config = await getPathConfig('noble-eightfold');

  return {
    title: config.title,
    description: config.metaDescription,
    alternates: { canonical: '/paths/noble-eightfold/' },
  };
};

export default async function NobleEightfoldPage() {
  const [config, sections, posts] = await Promise.all([
    getPathConfig('noble-eightfold'),
    getNobleEightfoldSections(),
    getPathPosts('noble-eightfold'),
  ]);

  return (
    <NobleEightfold
      title={config.title}
      mainPost={posts.mainPost}
      sections={sections}
      additionalPosts={posts.additionalPosts}
      additionalMaterials={config.additionalMaterials ?? []}
    />
  );
}
