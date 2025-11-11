import createHttpError from "http-errors";
import updateUserInfo from "../../services/users/updateUserInfo.js";

export async function updateUserInfoController(req, res, next) {
  try {
    const userId = req.user?._id || req.user?.id;
    if (!userId) return next(new createHttpError.Unauthorized('Unauthorized'));

    const result = await updateUserInfo(userId, req.body);

    if (result?._conflict === 'EMAIL_IN_USE') {
      return next(new createHttpError.Conflict('Email already in use'));
    }
    if (result === null) {
      return next(new createHttpError.NotFound('User not found'));
    }

    return res.status(200).json({
      status: 200,
      message: 'User updated successfully',
      data: result,
    });
  } catch (e) {
    next(e);
  }
}

export default updateUserInfoController;
