import { UsersCollection } from '../../db/models/users.js';

const getUserById = async (userId) => {
  const user = await UsersCollection.findOne({
    _id: userId,
  });

  return user;
};

export default getUserById;
