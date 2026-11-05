import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getNoteById, getNoteIds } from '@/lib/notes';

import Note from '@/screens/Note';
import { absoluteUrl, defaultImage, serializeJsonLd, siteName } from '@/lib/seo';

type NotePageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const ids = await getNoteIds();
  return ids.map((id) => ({ id }));
};

export const generateMetadata = async ({ params }: NotePageProps): Promise<Metadata> => {
  const { id } = await params;
  const note = await getNoteById(id);

  if (!note) return {};

  const image = note.image ?? defaultImage;
  const url = `/notes/${id}/`;

  return {
    title: note.title,
    description: note.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: note.title,
      description: note.description,
      images: [{ url: image, alt: note.title }],
    },
    twitter: {
      card: note.image ? 'summary_large_image' : 'summary',
      title: note.title,
      description: note.description,
      images: [image],
    },
  };
};

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;
  const note = await getNoteById(id);

  if (!note) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: note.title,
            description: note.description,
            image: absoluteUrl(note.image ?? defaultImage),
            mainEntityOfPage: absoluteUrl(`/notes/${id}/`),
            inLanguage: 'ru',
            author: { '@type': 'Person', name: siteName, url: absoluteUrl('/') },
          }),
        }}
      />
      <Note note={note} />
    </>
  );
}
