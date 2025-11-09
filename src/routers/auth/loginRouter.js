import { Router } from 'express';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { loginUserSchema } from '../../validation/auth/loginUserSchema.js';
import loginUserController from '../../controllers/auth/loginUserController.js';

const router = Router();

router.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController));

export default router;
