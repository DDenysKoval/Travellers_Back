// src/controllers/stories/getAllStoriesController.js
import { StoriesCollection } from '../../db/models/stories.js';

const getAllStoriesController = async (req, res) => {
  const stories = await StoriesCollection.find();

  res.status(200).json({
    status: 200,
    message: 'Stories fetched successfully',
    data: stories,
  });
};

export default getAllStoriesController;
