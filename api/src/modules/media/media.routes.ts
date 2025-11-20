import { Router } from 'express';
import multer from 'multer';
import { authMiddleware, requireRole } from '../../middleware/authMiddleware.js';
import { MediaService } from './media.service.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();
const service = new MediaService();

router.get('/', (req, res) => {
  service.list().then((items) => res.json(items));
});

router.post('/', authMiddleware, requireRole(2), upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'File missing' });
  const saved = await service.save(req.file);
  res.status(201).json(saved);
});

export default router;
