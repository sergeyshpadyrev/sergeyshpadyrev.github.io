import type useLogic from './logic';
import type useStyle from './style';
import type { Props } from './types';

import BooksSection from './BooksSection';
import ChannelsSection from './ChannelsSection';
import CourseSection from './CourseSection';
import DevelopmentSection from './DevelopmentSection';
import HeroSection from './HeroSection';
import MusicSection from './MusicSection';
import NotesSection from './NotesSection';
import PathsPreview from './PathsPreview';
import PodcastSection from './PodcastSection';
import PostsSection from './PostsSection';
import VideosSection from './VideosSection';

const useRender = (
  props: Props,
  logic: Awaited<ReturnType<typeof useLogic>>,
  style: ReturnType<typeof useStyle>
) => {
  void logic;

  return (
    <main className={style.main}>
      <div className={style.glowLeft} />
      <div className={style.glowRight} />
      <div className={style.glowBottom} />

      <div className={style.container}>
        <HeroSection />
        <BooksSection books={props.books} />
        <PostsSection posts={props.posts} />
        <PathsPreview paths={props.paths} />
        <NotesSection notes={props.notes} />
        <VideosSection videos={props.videos} />
        <CourseSection />
        <PodcastSection />
        <MusicSection />
        <DevelopmentSection projects={props.developmentProjects} />
        <ChannelsSection />
      </div>
    </main>
  );
};

export default useRender;
