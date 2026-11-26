import Image from 'next/image';

import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>
) => {
  void props;
  void logic;

  return (
    <section className={style.section}>
      <div className={style.avatarWrapper}>
        <div className={style.avatarBg} />
        <Image
          src="/images/avatar.webp"
          alt="Сергей Шпадырев"
          width={288}
          height={384}
          priority
          fetchPriority="high"
          className={style.avatar}
        />
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <h1 className={style.title}>Сергей Шпадырев</h1>
          <h2 className={style.subtitle}>Инженер-программист и философ-публицист</h2>
        </div>
        <p className={style.description}>
          На этом сайте собраны все мои публикации, эссе, заметки, видео и ссылки на мои каналы
        </p>
      </div>
    </section>
  );
};

export default useRender;
