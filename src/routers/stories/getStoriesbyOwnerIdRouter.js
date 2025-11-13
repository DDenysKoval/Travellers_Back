import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import getStoriesByOwnerIdController from '../../controllers/stories/getStoriesByOwnerIdController.js';



const router = Router();

router.get('/owner/:ownerId', ctrlWrapper(getStoriesByOwnerIdController));

export default router;