import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.post('/refresh', ctrlWrapper());

export default router;
