const useStyle = () => ({
  aspect: 'relative aspect-video overflow-hidden bg-[#1f1a12]',
  iframe: 'h-full w-full',
  preview:
    'group relative flex h-full w-full cursor-pointer items-center justify-center bg-cover bg-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white',
  overlay: 'absolute inset-0 bg-black/15 transition group-hover:bg-black/25',
  play:
    'relative flex h-16 w-20 items-center justify-center rounded-2xl bg-[#1f1a12]/90 text-3xl text-white shadow-lg transition group-hover:scale-105',
});

export default useStyle;
