import Link from 'next/link';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>
) => {
  void props;

  return (
    <main className={style.main}>
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16">
        <header className="space-y-4 fade-in-up">
          <Link href="/" className="nav-pill">
            ← На главную
          </Link>
          <h1 className="font-display text-4xl text-[#1f1a12] sm:text-5xl">Книги</h1>
        </header>

        <section className="flex flex-col gap-8">
          {logic.books.map((book, index) => (
            <article
              key={book.title}
              className="overflow-hidden rounded-[28px] border border-white/70 bg-white/55 p-4 shadow-[0_20px_50px_rgba(31,26,18,0.12)] backdrop-blur-sm fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="overflow-hidden rounded-[20px] bg-white">
                <iframe
                  className="h-[768px] w-full"
                  src={book.widgetUrl}
                  title={book.title}
                  loading="lazy"
                />
              </div>

              <div className="space-y-6 px-2 pb-2 pt-6">
                <h2 className="font-display text-2xl text-[#1f1a12]">{book.title}</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b6a55]">
                      Электронная версия
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {book.digitalLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-[#1f1a12]/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/50 hover:bg-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7b6a55]">
                      Бумажная версия
                    </h3>
                    {book.printLinks.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {book.printLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-[#1f1a12]/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/50 hover:bg-white"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <span className="inline-flex rounded-full bg-[#b7422d] px-4 py-2 text-xs font-bold tracking-[0.18em] text-white">
                        СКОРО
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default useRender;
