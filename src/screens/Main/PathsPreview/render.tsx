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
    <section id="paths" className={style.section} style={{ animationDelay: '120ms' }}>
      <div className={style.header}>
        <h2 className={style.title}>Авторские пути</h2>
        <p className={style.description}>
          Философские системы и практики для последовательной работы над собой
        </p>
      </div>

      <div className={style.grid} aria-label="Авторские пути">
        {logic.paths.map((path) => (
          <Link key={path.href} href={path.href} className={style.card}>
            <div className={style.visual} aria-hidden="true">
              <Image
                src={path.image}
                alt=""
                width={800}
                height={450}
                className={style.image}
                sizes="(min-width: 1024px) 480px, calc(100vw - 96px)"
              />
            </div>
            <div className={style.cardContent}>
              <h3 className={style.cardTitle}>{path.title}</h3>
              <p className={style.cardDescription}>{path.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={style.footer}>
        <Link href="/paths" className={style.button}>
          Открыть все пути
        </Link>
      </div>
    </section>
  );
};

export default useRender;
