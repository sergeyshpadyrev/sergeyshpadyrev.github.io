import Link from 'next/link';
import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>
) => {
  void props;
  return (
    <section id="notes" className={style.section}>
      <div className={style.header}>
        <h2 className={style.title}>Заметки</h2>
        <p className={style.description}>
          Короткие записки об интересных наблюдениях из моего канала
        </p>
      </div>
      <div className={style.cloud}>
        {logic.notes.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`} className={style.tag}>
            {note.title}
          </Link>
        ))}
      </div>
      <div className={style.footer}>
        <Link href="/notes" className={style.button}>
          Открыть все заметки
        </Link>
      </div>
    </section>
  );
};
export default useRender;
