import { checkSession } from '../../services/users/checkSession.js';
import setupSessionController from './setupSessionController.js';

const checkSessionController = async (req, res) => {
  const session = await checkSession({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });
  // console.log(session);
  setupSessionController(res, session);
  res.json({
    status: 200,
    message: 'Success',
  });
};

export default checkSessionController;
