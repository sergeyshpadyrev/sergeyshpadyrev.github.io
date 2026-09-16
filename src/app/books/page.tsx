import { getBooks } from '@/lib/books';

import Books from '@/screens/Books';

export const metadata = {
  title: 'Книги — Сергей Шпадырев',
  description: 'Книги Сергея Шпадырева.',
};

export default async function BooksPage() {
  const books = await getBooks();
  return <Books books={books} />;
}
