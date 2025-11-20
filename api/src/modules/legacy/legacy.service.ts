import { legacyDb } from '../../database/knexClient.js';

export class LegacyService {
  async fetchLegacyNews(limit = 10) {
    // Example: map legacy `news` table to modern format without mutating original data
    const rows = await legacyDb('news').select('id', 'title', 'date', 'text as content').orderBy('date', 'desc').limit(limit);
    return rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      published_at: row.date,
      content: row.content,
    }));
  }
}
