import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { authenticate } from '../../middlewares/authenticate.js';
import { deleteFromFavouriteController } from '../../controllers/users/index.js';

const router = Router();

router.delete(
  '/favourites/:storieId',
  authenticate,
  ctrlWrapper(deleteFromFavouriteController),
);

export default router;
