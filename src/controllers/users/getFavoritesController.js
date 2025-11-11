import { getFavoritesService } from '../../services/users/getFavoritesService.js';

const getFavoritesController = async (req, res) => {
  const { userId } = req.params;

  const favoriteStories = await getFavoritesService(userId);

  res.status(200).json({ favoriteStories });
};

export default getFavoritesController;
