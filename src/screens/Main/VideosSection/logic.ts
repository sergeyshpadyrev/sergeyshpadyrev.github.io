import { useEffect, useState } from 'react';
import { getCountry } from '@/lib/country';
import type { Props } from './types';

const useLogic = (props: Props) => {
  const [isRussia, setIsRussia] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const detectCountry = async () => {
      try { setIsRussia((await getCountry(controller.signal)) === 'RU'); } catch { /* Keep YouTube selected when geolocation is unavailable. */ }
    };
    void detectCountry();
    return () => controller.abort();
  }, []);

  const videos = props.videos.flatMap((video) => {
    const src = isRussia ? video.rutube : video.youtube;
    const youtubeId = video.youtube?.split('/').at(-1);
    return src ? [{ id: video.id, src, thumbnail: youtubeId ? `https://i.ytimg.com/vi_webp/${youtubeId}/hqdefault.webp` : undefined }] : [];
  });
  return { videos };
};
export default useLogic;
