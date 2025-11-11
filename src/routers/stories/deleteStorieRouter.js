import { Router } from 'express';
import { isValidId } from '../../middlewares/isValidId.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import deleteStorieController from '../../controllers/stories/deleteStorieController.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = Router();

router.delete(
  '/:storieId',
  authenticate,
  isValidId,
  ctrlWrapper(deleteStorieController),
);

export default router;
