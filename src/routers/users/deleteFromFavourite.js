import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';
import deleteFromFavouriteController from '../../controllers/users/deleteFromFavouriteController.js';

const router = Router();

router.delete(
  '/favorites/:storyId',
  authMiddleware,
  isValidId,
  ctrlWrapper(deleteFromFavouriteController),
);

export default router;
