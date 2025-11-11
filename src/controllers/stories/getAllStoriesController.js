import getAllStories from '../../services/stories/getAllStories.js';
import { parseFilterParams } from '../../utils/parseFilterParams.js';

const getAllStoriesController = async (req, res) => {
  const { page, perPage } = parseFilterParams(req.query);
  const filter = parseFilterParams(req.query);
  const stories = await getAllStories({
    page,
    perPage,
    filter,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found stories!',
    data: stories,
  });
};

export default getAllStoriesController;
