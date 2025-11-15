import { FIFTEEN_MINUTES, THIRTY_DAYS } from '../../constants/index.js';

const setupSessionController = (res, session) => {
  res.cookie('accessToken', session.accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    expires: new Date(Date.now() + FIFTEEN_MINUTES),
  });
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
};

export default setupSessionController;
