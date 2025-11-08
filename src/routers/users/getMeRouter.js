import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.get('/get-me', ctrlWrapper());

export default router;
