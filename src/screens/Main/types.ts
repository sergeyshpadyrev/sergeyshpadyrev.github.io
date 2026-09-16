import { Book } from '@/lib/books';
import { NoteSummary } from '@/lib/notes';
import { PostSummary } from '@/lib/posts';

export interface Props {
  books: Book[];
  notes: NoteSummary[];
  posts: PostSummary[];
}
