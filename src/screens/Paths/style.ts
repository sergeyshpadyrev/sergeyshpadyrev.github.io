const useStyle = () => ({
  main: 'relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]',
  glowTop:
    'pointer-events-none absolute -left-36 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#e8bd7c]/45 blur-[130px]',
  glowRight:
    'pointer-events-none absolute -right-44 top-24 h-[36rem] w-[36rem] rounded-full bg-[#bacfb5]/55 blur-[150px]',
  glowBottom:
    'pointer-events-none absolute -bottom-64 left-1/3 h-[38rem] w-[38rem] rounded-full bg-[#ddc2aa]/55 blur-[150px]',
  container:
    'relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-8 sm:px-10 sm:pb-24 sm:pt-12',
  nav: 'mb-14 sm:mb-20',
  header: 'mb-10 max-w-full sm:mb-14',
  title:
    'font-display text-5xl leading-[0.98] tracking-[-0.04em] text-[#1f1a12] sm:whitespace-nowrap sm:text-7xl',
  intro: 'mt-6 max-w-5xl text-lg leading-8 text-[#5f5548] sm:text-xl sm:leading-9',
  grid: 'grid gap-5 lg:grid-cols-2 lg:gap-7',
  card:
    'group relative flex min-h-[32rem] flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-6 shadow-[0_24px_70px_rgba(55,43,28,0.12)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/70 hover:shadow-[0_30px_80px_rgba(55,43,28,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#704b31] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f1e8] motion-reduce:transform-none motion-reduce:transition-none sm:p-8',
  visual: 'relative my-10 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(55,43,28,0.16)]',
  image:
    'aspect-[16/9] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none',
  cardContent: 'relative z-10 mt-auto',
  cardTitle: 'font-display text-3xl leading-tight tracking-[-0.025em] text-[#1f1a12] sm:text-4xl',
  cardDescription: 'mt-4 text-base leading-7 text-[#625749]',
  cardFooter: 'mt-7 flex items-center justify-between gap-4 border-t border-[#30261b]/10 pt-5',
  result: 'text-sm font-semibold text-[#6a5b49]',
  arrow:
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f1a12] text-lg text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#9b4a35] motion-reduce:transform-none motion-reduce:transition-none',
  footer:
    'mx-auto mt-16 max-w-2xl text-center font-display text-xl leading-8 text-[#766958] sm:mt-20 sm:text-2xl sm:leading-9',
});

export default useStyle;
