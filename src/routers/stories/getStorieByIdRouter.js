import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { getStorieByIdController } from '../../controllers/stories/index.js';

const router = Router();

router.get('/:storieId', isValidId, ctrlWrapper(getStorieByIdController));

export default router;
