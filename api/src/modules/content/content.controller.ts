import { Request, Response } from 'express';
import { body, param } from 'express-validator';
import { validateRequest } from '../../middleware/validateRequest.js';
import { categoryService, pageService, postService, tagService } from './content.service.js';

const slugValidator = body('slug').isSlug();

export const contentValidators = {
  idParam: [param('id').isInt()],
  post: [body('title').isString(), slugValidator],
  page: [body('title').isString(), slugValidator],
  taxonomy: [body('name').isString(), slugValidator],
};

export class ContentController {
  async listPosts(_req: Request, res: Response) {
    const data = await postService.findAll();
    res.json(data);
  }

  async getPost(req: Request, res: Response) {
    await validateRequest(req, res, () => undefined);
    const item = await postService.findById(Number(req.params.id));
    if (!item) return res.status(404).json({ message: 'Post not found' });
    res.json(item);
  }

  async createPost(req: Request, res: Response) {
    await validateRequest(req, res, () => undefined);
    const created = await postService.create(req.body);
    res.status(201).json(created);
  }

  async updatePost(req: Request, res: Response) {
    await validateRequest(req, res, () => undefined);
    const updated = await postService.update(Number(req.params.id), req.body);
    res.json(updated);
  }

  async deletePost(req: Request, res: Response) {
    await validateRequest(req, res, () => undefined);
    await postService.delete(Number(req.params.id));
    res.status(204).send();
  }

  async listPages(_req: Request, res: Response) {
    res.json(await pageService.findAll());
  }

  async listCategories(_req: Request, res: Response) {
    res.json(await categoryService.findAll());
  }

  async listTags(_req: Request, res: Response) {
    res.json(await tagService.findAll());
  }
}
