import createHttpError from 'http-errors';
import { UsersCollection } from '../../db/models/users.js';

export const getFavoritesService = async (userId) => {
  if (!userId) {
    throw new createHttpError.BadRequest('User id is required');
  }

  const user = await UsersCollection.findById(userId).populate(
    'favoriteStories',
  );

  if (!user) {
    throw new createHttpError.NotFound('User not found');
  }

  return user.favoriteStories;
};
