import type { Metadata } from 'next';

import { getBooks } from '@/lib/books';
import { absoluteUrl, serializeJsonLd, siteName } from '@/lib/seo';

import Books from '@/screens/Books';

export const metadata: Metadata = {
  title: 'Книги',
  description: 'Сборники философских эссе и заметок Сергея Шпадырева.',
  alternates: { canonical: '/books/' },
  openGraph: {
    url: '/books/',
    title: 'Книги Сергея Шпадырева',
    description: 'Сборники философских эссе и заметок Сергея Шпадырева.',
    images: [{ url: '/images/book1.webp', alt: 'Книги Сергея Шпадырева' }],
  },
};

export default async function BooksPage() {
  const books = await getBooks();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@graph': books.map((book) => ({
              '@type': 'Book',
              name: book.title,
              description: book.description,
              image: absoluteUrl(book.image),
              inLanguage: 'ru',
              author: { '@type': 'Person', name: siteName, url: absoluteUrl('/') },
              sameAs: [...book.digitalLinks, ...book.printLinks].map((link) => link.href),
            })),
          }),
        }}
      />
      <Books books={books} />
    </>
  );
}
