import { Router } from 'express';

// import authenticateStorieRouter from './authenticateStorieRouter.js';
import createStorieRouter from './createStorieRouter.js';
import deleteStorieRouter from './deleteStorieRouter.js';
import getAllStoriesRouter from './getAllStoriesRouter.js';
import getStoriesByIdRouter from './getStorieByIdRouter.js';
import patchStorieRouter from './patchStorieRouter.js';

const storiesRouter = Router();

// storiesRouter.use(authenticateStorieRouter);
storiesRouter.use(createStorieRouter);
storiesRouter.use(deleteStorieRouter);
storiesRouter.use(getAllStoriesRouter);
storiesRouter.use(getStoriesByIdRouter);
storiesRouter.use(patchStorieRouter);

export default storiesRouter;
