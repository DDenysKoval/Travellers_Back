import { getFavorites } from '../../services/users/index.js';

const getFavoritesController = async (req, res) => {
  const userId = req.user._id;

  const stories = await getFavorites(userId);

  res.status(200).json({
    status: 200,
    message: 'Favourites fetched successfully',
    data: stories,
  });
};

export default getFavoritesController;
