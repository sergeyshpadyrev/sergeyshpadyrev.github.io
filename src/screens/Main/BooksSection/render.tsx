import Image from 'next/image';
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
    <section id="book" className={style.section}>
      <div className={style.header}>
        <h2 className={style.title}>Книги</h2>
        <p className={style.description}>Мои сборники эссе и заметок в электронном и печатном виде</p>
      </div>
      <div className={style.grid}>
        {logic.books.map((book) => (
          <article key={book.title} className={style.item}>
            <div className={style.imageWrapper}>
              <div className={style.imageBg} />
              <Image src={book.image} alt={`Обложка книги ${book.title}`} width={320} height={440} loading="lazy" className={style.image} />
            </div>
            <div className={style.content}>
              <p className={style.bookDescription}>{book.description}</p>
              <div className={style.linksGrid}>
                <div className={style.linksColumn}>
                  <p className={style.linksLabel}>Электронная версия</p>
                  <div className={style.linksRow}>
                    {book.digitalLinks.map((link) => <a key={link.href} className={style.link} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
                  </div>
                </div>
                <div className={style.linksColumn}>
                  <p className={style.linksLabel}>Бумажная версия</p>
                  {book.printLinks.length > 0 ? (
                    <div className={style.linksRow}>
                      {book.printLinks.map((link) => <a key={link.href} className={style.link} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
                    </div>
                  ) : <span className={style.announcement}>СКОРО</span>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={style.footer}><Link href="/books" className={style.button}>Открыть все книги</Link></div>
    </section>
  );
};

export default useRender;
