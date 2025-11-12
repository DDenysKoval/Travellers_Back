import { deleteFromFavourite } from '../../services/users/index.js';

const deleteFromFavouriteController = async (req, res) => {
  const userId = req.user._id;
  const { storieId } = req.params;

  const result = await deleteFromFavourite(userId, storieId);

  if (result.notFound) {
    return res.status(404).json({
      status: 404,
      message: 'Story not found in favourites',
    });
  }

  res.status(200).json({
    status: 200,
    message: 'Story removed from favourites successfully',
  });
};

export default deleteFromFavouriteController;
