import { StoriesCollection } from '../../db/models/stories.js';

const getStorieById = async (storyId) => {
  const story = await StoriesCollection.findOne({
    _id: storyId,
  });
  return story;
};

export default getStorieById;
