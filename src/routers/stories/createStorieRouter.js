import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { validateBody } from '../../middlewares/validateBody.js';
import createContactController from '../../controllers/stories/createStorieController.js';
import { upload } from '../../middlewares/multer.js';
import { createStorieSchema } from '../../validation/stories/createStorieSchema.js';

const router = Router();

router.post(
    '/',
    upload.single('img'),
    validateBody(createStorieSchema),
    ctrlWrapper(createContactController));

export default router;
