import { notFound } from 'next/navigation';

import { getNoteById, getNoteIds } from '@/lib/notes';

import Note from '@/screens/Note';

type NotePageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const ids = await getNoteIds();
  return ids.map((id) => ({ id }));
};

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;
  const note = await getNoteById(id);

  if (!note) {
    notFound();
  }

  return <Note note={note} />;
}
