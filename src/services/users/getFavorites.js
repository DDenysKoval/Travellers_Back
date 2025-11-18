import { UsersCollection } from '../../db/models/users.js';
import { StoriesCollection } from '../../db/models/stories.js';

const getFavorites = async (userId) => {
  const user = await UsersCollection.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  if (!Array.isArray(user.favorites) || user.favorites.length === 0) {
    return [];
  }

  const stories = await StoriesCollection.find({
    _id: { $in: user.favorites },
  }).populate(
    'ownerId',
    '_id name email avatarUrl articlesAmount description createdAt updatedAt favorites',
  );

  return stories;
};

export default getFavorites;
