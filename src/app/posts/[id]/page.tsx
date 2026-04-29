import { notFound } from "next/navigation";

import { getPostById, getPostIds } from "@/lib/posts";

import Post from "@/components/screens/Post";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const ids = await getPostIds();
  return ids.map((id) => ({ id }));
};

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <Post id={id} content={post.content} />;
}
