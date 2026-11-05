import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPostById, getPostIds } from '@/lib/posts';

import Post from '@/screens/Post';
import { absoluteUrl, defaultImage, serializeJsonLd, siteName } from '@/lib/seo';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const ids = await getPostIds();
  return ids.map((id) => ({ id }));
};

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: PostPageProps): Promise<Metadata> => {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) return {};

  const image = post.image ?? defaultImage;
  const url = `/posts/${id}/`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: post.image ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            image: absoluteUrl(post.image ?? defaultImage),
            mainEntityOfPage: absoluteUrl(`/posts/${id}/`),
            inLanguage: 'ru',
            author: { '@type': 'Person', name: siteName, url: absoluteUrl('/') },
          }),
        }}
      />
      <Post id={id} content={post.content} />
    </>
  );
}
