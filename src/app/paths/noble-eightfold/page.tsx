import type { Metadata } from 'next';

import { getNobleEightfoldSections } from '@/lib/paths';
import { getPostSummaries } from '@/lib/posts';
import { NobleEightfold } from '@/screens/Path';

const additionalPostIds = [
  '53_prasanga',
  '60_no_substance',
  '58_cyberbuddha',
  '67_retroreasons',
  '36_illusion_of_me',
  '30_meaning_of_life',
  '34_dzen_programming',
  '20_west_and_east',
  '21_dzen_loops',
  '35_one_actor_theatre',
  '45_pythagoras_genius',
  '48_soul',
];

export const metadata: Metadata = {
  title: 'Благородный восьмеричный путь',
  description: 'Тексты о восьми направлениях Благородного восьмеричного пути.',
  alternates: { canonical: '/paths/noble-eightfold/' },
};

export default async function NobleEightfoldPage() {
  const [sections, posts] = await Promise.all([
    getNobleEightfoldSections(),
    getPostSummaries(),
  ]);
  const postsById = new Map(posts.map((post) => [post.id, post]));
  const additionalPosts = additionalPostIds.flatMap((id) => {
    const post = postsById.get(id);
    return post ? [post] : [];
  });

  return (
    <NobleEightfold sections={sections} additionalPosts={additionalPosts} />
  );
}
