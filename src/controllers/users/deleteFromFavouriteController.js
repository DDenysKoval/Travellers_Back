import { deleteFromFavouriteService } from '../../services/users/deleteFromFavouriteService.js';

const deleteFromFavouriteController = async (req, res) => {
  const { userId } = req.params;
  const { storyId } = req.body;

  const favoriteStories = await deleteFromFavouriteService(userId, storyId);

  res.status(200).json({ favoriteStories });
};

export default deleteFromFavouriteController;
