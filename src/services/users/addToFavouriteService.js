import createHttpError from 'http-errors';
import { UsersCollection } from '../../db/models/users.js';
import { StoriesCollection } from '../../db/models/stories.js';

export const addToFavouriteService = async (userId, storyId) => {
  if (!storyId) {
    throw new createHttpError.BadRequest('Story id is required');
  }

  const story = await StoriesCollection.findById(storyId);
  if (!story) {
    throw new createHttpError.NotFound('Story not found');
  }

  const updatedUser = await UsersCollection.findByIdAndUpdate(
    userId,
    { $addToSet: { favoriteStories: storyId } },
    { new: true },
  ).populate('favoriteStories');

  if (!updatedUser) {
    throw new createHttpError.NotFound('User not found');
  }

  return updatedUser.favoriteStories;
};
