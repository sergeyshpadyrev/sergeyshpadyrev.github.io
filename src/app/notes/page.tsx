import Link from "next/link";

import { getNoteSummaries } from "@/lib/notes";

export const metadata = {
  title: "Заметки — Сергей Шпадырев",
  description: "Короткие заметки и наблюдения Сергея Шпадырева.",
};

export default async function NotesPage() {
  const notes = await getNoteSummaries();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]">
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-24 pt-16">
        <header className="space-y-4 fade-in-up">
          <h1 className="font-display text-4xl text-[#1f1a12] sm:text-5xl">
            Заметки
          </h1>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {notes.map((note, index) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="group rounded-[28px] border border-white/70 bg-white/55 p-6 shadow-[0_20px_50px_rgba(31,26,18,0.12)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white fade-in"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-[#1f1a12]">
                  {note.title}
                </h2>
                <span className="text-xl text-[#7b6a55] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
