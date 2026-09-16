import { getBooks } from '@/lib/books';
import { getNoteSummaries } from '@/lib/notes';
import { getPostSummaries } from '@/lib/posts';

import Main from '@/screens/Main';

export default async function Home() {
  const [books, postSummaries, noteSummaries] = await Promise.all([
    getBooks(),
    getPostSummaries(),
    getNoteSummaries(),
  ]);

  return (
    <Main
      books={books}
      posts={postSummaries.slice(0, 6)}
      notes={noteSummaries.slice(0, 6)}
    />
  );
}
