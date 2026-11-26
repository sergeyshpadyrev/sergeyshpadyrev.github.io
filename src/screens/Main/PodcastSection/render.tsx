import Image from 'next/image';
import type useLogic from './logic'; import type useStyle from './style'; import type { Props } from './types';
const useRender = (props: Props, logic: ReturnType<typeof useLogic>, style: ReturnType<typeof useStyle>) => {
  void props;
  return <section id="podcast" className={style.section}>
    <div className={style.imageWrapper}><div className={style.imageBg} /><Image src="/images/dionis.png" alt="Обложка подкаста Философские разговоры о важном" width={320} height={440} className={style.image} /></div>
    <div className={style.content}><div className={style.titleGroup}><p className={style.label}>Подкаст</p><h2 className={style.title}>Философские разговоры о важном</h2></div><p className={style.description}>Мой совместный камерный подкаст с Дионисом Диметором о физике, математике и философии</p><div className={style.linksColumn}><p className={style.linksLabel}>Слушать подкаст</p><div className={style.linksRow}>{logic.links.map((link) => <a key={link.href} className={style.link} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div></div></div>
  </section>;
};
export default useRender;
