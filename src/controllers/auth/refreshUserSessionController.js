import { refreshUsersSession } from "../../services/auth/refreshUserSession.js";

const refreshUserSessionController = async (req, res) => {
    const session = await refreshUsersSession({
        sessionId: req.cookies.sessionId,
        refreshToken: req.cookies.refreshToken,
    })

    setupSession(res, session);
    res.json({
        status: 200,
        message: 'Successfully refreshed a session!',
        data: {
            accessToken: session.accessToken
        }
    })
};

export default refreshUserSessionController;
