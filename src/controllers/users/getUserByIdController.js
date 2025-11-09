import createHttpError from 'http-errors';
import getUserById from '../../services/users/getUserById.js';

const getUserByIdController = async (req, res) => {
  const { userId } = req.params;
  const user = await getUserById(userId);

  if (!user) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'User found successfully',
    data: user,
  });
};

export default getUserByIdController;
