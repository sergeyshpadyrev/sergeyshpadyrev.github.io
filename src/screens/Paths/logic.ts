import type { Props } from './types';

const useLogic = (props: Props) => {
  return { paths: props.paths };
};

export default useLogic;
