import { getBooks } from '@/lib/books';
import { getNoteSummaries } from '@/lib/notes';
import { getPostSummaries } from '@/lib/posts';
import { getVideoSections } from '@/lib/videos';

import Main from '@/screens/Main';

export default async function Home() {
  const [books, postSummaries, noteSummaries, videoSections] = await Promise.all([
    getBooks(),
    getPostSummaries(),
    getNoteSummaries(),
    getVideoSections(),
  ]);
  const videos =
    videoSections.find((section) => section.id === 'airat')?.videos.slice(0, 2) ?? [];

  return (
    <Main
      books={books}
      posts={postSummaries.slice(0, 6)}
      notes={noteSummaries}
      videos={videos}
    />
  );
}
