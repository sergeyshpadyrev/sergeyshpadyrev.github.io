import { useEffect, useState } from 'react';

import { getCountry } from '@/lib/country';

import type { Props } from './types';

const channelLinks = [
  {
    label: 'Телеграм-канал',
    href: 'https://t.me/+aoQm0ISH-3g4MTE0',
  },
  {
    label: 'MAX-канал',
    href: 'https://max.ru/channel_sergeyshpadyrev',
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

const useLogic = (props: Props) => {
  const [isRussia, setIsRussia] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const detectCountry = async () => {
      try {
        setIsRussia((await getCountry(controller.signal)) === 'RU');
      } catch {
        // Keep YouTube selected when geolocation is unavailable.
      }
    };

    void detectCountry();

    return () => controller.abort();
  }, []);

  const cloudSize = Math.min(14, props.notes.length);
  const cloudNotes = Array.from(
    { length: cloudSize },
    (_, index) => props.notes[Math.floor((index * props.notes.length) / cloudSize)]
  );
  const videos = props.videos.flatMap((video) => {
    const src = isRussia ? video.rutube : video.youtube;

    return src ? [{ id: video.id, src }] : [];
  });

  return {
    channelLinks,
    podcastLinks,
    lecturerLinks,
    cloudNotes,
    videos,
  };
};

export default useLogic;
