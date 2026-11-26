const useStyle = () => ({
  section:
    'space-y-12 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] lg:p-12',
  header: 'space-y-3',
  title: 'font-display text-3xl text-[#1f1a12] sm:text-4xl',
  description: 'max-w-2xl text-base text-[#4c4134] sm:text-lg',
  grid: 'grid gap-16 lg:grid-cols-2 lg:gap-12',
  item: 'grid content-start gap-10',
  imageWrapper: 'relative mx-auto aspect-[8/11] w-full max-w-[320px]',
  imageBg:
    'absolute -inset-6 rounded-[28px] border border-[#1f1a12]/10 bg-[#f3e6d3] shadow-[0_18px_45px_rgba(31,26,18,0.14)]',
  image: 'relative h-full w-full rounded-[22px] object-cover shadow-lg',
  content: 'space-y-6',
  bookDescription: 'text-base leading-relaxed text-[#4c4134] sm:text-lg',
  linksGrid: 'grid gap-6 sm:grid-cols-2',
  linksColumn: 'space-y-3',
  linksLabel: 'text-sm font-semibold uppercase tracking-[0.2em] text-[#7b6a55]',
  linksRow: 'flex flex-wrap gap-2',
  link: 'inline-flex items-center justify-center rounded-full border border-[#1f1a12]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/50 hover:bg-white',
  announcement:
    'inline-flex rounded-full bg-[#b7422d] px-5 py-2 text-sm font-bold tracking-[0.2em] text-white shadow-[0_12px_24px_rgba(183,66,45,0.35)]',
  footer: 'flex justify-center',
  button:
    'inline-flex items-center justify-center rounded-full border border-[#1f1a12] bg-[#1f1a12] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e8] shadow-[0_16px_30px_rgba(31,26,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2c251b]',
});

export default useStyle;
