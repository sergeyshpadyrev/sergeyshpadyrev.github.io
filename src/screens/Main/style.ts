const useStyle = () => ({
  main: 'relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1f1a12]',
  glowLeft:
    'pointer-events-none absolute -left-24 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#f2c07d]/50 blur-[120px] float-slow',
  glowRight:
    'pointer-events-none absolute right-[-12rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#c9d9c1]/60 blur-[140px]',
  glowBottom:
    'pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#e4c9b0]/70 blur-[140px]',
  container: 'relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16',
});

export default useStyle;
