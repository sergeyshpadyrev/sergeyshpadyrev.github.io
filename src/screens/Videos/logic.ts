import { useState } from "react";

import type { Props } from "./types";

export type Hosting = "outside-russia" | "russia";

const useLogic = (props: Props) => {
  const [hosting, setHosting] = useState<Hosting>("outside-russia");
  const sections = props.sections
    .map((section) => ({
      ...section,
      videos: section.videos.flatMap((video) => {
        const src =
          hosting === "outside-russia"
            ? video.youtube
            : (video.rutube ?? video.vk);

        return src ? [{ id: video.id, src }] : [];
      }),
    }))
    .filter((section) => section.videos.length > 0);

  return { hosting, sections, setHosting };
};

export default useLogic;
