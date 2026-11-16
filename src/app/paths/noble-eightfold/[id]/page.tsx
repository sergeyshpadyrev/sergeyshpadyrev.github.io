import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getNobleEightfoldTextById,
  getNobleEightfoldTextIds,
} from '@/lib/paths';
import { NobleEightfoldText } from '@/screens/Path';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const ids = await getNobleEightfoldTextIds();
  return ids.map((id) => ({ id }));
};

type NobleEightfoldTextPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: NobleEightfoldTextPageProps): Promise<Metadata> => {
  const { id } = await params;
  const text = await getNobleEightfoldTextById(id);

  if (!text) return {};

  const url = `/paths/noble-eightfold/${id}/`;
  return {
    title: text.title,
    description: text.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: text.title,
      description: text.description,
    },
  };
};

export default async function NobleEightfoldTextPage({
  params,
}: NobleEightfoldTextPageProps) {
  const { id } = await params;
  const text = await getNobleEightfoldTextById(id);

  if (!text) notFound();

  return <NobleEightfoldText content={text.content} />;
}
