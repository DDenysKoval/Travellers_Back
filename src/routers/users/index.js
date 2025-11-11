import { Router } from 'express';
import addToFavouriteRouter from './addToFavouriteRouter.js';
// import authenticateUserRouter from './authenticateUserRouter.js';
import deleteFromFavouriteRouter from './deleteFromFavourite.js';
import getAllUserRouter from './getAllUsersRouter.js';
import getMeRouter from './getMeRouter.js';
import getUserByIdRouter from './getUserByIdRouter.js';
import updateAvatarRouter from './updateAvatarRouter.js';
import updateUserInfoRouter from './updateUserInfoRouter.js';
import getFavoritesRouter from './getFavoritesRouter.js';

const usersRouter = Router();

usersRouter.use(updateUserInfoRouter);
usersRouter.use(addToFavouriteRouter);
// usersRouter.use(authenticateUserRouter);
usersRouter.use(getFavoritesRouter);
usersRouter.use(deleteFromFavouriteRouter);
usersRouter.use(getFavoritesRouter);
usersRouter.use(getAllUserRouter);
usersRouter.use(getMeRouter);
usersRouter.use(getUserByIdRouter);
usersRouter.use(updateAvatarRouter);


export default usersRouter;
