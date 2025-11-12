import { UsersCollection } from '../../db/models/users.js';
import { StoriesCollection } from '../../db/models/stories.js';
import mongoose from 'mongoose';

const addToFavourite = async (userId, storieId) => {
  const story = await StoriesCollection.findById(storieId);

  if (!story) {
    throw new Error('Story not found');
  }

  const user = await UsersCollection.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  const alreadyInFavorites = user.favorites?.some(
    (favId) => favId.toString() === storieId.toString(),
  );

  if (alreadyInFavorites) {
    return { alreadyAdded: true };
  }

  user.favorites.push(new mongoose.Types.ObjectId(storieId));
  await user.save();

  return { alreadyAdded: false, story };
};

export default addToFavourite;
