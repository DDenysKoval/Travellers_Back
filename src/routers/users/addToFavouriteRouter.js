import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { validateBody } from '../../middlewares/validateBody.js';

const router = Router();

router.patch('/:userId', isValidId, validateBody(), ctrlWrapper());

export default router;
