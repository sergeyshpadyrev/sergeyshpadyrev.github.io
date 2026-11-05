import type { Metadata } from 'next';
import { Noto_Sans, Noto_Serif } from 'next/font/google';
import './globals.css';

import { defaultDescription, defaultImage, siteName, siteUrl } from '@/lib/seo';

const notoSerif = Noto_Serif({
  variable: '--font-display',
  subsets: ['latin', 'cyrillic'],
});

const notoSans = Noto_Sans({
  variable: '--font-body',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — философия`,
    template: `%s — ${siteName}`,
  },
  description: defaultDescription,
  alternates: { canonical: '/' },
  authors: [{ name: siteName, url: '/' }],
  creator: siteName,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName,
    title: `${siteName} — философия`,
    description: defaultDescription,
    images: [{ url: defaultImage, alt: siteName }],
  },
  twitter: {
    card: 'summary',
    title: `${siteName} — философия`,
    description: defaultDescription,
    images: [defaultImage],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/avatar.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${notoSerif.variable} ${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
