import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import checkSessionController from '../../controllers/auth/checkSessionController.js';

const router = Router();

router.get('/session', ctrlWrapper(checkSessionController));

export default router;
