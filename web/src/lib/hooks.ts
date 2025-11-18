import { useQuery } from '@tanstack/react-query';
import api from './api';
import {
  Announcement,
  CalendarDay,
  MenuResponse,
  NewsItem,
  PopularItem,
  SearchResult,
  VideoItem
} from '@/types';

const fetcher = async <T>(url: string): Promise<T> => {
  const { data } = await api.get<T>(url);
  return data;
};

export const useMainNews = () => useQuery({ queryKey: ['main-news'], queryFn: () => fetcher<NewsItem>('/main-news') });
export const useNews = () => useQuery({ queryKey: ['news'], queryFn: () => fetcher<NewsItem[]>('/news') });
export const usePublications = () => useQuery({ queryKey: ['publications'], queryFn: () => fetcher<NewsItem[]>('/publications') });
export const useAnnouncements = () =>
  useQuery({ queryKey: ['announcements'], queryFn: () => fetcher<Announcement[]>('/announcements') });
export const useCalendar = () => useQuery({ queryKey: ['calendar'], queryFn: () => fetcher<CalendarDay>('/calendar/today') });
export const useVideos = () => useQuery({ queryKey: ['videos'], queryFn: () => fetcher<VideoItem[]>('/videos') });
export const usePopular = () => useQuery({ queryKey: ['popular'], queryFn: () => fetcher<PopularItem[]>('/popular') });
export const useMenu = () => useQuery({ queryKey: ['menu'], queryFn: () => fetcher<MenuResponse>('/menu') });

export const useSearch = (q: string) =>
  useQuery({
    queryKey: ['search', q],
    queryFn: () => fetcher<SearchResult[]>(`/search?q=${encodeURIComponent(q)}`),
    enabled: q.length > 1
  });
