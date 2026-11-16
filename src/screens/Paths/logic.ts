import type { Props } from './types';

const paths = [
  {
    href: '/paths/self-management',
    number: '01',
    label: 'Практическая система',
    title: 'Панель управления собой',
    description:
      'Инженерный подход к собственной жизни: от предназначения и целей до повседневных дел и устойчивых привычек.',
    result: '10 шагов к порядку в жизни',
    visual: 'management' as const,
  },
  {
    href: '/paths/noble-eightfold',
    number: '02',
    label: 'Буддийская практика',
    title: 'Благородный восьмеричный путь',
    description:
      'Воспроизводимый путь от страдания к спокойствию через мудрость, нравственность и дисциплину ума.',
    result: '8 взаимосвязанных практик',
    visual: 'eightfold' as const,
  },
];

const useLogic = (props: Props) => {
  void props;

  return { paths };
};

export default useLogic;
