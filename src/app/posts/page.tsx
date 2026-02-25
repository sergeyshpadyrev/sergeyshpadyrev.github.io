import Image from "next/image";
import Link from "next/link";

import { getPostSummaries } from "@/lib/posts";

export const metadata = {
  title: "Посты — Сергей Шпадырев",
  description: "Все публикации и эссе Сергея Шпадырева.",
};

export default async function PostsPage() {
  const posts = await getPostSummaries();
  const oldPostsIndex = posts.findIndex((post) => post.order < 19);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]">
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16">
        <header className="space-y-4 fade-in-up">
          <h1 className="font-display text-4xl text-[#1f1a12] sm:text-5xl">
            Эссе
          </h1>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={post.id} className="contents">
              {oldPostsIndex !== -1 && index === oldPostsIndex ? (
                <div className="sm:col-span-2 lg:col-span-3 fade-in">
                  <div className="flex items-center gap-4 text-[#7b6a55]">
                    <span className="h-px flex-1 bg-[#d8c9b6]" />
                    <span className="text-sm uppercase tracking-[0.3em]">
                      Старые посты
                    </span>
                    <span className="h-px flex-1 bg-[#d8c9b6]" />
                  </div>
                </div>
              ) : null}
              <Link
                href={`/posts/${post.id}`}
                className="group rounded-[28px] border border-white/70 bg-white/55 p-4 shadow-[0_20px_50px_rgba(31,26,18,0.12)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white fade-in"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-[22px] bg-[#efe1d2]">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em] text-[#7b6a55]">
                      Без обложки
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h2 className="text-lg font-semibold text-[#1f1a12]">
                    {post.title}
                  </h2>
                  <span className="text-xl text-[#7b6a55] transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
