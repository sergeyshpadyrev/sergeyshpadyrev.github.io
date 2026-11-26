const useStyle = () => ({
  section: 'space-y-8 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:p-12',
  header: 'space-y-3',
  title: 'font-display text-3xl text-[#1f1a12] sm:text-4xl',
  description: 'max-w-2xl text-base text-[#4c4134] sm:text-lg',
  grid: 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3',
  card: 'group rounded-[24px] border border-white/70 bg-white/55 p-3 shadow-[0_18px_40px_rgba(31,26,18,0.1)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white',
  imageWrapper: 'relative h-36 w-full overflow-hidden rounded-[18px] bg-[#efe1d2]',
  image: 'object-cover transition duration-300 group-hover:scale-[1.03]',
  noImage: 'flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-[#7b6a55]',
  titleWrapper: 'mt-3',
  cardTitle: 'text-base font-semibold text-[#1f1a12]',
  footer: 'flex justify-center',
  button: 'inline-flex items-center justify-center rounded-full border border-[#1f1a12] bg-[#1f1a12] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e8] shadow-[0_16px_30px_rgba(31,26,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2c251b]',
});

export default useStyle;
