import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { validateBody } from '../../middlewares/validateBody.js';

const router = Router();

router.post('/', validateBody(), ctrlWrapper());

export default router;
