import Link from 'next/link';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const rotations = Array.from({ length: 8 }, (_, index) => index * 45);

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
          <p className={style.eyebrow}>Практическая философия</p>
          <h1 className={style.title}>Пути</h1>
          <p className={style.intro}>
            Две системы практик, которые помогают навести порядок в делах и уме — и двигаться от
            понимания к ежедневному действию.
          </p>
        </header>

        <section className={style.grid} aria-label="Пути учения">
          {logic.paths.map((path) => (
            <Link key={path.href} href={path.href} className={style.card}>
              <div className={style.cardTop}>
                <span className={style.cardNumber}>{path.number}</span>
                <span className={style.cardLabel}>{path.label}</span>
              </div>

              <div className={style.visual} aria-hidden="true">
                {path.visual === 'management' ? (
                  <div className={style.managementVisual}>
                    <div className={style.managementRing} />
                    <div className={style.managementAxis} />
                    <div className={style.managementNeedle} />
                    <div className={style.managementCenter} />
                  </div>
                ) : (
                  <div className={style.eightfoldVisual}>
                    <div className={style.eightfoldRing} />
                    <div className={style.eightfoldSpokes}>
                      {rotations.map((rotation) => (
                        <span
                          key={`spoke-${rotation}`}
                          className={style.spoke}
                          style={{ transform: `rotate(${rotation}deg)` }}
                        />
                      ))}
                      {rotations.map((rotation) => (
                        <span
                          key={`dot-${rotation}`}
                          className={style.dot}
                          style={{
                            transform: `rotate(${rotation}deg) translateX(5.35rem) translate(-50%, -50%)`,
                          }}
                        />
                      ))}
                    </div>
                    <span className={style.eightfoldCenter}>8</span>
                  </div>
                )}
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
          Путь начинается с карты, но становится настоящим только в ежедневной практике.
        </p>
      </div>
    </main>
  );
};

export default useRender;
