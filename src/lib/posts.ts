import { promises as fs } from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "public", "posts");

export type PostSummary = {
  id: string;
  title: string;
  image?: string;
  order: number;
};

const titleRegex = /^#\s+(.+)$/m;
const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/;

const extractOrder = (fileName: string) => {
  const match = fileName.match(/^(\d+)/);
  return match ? Number(match[1]) : 0;
};

const sanitizeId = (id: string) => /^[a-z0-9_-]+$/i.test(id);

export const getPostIds = async (): Promise<string[]> => {
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.replace(/\.md$/, ""));
};

export const getPostSummaries = async (): Promise<PostSummary[]> => {
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });
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

        return {
          id,
          title: titleMatch ? titleMatch[1].trim() : id,
          image: imageMatch ? imageMatch[1] : undefined,
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
