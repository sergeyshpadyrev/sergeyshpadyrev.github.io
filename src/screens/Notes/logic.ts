import type { Props } from "./types";

const useLogic = (props: Props) => {
  return { notes: props.notes };
};

export default useLogic;
