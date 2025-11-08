import { Router } from 'express';
import { isValidId } from '../../middlewares/isValidId.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.delete('/:storieId', isValidId, ctrlWrapper());

export default router;
