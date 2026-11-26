import type { PathMaterial, PathSection } from '@/lib/paths';
import type { PostSummary } from '@/lib/posts';

export interface Props {
  title: string;
  mainPost: PostSummary;
  additionalPosts: PostSummary[];
  sections?: PathSection[];
  additionalMaterials?: PathMaterial[];
  pathTextHref?: string;
  additionalPostTrailingSlash?: boolean;
  reduceMotion?: boolean;
}
