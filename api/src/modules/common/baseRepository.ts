import { Knex } from 'knex';

export class BaseRepository<T extends Record<string, unknown>> {
  constructor(private readonly tableName: string, private readonly db: Knex) {}

  async findAll() {
    return this.db<T>(this.tableName).select('*');
  }

  async findById(id: number | string) {
    return this.db<T>(this.tableName).where({ id }).first();
  }

  async create(payload: Partial<T>) {
    const [created] = await this.db<T>(this.tableName).insert(payload).returning('*');
    return created;
  }

  async update(id: number | string, payload: Partial<T>) {
    const [updated] = await this.db<T>(this.tableName).where({ id }).update(payload).returning('*');
    return updated;
  }

  async delete(id: number | string) {
    return this.db<T>(this.tableName).where({ id }).delete();
  }
}
