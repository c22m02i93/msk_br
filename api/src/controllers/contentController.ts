import { Request, Response } from 'express';
import {
  getAnnouncements,
  getCalendar,
  getMainNews,
  getMenu,
  getNews,
  getPopular,
  getPublications,
  getVideos,
  searchContent
} from '../services/dataService.js';

export const mainNews = (_: Request, res: Response) => res.json(getMainNews());

export const news = (_: Request, res: Response) => res.json(getNews());

export const publications = (_: Request, res: Response) => res.json(getPublications());

export const announcements = (_: Request, res: Response) => res.json(getAnnouncements());

export const calendar = (_: Request, res: Response) => res.json(getCalendar());

export const videos = (_: Request, res: Response) => res.json(getVideos());

export const menu = (_: Request, res: Response) => res.json(getMenu());

export const popular = (_: Request, res: Response) => res.json(getPopular());

export const search = (req: Request, res: Response) => {
  const q = (req.query.q as string) || '';
  if (!q) {
    return res.json([]);
  }
  return res.json(searchContent(q));
};
