import { getNoteSummaries } from '@/lib/notes';
import { getPostSummaries } from '@/lib/posts';

import type { Props } from './types';

const digitalLinks = [
  {
    label: 'Литрес',
    href: 'https://www.litres.ru/book/sergey-shpadyrev/vglyadyvayas-v-pustotu-sbornik-filosofskih-esse-72505846/',
  },
  {
    label: 'Ридеро',
    href: 'https://ridero.ru/books/vglyadyvayas_v_pustotu/',
  },
  {
    label: 'Amazon',
    href: 'https://www.amazon.com/dp/B0FRFZRK7T',
  },
];

const printLinks = [
  {
    label: 'Wildberries',
    href: 'https://www.wildberries.ru/catalog/535326264/detail.aspx',
  },
  {
    label: 'Озон',
    href: 'https://www.ozon.ru/product/2867585042',
  },
];

const channelLinks = [
  {
    label: 'Телеграм-канал',
    href: 'https://t.me/+aoQm0ISH-3g4MTE0',
  },
  {
    label: 'MAX-канал',
    href: 'https://max.ru/join/swjQhKR_jE2aX_My1ITtNUVlEfLEaslrB-MiZ5-t5-w',
  },
  {
    label: 'Сообщество в VK',
    href: 'https://vk.com/club231375709',
  },
  {
    label: 'Хабр',
    href: 'https://habr.com/ru/users/SergioShpadi/publications/articles/',
  },
  {
    label: 'Пикабу',
    href: 'https://pikabu.ru/@sergeyshpadyrev',
  },
  {
    label: 'Дзен',
    href: 'https://dzen.ru/sergeyshpadyrev',
  },
];

const podcastLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/watch?v=kNGaajO98Og&list=PL6h-USaTeVmlo6HMzgx2u4cepPCtr79v4',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/show/7oSgD2FdX0v74lApcceekH',
  },
  {
    label: 'VK',
    href: 'https://vkvideo.ru/playlist/-231375709_1',
  },
  {
    label: 'Яндекс.Музыка',
    href: 'https://music.yandex.ru/album/37294857',
  },
];

const lecturerLinks = [
  {
    label: 'Университет мировоззрения «Унивёрс»',
    href: 'https://www.univers.id/',
  },
  {
    label: 'Философский лекторий «Клуб 42»',
    href: 'https://club-42.ru/',
  },
];

const useLogic = () => ({
  digitalLinks,
  printLinks,
  channelLinks,
  podcastLinks,
  lecturerLinks,
});

export default useLogic;
