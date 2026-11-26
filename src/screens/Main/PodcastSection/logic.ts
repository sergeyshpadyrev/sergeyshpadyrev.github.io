import type { Props } from './types';
const links = [
  { label: 'YouTube', href: 'https://www.youtube.com/watch?v=kNGaajO98Og&list=PL6h-USaTeVmlo6HMzgx2u4cepPCtr79v4' },
  { label: 'Spotify', href: 'https://open.spotify.com/show/7oSgD2FdX0v74lApcceekH' },
  { label: 'VK', href: 'https://vkvideo.ru/playlist/-231375709_1' },
  { label: 'Яндекс.Музыка', href: 'https://music.yandex.ru/album/37294857' },
];
const useLogic = (props: Props) => ({ props, links });
export default useLogic;
