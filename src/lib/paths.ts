import { promises as fs } from 'fs';
import path from 'path';

import { getPostSummaries, type PostSummary } from './posts';
import { getMarkdownSeo } from './seo';

const pathsConfigPath = path.join(process.cwd(), 'public', 'paths.json');
const nobleEightfoldDirectory = path.join(process.cwd(), 'public', 'paths', 'noble-eightfold');
const selfManagementDirectory = path.join(process.cwd(), 'public', 'paths', 'self-management');

type PathSectionConfig = {
  id: string;
  title: string;
  texts: string[];
};

type PathPostConfig = {
  id: string;
  image: string;
};

export type PathMaterial = {
  name: string;
  url: string;
};

export type PathId = 'self-management' | 'noble-eightfold';

export type PathConfig = {
  title: string;
  cardTitle: string;
  description: string;
  metaDescription: string;
  result: string;
  image: string;
  mainPost: PathPostConfig;
  additionalPosts: PathPostConfig[];
  additionalMaterials?: PathMaterial[];
  sections: PathSectionConfig[];
};

type PathsConfig = Record<PathId, PathConfig>;

export type PathCard = Pick<PathConfig, 'description' | 'result' | 'image'> & {
  href: string;
  title: string;
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
const isSafePostId = (value: string) => /^[a-z0-9_-]+$/i.test(value);

const validatePost = (post: PathPostConfig, pathId: PathId) => {
  if (
    !post ||
    typeof post.id !== 'string' ||
    !isSafePostId(post.id) ||
    typeof post.image !== 'string'
  ) {
    throw new Error(`Некорректный пост пути ${pathId} в paths.json`);
  }
};

const validatePath = (config: PathConfig, pathId: PathId) => {
  if (
    !config ||
    typeof config.title !== 'string' ||
    typeof config.description !== 'string' ||
    typeof config.metaDescription !== 'string' ||
    typeof config.image !== 'string' ||
    !Array.isArray(config.additionalPosts) ||
    (config.additionalMaterials !== undefined &&
      (!Array.isArray(config.additionalMaterials) ||
        !config.additionalMaterials.every(
          (material) =>
            material &&
            typeof material.name === 'string' &&
            typeof material.url === 'string'
        ))) ||
    !Array.isArray(config.sections)
  ) {
    throw new Error(`Некорректные настройки пути ${pathId} в paths.json`);
  }

  validatePost(config.mainPost, pathId);
  config.additionalPosts.forEach((post) => validatePost(post, pathId));
};

export const getPathsConfig = async (): Promise<PathsConfig> => {
  const content = await fs.readFile(pathsConfigPath, 'utf8');
  const config = JSON.parse(content) as PathsConfig;

  validatePath(config['self-management'], 'self-management');
  validatePath(config['noble-eightfold'], 'noble-eightfold');

  return config;
};

export const getPathConfig = async (pathId: PathId) => {
  const config = await getPathsConfig();
  return config[pathId];
};

export const getPathCards = async (): Promise<PathCard[]> => {
  const config = await getPathsConfig();

  return (Object.entries(config) as [PathId, PathConfig][]).map(([id, pathConfig]) => ({
    href: `/paths/${id}`,
    title: pathConfig.title,
    description: pathConfig.description,
    result: pathConfig.result,
    image: pathConfig.image,
  }));
};

export const getPathPosts = async (pathId: PathId) => {
  const [config, posts] = await Promise.all([getPathConfig(pathId), getPostSummaries()]);
  const postsById = new Map(posts.map((post) => [post.id, post]));
  const resolvePost = (postConfig: PathPostConfig): PostSummary => {
    const post = postsById.get(postConfig.id);

    if (!post) {
      throw new Error(`Не найден пост пути ${pathId}: ${postConfig.id}`);
    }

    return { ...post, image: postConfig.image };
  };

  return {
    mainPost: resolvePost(config.mainPost),
    additionalPosts: config.additionalPosts.map(resolvePost),
  };
};

const getNobleEightfoldConfig = async (): Promise<PathSectionConfig[]> => {
  const config = await getPathConfig('noble-eightfold');
  const sections = config.sections;

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
  const content = await fs.readFile(path.join(nobleEightfoldDirectory, `${id}.md`), 'utf8');

  return { id, content, ...getMarkdownSeo(content, id) };
};

const getSelfManagementConfig = async () => {
  const config = await getPathConfig('self-management');
  const ids = config.sections.flatMap((section) => section.texts);

  if (!ids.every((id) => typeof id === 'string' && isSafeId(id))) {
    throw new Error('Некорректные тексты self-management в paths.json');
  }

  if (new Set(ids).size !== ids.length) {
    throw new Error('Тексты self-management не должны повторяться в paths.json');
  }

  return ids;
};

const readSelfManagementText = async (id: string) => {
  const content = await fs.readFile(
    path.join(selfManagementDirectory, `${id}.md`),
    'utf8',
  );

  return { id, content, ...getMarkdownSeo(content, id) };
};

export const getSelfManagementSections = async (): Promise<PathSection[]> => {
  const config = await getPathConfig('self-management');

  await getSelfManagementConfig();

  return Promise.all(
    config.sections.map(async (section) => ({
      id: section.id,
      title: section.title,
      texts: await Promise.all(
        section.texts.map(async (id) => {
          const text = await readSelfManagementText(id);
          return { id: text.id, title: text.title };
        }),
      ),
    })),
  );
};

export const getSelfManagementTextIds = getSelfManagementConfig;

export const getSelfManagementTextById = async (id: string) => {
  if (!isSafeId(id)) return null;

  const configuredIds = await getSelfManagementConfig();
  if (!configuredIds.includes(id)) return null;

  try {
    return await readSelfManagementText(id);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw error;
  }
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
        })
      ),
    }))
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
