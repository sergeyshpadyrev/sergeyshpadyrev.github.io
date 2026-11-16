import type { Metadata } from 'next';

import { getNobleEightfoldSections } from '@/lib/paths';
import { NobleEightfold } from '@/screens/Path';

export const metadata: Metadata = {
  title: 'Благородный восьмеричный путь',
  description: 'Тексты о восьми направлениях Благородного восьмеричного пути.',
  alternates: { canonical: '/paths/noble-eightfold/' },
};

export default async function NobleEightfoldPage() {
  const sections = await getNobleEightfoldSections();
  return <NobleEightfold sections={sections} />;
}
