import { User } from '../../models/user.js';
import { Story } from '../../models/story.js';
import { HttpError } from '../../helpers/HttpError.js';

export const addToFavorite = async (req, res) => {
  const userId = req.user._id;
  const { storyId } = req.params;

  const story = await Story.findById(storyId);
  if (!story) {
    throw HttpError(404, 'Story not found');
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { $addToSet: { favoriteStories: storyId } },
    { new: true },
  ).populate('favoriteStories');

  res.status(200).json({
    favoriteStories: user.favoriteStories,
  });
};
