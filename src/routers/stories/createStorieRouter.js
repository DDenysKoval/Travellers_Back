// import { Router } from 'express';
// import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
// import { validateBody } from '../../middlewares/validateBody.js';

// const router = Router();

// router.post('/', validateBody(), ctrlWrapper());

// export default router;
import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import createStorieController from '../../controllers/stories/createStorieController.js';
// якщо потім додадуть схему валідації — тоді підключимо validateBody

const router = Router();

router.post('/', ctrlWrapper(createStorieController));

export default router;
