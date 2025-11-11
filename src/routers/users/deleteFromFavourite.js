import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { authenticate } from '../../middlewares/authenticate.js';
import deleteFromFavouriteController from '../../controllers/users/deleteFromFavouriteController.js';

const router = Router();

router.delete(
  '/:userId/favorites',
  authenticate,
  isValidId,
  ctrlWrapper(deleteFromFavouriteController),
);

export default router;
