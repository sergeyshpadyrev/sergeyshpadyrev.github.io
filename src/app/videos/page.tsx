import type { Metadata } from 'next';

import { defaultImage } from '@/lib/seo';
import { getVideoSections } from '@/lib/videos';

import Videos from '@/screens/Videos';

export const metadata: Metadata = {
  title: 'Видео',
  description: 'Беседы и лекции Сергея Шпадырева о философии и жизни.',
  alternates: { canonical: '/videos/' },
  openGraph: {
    url: '/videos/',
    title: 'Видео Сергея Шпадырева',
    description: 'Беседы и лекции Сергея Шпадырева о философии и жизни.',
    images: [{ url: defaultImage, alt: 'Сергей Шпадырев' }],
  },
};

export default async function VideosPage() {
  const sections = await getVideoSections();
  return <Videos sections={sections} />;
}
