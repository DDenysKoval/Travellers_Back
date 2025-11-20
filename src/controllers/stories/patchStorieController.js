import createHttpError from 'http-errors';
import patchStorie from '../../services/stories/patchStorie.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';

const patchStoriesController = async (req, res, next) => {
  try {
    const { storieId } = req.params;
    const photo = req.file;
    let photoUrl;

    if (photo) {
      photoUrl = await saveFileToCloudinary(photo);
    }

    const result = await patchStorie(storieId, {
      ...req.body,
      ...(photoUrl && { img: photoUrl }),
    });

    if (!result) {
      return next(createHttpError(404, 'Storie not found'));
    }

    res.json({
      status: 200,
      message: 'Successfully patched a storie!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default patchStoriesController;
