import createHttpError from 'http-errors';
import deleteStorie from '../../services/stories/deleteStorie.js';

const deleteStorieController = async (req, res, next) => {
  const ownerId = req.user._id;
  const { storieId } = req.params;

  const storie = await deleteStorie(storieId, ownerId);

  if (!storie) {
    next(createHttpError(404, "Storie not found"));
    return;
  }
  res.status(204).send();
};

export default deleteStorieController;
