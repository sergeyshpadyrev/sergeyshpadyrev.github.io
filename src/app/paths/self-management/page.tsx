import type { Metadata } from 'next';

import { SelfManagement } from '@/screens/Path';

export const metadata: Metadata = {
  title: 'Hello World',
  alternates: { canonical: '/paths/self-management/' },
};

export default function SelfManagementPage() {
  return <SelfManagement />;
}
