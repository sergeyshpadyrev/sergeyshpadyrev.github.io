import { promises as fs } from "fs";
import path from "path";

const notesDirectory = path.join(process.cwd(), "public", "notes");

export type NoteSummary = {
  id: string;
  title: string;
  order: number;
};

const titleRegex = /^#\s+(.+)$/m;

const extractOrder = (fileName: string) => {
  const match = fileName.match(/^(\d+)/);
  return match ? Number(match[1]) : 0;
};

const sanitizeId = (id: string) => /^[a-z0-9_-]+$/i.test(id);

export const getNoteIds = async (): Promise<string[]> => {
  const entries = await fs.readdir(notesDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.replace(/\.md$/, ""));
};

export const getNoteSummaries = async (): Promise<NoteSummary[]> => {
  const entries = await fs.readdir(notesDirectory, { withFileTypes: true });
  const notes = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map(async (entry) => {
        const id = entry.name.replace(/\.md$/, "");
        const content = await fs.readFile(
          path.join(notesDirectory, entry.name),
          "utf8",
        );
        const titleMatch = content.match(titleRegex);

        return {
          id,
          title: titleMatch ? titleMatch[1].trim() : id,
          order: extractOrder(entry.name),
        } satisfies NoteSummary;
      }),
  );

  return notes.sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return a.title.localeCompare(b.title, "ru");
  });
};

export const getNoteById = async (id: string) => {
  if (!sanitizeId(id)) {
    return null;
  }

  const filePath = path.join(notesDirectory, `${id}.md`);

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
