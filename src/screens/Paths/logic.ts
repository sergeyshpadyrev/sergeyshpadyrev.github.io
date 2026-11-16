import type { Props } from './types';

const paths = [
  {
    href: '/paths/self-management',
    title: 'Конвейер управления собой',
    description:
      'Инженерный подход к собственной жизни: от предназначения и целей до повседневных дел и устойчивых привычек.',
    result: '10 шагов к порядку в жизни',
    image: '/images/poster49.webp',
  },
  {
    href: '/paths/noble-eightfold',
    title: 'Благородный восьмеричный путь',
    description:
      'Воспроизводимый путь от страдания к спокойствию через мудрость, нравственность и дисциплину ума.',
    result: '8 взаимосвязанных практик',
    image: '/images/poster51.webp',
  },
];

const useLogic = (props: Props) => {
  void props;

  return { paths };
};

export default useLogic;
