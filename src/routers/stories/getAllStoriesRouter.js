import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import getAllStoriesController from '../../controllers/stories/getAllStoriesController.js';

const router = Router();

router.get('/', ctrlWrapper(getAllStoriesController));

export default router;
