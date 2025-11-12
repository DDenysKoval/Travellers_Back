import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { authenticate } from '../../middlewares/authenticate.js';
import { getMyStoriesController } from '../../controllers/stories/index.js';

const router = Router();

router.get('/my', authenticate, ctrlWrapper(getMyStoriesController));

export default router;