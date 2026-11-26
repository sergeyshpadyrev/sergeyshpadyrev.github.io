const useStyle = () => ({
  section: 'grid gap-12 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-center md:p-12',
  imageWrapper: 'relative mx-auto w-full max-w-[320px]', imageBg: 'absolute -inset-6 rounded-[28px] border border-[#1f1a12]/10 bg-[#f1e3d6] shadow-[0_18px_45px_rgba(31,26,18,0.12)]', image: 'relative w-full rounded-[22px] object-cover shadow-lg',
  content: 'space-y-6', titleGroup: 'space-y-2', label: 'text-sm uppercase tracking-[0.28em] text-[#7b6a55]', title: 'font-display text-3xl text-[#1f1a12] sm:text-4xl', description: 'text-base leading-relaxed text-[#4c4134] sm:text-lg',
  linksColumn: 'space-y-3', linksLabel: 'text-sm font-semibold uppercase tracking-[0.2em] text-[#7b6a55]', linksRow: 'flex flex-wrap gap-2', link: 'inline-flex items-center justify-center rounded-full border border-[#1f1a12]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/50 hover:bg-white',
});
export default useStyle;
