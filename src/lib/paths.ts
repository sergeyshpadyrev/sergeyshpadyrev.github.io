import { promises as fs } from 'fs';
import path from 'path';

import { getMarkdownSeo } from './seo';

const pathsConfigPath = path.join(process.cwd(), 'public', 'paths.json');
const nobleEightfoldDirectory = path.join(
  process.cwd(),
  'public',
  'paths',
  'noble-eightfold',
);

type PathSectionConfig = {
  id: string;
  title: string;
  texts: string[];
};

type PathsConfig = {
  'noble-eightfold': {
    sections: PathSectionConfig[];
  };
};

export type PathTextSummary = {
  id: string;
  title: string;
};

export type PathSection = {
  id: string;
  title: string;
  texts: PathTextSummary[];
};

const isSafeId = (value: string) => /^[a-z0-9-]+$/.test(value);

const getNobleEightfoldConfig = async (): Promise<PathSectionConfig[]> => {
  const content = await fs.readFile(pathsConfigPath, 'utf8');
  const config = JSON.parse(content) as Partial<PathsConfig>;
  const sections = config['noble-eightfold']?.sections;

  if (!Array.isArray(sections)) {
    throw new Error('В paths.json не настроены секции noble-eightfold');
  }

  const textIds = new Set<string>();

  sections.forEach((section) => {
    if (
      !section ||
      typeof section.id !== 'string' ||
      typeof section.title !== 'string' ||
      !Array.isArray(section.texts) ||
      !section.texts.every((id) => typeof id === 'string' && isSafeId(id))
    ) {
      throw new Error('Некорректная секция noble-eightfold в paths.json');
    }

    section.texts.forEach((id) => {
      if (textIds.has(id)) {
        throw new Error(`Текст ${id} указан в paths.json больше одного раза`);
      }
      textIds.add(id);
    });
  });

  return sections;
};

const readText = async (id: string) => {
  const content = await fs.readFile(
    path.join(nobleEightfoldDirectory, `${id}.md`),
    'utf8',
  );

  return { id, content, ...getMarkdownSeo(content, id) };
};

export const getNobleEightfoldSections = async (): Promise<PathSection[]> => {
  const sections = await getNobleEightfoldConfig();

  return Promise.all(
    sections.map(async (section) => ({
      id: section.id,
      title: section.title,
      texts: await Promise.all(
        section.texts.map(async (id) => {
          const text = await readText(id);
          return { id: text.id, title: text.title };
        }),
      ),
    })),
  );
};

export const getNobleEightfoldTextIds = async () => {
  const sections = await getNobleEightfoldConfig();
  return sections.flatMap((section) => section.texts);
};

export const getNobleEightfoldTextById = async (id: string) => {
  if (!isSafeId(id)) return null;

  const configuredIds = await getNobleEightfoldTextIds();
  if (!configuredIds.includes(id)) return null;

  try {
    return await readText(id);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw error;
  }
};
