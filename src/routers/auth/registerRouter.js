import { Router } from 'express';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.post('/register', validateBody(), ctrlWrapper());

export default router;
