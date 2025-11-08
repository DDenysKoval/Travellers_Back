const logoutUser = async (sessionId) => {
    await SessionController.deleteOne({_id:sessionId})
};

export default logoutUser;
