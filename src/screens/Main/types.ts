import { Book } from '@/lib/books';
import type { DevelopmentProject } from '@/lib/development';
import { NoteSummary } from '@/lib/notes';
import type { PathCard } from '@/lib/paths';
import { PostSummary } from '@/lib/posts';
import type { Video } from '@/lib/videos';

export interface Props {
  books: Book[];
  developmentProjects: DevelopmentProject[];
  notes: NoteSummary[];
  paths: PathCard[];
  posts: PostSummary[];
  videos: Video[];
}
