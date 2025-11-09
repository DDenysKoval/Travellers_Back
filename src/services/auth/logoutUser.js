import { SessionsCollection } from '../../db/models/session.js';

const logoutUser = async (sessionId) => {
  await SessionsCollection.deleteOne({ _id: sessionId });
};

export default logoutUser;
