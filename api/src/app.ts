import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { env } from './config/env.js';
import router from './routes/index.js';
import { apiRateLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';

const swaggerPath = path.join(process.cwd(), 'api', 'openapi.yaml');
const swaggerDocument = fs.existsSync(swaggerPath) ? fs.readFileSync(swaggerPath, 'utf-8') : undefined;

export const createApp = () => {
  const app = express();

  app.use(cors({ origin: env.clientUrl, credentials: true }));
  app.use(helmet());
  app.use(express.json({ limit: '2mb' }));
  app.use(apiRateLimiter);

  app.get('/', (_req, res) => {
    res.json({ status: 'ok', message: 'Modern API ready', version: '1.0.0' });
  });

  if (swaggerDocument) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(undefined, { swaggerUrl: '/openapi.yaml' }));
    app.get('/openapi.yaml', (_req, res) => {
      res.setHeader('Content-Type', 'application/yaml');
      res.send(swaggerDocument);
    });
  }

  app.use('/api', router);
  app.use(errorHandler);

  return app;
};
