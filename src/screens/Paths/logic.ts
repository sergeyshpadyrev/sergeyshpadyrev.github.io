import type { Props } from './types';

const paths = [
  {
    href: '/paths/self-management',
    title: 'Путь управления собой',
    description:
      'Инженерный подход к собственной жизни и построение конвейера управления своими делами',
    result: 'Открыть схему конвейера',
    image: '/images/poster49.webp',
  },
  {
    href: '/paths/noble-eightfold',
    title: 'Путь Будды',
    description:
      'Воспроизводимый путь от страдания к спокойствию через мудрость, нравственность и дисциплину ума',
    result: 'Открыть карту пути',
    image: '/images/poster51.webp',
  },
];

const useLogic = (props: Props) => {
  void props;

  return { paths };
};

export default useLogic;
