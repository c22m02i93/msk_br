import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  Announcement,
  CalendarDay,
  MainNews,
  Menu,
  NewsItem,
  PopularItem,
  SearchResult,
  VideoItem
} from '../types/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = (file: string) => path.join(__dirname, '..', 'data', file);

function readJson<T>(file: string): T {
  const filePath = dataPath(file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export function getMainNews(): MainNews {
  return readJson<MainNews>('main-news.json');
}

export function getNews(): NewsItem[] {
  return readJson<NewsItem[]>('news.json');
}

export function getPublications(): NewsItem[] {
  return readJson<NewsItem[]>('publications.json');
}

export function getAnnouncements(): Announcement[] {
  return readJson<Announcement[]>('announcements.json');
}

export function getCalendar(): CalendarDay {
  return readJson<CalendarDay>('calendar.json');
}

export function getVideos(): VideoItem[] {
  return readJson<VideoItem[]>('videos.json');
}

export function getMenu(): Menu {
  return readJson<Menu>('menu.json');
}

export function getPopular(): PopularItem[] {
  return readJson<PopularItem[]>('popular.json');
}

export function searchContent(query: string): SearchResult[] {
  const lower = query.toLowerCase();
  const news = getNews();
  const publications = getPublications();
  const combined = [...news, ...publications];
  return combined
    .filter(item => item.title.toLowerCase().includes(lower))
    .map(item => ({ id: item.id, title: item.title, link: item.link, category: item.category }));
}
