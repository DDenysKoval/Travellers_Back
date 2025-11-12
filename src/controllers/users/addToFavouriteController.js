import addToFavourite from '../../services/users/addToFavourite.js';

const addToFavouriteController = async (req, res) => {
  const { storieId } = req.params;
  const userId = req.user._id;

  const result = await addToFavourite(userId, storieId);

  if (result.alreadyAdded) {
    return res.status(200).json({
      status: 200,
      message: 'Story already in favourites',
    });
  }

  res.status(201).json({
    status: 201,
    message: 'Story added to favourites successfully',
    data: result.story,
  });
};
export default addToFavouriteController;
