import { createComponent } from "../../utils";

import useLogic from "./logic";
import useRender from "./render";
import useStyle from "./style";

export default createComponent({ useLogic, useRender, useStyle });
