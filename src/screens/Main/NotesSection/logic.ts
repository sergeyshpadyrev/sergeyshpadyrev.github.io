import type { Props } from './types';

const useLogic = (props: Props) => {
  const cloudSize = Math.min(14, props.notes.length);
  const notes = Array.from(
    { length: cloudSize },
    (_, index) => props.notes[Math.floor((index * props.notes.length) / cloudSize)]
  );
  return { notes };
};

export default useLogic;
