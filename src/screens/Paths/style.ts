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
  header: 'mb-10 max-w-3xl fade-in-up motion-reduce:animate-none sm:mb-14',
  eyebrow: 'mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#9b4a35] sm:text-sm',
  title: 'font-display text-5xl leading-[0.98] tracking-[-0.04em] text-[#1f1a12] sm:text-7xl',
  intro: 'mt-6 max-w-2xl text-lg leading-8 text-[#5f5548] sm:text-xl sm:leading-9',
  grid: 'grid gap-5 lg:grid-cols-2 lg:gap-7',
  card:
    'group relative flex min-h-[32rem] flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-6 shadow-[0_24px_70px_rgba(55,43,28,0.12)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/70 hover:shadow-[0_30px_80px_rgba(55,43,28,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#704b31] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f1e8] motion-reduce:transform-none motion-reduce:transition-none sm:p-8',
  cardTop: 'relative z-10 flex items-center justify-between gap-4',
  cardNumber: 'font-display text-sm font-semibold text-[#8a7965]',
  cardLabel:
    'rounded-full border border-[#6a5b49]/15 bg-white/60 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#6a5b49]',
  visual: 'relative my-10 flex min-h-44 flex-1 items-center justify-center sm:min-h-52',
  managementVisual:
    'relative flex h-44 w-44 items-center justify-center rounded-full border border-[#9b4a35]/25 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0_25%,rgba(223,182,119,0.22)_26%_52%,transparent_53%)] shadow-[0_20px_50px_rgba(155,74,53,0.15)] transition duration-500 group-hover:rotate-3 motion-reduce:transform-none motion-reduce:transition-none sm:h-52 sm:w-52',
  managementRing: 'absolute inset-5 rounded-full border border-dashed border-[#9b4a35]/45',
  managementAxis: 'absolute h-px w-[115%] rotate-[-32deg] bg-[#9b4a35]/35',
  managementNeedle:
    'h-14 w-1 origin-bottom rotate-[32deg] rounded-full bg-[#9b4a35] shadow-[0_0_18px_rgba(155,74,53,0.35)] sm:h-16',
  managementCenter: 'absolute h-4 w-4 rounded-full border-4 border-white bg-[#9b4a35] shadow-md',
  eightfoldVisual:
    'relative flex h-48 w-48 items-center justify-center rounded-full border border-[#526b4d]/25 bg-[#eef1e9]/70 shadow-[0_20px_50px_rgba(82,107,77,0.18)] transition duration-500 group-hover:-rotate-3 motion-reduce:transform-none motion-reduce:transition-none sm:h-56 sm:w-56',
  eightfoldRing: 'absolute inset-6 rounded-full border border-[#526b4d]/35',
  eightfoldSpokes: 'absolute inset-0',
  eightfoldCenter:
    'relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[#526b4d] font-display text-2xl text-white shadow-lg',
  spoke: 'absolute left-1/2 top-1/2 h-px w-[42%] origin-left bg-[#526b4d]/40',
  dot: 'absolute left-1/2 top-1/2 h-3 w-3 rounded-full border-2 border-[#eef1e9] bg-[#526b4d] shadow-sm',
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
