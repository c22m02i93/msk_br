import { Router } from 'express';
import { authMiddleware, requireRole } from '../../middleware/authMiddleware.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { ContentController, contentValidators } from './content.controller.js';

const router = Router();
const controller = new ContentController();

router.get('/posts', (req, res) => controller.listPosts(req, res));
router.get('/posts/:id', contentValidators.idParam, validateRequest, (req, res) => controller.getPost(req, res));
router.post('/posts', authMiddleware, requireRole(2), contentValidators.post, validateRequest, (req, res) =>
  controller.createPost(req, res),
);
router.put('/posts/:id', authMiddleware, requireRole(2), contentValidators.post, validateRequest, (req, res) =>
  controller.updatePost(req, res),
);
router.delete('/posts/:id', authMiddleware, requireRole(2), contentValidators.idParam, validateRequest, (req, res) =>
  controller.deletePost(req, res),
);

router.get('/pages', (req, res) => controller.listPages(req, res));
router.get('/categories', (req, res) => controller.listCategories(req, res));
router.get('/tags', (req, res) => controller.listTags(req, res));

export default router;
