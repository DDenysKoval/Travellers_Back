import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { upload } from '../../middlewares/multer.js';

const router = Router();

router.patch(
  '/:userId',
  upload.single(),
  isValidId,
  validateBody(),
  ctrlWrapper(),
);

export default router;
