import { Router } from 'express';
import {
  announcements,
  calendar,
  mainNews,
  menu,
  news,
  popular,
  publications,
  search,
  videos
} from '../controllers/contentController.js';

const router = Router();

router.get('/main-news', mainNews);
router.get('/news', news);
router.get('/publications', publications);
router.get('/announcements', announcements);
router.get('/calendar/today', calendar);
router.get('/videos', videos);
router.get('/search', search);
router.get('/popular', popular);
router.get('/menu', menu);

export default router;
