import useLogic from "./logic";
import useRender from "./render";
import useStyle from "./style";

export default async function Main() {
  const logic = await useLogic(undefined);
  const style = useStyle(undefined, logic);
  return useRender(undefined, logic, style);
}
