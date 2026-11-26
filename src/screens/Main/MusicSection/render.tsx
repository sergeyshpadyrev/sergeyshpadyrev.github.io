import Image from 'next/image';
import type useLogic from './logic'; import type useStyle from './style'; import type { Props } from './types';
const useRender = (props: Props, logic: ReturnType<typeof useLogic>, style: ReturnType<typeof useStyle>) => {
  void props; void logic;
  return <section id="music" className={style.section}>
    <div className={style.imageWrapper}><div className={style.imageBg} /><Image src="/images/iwasnotthere.jpeg" alt="Обложка альбома Я не был там" width={320} height={320} className={style.image} /></div>
    <div className={style.content}><div className={style.titleGroup}><p className={style.label}>Музыка</p><h2 className={style.title}>Я не был там</h2></div><p className={style.description}>Озвученная с помощью музыкальной генеративной нейросети песня на мои стихи</p><div className={style.linksColumn}><p className={style.linksLabel}>Слушать песню</p><div className={style.linksRow}><a className={style.link} href="https://music.yandex.ru/album/42189204" target="_blank" rel="noreferrer">Яндекс.Музыка</a></div></div></div>
  </section>;
};
export default useRender;
