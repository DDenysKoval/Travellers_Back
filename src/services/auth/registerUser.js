import bcrypt from 'bcrypt';
import { UsersCollection } from '../../db/models/users.js';
import createHttpError from 'http-errors';

const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const encryptedPassword = await bcrypt.hash(payload.password, 10);
  return await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
    description: `Hi my name is ${payload.name}. I will share my storie soon`,
    avatarUrl:
      'https://res.cloudinary.com/dsr7znzlu/image/upload/v1763546472/Avatar_Default_aq5ti4.png',
    articlesAmount: 0,
  });
};

export default registerUser;
