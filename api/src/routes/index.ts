import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';
import contentRoutes from '../modules/content/content.routes.js';
import mediaRoutes from '../modules/media/media.routes.js';
import legacyRoutes from '../modules/legacy/legacy.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/content', contentRoutes);
router.use('/media', mediaRoutes);
router.use('/legacy', legacyRoutes);

export default router;
