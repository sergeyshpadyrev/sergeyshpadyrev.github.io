import Image from 'next/image';
import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (props: Props, logic: ReturnType<typeof useLogic>, style: ReturnType<typeof useStyle>) => {
  void props; void logic;
  return <section id="course" className={style.section}><div className={style.inner}>
    <div className={style.visual}><div className={style.glow} /><div className={style.frame}><Image src="/images/lectures-cover.webp" alt="Обложка лектория" width={1456} height={816} className={style.image} /></div></div>
    <div className={style.content}><div className={style.titleGroup}><h2 className={style.title}>Закрытый блог</h2></div><p className={style.intro}>В закрытом блоге я публикую циклы философских лекций о построении системы управления собой, инженерном подходе к своей жизни и внедрении буддизма в повседневные практики.</p><div className={style.cta}><a className={style.button} href="https://boosty.to/sergeyshpadyrev" target="_blank" rel="noreferrer">Открыть на Boosty</a></div></div>
  </div></section>;
};
export default useRender;
