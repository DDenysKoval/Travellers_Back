import { THIRTY_DAYS } from "../../constants/index.js";
import { SessionsCollection } from "../../db/models/session.js";
import loginUser from "../../services/auth/loginUser.js";

const loginUserController = async (req, res) => {
    const user = await loginUser(req.body);
    await SessionsCollection.deleteOne({ userId: user._id })

    const newSession = await createSession(user._id);
   setupSessionController(res, newSession)
    res.json({
        status: 200,
        message: 'Successfully logged in an user!',
        data: user,
    })
};

export default loginUserController;
