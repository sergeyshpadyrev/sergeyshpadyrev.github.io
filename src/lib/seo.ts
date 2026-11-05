export const siteUrl = 'https://sergeyshpadyrev.ru';
export const siteName = 'Сергей Шпадырев';
export const defaultDescription =
  'Публикации, эссе, заметки, видео и книги Сергея Шпадырева.';
export const defaultImage = '/images/avatar.webp';

const titleRegex = /^#\s+(.+)$/m;
const imageRegex = /!\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/;

export const absoluteUrl = (path = '/') => new URL(path, siteUrl).toString();

const markdownToText = (markdown: string) =>
  markdown
    .replace(/^#\s+.+$/m, '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}(?:#{1,6}|>|[-*+] |\d+\. )/gm, '')
    .replace(/[*_~`\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const truncateDescription = (text: string, maxLength = 160) => {
  if (text.length <= maxLength) return text;

  const shortened = text.slice(0, maxLength + 1);
  const lastSpace = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, lastSpace > 100 ? lastSpace : maxLength).trim()}…`;
};

export const getMarkdownSeo = (content: string, fallbackTitle: string) => {
  const title = content.match(titleRegex)?.[1].trim() ?? fallbackTitle;
  const description = truncateDescription(markdownToText(content)) || defaultDescription;
  const image = content.match(imageRegex)?.[1];

  return { title, description, image };
};

export const serializeJsonLd = (value: object) =>
  JSON.stringify(value).replace(/</g, '\\u003c');
