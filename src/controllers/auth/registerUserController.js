import createSession from "../../services/auth/createSession.js";
import registerUser from "../../services/auth/registerUser.js";
import setupSessionController from "./setupSessionController.js";

const registerUserController = async (req, res) => {
    const user = await registerUser(req.body);
    const newSession = await createSession(user._id);
    setupSessionController(res, newSession)
    res.status(201).json({
        status: 201,
        message: 'Successfully registered a user!',
        data: user,
    })
};

export default registerUserController;
