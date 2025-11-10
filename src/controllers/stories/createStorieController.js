import createStorie from "../../services/stories/createStorie.js";
// import { saveFileToCloudinary } from "../../utils/saveFileToCloudinary.js";
import { saveFileToUploadDir } from "../../utils/saveFileToUploadDir.js";

const createContactController = async (req, res) => {
    // const userId = req.user._id;
  const photo = req.file;

  let photoUrl;

  if (photo) {
    photoUrl = await saveFileToUploadDir(photo);
  }

  // if (photo) {
  //   if (getEnvVar('ENABLE_CLOUDINARY') === 'true'){
  //     photoUrl = await saveFIleToCloudinary(photo);
  //   } else {
  //     photoUrl = await saveFileToUploadDir(photo);
  //   }
  // }

  const stories = await createStorie({
    ...req.body,
    photo: photoUrl,
  });
  console.log(stories);

  res.status(201).json({
    status: 201,
    message: "Successfully created a stories!",
    data: stories,
  });
};

export default createContactController;
