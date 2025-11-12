import { UsersCollection } from '../../db/models/users.js';

const updateAvatar = async (userId, avatarUrl) => {
  return UsersCollection
    .findByIdAndUpdate(
      userId,
      { avatarUrl },
      { new: true, runValidators: true },
    )
    .select('-password');
};

export default updateAvatar;
