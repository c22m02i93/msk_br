import dotenv from 'dotenv';

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  appUrl: process.env.APP_URL ?? 'http://localhost:4000',
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:3000',
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    name: process.env.DB_NAME ?? 'legacy_db',
    user: process.env.DB_USER ?? 'legacy_user',
    password: process.env.DB_PASSWORD ?? 'legacy_password',
    charset: process.env.DB_CHARSET ?? 'utf8mb4',
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? 'changeme',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
  },
  uploads: {
    dir: process.env.UPLOAD_DIR ?? './uploads',
    publicPath: process.env.MEDIA_BASE_URL ?? '/uploads',
  },
  rateLimit: {
    windowMinutes: Number(process.env.RATE_LIMIT_WINDOW ?? 15),
    max: Number(process.env.RATE_LIMIT_MAX ?? 200),
  },
};
