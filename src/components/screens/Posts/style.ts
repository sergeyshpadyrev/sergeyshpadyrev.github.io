import { useMemo } from "react";

import type { Props } from "./types";

import useLogic from "./logic";

const useStyle = (props: Props, logic: ReturnType<typeof useLogic>) =>
  useMemo(() => ({}), []);

export default useStyle;
