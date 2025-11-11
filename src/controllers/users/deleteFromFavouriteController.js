import { User } from '../../models/user.js';
import { HttpError } from '../../helpers/HttpError.js';

export const deleteFromFavorite = async (req, res) => {
  const userId = req.user._id;
  const { storyId } = req.params;

  const user = await User.findById(userId);
  if (!user) {
    throw HttpError(401, 'Not authorized');
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $pull: { favoriteStories: storyId } },
    { new: true },
  ).populate('favoriteStories');

  res.status(200).json({
    favoriteStories: updatedUser.favoriteStories,
  });
};
