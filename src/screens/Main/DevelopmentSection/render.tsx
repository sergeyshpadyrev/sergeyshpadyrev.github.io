import type useLogic from './logic'; import type useStyle from './style'; import type { Props } from './types';
const useRender = (props: Props, logic: ReturnType<typeof useLogic>, style: ReturnType<typeof useStyle>) => {
  void props;
  return <section id="development" className={style.section}><div className={style.header}><h2 className={style.title}>Разработки</h2><p className={style.description}>Мои проекты с открытым исходным кодом на GitHub</p></div><div className={style.grid}>{logic.projects.map((project) => <a key={project.link} href={project.link} target="_blank" rel="noreferrer" className={style.card}><div className={style.content}><h3 className={style.cardTitle}>{project.name}</h3><p className={style.cardDescription}>{project.description}</p></div><span className={style.arrow} aria-hidden="true">→</span></a>)}</div></section>;
};
export default useRender;
