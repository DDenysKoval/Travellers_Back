import getMe from '../../services/users/getMe.js';

const getMeController = async (req, res) => {
  const userId = req.user._id; 
  const user = await getMe(userId);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.status(200).json({
    status: 200,
    message: 'User data retrieved successfully',
    data: user,
  });
};
export default getMeController;
