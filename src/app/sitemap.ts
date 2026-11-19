import type { MetadataRoute } from 'next';

import { getNoteIds } from '@/lib/notes';
import { getPostIds } from '@/lib/posts';
import {
  getNobleEightfoldTextIds,
  getSelfManagementTextIds,
} from '@/lib/paths';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postIds, noteIds, nobleEightfoldTextIds, selfManagementTextIds] =
    await Promise.all([
      getPostIds(),
      getNoteIds(),
      getNobleEightfoldTextIds(),
      getSelfManagementTextIds(),
    ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/posts/'), changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/notes/'), changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/books/'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/videos/'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/paths/'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/paths/self-management/'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/paths/noble-eightfold/'), changeFrequency: 'monthly', priority: 0.7 },
  ];

  return [
    ...staticRoutes,
    ...postIds.map((id) => ({
      url: absoluteUrl(`/posts/${id}/`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...noteIds.map((id) => ({
      url: absoluteUrl(`/notes/${id}/`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...nobleEightfoldTextIds.map((id) => ({
      url: absoluteUrl(`/paths/noble-eightfold/${id}/`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...selfManagementTextIds.map((id) => ({
      url: absoluteUrl(`/paths/self-management/${id}/`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
