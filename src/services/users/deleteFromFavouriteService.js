import createHttpError from 'http-errors';
import { UsersCollection } from '../../db/models/users.js';

export const deleteFromFavouriteService = async (userId, storyId) => {
  if (!storyId) {
    throw new createHttpError.BadRequest('Story id is required');
  }

  const updatedUser = await UsersCollection.findByIdAndUpdate(
    userId,
    { $pull: { favoriteStories: storyId } },
    { new: true },
  ).populate('favoriteStories');

  if (!updatedUser) {
    throw new createHttpError.NotFound('User not found');
  }

  return updatedUser.favoriteStories;
};
