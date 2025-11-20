import axios from "axios";
import { ApiRoute, PaginatedResponse, SimplePageParams } from "@/types/api";
import {
  Announcement,
  CalendarEvent,
  DayItem,
  DocumentItem,
  GalleryAlbum,
  NewsItem,
  Parish,
  Publication,
  VideoItem,
} from "@/types/content";

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com";

export const api = axios.create({
  baseURL: apiBase,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

const handleError = (error: unknown) => {
  console.error("API error", error);
  throw error;
};

export async function fetchList<T>(route: ApiRoute, params?: SimplePageParams): Promise<PaginatedResponse<T>> {
  try {
    const { data } = await api.get<PaginatedResponse<T>>(route, { params });
    return data;
  } catch (error) {
    handleError(error);
    return { results: [], count: 0, next: null, previous: null };
  }
}

export async function fetchItem<T>(route: string): Promise<T> {
  try {
    const { data } = await api.get<T>(route);
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export const contentApi = {
  day: () => fetchItem<DayItem>("/new_day"),
  news: (params?: SimplePageParams) => fetchList<NewsItem>("/news", params),
  newsItem: (slug: string) => fetchItem<NewsItem>(`/news/${slug}`),
  announcements: (params?: SimplePageParams) => fetchList<Announcement>("/anons", params),
  publications: (params?: SimplePageParams) => fetchList<Publication>("/pub", params),
  video: (params?: SimplePageParams) => fetchList<VideoItem>("/video", params),
  documents: (section: string, params?: SimplePageParams) =>
    fetchList<DocumentItem>(`/documents/${section}`, params),
  calendar: () => fetchList<CalendarEvent>("/calendar"),
  gallery: (params?: SimplePageParams) => fetchList<GalleryAlbum>("/gallery", params),
  parishes: (params?: SimplePageParams) => fetchList<Parish>("/prihody", params),
  parish: (slug: string) => fetchItem<Parish>(`/prihody/${slug}`),
};
