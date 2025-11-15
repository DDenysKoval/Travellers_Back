import { Router } from 'express';
import storiesRouter from './stories/index.js';
import authRouter from './auth/index.js';
import usersRouter from './users/index.js';
import getCategoriesRouter from '../routers/categories/getCategoriesRouter.js';
const router = Router();

router.use('/stories', storiesRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/categories', getCategoriesRouter);

export default router;
