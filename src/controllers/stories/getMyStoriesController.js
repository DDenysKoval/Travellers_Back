import getMyStories from '../../services/stories/getMyStories.js';

const getMyStoriesController = async (req, res) => {
  const userId = req.user._id;
  const stories = await getMyStories(userId);

  res.status(200).json({
    status: 200,
    message: 'My stories fetched successfully',
    data: stories,
  });
};

export default getMyStoriesController;
