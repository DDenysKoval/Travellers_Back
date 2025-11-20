import { SessionsCollection } from '../../db/models/session.js';
import createHttpError from 'http-errors';

export const checkSession = async ({ sessionId, refreshToken }) => {
  const session = await SessionsCollection.findOne({
    _id: sessionId,
    refreshToken,
  });

  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  return session;
};
