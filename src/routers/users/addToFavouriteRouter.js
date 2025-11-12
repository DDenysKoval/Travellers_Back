import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';

const router = Router();

router.patch('/:userId', isValidId, ctrlWrapper());

export default router;
