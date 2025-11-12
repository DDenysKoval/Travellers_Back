import { Router } from 'express';

import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { getFavoritesController } from '../../controllers/users/index.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(getFavoritesController));

export default router;
