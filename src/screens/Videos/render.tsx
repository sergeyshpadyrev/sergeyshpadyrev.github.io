import Link from "next/link";

import type useLogic from "./logic";
import type { Hosting } from "./logic";
import type { Props } from "./types";

const hostingOptions: { label: string; value: Hosting }[] = [
  { label: "Хостинг вне РФ", value: "outside-russia" },
  { label: "Хостинг в РФ", value: "russia" },
];

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
) => {
  const { hosting, sections, setHosting } = logic;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]">
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16">
        <header className="space-y-4 fade-in-up">
          <Link href="/" className="nav-pill">
            ← На главную
          </Link>
          <h1 className="font-display text-4xl text-[#1f1a12] sm:text-5xl">
            Видео
          </h1>
          <div
            className="inline-flex rounded-full border border-[#1f1a12]/15 bg-white/55 p-1 shadow-[0_12px_30px_rgba(31,26,18,0.1)] backdrop-blur-sm"
            aria-label="Хостинг видео"
          >
            {hostingOptions.map((option) => {
              const isActive = hosting === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f1a12] ${
                    isActive
                      ? "bg-[#1f1a12] text-[#f6f1e8] shadow-sm"
                      : "text-[#665a49] hover:bg-white/70 hover:text-[#1f1a12]"
                  }`}
                  aria-pressed={isActive}
                  onClick={() => setHosting(option.value)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </header>

        <div className="flex flex-col gap-12">
          {sections.map((section, sectionIndex) => (
            <section
              key={section.id}
              className="space-y-5 fade-in"
              style={{ animationDelay: `${sectionIndex * 80}ms` }}
            >
              <h2 className="font-display text-2xl text-[#1f1a12] sm:text-3xl">
                {section.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {section.videos.map((video, videoIndex) => (
                  <div
                    key={video.id}
                    className="overflow-hidden rounded-[28px] border border-white/70 bg-white/55 p-3 shadow-[0_20px_50px_rgba(31,26,18,0.12)]"
                  >
                    <div className="aspect-video overflow-hidden rounded-[20px] bg-[#1f1a12]">
                      <iframe
                        key={hosting}
                        className="h-full w-full"
                        src={video.src}
                        title={`${section.title}, видео ${videoIndex + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default useRender;
