import { Router } from 'express';

import loginRouter from './loginRouter.js';
import logoutRouter from './logoutRouter.js';
import refreshRouter from './refreshRouter.js';
import registerRouter from './registerRouter.js';
import resetPwdRouter from './resetPwdRouter.js';
import sendResetEmailRouter from './sendResetEmailRouter.js';
import checkSessionRouter from './checkSessionRouter.js';

const authRouter = Router();

authRouter.use(loginRouter);
authRouter.use(logoutRouter);
authRouter.use(refreshRouter);
authRouter.use(registerRouter);
authRouter.use(resetPwdRouter);
authRouter.use(sendResetEmailRouter);
authRouter.use(checkSessionRouter);

export default authRouter;
