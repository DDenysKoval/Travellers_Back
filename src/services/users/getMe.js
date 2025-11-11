import { UsersCollection } from '../../db/models/users.js';

const getMe = async (userId) => {
  const user = await UsersCollection.findById(userId).select(
    '_id name avatarUrl description'
  );

  return user;
};

export default getMe;
