import { UsersCollection } from "../../db/models/users.js";

const updateUserInfo = (userId, data = {}) => {
  delete data.password;
  return UsersCollection
    .findByIdAndUpdate(userId, data, { new: true, runValidators: true })
    .select('-password');
};
export default updateUserInfo;
