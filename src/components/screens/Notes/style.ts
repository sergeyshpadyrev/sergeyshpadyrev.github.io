import type { Props } from "./types";

import useLogic from "./logic";
import { useMemo } from "react";

const useStyle = (props: Props, logic: ReturnType<typeof useLogic>) =>
  useMemo(() => ({}), []);

export default useStyle;
