import { Request, Response } from 'express';
import { body } from 'express-validator';
import { AuthService } from './auth.service.js';
import { validateRequest } from '../../middleware/validateRequest.js';

const service = new AuthService();

export const authValidators = {
  register: [body('email').isEmail(), body('password').isLength({ min: 8 })],
  login: [body('email').isEmail(), body('password').isString()],
};

export class AuthController {
  async register(req: Request, res: Response) {
    await validateRequest(req, res, () => undefined);
    const { email, password } = req.body;
    const data = await service.register(email, password);
    res.status(201).json(data);
  }

  async login(req: Request, res: Response) {
    await validateRequest(req, res, () => undefined);
    const { email, password } = req.body;
    try {
      const data = await service.login(email, password);
      res.json(data);
    } catch (error) {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
}
