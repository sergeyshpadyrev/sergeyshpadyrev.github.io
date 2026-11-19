import type { PathSection } from '@/lib/paths';
import type { PostSummary } from '@/lib/posts';

export interface Props {
  title: string;
  mainPost: PostSummary;
  sections: PathSection[];
  additionalPosts: PostSummary[];
}
