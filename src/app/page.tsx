import Image from "next/image";

const digitalLinks = [
  {
    label: "Литрес",
    href: "https://www.litres.ru/book/sergey-shpadyrev/vglyadyvayas-v-pustotu-sbornik-filosofskih-esse-72505846/",
  },
  {
    label: "Ридеро",
    href: "https://ridero.ru/books/vglyadyvayas_v_pustotu/",
  },
  {
    label: "Amazon",
    href: "https://www.amazon.com/dp/B0FRFZRK7T",
  },
];

const printLinks = [
  {
    label: "Wildberries",
    href: "https://www.wildberries.ru/catalog/535326264/detail.aspx",
  },
  {
    label: "Озон",
    href: "https://www.ozon.ru/product/2867585042",
  },
];

const channelLinks = [
  {
    label: "Телеграм-канал",
    href: "https://t.me/+aoQm0ISH-3g4MTE0",
  },
  {
    label: "MAX-канал",
    href: "https://max.ru/join/swjQhKR_jE2aX_My1ITtNUVlEfLEaslrB-MiZ5-t5-w",
  },
  {
    label: "Сообщество в ВК",
    href: "https://vk.com/club231375709",
  },
  {
    label: "Бусти-блог",
    href: "https://boosty.to/sergeyshpadyrev",
  },
  {
    label: "Хабр",
    href: "https://habr.com/ru/users/SergioShpadi/publications/articles/",
  },
  {
    label: "Пикабу",
    href: "https://pikabu.ru/@sergeyshpadyrev",
  },
  {
    label: "Дзен",
    href: "https://dzen.ru/sergeyshpadyrev",
  },
];

const linkClassName =
  "inline-flex items-center justify-center rounded-full border border-[#1f1a12]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/50 hover:bg-white";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]">
      <div className="pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16">
        <section className="grid items-center gap-12 md:grid-cols-[360px_minmax(0,1fr)]">
          <div className="relative mx-auto h-80 w-80 md:mx-0">
            <div className="absolute -inset-5 rounded-[34px] border border-white/70 bg-white/40 shadow-[0_34px_90px_rgba(31,26,18,0.12)]" />
            <Image
              src="/images/avatar.jpg"
              alt="Сергей Шпадырев"
              width={320}
              height={320}
              priority
              className="relative h-80 w-80 rounded-[30px] object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6 fade-in-up">
            <div className="space-y-3">
              <h1 className="font-display text-4xl leading-tight text-[#1f1a12] sm:text-5xl lg:text-6xl">
                Сергей Шпадырев
              </h1>
              <h2 className="text-lg text-[#3f3529] sm:text-xl lg:text-2xl">
                Инженер-программист и философ-публицист
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-[#4c4134] sm:text-lg lg:text-xl">
              На этом сайте собраны все мои публикации, эссе, заметки, видео и ссылки
              на мои каналы
            </p>
          </div>
        </section>

        <section
          id="book"
          className="grid gap-12 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-center md:p-12 fade-in"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="absolute -inset-6 rounded-[28px] border border-[#1f1a12]/10 bg-[#f3e6d3] shadow-[0_18px_45px_rgba(31,26,18,0.14)]" />
            <Image
              src="/images/book.png"
              alt="Обложка книги Вглядываясь в пустоту"
              width={320}
              height={440}
              className="relative w-full rounded-[22px] object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7b6a55]">
                Книга
              </p>
              <h2 className="font-display text-3xl text-[#1f1a12] sm:text-4xl">
                Вглядываясь в пустоту
              </h2>
            </div>
            <p className="text-base leading-relaxed text-[#4c4134] sm:text-lg">
              Cборник моих лучших эссе и заметок, написанных с 2020 по 2025 годы.
              Некоторые эссе вошли в него в неизменном виде, некоторые в
              отредактированном специально для этой книги варианте. В книге
              рассматривается множество тем: философские учения Древней Греции,
              Индии, и Китая, христианская теология и европейская философия Нового
              Времени, философия математики, физики и науки в целом, эпистемология,
              буддийское учение, вопросы этики и психологии, философия постмодерна.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b6a55]">
                  Электронная версия
                </p>
                <div className="flex flex-wrap gap-2">
                  {digitalLinks.map((link) => (
                    <a
                      key={link.href}
                      className={linkClassName}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b6a55]">
                  Бумажная версия
                </p>
                <div className="flex flex-wrap gap-2">
                  {printLinks.map((link) => (
                    <a
                      key={link.href}
                      className={linkClassName}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="channels"
          className="space-y-8 fade-in"
          style={{ animationDelay: "220ms" }}
        >
          <div className="space-y-2">
            <h2 className="font-display text-3xl text-[#1f1a12] sm:text-4xl">
              Каналы и платформы
            </h2>
            <p className="max-w-2xl text-base text-[#4c4134] sm:text-lg">
              Мои тексты, заметки и комментарии выходят на разных площадках. Здесь
              собраны актуальные ссылки.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channelLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[24px] border border-white/70 bg-white/50 p-5 shadow-[0_18px_40px_rgba(31,26,18,0.08)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white fade-in"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#1f1a12]">
                    {link.label}
                  </span>
                  <span className="text-xl text-[#7b6a55] transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
