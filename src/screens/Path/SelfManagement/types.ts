import type { PostSummary } from '@/lib/posts';
import type { PathSection } from '@/lib/paths';

export interface Props {
  title: string;
  mainPost: PostSummary;
  additionalPosts: PostSummary[];
  sections: PathSection[];
}
