import type { Metadata } from 'next';

import { NobleEightfold } from '@/screens/Path';

export const metadata: Metadata = {
  title: 'Hello World',
  alternates: { canonical: '/paths/noble-eightfold/' },
};

export default function NobleEightfoldPage() {
  return <NobleEightfold />;
}
