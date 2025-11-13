import { Router } from 'express';
import { getCategoriesController } from '../../controllers/categories/getCategories.js';

const router = Router();

router.get('/', getCategoriesController);

export default router;
