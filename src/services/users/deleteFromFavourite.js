import { UsersCollection } from '../../db/models/users.js';

const deleteFromFavourite = async (userId, storieId) => {
  const user = await UsersCollection.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  if (!Array.isArray(user.favorites)) {
    user.favorites = [];
  }

  const index = user.favorites.findIndex(
    (favId) => favId.toString() === storieId.toString(),
  );

  if (index === -1) {
    return { notFound: true };
  }

  user.favorites.splice(index, 1);
  await user.save();

  return { removed: true };
};

export default deleteFromFavourite;
