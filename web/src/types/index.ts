export interface MenuItem {
  label: string;
  link: string;
  children?: MenuItem[];
}

export interface FooterMenuSection {
  title: string;
  items: { label: string; link: string }[];
}

export interface MenuResponse {
  main: MenuItem[];
  footer: FooterMenuSection[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  link: string;
  category: string;
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
}

export interface CalendarDay {
  date: string;
  dayOfWeek: string;
  saints: string[];
  scripture: string;
  fasting: string;
  note: string;
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  link: string;
}

export interface PopularItem {
  id: number;
  title: string;
  link: string;
}

export interface SearchResult {
  id: number;
  title: string;
  link: string;
  category: string;
}
