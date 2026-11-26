import Text from '../Text';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>,
) => {
  void logic;
  void style;

  return (
    <Text
      content={props.content}
      pathHref="/paths/self-management"
      pathLabel="← К конвейеру"
    />
  );
};

export default useRender;
