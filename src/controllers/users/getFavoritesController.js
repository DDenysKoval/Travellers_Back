import { HttpError } from '../../helpers/HttpError.js';
import { UsersCollection } from '../../db/models/users.js';

const getFavoritesController = async (req, res) => {
  const userId = req.user?._id;

  if (!userId) {
    throw HttpError(401, 'Not authorized');
  }

  const user = await UsersCollection.findById(userId).populate(
    'favoriteStories',
  );

  if (!user) {
    throw HttpError(404, 'User not found');
  }

  res.status(200).json({
    favoriteStories: user.favoriteStories,
  });
};

export default getFavoritesController;
