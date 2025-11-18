import { StoriesCollection } from "../../db/models/stories.js";
import { calculatePaginationData } from "../../utils/calculatePaginationData.js";

const getAllStories = async ({
  page, perPage, filter = {},
}) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const storiesQuery = StoriesCollection.find()
    .populate("category", 'name')
    .populate("ownerId", "name avatarUrl");

  if (filter.category) {
    storiesQuery.where('category').equals(filter.category);
  }

  if (filter.favoriteCount) {
    storiesQuery.sort({ favoriteCount: -1, _id: 1 });
  }

  const storiesCount = await StoriesCollection.find()
    .merge(storiesQuery)
    .countDocuments();

  const stories = await storiesQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData( storiesCount, page, perPage);

  return {
    stories,
    ...paginationData,
    };
};

export default getAllStories;
