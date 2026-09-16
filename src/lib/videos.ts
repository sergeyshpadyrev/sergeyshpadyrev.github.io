import { promises as fs } from "fs";
import path from "path";

const videosPath = path.join(process.cwd(), "public", "videos.json");

export interface Video {
  id: string;
  youtube?: string;
  rutube?: string;
  vk?: string;
}

export interface VideoSection {
  id: string;
  title: string;
  videos: Video[];
}

interface VideoSectionEntry {
  id: string;
  title?: string;
  name?: string;
  videos: Video[];
}

export const getVideoSections = async (): Promise<VideoSection[]> => {
  const content = await fs.readFile(videosPath, "utf8");
  const sections = JSON.parse(content) as VideoSectionEntry[];

  return sections.map((section) => ({
    id: section.id,
    title: section.title ?? section.name ?? section.id,
    videos: section.videos,
  }));
};
