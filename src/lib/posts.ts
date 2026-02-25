import { promises as fs } from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "public", "posts");
const postsLinksPath = path.join(process.cwd(), "public", "posts.json");

export type PostSummary = {
  id: string;
  title: string;
  image?: string;
  links?: PostLinks;
  order: number;
};

export type PostLinks = Partial<
  Record<"dzen" | "habr" | "pikabu" | "vastrik", string>
>;

type PostLinksEntry = {
  id: string;
} & PostLinks;

const titleRegex = /^#\s+(.+)$/m;
const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/;

const extractOrder = (fileName: string) => {
  const match = fileName.match(/^(\d+)/);
  return match ? Number(match[1]) : 0;
};

const sanitizeId = (id: string) => /^[a-z0-9_-]+$/i.test(id);

const loadPostLinksMap = async () => {
  try {
    const content = await fs.readFile(postsLinksPath, "utf8");
    const entries = JSON.parse(content) as PostLinksEntry[];
    const map = new Map<string, PostLinks>();

    if (!Array.isArray(entries)) {
      return map;
    }

    entries.forEach((entry) => {
      if (!entry || typeof entry.id !== "string") {
        return;
      }

      const links: PostLinks = {
        ...(typeof entry.dzen === "string" ? { dzen: entry.dzen } : {}),
        ...(typeof entry.habr === "string" ? { habr: entry.habr } : {}),
        ...(typeof entry.pikabu === "string" ? { pikabu: entry.pikabu } : {}),
        ...(typeof entry.vastrik === "string" ? { vastrik: entry.vastrik } : {}),
      };

      if (Object.keys(links).length > 0) {
        map.set(entry.id, links);
      }
    });

    return map;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return new Map<string, PostLinks>();
    }

    throw error;
  }
};

export const getPostIds = async (): Promise<string[]> => {
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.replace(/\.md$/, ""));
};

export const getPostSummaries = async (): Promise<PostSummary[]> => {
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });
  const linksById = await loadPostLinksMap();
  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map(async (entry) => {
        const id = entry.name.replace(/\.md$/, "");
        const content = await fs.readFile(
          path.join(postsDirectory, entry.name),
          "utf8",
        );
        const titleMatch = content.match(titleRegex);
        const imageMatch = content.match(imageRegex);
        const links = linksById.get(id);

        return {
          id,
          title: titleMatch ? titleMatch[1].trim() : id,
          image: imageMatch ? imageMatch[1] : undefined,
          links,
          order: extractOrder(entry.name),
        } satisfies PostSummary;
      }),
  );

  return posts.sort((a, b) => {
    if (b.order !== a.order) {
      return b.order - a.order;
    }
    return a.title.localeCompare(b.title, "ru");
  });
};

export const getPostById = async (id: string) => {
  if (!sanitizeId(id)) {
    return null;
  }

  const filePath = path.join(postsDirectory, `${id}.md`);

  try {
    const content = await fs.readFile(filePath, "utf8");
    return { id, content };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }
};
