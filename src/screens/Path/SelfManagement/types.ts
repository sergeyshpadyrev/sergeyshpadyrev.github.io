import type { PostSummary } from '@/lib/posts';

export interface Props {
  mainPost: PostSummary;
  additionalPosts: PostSummary[];
}
