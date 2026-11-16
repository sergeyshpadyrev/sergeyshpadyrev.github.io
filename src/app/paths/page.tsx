import type { Metadata } from 'next';

import { defaultImage } from '@/lib/seo';

import Paths from '@/screens/Paths';

export const metadata: Metadata = {
  title: 'Учение Сергея Шпадырева',
  description: 'Разделы учения Сергея Шпадырева',
  alternates: { canonical: '/paths/' },
  openGraph: {
    url: '/paths/',
    title: 'Учение Сергея Шпадырева',
    description: 'Разделы учения Сергея Шпадырева',
    images: [{ url: defaultImage, alt: 'Сергей Шпадырев' }],
  },
};

export default function PathsPage() {
  return <Paths />;
}
