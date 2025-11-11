const getMeController = async (req, res, next) => {
  try {
    return res.json({ user: req.user });
  } catch (err) {
    return next(err);
  }
};

export default getMeController;
