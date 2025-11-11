import createHttpError from 'http-errors';
import patchStorie from "../../services/stories/patchStorie.js";
import { saveFileToUploadDir } from "../../utils/saveFileToUploadDir.js";
import getEnvVar from '../../utils/getEnvVar.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';

const patchStoriesController = async (req, res, next) => {
    const ownerId = req.user._id;
  const { storieId } = req.params;
  const photo = req.file;
console.log(storieId);

  let photoUrl;

  if (photo) {
    if (getEnvVar('ENABLE_CLOUDINARY') === 'true'){
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }

  const result = await patchStorie(storieId, ownerId, {
    ...req.body,
    photo: photoUrl,
  });

  console.log(result);

  if (result === null) {
    next(createHttpError(404, "Storie not found"));
    return;
  }

  res.json({
    status: 200,
    message: "Successfully patched a storie!",
    data: result,
  });
};

export default patchStoriesController;
