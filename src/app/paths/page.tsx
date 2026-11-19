import type { Metadata } from 'next';

import { getPathCards } from '@/lib/paths';
import { defaultImage } from '@/lib/seo';

import Paths from '@/screens/Paths';

export const metadata: Metadata = {
  title: 'Пути обучения от Сергея Шпадырева',
  description: 'Пути обучения от Сергея Шпадырева',
  alternates: { canonical: '/paths/' },
  openGraph: {
    url: '/paths/',
    title: 'Пути обучения от Сергея Шпадырева',
    description: 'Пути обучения от Сергея Шпадырева',
    images: [{ url: defaultImage, alt: 'Сергей Шпадырев' }],
  },
};

export default async function PathsPage() {
  const paths = await getPathCards();

  return <Paths paths={paths} />;
}
