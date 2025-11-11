import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
// import { authenticate } from '../../middlewares/authenticate.js';
import getFavoritesController from '../../controllers/users/getFavoritesController.js';

const router = Router();

router.get(
  '/:userId/favorites',
  // authenticate,
  isValidId,
  ctrlWrapper(getFavoritesController),
);

export default router;
