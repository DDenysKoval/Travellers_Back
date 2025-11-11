import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { authenticate } from '../../middlewares/authenticate.js';
import addToFavouriteController from '../../controllers/users/addToFavouriteController.js';

const router = Router();

router.patch(
  '/:userId/favorites',
  authenticate,
  isValidId,
  ctrlWrapper(addToFavouriteController),
);

export default router;
