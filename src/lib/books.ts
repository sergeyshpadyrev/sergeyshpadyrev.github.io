import { promises as fs } from 'fs';
import path from 'path';

const booksPath = path.join(process.cwd(), 'public', 'books.json');

export interface BookLink {
  label: string;
  href: string;
}

export interface Book {
  title: string;
  description: string;
  image: string;
  widgetUrl: string;
  digitalLinks: BookLink[];
  printLinks: BookLink[];
}

export const getBooks = async (): Promise<Book[]> => {
  const content = await fs.readFile(booksPath, 'utf8');
  return JSON.parse(content) as Book[];
};
