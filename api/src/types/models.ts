export interface Role {
  id: number;
  name: string;
  description?: string;
}

export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role_id?: number;
  is_active?: boolean;
  password?: string;
}

export interface SeoMeta {
  id?: number;
  title?: string;
  description?: string;
  schema?: Record<string, unknown>;
  slug: string;
}

export interface Category {
  id?: number;
  name: string;
  slug: string;
  description?: string;
  parent_id?: number | null;
}

export interface Tag {
  id?: number;
  name: string;
  slug: string;
}

export interface Post {
  id?: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category_id?: number;
  author_id?: number;
  cover_media_id?: string | null;
  is_published?: boolean;
  published_at?: Date | null;
  seo_id?: number | null;
}

export interface Page {
  id?: number;
  title: string;
  slug: string;
  content?: string;
  is_published?: boolean;
  published_at?: Date | null;
  seo_id?: number | null;
}

export interface Menu {
  id?: number;
  name: string;
  slug: string;
}

export interface MenuItem {
  id?: number;
  menu_id: number;
  title: string;
  url: string;
  parent_id?: number | null;
  order?: number;
  is_active?: boolean;
}

export interface Media {
  id?: string;
  filename: string;
  original_name: string;
  mime_type: string;
  size: number;
  url: string;
  variants?: Record<string, unknown>;
}

export interface Event {
  id?: number;
  title: string;
  slug: string;
  description?: string;
  start_at?: Date;
  end_at?: Date;
  location?: string;
  seo_id?: number | null;
}

export interface Schedule {
  id?: number;
  title: string;
  slug: string;
  description?: string;
  items?: Record<string, unknown>;
}

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  processed?: boolean;
}
