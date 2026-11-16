import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>
) => {
  void props;
  void logic;

  return (
    <main className={style.main}>
      <h1>Hello World</h1>
    </main>
  );
};

export default useRender;
