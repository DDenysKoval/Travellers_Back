import { SessionsCollection } from '../../db/models/session.js';
import createSession from '../../services/auth/createSession.js';
import loginUser from '../../services/auth/loginUser.js';
import setupSessionController from './setupSessionController.js';

const loginUserController = async (req, res) => {
  const user = await loginUser(req.body);
  await SessionsCollection.deleteOne({ userId: user._id });

  const newSession = await createSession(user._id);
  setupSessionController(res, newSession);
  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: user,
  });
};

export default loginUserController;
