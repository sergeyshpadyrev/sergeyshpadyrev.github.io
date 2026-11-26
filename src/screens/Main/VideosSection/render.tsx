import Link from 'next/link';
import VideoEmbed from '../VideoEmbed';
import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (props: Props, logic: ReturnType<typeof useLogic>, style: ReturnType<typeof useStyle>) => {
  void props;
  return <section id="guest" className={style.section}>
    <div className={style.header}><h2 className={style.title}>Видео</h2><p className={style.description}>Беседы о философии и жизни</p></div>
    <div className={style.grid}>{logic.videos.map((video, index) => <div key={video.id} className={style.card}><VideoEmbed src={video.src} thumbnail={video.thumbnail} title={`Беседа с Айратом Хайруллиным, видео ${index + 1}`} /></div>)}</div>
    <div className={style.footer}><Link href="/videos" className={style.button}>Открыть все видео</Link></div>
  </section>;
};
export default useRender;
