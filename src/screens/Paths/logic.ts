import type { Props } from './types';

const paths = [
  {
    href: '/paths/self-management',
    title: 'Конвейер управления собой',
    description:
      'Инженерный подход к собственной жизни и построение конвейера управления своими делами',
    result: 'Открыть схему конвейера',
    image: '/images/poster49.webp',
  },
  {
    href: '/paths/noble-eightfold',
    title: 'Благородный восьмеричный путь',
    description:
      'Воспроизводимый путь от страдания к спокойствию через мудрость, нравственность и дисциплину ума',
    result: 'Открыть этапы пути',
    image: '/images/poster51.webp',
  },
];

const useLogic = (props: Props) => {
  void props;

  return { paths };
};

export default useLogic;
