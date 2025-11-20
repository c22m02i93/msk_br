import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { db } from '../../database/knexClient.js';
import { env } from '../../config/env.js';
import { User } from '../../types/models.js';

export class AuthService {
  async register(email: string, password: string, roleId = 1) {
    const hashed = await bcrypt.hash(password, 10);
    const user: User = {
      id: uuid(),
      email,
      password: hashed,
      role_id: roleId,
      is_active: true,
    };
    await db<User>('users').insert(user);
    return this.generateToken(user);
  }

  async login(email: string, password: string) {
    const existing = await db<User>('users').where({ email }).first();
    if (!existing || !existing.password) {
      throw new Error('Invalid credentials');
    }
    const match = await bcrypt.compare(password, existing.password);
    if (!match) throw new Error('Invalid credentials');
    return this.generateToken(existing);
  }

  private generateToken(user: User) {
    const token = jwt.sign({ sub: user.id, roleId: user.role_id }, env.jwt.secret, {
      expiresIn: env.jwt.expiresIn,
    });
    return { token, user: { id: user.id, email: user.email, role_id: user.role_id } };
  }
}
