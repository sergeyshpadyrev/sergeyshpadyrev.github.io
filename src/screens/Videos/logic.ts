import { useEffect, useState } from "react";

import { getCountry } from "@/lib/country";

import type { Props } from "./types";

export type Hosting = "outside-russia" | "russia";

const useLogic = (props: Props) => {
  const [hostingState, setHostingState] = useState({
    hosting: "outside-russia" as Hosting,
    isManual: false,
  });
  const { hosting } = hostingState;

  useEffect(() => {
    const controller = new AbortController();

    const selectHostingByCountry = async () => {
      try {
        const country = await getCountry(controller.signal);

        setHostingState((current) =>
          current.isManual
            ? current
            : {
                hosting: country === "RU" ? "russia" : "outside-russia",
                isManual: false,
              },
        );
      } catch {
        // Keep the default hosting when geolocation is unavailable.
      }
    };

    void selectHostingByCountry();

    return () => controller.abort();
  }, []);

  const setHosting = (value: Hosting) => {
    setHostingState({ hosting: value, isManual: true });
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
