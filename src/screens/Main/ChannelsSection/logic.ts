import type { Props } from './types';

const essayLinks = [
  { label: 'Хабр', href: 'https://habr.com/ru/users/SergioShpadi/publications/articles/' },
  { label: 'Пикабу', href: 'https://pikabu.ru/@sergeyshpadyrev' },
  { label: 'Дзен', href: 'https://dzen.ru/sergeyshpadyrev' },
];
const translationLinks = [{ label: 'Медиум', href: 'https://medium.com/@sergeyshpadyrev' }];
const noteLinks = [
  { label: 'Телеграм-канал', href: 'https://t.me/+aoQm0ISH-3g4MTE0' },
  { label: 'MAX-канал', href: 'https://max.ru/channel_sergeyshpadyrev' },
  { label: 'Сообщество в VK', href: 'https://vk.com/club231375709' },
];
const lecturerLinks = [
  { label: 'Университет мировоззрения «Унивёрс»', href: 'https://www.univers.id/' },
  { label: 'Философский лекторий «Клуб 42»', href: 'https://club-42.ru/' },
];

const useLogic = (props: Props) => ({ props, essayLinks, translationLinks, noteLinks, lecturerLinks });
export default useLogic;
