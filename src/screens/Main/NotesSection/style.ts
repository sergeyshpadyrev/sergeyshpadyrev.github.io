const useStyle = () => ({
  section: 'space-y-8 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:p-12',
  header: 'space-y-3',
  title: 'font-display text-3xl text-[#1f1a12] sm:text-4xl',
  description: 'max-w-2xl text-base text-[#4c4134] sm:text-lg',
  cloud: 'mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 py-2 sm:gap-3',
  tag: 'note-float rounded-full border border-[#1f1a12]/15 bg-white/55 px-4 py-2 text-center text-xs font-medium text-[#1f1a12] shadow-[0_8px_18px_rgba(31,26,18,0.08)] transition-colors hover:border-[#1f1a12]/40 hover:bg-white sm:text-sm',
  footer: 'flex justify-center',
  button: 'inline-flex items-center justify-center rounded-full border border-[#1f1a12] bg-[#1f1a12] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e8] shadow-[0_16px_30px_rgba(31,26,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2c251b]',
});
export default useStyle;
