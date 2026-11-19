import type { PathSection } from '@/lib/paths';
import type { PostSummary } from '@/lib/posts';

export interface Props {
  sections: PathSection[];
  additionalPosts: PostSummary[];
}
