import createHttpError from 'http-errors';
import updateAvatar from '../../services/users/updateAvatar.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';

const updateAvatarController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const file = req.file;

    if (!file) {
      return next(createHttpError(400, 'Avatar file is required (field name "avatar")'));
    }
    if (String(req.user._id) !== String(userId)) {
      return next(new createHttpError.Forbidden('You can update only your own avatar'));
    }

    const avatarUrl = await saveFileToCloudinary(file);

    const updated = await updateAvatar(userId, avatarUrl);
    if (!updated) {
      return next(new createHttpError.NotFound('User not found'));
    }

    return res.status(200).json({
      status: 200,
      message: 'Avatar updated successfully',
      data: updated,
    });
  } catch (err) {
    return next(err);
  }
};

export default updateAvatarController;
