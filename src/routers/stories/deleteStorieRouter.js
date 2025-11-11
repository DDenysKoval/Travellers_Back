import { Router } from 'express';
import { isValidId } from '../../middlewares/isValidId.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import deleteStorieController from '../../controllers/stories/deleteStorieController.js';

const router = Router();

router.delete('/:storieId', isValidId, ctrlWrapper(deleteStorieController));

export default router;
