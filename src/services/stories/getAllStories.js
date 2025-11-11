import { StoriesCollection } from "../../db/models/stories.js";
import { calculatePaginationData } from "../../utils/calculatePaginationData.js";

const getAllStories = async ({
  page, perPage, filter = {},
}) => {
    const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const storiesQuery = StoriesCollection.find()
    .populate("category", 'name')
    .populate("ownerId", "name");

    if (filter.category) {
    storiesQuery.where('category').equals(filter.category);
    }

  if (filter.favoriteCount) {
    storiesQuery.sort({ favoriteCount: -1 }).limit(3);
  } else {
    storiesQuery.skip(skip).limit(limit);
  }

    const countQuery = StoriesCollection.find();
  if (filter.category) {
    countQuery.where('category').equals(filter.category);
  }

    const storiesCount = await countQuery.countDocuments();
  const stories = await storiesQuery.exec();

  const paginationData = calculatePaginationData( storiesCount, perPage, page);
 console.log({ page, perPage, storiesCount });

  return {
    stories,
    ...paginationData,
    };
};

export default getAllStories;
