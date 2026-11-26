const useStyle = () => ({
  section:
    'grid gap-12 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:grid-cols-[360px_minmax(0,1fr)] md:items-center md:p-12',
  avatarWrapper: 'relative mx-auto h-96 w-72 md:mx-0',
  avatarBg:
    'absolute -inset-5 rounded-[36px] border border-white/70 bg-white/40 shadow-[0_34px_90px_rgba(31,26,18,0.12)]',
  avatar: 'relative h-96 w-72 rounded-[32px] object-cover shadow-lg',
  content: 'space-y-6',
  header: 'space-y-3',
  title: 'font-display text-4xl leading-tight text-[#1f1a12] sm:text-5xl lg:text-6xl',
  subtitle: 'text-lg text-[#3f3529] sm:text-xl lg:text-2xl',
  description: 'max-w-2xl text-base leading-relaxed text-[#4c4134] sm:text-lg lg:text-xl',
});

export default useStyle;
