import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';

const router = Router();

router.get('/:storieId', isValidId, ctrlWrapper());

export default router;
