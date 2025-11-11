import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { authenticate } from '../../middlewares/authenticate.js';
import updateUserInfoController from '../../controllers/users/updateUserInfoController.js';
import { updateUserByIdSchema } from '../../validation/user/updateUserByIdSchema.js';

const router = Router();

router.patch('/update-me', authenticate, validateBody(updateUserByIdSchema), ctrlWrapper(updateUserInfoController));


export default router;
