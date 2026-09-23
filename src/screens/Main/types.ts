import { Book } from '@/lib/books';
import { NoteSummary } from '@/lib/notes';
import { PostSummary } from '@/lib/posts';
import type { Video } from '@/lib/videos';

export interface Props {
  books: Book[];
  notes: NoteSummary[];
  posts: PostSummary[];
  videos: Video[];
}
