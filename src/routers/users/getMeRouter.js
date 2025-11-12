import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { authenticate } from '../../middlewares/authenticate.js';
import getMeController from '../../controllers/users/getMeController.js';

const router = Router();

router.get('/get-me', authenticate, ctrlWrapper(getMeController));

export default router;
