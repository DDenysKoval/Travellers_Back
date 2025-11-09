import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const id = Object.values(req.params)[0];

  if (!isValidObjectId(id)) {
    throw createHttpError(400, 'incorrect ID');
  }
  next();
};
