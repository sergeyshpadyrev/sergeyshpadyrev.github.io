import type { Metadata } from 'next';

import { getNoteSummaries } from '@/lib/notes';
import { defaultImage } from '@/lib/seo';

import Notes from '@/screens/Notes';

export const metadata: Metadata = {
  title: 'Заметки',
  description: 'Короткие заметки и наблюдения Сергея Шпадырева.',
  alternates: { canonical: '/notes/' },
  openGraph: {
    url: '/notes/',
    title: 'Заметки Сергея Шпадырева',
    description: 'Короткие заметки и наблюдения Сергея Шпадырева.',
    images: [{ url: defaultImage, alt: 'Сергей Шпадырев' }],
  },
};

export default async function NotesPage() {
  const notes = await getNoteSummaries();
  return <Notes notes={notes} />;
}
