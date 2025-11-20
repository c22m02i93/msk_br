export interface MediaItem {
  id: number | string;
  title: string;
  slug?: string;
  image?: string;
  video_url?: string;
  date?: string;
  description?: string;
  body?: string;
  category?: string;
}

export interface NewsItem extends MediaItem {
  summary?: string;
}

export interface Announcement extends MediaItem {}

export interface Publication extends MediaItem {}

export interface VideoItem extends MediaItem {
  embed?: string;
}

export interface DocumentItem extends MediaItem {
  type?: string;
  file_url?: string;
}

export interface DayItem {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
}

export interface CalendarEvent {
  id: string | number;
  title: string;
  date: string;
  description?: string;
}

export interface SaintItem {
  id: string | number;
  name: string;
  date: string;
  description?: string;
  icon?: string;
}

export interface GalleryAlbum {
  id: string | number;
  title: string;
  cover?: string;
  date?: string;
  photos?: string[];
}

export interface Parish {
  id: string | number;
  title: string;
  slug?: string;
  address?: string;
  phone?: string;
  description?: string;
  priest?: string;
  lat?: number;
  lng?: number;
  schedule?: string;
  website?: string;
  images?: string[];
}
