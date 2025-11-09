import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { getUserByIdController } from '../../controllers/users/index.js';

const router = Router();

router.get('/:userId', isValidId, ctrlWrapper(getUserByIdController));

export default router;
