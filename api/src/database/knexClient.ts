import knex from 'knex';
import { env } from '../config/env.js';

export const db = knex({
  client: 'mysql2',
  connection: {
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: env.db.name,
    charset: env.db.charset,
  },
  pool: { min: 0, max: 10 },
});

export const legacyDb = db; // alias for clarity when reading from legacy tables
