import { Router } from 'express';
import storiesRouter from './stories/index.js';
import authRouter from './auth/index.js';
import usersRouter from './users/index.js';
const router = Router();

router.use('/stories', storiesRouter);
router.use('/auth', authRouter);
router.use('/api/users', usersRouter);

export default router;
