const useStyle = () => ({
  section: 'relative overflow-hidden rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:p-12',
  inner: 'relative grid gap-10', visual: 'relative mx-auto w-1/2 max-w-md lg:max-w-sm',
  glow: 'absolute -inset-8 rounded-[36px] bg-[#f2c07d]/30 blur-2xl',
  frame: 'relative rotate-[-2deg] rounded-[30px] border border-white/70 bg-white/45 p-3 shadow-[0_22px_55px_rgba(31,26,18,0.14)]',
  image: 'relative w-full rounded-[24px] object-cover shadow-lg', content: 'space-y-6', titleGroup: 'space-y-2',
  title: 'font-display text-3xl leading-tight text-[#1f1a12] sm:text-4xl', intro: 'max-w-2xl text-base leading-relaxed text-[#4c4134] sm:text-lg',
  cta: 'flex flex-col items-center justify-center gap-4 pt-1 lg:flex-row',
  button: 'inline-flex items-center justify-center rounded-full border border-[#1f1a12] bg-[#1f1a12] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e8] shadow-[0_16px_30px_rgba(31,26,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2c251b]',
});
export default useStyle;
