import Overview from '../Overview';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>
) => {
  void logic;
  void style;

  return <Overview {...props} pathTextHref="/paths/noble-eightfold" />;
};

export default useRender;
