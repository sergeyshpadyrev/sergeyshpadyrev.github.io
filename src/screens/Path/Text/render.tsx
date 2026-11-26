import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const basicMarkdownComponents = {
  h1: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-display text-3xl text-[#1f1a12] sm:text-4xl">{children}</h1>
  ),
  h2: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-2xl text-[#1f1a12] sm:text-3xl">{children}</h2>
  ),
  p: ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base leading-relaxed text-[#4c4134] sm:text-lg">{children}</p>
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
  strong: ({ children }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-[#1f1a12]">{children}</strong>
  ),
};

const extendedMarkdownComponents = {
  ...basicMarkdownComponents,
  h3: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-[#1f1a12]">{children}</h3>
  ),
  blockquote: ({
    children,
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-[#d1bfa6] pl-4 text-base italic text-[#5b4f42] sm:text-lg">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-[#1f1a12] underline decoration-[#d1bfa6] underline-offset-4 transition hover:text-[#2c251b]"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  ),
};

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>,
) => {
  const { content, extendedMarkdown = false, pathHref, pathLabel } = props;
  void logic;

  return (
    <main className={style.main}>
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />

      <div className={style.content}>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="nav-pill">
            ← На главную
          </Link>
          <Link href={pathHref} className="nav-pill">
            {pathLabel}
          </Link>
        </div>

        <article className={style.article}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={
              extendedMarkdown
                ? extendedMarkdownComponents
                : basicMarkdownComponents
            }
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
};

export default useRender;
