import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';
import addToFavouriteController from '../../controllers/users/addToFavouriteController.js';

const router = Router();

router.patch(
  '/favorites/:storyId',
  authMiddleware,
  isValidId,
  ctrlWrapper(addToFavouriteController),
);

export default router;
