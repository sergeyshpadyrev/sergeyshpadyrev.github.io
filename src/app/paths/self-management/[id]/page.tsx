import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getSelfManagementTextById,
  getSelfManagementTextIds,
} from '@/lib/paths';
import { SelfManagementText } from '@/screens/Path';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const ids = await getSelfManagementTextIds();
  return ids.map((id) => ({ id }));
};

type SelfManagementTextPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: SelfManagementTextPageProps): Promise<Metadata> => {
  const { id } = await params;
  const text = await getSelfManagementTextById(id);

  if (!text) return {};

  const url = `/paths/self-management/${id}/`;
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

export default async function SelfManagementTextPage({
  params,
}: SelfManagementTextPageProps) {
  const { id } = await params;
  const text = await getSelfManagementTextById(id);

  if (!text) notFound();

  return <SelfManagementText content={text.content} />;
}
