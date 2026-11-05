import { getBooks } from '@/lib/books';
import { getDevelopmentProjects } from '@/lib/development';
import { getNoteSummaries } from '@/lib/notes';
import { getPostSummaries } from '@/lib/posts';
import { getVideoSections } from '@/lib/videos';
import { absoluteUrl, serializeJsonLd, siteName } from '@/lib/seo';

import Main from '@/screens/Main';

export default async function Home() {
  const [books, developmentProjects, postSummaries, noteSummaries, videoSections] = await Promise.all([
    getBooks(),
    getDevelopmentProjects(),
    getPostSummaries(),
    getNoteSummaries(),
    getVideoSections(),
  ]);
  const videos =
    videoSections.find((section) => section.id === 'airat')?.videos.slice(0, 2) ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: siteName,
            url: absoluteUrl('/'),
            image: absoluteUrl('/images/avatar.webp'),
            jobTitle: 'Инженер-программист и философ-публицист',
            sameAs: [
              'https://t.me/+aoQm0ISH-3g4MTE0',
              'https://vk.com/club231375709',
              'https://github.com/sergeyshpadyrev',
              'https://medium.com/@sergeyshpadyrev',
            ],
          }),
        }}
      />
      <Main
        books={books}
        developmentProjects={developmentProjects}
        posts={postSummaries.slice(0, 6)}
        notes={noteSummaries}
        videos={videos}
      />
    </>
  );
}
