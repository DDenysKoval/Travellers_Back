import { THIRTY_DAYS } from "../../constants/index.js";

const setupSessionController = (res, session) => {
    res.cookie('refreshToken', session.refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + THIRTY_DAYS)
    })
    res.cookie('sessionId', session._id,{
        httpOnly: true,
        expires: new Date(Date.now() + THIRTY_DAYS)
    })
};

export default setupSessionController;
