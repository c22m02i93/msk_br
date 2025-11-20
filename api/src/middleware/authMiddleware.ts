import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export interface AuthRequest extends Request {
  user?: { id: string; roleId?: number };
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Authorization header missing' });
  const [, token] = authHeader.split(' ');
  try {
    const payload = jwt.verify(token, env.jwt.secret) as { sub: string; roleId?: number };
    req.user = { id: payload.sub, roleId: payload.roleId };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

export function requireRole(roleId: number) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || (req.user.roleId ?? 0) < roleId) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}
