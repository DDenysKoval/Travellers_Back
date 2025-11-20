import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { upload } from '../../middlewares/multer.js';
import { patchStorieSchema } from '../../validation/stories/patchStorieSchema.js';
import patchStoriesController from '../../controllers/stories/patchStorieController.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = Router();

router.patch(
  '/:storieId',
  upload.single('img'),
  authenticate,
  isValidId,
  validateBody(patchStorieSchema),
  ctrlWrapper(patchStoriesController),
);

export default router;
