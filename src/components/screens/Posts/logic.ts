import type { PostLinks } from "@/lib/posts";

import type { Props } from "./types";

const platformLinks: Array<{ key: keyof PostLinks; label: string }> = [
  { key: "dzen", label: "Дзен" },
  { key: "habr", label: "Хабр" },
  { key: "pikabu", label: "Пикабу" },
  { key: "vastrik", label: "Вастрик" },
];

const useLogic = (props: Props) => {
  const oldPostsIndex = props.posts.findIndex((post) => post.order < 19);
  return { platformLinks, oldPostsIndex };
};

export default useLogic;
