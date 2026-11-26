import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (props: Props, logic: ReturnType<typeof useLogic>, style: ReturnType<typeof useStyle>) => {
  void props;
  const renderLinks = (links: typeof logic.essayLinks, gridClassName = style.grid) => (
    <div className={gridClassName}>{links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={style.card}><div className={style.cardInner}><span className={style.cardTitle}>{link.label}</span><span className={style.arrow}>→</span></div></a>)}</div>
  );
  return <section id="channels" className={style.section}>
    <div className={style.titleGroup}><h2 className={style.title}>Каналы и платформы</h2></div>
    <div className={style.group}><p className={style.description}>Каналы публикации эссе:</p>{renderLinks(logic.essayLinks)}</div>
    <div className={style.group}><p className={style.description}>Каналы публикации английских переводов:</p>{renderLinks(logic.translationLinks)}</div>
    <div className={style.group}><p className={style.description}>Каналы публикации заметок и анонсов:</p>{renderLinks(logic.noteLinks)}</div>
    <div className={style.extra}><p className={style.description}>Выступаю в качестве приглашённого лектора:</p>{renderLinks(logic.lecturerLinks, style.lecturerGrid)}</div>
  </section>;
};
export default useRender;
