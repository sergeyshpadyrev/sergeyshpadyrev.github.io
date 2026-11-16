import Link from 'next/link';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>
) => {
  const { sections } = props;
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
          <div className="max-w-3xl space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl">
              Благородный восьмеричный путь
            </h1>
            <p className="text-lg leading-relaxed text-[#5b4f42]">
              Материалы о мудрости, нравственном поведении и развитии ума.
            </p>
          </div>
        </header>

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
                  href={`/paths/noble-eightfold/${text.id}`}
                  className="group flex min-h-32 items-center justify-between gap-5 rounded-[24px] border border-white/70 bg-white/60 p-6 shadow-[0_18px_45px_rgba(31,26,18,0.1)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f1a12]"
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
