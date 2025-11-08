import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';

const router = Router();

router.get('/:userId', isValidId, ctrlWrapper());

export default router;
