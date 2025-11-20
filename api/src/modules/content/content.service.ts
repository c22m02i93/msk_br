import { db } from '../../database/knexClient.js';
import { BaseRepository } from '../common/baseRepository.js';
import { BaseService } from '../common/baseService.js';
import { Category, Page, Post, Tag } from '../../types/models.js';

export const postService = new BaseService<Post>(new BaseRepository<Post>('posts', db));
export const pageService = new BaseService<Page>(new BaseRepository<Page>('pages', db));
export const categoryService = new BaseService<Category>(new BaseRepository<Category>('categories', db));
export const tagService = new BaseService<Tag>(new BaseRepository<Tag>('tags', db));
