import { useEffect, useRef, useState } from "react";

import { getCountry } from "@/lib/country";

import type { Props } from "./types";

export type Hosting = "outside-russia" | "russia";

const useLogic = (props: Props) => {
  const [hosting, setHostingState] = useState<Hosting>("outside-russia");
  const isHostingSelectedManually = useRef(false);

  useEffect(() => {
    const controller = new AbortController();

    const selectHostingByCountry = async () => {
      try {
        const country = await getCountry(controller.signal);

        if (!isHostingSelectedManually.current) {
          setHostingState(country === "RU" ? "russia" : "outside-russia");
        }
      } catch {
        // Keep the default hosting when geolocation is unavailable.
      }
    };

    void selectHostingByCountry();

    return () => controller.abort();
  }, []);

  const setHosting = (value: Hosting) => {
    isHostingSelectedManually.current = true;
    setHostingState(value);
  };

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
