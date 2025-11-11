import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';
import deleteFromFavouriteController from '../../controllers/users/deleteFromFavouriteController.js';

const router = Router();

// Прибрати історію з обраних поточного користувача
router.delete(
  '/favorites/:storyId',
  authMiddleware,
  isValidId, // або isValidId('storyId') — залежно від реалізації
  ctrlWrapper(deleteFromFavouriteController),
);

export default router;
