import { StoriesCollection } from '../../db/models/stories.js';
import { UsersCollection } from '../../db/models/users.js';
import { calculatePaginationData } from '../../utils/calculatePaginationData.js';

const getStoriesbyOwnerId = async (page, perPage, ownerId) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const owner = await UsersCollection.findById(ownerId);

  const storiesCount = await StoriesCollection.countDocuments({
    ownerId: ownerId,
  });

  const stories = await StoriesCollection.find({ ownerId: ownerId })
    .populate('ownerId', 'name avatarUrl')
    .skip(skip)
    .limit(limit)
    .exec();

  const paginationData = calculatePaginationData(storiesCount, page, perPage);

  return {
    owner,
    stories,
    ...paginationData,
  };
};

export default getStoriesbyOwnerId;
