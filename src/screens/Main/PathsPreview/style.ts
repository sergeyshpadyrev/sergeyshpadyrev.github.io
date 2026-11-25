const useStyle = () => ({
  section:
    'space-y-8 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:p-12',
  header: 'space-y-3',
  title: 'font-display text-3xl text-[#1f1a12] sm:text-4xl',
  description: 'max-w-2xl text-base text-[#4c4134] sm:text-lg',
  grid: 'grid gap-5 lg:grid-cols-2 lg:gap-7',
  card:
    'group flex flex-col overflow-hidden rounded-[24px] border border-white/70 bg-white/55 p-4 shadow-[0_18px_40px_rgba(31,26,18,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#704b31] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f1e8] motion-reduce:transform-none motion-reduce:transition-none sm:p-5',
  visual: 'overflow-hidden rounded-[18px] shadow-[0_14px_32px_rgba(55,43,28,0.14)]',
  image:
    'aspect-[16/9] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none',
  cardContent: 'flex flex-1 flex-col pt-5',
  cardTitle: 'font-display text-2xl leading-tight text-[#1f1a12] sm:text-3xl',
  cardDescription: 'mt-3 text-sm leading-6 text-[#625749] sm:text-base sm:leading-7',
  footer: 'flex justify-center',
  button:
    'inline-flex items-center justify-center rounded-full border border-[#1f1a12] bg-[#1f1a12] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e8] shadow-[0_16px_30px_rgba(31,26,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2c251b]',
});

export default useStyle;
