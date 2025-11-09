import createHttpError from "http-errors";
import bcrypt from 'bcrypt';
import { UsersCollection } from "../../db/models/users.js";
import { SessionsCollection } from "../../db/models/session.js";
import { FIFTEEN_MINUTES, THIRTY_DAYS } from "../../constants/index.js";

const loginUser = async (payload) => {
    const user = await UsersCollection.findOne({ email: payload.email });
    if (!user) { throw createHttpError(401, 'User not found!'); }
    const isEqual = await bcrypt.compare(payload.password, user.password)
    if(!isEqual){throw createHttpError(401, 'Unauthorized')}
    return user;
};

export default loginUser;
