import { getVideoSections } from "@/lib/videos";

import Videos from "@/screens/Videos";

export const metadata = {
  title: "Видео — Сергей Шпадырев",
  description: "Все видео Сергея Шпадырева.",
};

export default async function VideosPage() {
  const sections = await getVideoSections();
  return <Videos sections={sections} />;
}
