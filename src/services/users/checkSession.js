import { SessionsCollection } from '../../db/models/session.js';
import createHttpError from 'http-errors';
import createSession from '../auth/createSession.js';

export const checkSession = async ({ sessionId, refreshToken }) => {
  const session = await SessionsCollection.findOne({
    _id: sessionId,
    refreshToken,
  });

  if (!session) {
    throw createHttpError(401, 'Session not found');
  }
  await SessionsCollection.deleteOne({ _id: sessionId, refreshToken });

  const newSession = await createSession(session.userId);

  return newSession;
};
