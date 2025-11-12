import { Router } from 'express';
import addToFavouriteRouter from './addToFavouriteRouter.js';
// import authenticateUserRouter from './authenticateUserRouter.js';
import deleteFromFavouriteRouter from './deleteFromFavourite.js';
import getAllUserRouter from './getAllUsersRouter.js';
import getMeRouter from './getMeRouter.js';
import getUserByIdRouter from './getUserByIdRouter.js';
import updateAvatarRouter from './updateAvatarRouter.js';
import updateUserInfoRouter from './updateUserInfoRouter.js';

const usersRouter = Router();

usersRouter.use(updateAvatarRouter);
usersRouter.use(updateUserInfoRouter);
usersRouter.use(addToFavouriteRouter);
// usersRouter.use(authenticateUserRouter);
usersRouter.use(deleteFromFavouriteRouter);
usersRouter.use(getAllUserRouter);
usersRouter.use(getMeRouter);
usersRouter.use(getUserByIdRouter);


export default usersRouter;
