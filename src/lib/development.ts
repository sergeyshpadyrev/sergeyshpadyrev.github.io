import { promises as fs } from 'fs';
import path from 'path';

const developmentPath = path.join(process.cwd(), 'public', 'development.json');

export interface DevelopmentProject {
  name: string;
  description: string;
  link: string;
}

export const getDevelopmentProjects = async (): Promise<DevelopmentProject[]> => {
  const content = await fs.readFile(developmentPath, 'utf8');
  return JSON.parse(content) as DevelopmentProject[];
};
