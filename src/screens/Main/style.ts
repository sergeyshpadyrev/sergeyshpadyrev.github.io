const useStyle = () => ({
  linkClassName:
    'inline-flex items-center justify-center rounded-full border border-[#1f1a12]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/50 hover:bg-white',
  main: 'relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]',
  glowLeft:
    'pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow',
  glowRight:
    'pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]',
  glowBottom:
    'pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]',
  container: 'relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16',
  heroSection:
    'grid gap-12 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:grid-cols-[360px_minmax(0,1fr)] md:items-center md:p-12 fade-in',
  sideImageSection:
    'grid gap-12 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-center md:p-12 fade-in',
  contentSection:
    'space-y-8 rounded-[36px] border border-white/60 bg-white/40 p-8 shadow-[0_28px_90px_rgba(31,26,18,0.12)] md:p-12 fade-in',
  avatarWrapper: 'relative mx-auto h-96 w-72 md:mx-0',
  avatarBg:
    'absolute -inset-5 rounded-[36px] border border-white/70 bg-white/40 shadow-[0_34px_90px_rgba(31,26,18,0.12)]',
  avatar: 'relative h-96 w-72 rounded-[32px] object-cover shadow-lg',
  heroContent: 'space-y-6 fade-in-up',
  sectionHeader: 'space-y-3',
  heroTitle: 'font-display text-4xl leading-tight text-[#1f1a12] sm:text-5xl lg:text-6xl',
  heroSubtitle: 'text-lg text-[#3f3529] sm:text-xl lg:text-2xl',
  heroDescription: 'max-w-2xl text-base leading-relaxed text-[#4c4134] sm:text-lg lg:text-xl',
  sideImageWrapper: 'relative mx-auto w-full max-w-[320px]',
  bookImageBg:
    'absolute -inset-6 rounded-[28px] border border-[#1f1a12]/10 bg-[#f3e6d3] shadow-[0_18px_45px_rgba(31,26,18,0.14)]',
  podcastImageBg:
    'absolute -inset-6 rounded-[28px] border border-[#1f1a12]/10 bg-[#f1e3d6] shadow-[0_18px_45px_rgba(31,26,18,0.12)]',
  courseImageBg:
    'absolute -inset-6 rounded-[28px] border border-[#1f1a12]/10 bg-[#efe1d2] shadow-[0_18px_45px_rgba(31,26,18,0.12)]',
  sideImage: 'relative w-full rounded-[22px] object-cover shadow-lg',
  sideContent: 'space-y-6',
  titleGroup: 'space-y-2',
  sectionLabel: 'text-sm uppercase tracking-[0.28em] text-[#7b6a55]',
  sectionTitle: 'font-display text-3xl text-[#1f1a12] sm:text-4xl',
  sectionDescription: 'max-w-2xl text-base text-[#4c4134] sm:text-lg',
  sideDescription: 'text-base leading-relaxed text-[#4c4134] sm:text-lg',
  linksColumn: 'space-y-3',
  linksLabel: 'text-sm font-semibold uppercase tracking-[0.2em] text-[#7b6a55]',
  linksRow: 'flex flex-wrap gap-2',
  bookLinksGrid: 'grid gap-6 sm:grid-cols-2',
  postsGrid: 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3',
  postCard:
    'group rounded-[24px] border border-white/70 bg-white/55 p-3 shadow-[0_18px_40px_rgba(31,26,18,0.1)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white fade-in',
  postImageWrapper: 'relative h-36 w-full overflow-hidden rounded-[18px] bg-[#efe1d2]',
  postImage: 'object-cover transition duration-300 group-hover:scale-[1.03]',
  postNoImage:
    'flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-[#7b6a55]',
  postTitleWrapper: 'mt-3',
  cardTitle: 'text-base font-semibold text-[#1f1a12]',
  sectionFooter: 'flex justify-center',
  primaryButton:
    'inline-flex items-center justify-center rounded-full border border-[#1f1a12] bg-[#1f1a12] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e8] shadow-[0_16px_30px_rgba(31,26,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#2c251b]',
  videosGrid: 'mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2',
  videoCard:
    'overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-[0_18px_40px_rgba(31,26,18,0.1)]',
  videoAspect: 'aspect-video',
  videoIframe: 'h-full w-full',
  notesGrid: 'grid gap-5 md:grid-cols-2',
  noteCard:
    'group rounded-[24px] border border-white/70 bg-white/55 p-5 shadow-[0_18px_40px_rgba(31,26,18,0.1)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white fade-in',
  courseButtonCol: 'flex flex-col gap-3',
  channelsGrid: 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
  channelCard:
    'group rounded-[24px] border border-white/70 bg-white/50 p-5 shadow-[0_18px_40px_rgba(31,26,18,0.08)] transition hover:-translate-y-1 hover:border-[#1f1a12]/30 hover:bg-white fade-in',
  channelCardInner: 'flex items-center justify-between',
  channelArrow: 'text-xl text-[#7b6a55] transition group-hover:translate-x-1',
  channelsExtra: 'space-y-8 pt-4',
  lecturerGrid: 'grid gap-4 sm:grid-cols-2',
});

export default useStyle;
