import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import getAllUsersController from '../../controllers/users/getAllUsersController.js';

const router = Router();

router.get('/', ctrlWrapper(getAllUsersController));

export default router;
