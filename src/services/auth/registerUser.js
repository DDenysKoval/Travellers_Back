import bcrypt from 'bcrypt';
import { UsersCollection } from "../../db/models/users.js";
import createHttpError from 'http-errors';

const registerUser = async (payload) => {
    const user = await UsersCollection.findOne({ email: payload.email });
    if (user) { throw createHttpError(409, 'Email in use'); }



    const encryptedPassword = await bcrypt.hash(payload.password, 10);
    return await UsersCollection.create({
        ...payload,
        password: encryptedPassword
    });
};

export default registerUser;
