import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { v4 as uuid } from 'uuid';
import { env } from '../../config/env.js';
import { db } from '../../database/knexClient.js';
import { Media } from '../../types/models.js';

export class MediaService {
  async save(file: Express.Multer.File) {
    const id = uuid();
    const uploadDir = env.uploads.dir;
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    const targetPath = path.join(uploadDir, `${id}-${file.originalname}`);
    fs.writeFileSync(targetPath, file.buffer);

    const thumbnailPath = path.join(uploadDir, `${id}-thumb-${file.originalname}`);
    await sharp(file.buffer).resize(320).toFile(thumbnailPath);

    const payload: Media = {
      id,
      filename: path.basename(targetPath),
      original_name: file.originalname,
      mime_type: file.mimetype,
      size: file.size,
      url: `${env.uploads.publicPath}/${path.basename(targetPath)}`,
      variants: { thumbnail: `${env.uploads.publicPath}/${path.basename(thumbnailPath)}` },
    };
    await db<Media>('media').insert(payload);
    return payload;
  }

  list() {
    return db<Media>('media').select('*');
  }
}
