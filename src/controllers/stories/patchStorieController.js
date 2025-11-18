import createHttpError from 'http-errors';
import patchStorie from '../../services/stories/patchStorie.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';

const patchStoriesController = async (req, res, next) => {
  const { storieId } = req.params;
  const photo = req.file;
  console.log(storieId);

  const photoUrl = await saveFileToCloudinary(photo);

  const result = await patchStorie(storieId, {
    ...req.body,
    img: photoUrl,
  });

  console.log(result);

  if (result === null) {
    next(createHttpError(404, 'Storie not found'));
    return;
  }

  res.json({
    status: 200,
    message: 'Successfully patched a storie!',
    data: result,
  });
};

export default patchStoriesController;
