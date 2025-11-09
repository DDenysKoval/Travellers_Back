import { refreshUsersSession } from "../../services/auth/refreshUserSession.js";
import setupSessionController from "./setupSessionController.js";

const refreshUserSessionController = async (req, res) => {
    const session = await refreshUsersSession({
        sessionId: req.cookies.sessionId,
        refreshToken: req.cookies.refreshToken,
    })

    setupSessionController(res, session);
    res.json({
        status: 200,
        message: 'Successfully refreshed a session!',
    })
};

export default refreshUserSessionController;
