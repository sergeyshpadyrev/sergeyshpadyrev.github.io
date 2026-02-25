/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getNoteById, getNoteIds } from "@/lib/notes";

type NotePageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const ids = await getNoteIds();
  return ids.map((id) => ({ id }));
};

const markdownComponents = {
  h1: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-display text-3xl text-[#1f1a12] sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-2xl text-[#1f1a12] sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-[#1f1a12]">{children}</h3>
  ),
  p: ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base leading-relaxed text-[#4c4134] sm:text-lg">
      {children}
    </p>
  ),
  ul: ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc space-y-2 pl-6 text-base text-[#4c4134] sm:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal space-y-2 pl-6 text-base text-[#4c4134] sm:text-lg">
      {children}
    </ol>
  ),
  li: ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => <li>{children}</li>,
  blockquote: ({ children }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-[#d1bfa6] pl-4 text-base italic text-[#5b4f42] sm:text-lg">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-[#1f1a12] underline decoration-[#d1bfa6] underline-offset-4 transition hover:text-[#2c251b]"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  img: ({ alt, src }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      src={src ?? ""}
      alt={alt ?? ""}
      loading="lazy"
      className="w-full rounded-[24px] border border-white/60 shadow-[0_20px_50px_rgba(31,26,18,0.12)]"
    />
  ),
  strong: ({ children }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[#1f1a12]">{children}</strong>
  ),
};

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;
  const note = await getNoteById(id);

  if (!note) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]">
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]" />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-24 pt-16">
        <Link
          href="/notes"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1f1a12]/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/40 hover:bg-white"
        >
          ← Все заметки
        </Link>

        <article className="space-y-6 rounded-[32px] border border-white/70 bg-white/60 p-8 shadow-[0_28px_70px_rgba(31,26,18,0.12)] sm:p-12 fade-in">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {note.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
