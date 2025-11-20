import { Router } from 'express';
import { AuthController, authValidators } from './auth.controller.js';
import { validateRequest } from '../../middleware/validateRequest.js';

const router = Router();
const controller = new AuthController();

router.post('/register', authValidators.register, validateRequest, (req, res) => controller.register(req, res));
router.post('/login', authValidators.login, validateRequest, (req, res) => controller.login(req, res));

export default router;
