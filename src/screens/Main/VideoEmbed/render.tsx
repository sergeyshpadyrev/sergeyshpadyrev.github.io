import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

const useRender = (
  props: Props,
  logic: ReturnType<typeof useLogic>,
  style: ReturnType<typeof useStyle>
) => (
  <div className={style.aspect}>
    {logic.isLoaded ? (
      <iframe
        className={style.iframe}
        src={`${props.src}${props.src.includes('?') ? '&' : '?'}autoplay=1`}
        title={props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    ) : (
      <button
        type="button"
        className={style.preview}
        style={props.thumbnail ? { backgroundImage: `url(${props.thumbnail})` } : undefined}
        onClick={logic.loadVideo}
        aria-label={props.title}
      >
        <span className={style.overlay} aria-hidden="true" />
        <span className={style.play} aria-hidden="true">▶</span>
      </button>
    )}
  </div>
);

export default useRender;
