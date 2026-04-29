import { NoteSummary } from '@/lib/notes';
import { PostSummary } from '@/lib/posts';

export interface Props {
  notes: NoteSummary[];
  posts: PostSummary[];
}
