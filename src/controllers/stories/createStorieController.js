import createStorie from '../../services/stories/createStorie.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';

const createStorieController = async (req, res) => {
  const ownerId = req.user._id;
  const photo = req.file;
  console.log(photo);

  let photoUrl;

  photoUrl = await saveFileToCloudinary(photo);

  const stories = await createStorie({
    ...req.body,
    img: photoUrl,
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
