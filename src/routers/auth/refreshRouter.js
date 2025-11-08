import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import refreshUserSessionController from '../../controllers/auth/refreshUserSessionController.js';

const router = Router();

router.post('/refresh', ctrlWrapper(refreshUserSessionController));

export default router;
