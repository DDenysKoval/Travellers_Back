// import { StoriesCollection } from '../../db/models/stories.js';

// const getStorieById = async (storyId) => {
//   const story = await StoriesCollection.findOne({
//     _id: storyId,
//   });

//   return story;
// };

// export default getStorieById;

import { StoriesCollection } from '../../db/models/stories.js';
import { UsersCollection } from '../../db/models/users.js';
import { CategoriesCollection } from '../../db/models/categories.js';

const getStorieById = async (storyId) => {
  const story = await StoriesCollection.findById(storyId);
  if (!story) return null;

  let author = null;
  if (story.ownerId) {
    author = await UsersCollection.findById(story.ownerId);
  }

  let category = null;
  if (story.category) {
    category = await CategoriesCollection.findById(story.category);
  }

  return {
    ...story.toObject(),
    author: author || null,
    category: category || null,
  };
};

export default getStorieById;
