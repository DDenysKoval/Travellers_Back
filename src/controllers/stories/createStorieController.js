import createStorie from '../../services/stories/createStorie.js';
import getEnvVar from '../../utils/getEnvVar.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';
import { saveFileToUploadDir } from '../../utils/saveFileToUploadDir.js';

const createStorieController = async (req, res) => {
  const ownerId = req.user._id;
  const photo = req.file;

  let photoUrl;

  if (photo) {
    photoUrl = await saveFileToUploadDir(photo);
  }

  if (photo) {
    if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }

  const stories = await createStorie({
    ...req.body,
    photo: photoUrl,
    ownerId,
  });
  console.log(stories);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a stories!',
    data: stories,
  });
};

export default createStorieController;
