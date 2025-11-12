import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { upload } from '../../middlewares/multer.js';
import updateAvatarController from '../../controllers/users/updateAvatarController.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = Router();

router.patch(
  '/:userId/avatar',
  authenticate,
  isValidId,
  upload.single('avatar'),
  ctrlWrapper(updateAvatarController),
);

export default router;
