import { Router } from 'express';
import { LegacyService } from './legacy.service.js';

const router = Router();
const service = new LegacyService();

router.get('/news', async (_req, res) => {
  const items = await service.fetchLegacyNews();
  res.json(items);
});

export default router;
