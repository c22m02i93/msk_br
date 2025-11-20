export type ApiRoute =
  | "/new_day"
  | "/news"
  | "/anons"
  | "/pub"
  | "/video"
  | "/calendar"
  | "/gallery"
  | "/prihody"
  | `/documents/${string}`;

export interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface SimplePageParams {
  page?: number;
  page_size?: number;
}
