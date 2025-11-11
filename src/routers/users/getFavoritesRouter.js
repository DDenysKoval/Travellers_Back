import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';
import getFavoritesController from '../../controllers/users/getFavoritesController.js';

const router = Router();

// GET /users/favorites
router.get('/favorites', authMiddleware, ctrlWrapper(getFavoritesController));

export default router;
