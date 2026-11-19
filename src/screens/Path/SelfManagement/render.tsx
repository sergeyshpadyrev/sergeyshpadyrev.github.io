import Image from 'next/image';
import Link from 'next/link';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>,
) => {
  const { additionalPosts, mainPost, sections, title } = props;
  void logic;

  return (
    <main className={style.main}>
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]" />

      <div className={style.content}>
        <header className="space-y-5 fade-in-up">
          <Link href="/paths" className="nav-pill">
            ← Все пути
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl">{title}</h1>
        </header>

        <section aria-label="Основополагающий текст пути">
          <Link
            href={`/posts/${mainPost.id}/`}
            className="group block max-w-xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 shadow-[0_24px_70px_rgba(55,43,28,0.16)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f1a12] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <div className="space-y-3 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b4a35] sm:text-sm">
                Основополагающий текст пути
              </p>
              <div className="flex items-end justify-between gap-6">
                <h2 className="max-w-4xl font-display text-2xl leading-tight sm:text-3xl">
                  {mainPost.title}
                </h2>
                <span
                  aria-hidden="true"
                  className="text-3xl text-[#7b6a55] transition group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </div>
            {mainPost.image ? (
              <Image
                src={mainPost.image}
                alt=""
                width={800}
                height={448}
                priority
                className="h-auto w-full object-cover"
                sizes="(min-width: 1152px) 1152px, calc(100vw - 48px)"
              />
            ) : null}
          </Link>
        </section>

        <section className={style.section}>
          <div className="flex items-center gap-4">
            <h2 className="font-display text-2xl sm:text-3xl">Связанные тексты</h2>
            <span className="h-px flex-1 bg-[#d8c9b6]" />
          </div>

          <div className={style.additionalCards}>
            {additionalPosts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}/`}
                className="group overflow-hidden rounded-[22px] border border-white/70 bg-white/60 shadow-[0_14px_36px_rgba(31,26,18,0.1)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f1a12] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#efe1d2]">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 352px, (min-width: 640px) 45vw, calc(100vw - 48px)"
                      className="object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  ) : null}
                </div>
                <div className="flex items-start justify-between gap-3 p-4">
                  <h3 className="font-semibold leading-snug">{post.title}</h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-[#7b6a55] transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {sections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className={`${style.section} fade-in`}
            style={{ animationDelay: `${sectionIndex * 70}ms` }}
          >
            <div className="flex items-center gap-4">
              <h2 className="font-display text-2xl sm:text-3xl">
                {section.title}
              </h2>
              <span className="h-px flex-1 bg-[#d8c9b6]" />
            </div>

            <div className={style.cards}>
              {section.texts.map((text) => (
                <Link
                  key={text.id}
                  href={`/paths/self-management/${text.id}/`}
                  className="group flex min-h-32 items-center justify-between gap-5 rounded-[24px] border border-white/70 bg-white/60 p-6 shadow-[0_18px_45px_rgba(31,26,18,0.1)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f1a12] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <h3 className="text-lg font-semibold leading-snug">
                    {text.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-2xl text-[#7b6a55] transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default useRender;
