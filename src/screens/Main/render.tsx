import Image from 'next/image';
import Link from 'next/link';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: Awaited<ReturnType<typeof useLogic>>,
  style: ReturnType<typeof useStyle>
) => {
  const { digitalLinks, printLinks, channelLinks, podcastLinks, lecturerLinks } = logic;
  const {
    linkClassName,
    main,
    glowLeft,
    glowRight,
    glowBottom,
    container,
    heroSection,
    sideImageSection,
    contentSection,
    avatarWrapper,
    avatarBg,
    avatar,
    heroContent,
    sectionHeader,
    heroTitle,
    heroSubtitle,
    heroDescription,
    sideImageWrapper,
    bookImageBg,
    podcastImageBg,
    courseImageBg,
    sideImage,
    sideContent,
    titleGroup,
    sectionLabel,
    sectionTitle,
    sectionDescription,
    sideDescription,
    linksColumn,
    linksLabel,
    linksRow,
    bookLinksGrid,
    postsGrid,
    postCard,
    postImageWrapper,
    postImage,
    postNoImage,
    postTitleWrapper,
    cardTitle,
    sectionFooter,
    primaryButton,
    videosGrid,
    videoCard,
    videoAspect,
    videoIframe,
    notesGrid,
    noteCard,
    courseButtonCol,
    channelsGrid,
    channelCard,
    channelCardInner,
    channelArrow,
    channelsExtra,
    lecturerGrid,
  } = style;

  return (
    <main className={main}>
      <div className={glowLeft} />
      <div className={glowRight} />
      <div className={glowBottom} />

      <div className={container}>
        <section className={heroSection} style={{ animationDelay: '80ms' }}>
          <div className={avatarWrapper}>
            <div className={avatarBg} />
            <Image
              src="/images/avatar.jpg"
              alt="Сергей Шпадырев"
              width={288}
              height={384}
              priority
              className={avatar}
            />
          </div>
          <div className={heroContent}>
            <div className={sectionHeader}>
              <h1 className={heroTitle}>Сергей Шпадырев</h1>
              <h2 className={heroSubtitle}>Инженер-программист и философ-публицист</h2>
            </div>
            <p className={heroDescription}>
              На этом сайте собраны все мои публикации, эссе, заметки, видео и ссылки на мои каналы
            </p>
          </div>
        </section>

        <section
          id="book"
          className={sideImageSection}
          style={{ animationDelay: '120ms' }}
        >
          <div className={sideImageWrapper}>
            <div className={bookImageBg} />
            <Image
              src="/images/book.png"
              alt="Обложка книги Вглядываясь в пустоту"
              width={320}
              height={440}
              className={sideImage}
            />
          </div>
          <div className={sideContent}>
            <div className={titleGroup}>
              <p className={sectionLabel}>Книга</p>
              <h2 className={sectionTitle}>Вглядываясь в пустоту</h2>
            </div>
            <p className={sideDescription}>
              Cборник моих лучших эссе и заметок, написанных с 2020 по 2025 годы. Некоторые эссе
              вошли в него в неизменном виде, некоторые в отредактированном специально для этой
              книги варианте. В книге рассматривается множество тем: философские учения Древней
              Греции, Индии, и Китая, христианская теология и европейская философия Нового Времени,
              философия математики, физики и науки в целом, эпистемология, буддийское учение,
              вопросы этики и психологии, философия постмодерна.
            </p>
            <div className={bookLinksGrid}>
              <div className={linksColumn}>
                <p className={linksLabel}>Электронная версия</p>
                <div className={linksRow}>
                  {digitalLinks.map((link) => (
                    <a
                      key={link.href}
                      className={linkClassName}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className={linksColumn}>
                <p className={linksLabel}>Бумажная версия</p>
                <div className={linksRow}>
                  {printLinks.map((link) => (
                    <a
                      key={link.href}
                      className={linkClassName}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="posts"
          className={contentSection}
          style={{ animationDelay: '160ms' }}
        >
          <div className={sectionHeader}>
            <h2 className={sectionTitle}>Эссе</h2>
            <p className={sectionDescription}>
              Свежие публикации из архива эссе, собранные в одном месте.
            </p>
          </div>
          <div className={postsGrid}>
            {props.posts.map((post, index) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className={postCard}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className={postImageWrapper}>
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                      className={postImage}
                    />
                  ) : (
                    <div className={postNoImage}>Без обложки</div>
                  )}
                </div>
                <div className={postTitleWrapper}>
                  <h3 className={cardTitle}>{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className={sectionFooter}>
            <Link href="/posts" className={primaryButton}>
              Открыть все эссе
            </Link>
          </div>
        </section>

        <section
          id="guest"
          className={contentSection}
          style={{ animationDelay: '180ms' }}
        >
          <div className={sectionHeader}>
            <p className={sectionLabel}>Подкаст</p>
            <h2 className={sectionTitle}>В гостях у Айрата Хайруллина</h2>
            <p className={sectionDescription}>Беседа о философии, буддизме, сознании и жизни.</p>
          </div>
          <div className={videosGrid}>
            <div className={videoCard}>
              <div className={videoAspect}>
                <iframe
                  className={videoIframe}
                  src="https://www.youtube.com/embed/c9oMDeq-hSQ"
                  title="В гостях у Айрата Хайруллина"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className={videoCard}>
              <div className={videoAspect}>
                <iframe
                  className={videoIframe}
                  src="https://www.youtube.com/embed/qfKW9u_P574"
                  title="В гостях у Айрата Хайруллина, второе видео"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="podcast"
          className={sideImageSection}
          style={{ animationDelay: '230ms' }}
        >
          <div className={sideImageWrapper}>
            <div className={podcastImageBg} />
            <Image
              src="/images/dionis.png"
              alt="Обложка подкаста Философские разговоры о важном"
              width={320}
              height={440}
              className={sideImage}
            />
          </div>
          <div className={sideContent}>
            <div className={titleGroup}>
              <p className={sectionLabel}>Подкаст</p>
              <h2 className={sectionTitle}>Философские разговоры о важном</h2>
            </div>
            <p className={sideDescription}>
              Мой совместный камерный подкаст с Дионисом Диметором о физике, математике и философии
            </p>
            <div className={linksColumn}>
              <p className={linksLabel}>Слушать подкаст</p>
              <div className={linksRow}>
                {podcastLinks.map((link) => (
                  <a
                    key={link.href}
                    className={linkClassName}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="notes"
          className={contentSection}
          style={{ animationDelay: '200ms' }}
        >
          <div className={sectionHeader}>
            <h2 className={sectionTitle}>Заметки</h2>
            <p className={sectionDescription}>
              Короткие записки об интересных наблюдениях из моего канала.
            </p>
          </div>
          <div className={notesGrid}>
            {props.notes.slice(0, 4).map((note, index) => (
              <Link
                key={note.id}
                href={`/notes/${note.id}`}
                className={noteCard}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div>
                  <h3 className={cardTitle}>{note.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className={sectionFooter}>
            <Link href="/notes" className={primaryButton}>
              Открыть все заметки
            </Link>
          </div>
        </section>

        <section
          id="course"
          className={sideImageSection}
          style={{ animationDelay: '170ms' }}
        >
          <div className={sideImageWrapper}>
            <div className={courseImageBg} />
            <Image
              src="/images/statue.png"
              alt="Обложка курса Панель управления собой"
              width={320}
              height={440}
              className={sideImage}
            />
          </div>
          <div className={sideContent}>
            <div className={titleGroup}>
              <p className={sectionLabel}>Курс</p>
              <h2 className={sectionTitle}>Панель управления собой</h2>
            </div>
            <p className={sideDescription}>
              Курс лекций "Панель управления собой" рассказывает читателю о том, как построить
              непрерывно работающий конвейер по медленному, но неизбежному улучшению собственной
              жизни во всех её сферах. Не ждите быстрого результата - путь к успеху займёт 5-10 лет
              постоянных усилий и духовного роста, по прошествию которых Феррари и виллы на берегу
              моря всё равно не будет. Но будет кое-что гораздо более ценное - целостная
              многогранная жизнь.
            </p>
            <div className={courseButtonCol}>
              <p className={linksLabel}>Курс доступен по подписке на Boosty</p>
              <a
                className={primaryButton}
                href="https://boosty.to/sergeyshpadyrev"
                target="_blank"
                rel="noreferrer"
              >
                ОТКРЫТЬ КУРС
              </a>
            </div>
          </div>
        </section>

        <section
          id="channels"
          className={contentSection}
          style={{ animationDelay: '260ms' }}
        >
          <div className={titleGroup}>
            <h2 className={sectionTitle}>Каналы и платформы</h2>
            <p className={sectionDescription}>
              Мои тексты, заметки и комментарии выходят на разных площадках. Здесь собраны
              актуальные ссылки.
            </p>
          </div>
          <div className={channelsGrid}>
            {channelLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={channelCard}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className={channelCardInner}>
                  <span className={cardTitle}>{link.label}</span>
                  <span className={channelArrow}>→</span>
                </div>
              </a>
            ))}
          </div>
          <div className={channelsExtra}>
            <p className={sectionDescription}>
              Выступаю как приглашённый лектор в рамках нескольких интеллектуальных сообществ
            </p>
            <div className={lecturerGrid}>
              {lecturerLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={channelCard}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className={channelCardInner}>
                    <span className={cardTitle}>{link.label}</span>
                    <span className={channelArrow}>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default useRender;
