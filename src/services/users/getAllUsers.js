import { UsersCollection } from '../../db/models/users.js';
import { calculatePaginationData } from '../../utils/calculatePaginationData.js';

const getAllUsers = async ({ page, perPage }) => {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const usersQuery = UsersCollection.find();

  const [totalItems, users] = await Promise.all([
    UsersCollection.find().merge(usersQuery).countDocuments(),
    usersQuery.skip(skip).limit(perPage),
  ]);

  const paginationData = calculatePaginationData(totalItems, page, perPage);

  return {
    users,
    ...paginationData,
  };
};

export default getAllUsers;
