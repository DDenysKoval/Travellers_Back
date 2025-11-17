import { FIFTEEN_MINUTES, THIRTY_DAYS } from '../../constants/index.js';

const setupSessionController = (res, session) => {
  const isProduction = process.env.NODE_ENV === 'production';

  const accessTokenOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + FIFTEEN_MINUTES),
    ...(isProduction ? { sameSite: 'none', secure: true } : {}),
  };

  const refreshTokenOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + THIRTY_DAYS),
    ...(isProduction ? { sameSite: 'none', secure: true } : {}),
  };

  const sessionIdOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + THIRTY_DAYS),
    ...(isProduction ? { sameSite: 'none', secure: true } : {}),
  };

  res.cookie('accessToken', session.accessToken, accessTokenOptions);
  res.cookie('refreshToken', session.refreshToken, refreshTokenOptions);
  res.cookie('sessionId', session._id, sessionIdOptions);
};

export default setupSessionController;
