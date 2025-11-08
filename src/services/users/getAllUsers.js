import { UsersCollection } from '../../db/models/users.js';

const getAllUsers = async ({ page, perPage }) => {
  const skip = page > 0 ? (page - 1) * perPage : 0;
  const contactsQuery = UsersCollection.find();

  const [totalItems, users] = await Promise.all([
    UsersCollection.find().merge(contactsQuery).countDocuments(),
    contactsQuery.skip(skip).limit(perPage),
  ]);

  const totalPages = Math.ceil(totalItems / perPage);

  return {
    users,
    page,
    perPage,
    totalItems,
    totalPages,
  };
};

export default getAllUsers;
