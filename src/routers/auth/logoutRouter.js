import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.post('/logout', ctrlWrapper());

export default router;
