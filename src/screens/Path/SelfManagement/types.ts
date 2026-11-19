import type { PostSummary } from '@/lib/posts';

export interface Props {
  title: string;
  mainPost: PostSummary;
  additionalPosts: PostSummary[];
}
