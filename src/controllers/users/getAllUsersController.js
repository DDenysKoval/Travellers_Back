import getAllUsers from '../../services/users/getAllUsers.js';
import { parsePaginationParams } from '../../utils/parsePaginationParams.js';

const getAllUsersController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const result = await getAllUsers({ page, perPage });

  res.json({
    status: 200,
    message: 'Users found successfully',
    data: result,
  });
};

export default getAllUsersController;
