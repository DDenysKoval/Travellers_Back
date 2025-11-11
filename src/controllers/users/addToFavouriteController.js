import { addToFavouriteService } from '../../services/users/addToFavouriteService.js';

const addToFavouriteController = async (req, res) => {
  const { userId } = req.params;
  const { storyId } = req.body;

  const favoriteStories = await addToFavouriteService(userId, storyId);

  res.status(200).json({ favoriteStories });
};

export default addToFavouriteController;
