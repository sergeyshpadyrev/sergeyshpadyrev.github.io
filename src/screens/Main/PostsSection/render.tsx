import Image from 'next/image';
import Link from 'next/link';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (props: Props, logic: ReturnType<typeof useLogic>, style: ReturnType<typeof useStyle>) => {
  void props;
  return (
    <section id="posts" className={style.section}>
      <div className={style.header}><h2 className={style.title}>Эссе</h2><p className={style.description}>Все мои эссе, собранные в одном месте</p></div>
      <div className={style.grid}>
        {logic.posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className={style.card}>
            <div className={style.imageWrapper}>
              {post.image ? <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw" className={style.image} /> : <div className={style.noImage}>Без обложки</div>}
            </div>
            <div className={style.titleWrapper}><h3 className={style.cardTitle}>{post.title}</h3></div>
          </Link>
        ))}
      </div>
      <div className={style.footer}><Link href="/posts" className={style.button}>Открыть все эссе</Link></div>
    </section>
  );
};

export default useRender;
