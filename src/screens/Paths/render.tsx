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
    <main className={style.main}>
      <div className={style.glowTop} />
      <div className={style.glowRight} />
      <div className={style.glowBottom} />

      <div className={style.container}>
        <nav className={style.nav} aria-label="Навигация">
          <Link href="/" className="nav-pill">
            ← На главную
          </Link>
        </nav>

        <header className={style.header}>
          <h1 className={style.title}>Философия и практика</h1>
          <p className={style.intro}>
            Системы философских систем и практик, помогающих навести порядок в своих делах и уме
          </p>
        </header>

        <section className={style.grid} aria-label="Пути учения">
          {logic.paths.map((path) => (
            <Link key={path.href} href={path.href} className={style.card}>
              <div className={style.visual} aria-hidden="true">
                <Image
                  src={path.image}
                  alt=""
                  width={800}
                  height={450}
                  className={style.image}
                  sizes="(min-width: 1024px) 512px, calc(100vw - 48px)"
                />
              </div>

              <div className={style.cardContent}>
                <h2 className={style.cardTitle}>{path.title}</h2>
                <p className={style.cardDescription}>{path.description}</p>
                <div className={style.cardFooter}>
                  <span className={style.result}>{path.result}</span>
                  <span className={style.arrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <p className={style.footer}>
          Каждый путь начинается с философской подготовки и меняет жизнь через ежедневную практику
        </p>
      </div>
    </main>
  );
};

export default useRender;
