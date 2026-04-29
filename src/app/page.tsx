import { getNoteSummaries } from '@/lib/notes';
import { getPostSummaries } from '@/lib/posts';

import Main from '@/screens/Main';

export default async function Home() {
  const posts = (await getPostSummaries()).slice(0, 6);
  const notes = (await getNoteSummaries()).slice(0, 6);
  return <Main posts={posts} notes={notes} />;
}
