import { BaseRepository } from './baseRepository.js';

export class BaseService<T extends Record<string, unknown>> {
  constructor(private readonly repository: BaseRepository<T>) {}

  findAll() {
    return this.repository.findAll();
  }

  findById(id: number | string) {
    return this.repository.findById(id);
  }

  create(payload: Partial<T>) {
    return this.repository.create(payload);
  }

  update(id: number | string, payload: Partial<T>) {
    return this.repository.update(id, payload);
  }

  delete(id: number | string) {
    return this.repository.delete(id);
  }
}
