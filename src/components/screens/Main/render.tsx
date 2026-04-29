import type useLogic from "./logic";
import type useStyle from "./style";
import type { Props } from "./types";

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>,
) => <div>123</div>;

export default useRender;
