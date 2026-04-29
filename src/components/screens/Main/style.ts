import type useLogic from "./logic";
import type { Props } from "./types";

const useStyle = (_props: Props, _logic: Awaited<ReturnType<typeof useLogic>>) => ({
  linkClassName:
    "inline-flex items-center justify-center rounded-full border border-[#1f1a12]/20 bg-white/70 px-5 py-2 text-sm font-medium text-[#1f1a12] transition hover:border-[#1f1a12]/50 hover:bg-white",
});

export default useStyle;
