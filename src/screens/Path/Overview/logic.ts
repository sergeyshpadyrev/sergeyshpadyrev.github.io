import type { Props } from './types';

const useLogic = (props: Props) => {
  const {
    additionalMaterials = [],
    additionalPostTrailingSlash = false,
    reduceMotion = false,
    sections = [],
  } = props;

  const postHref = (id: string, trailingSlash = false) =>
    `/posts/${id}${trailingSlash ? '/' : ''}`;

  return {
    additionalMaterials,
    additionalPostTrailingSlash,
    postHref,
    reduceMotion,
    sections,
  };
};

export default useLogic;
