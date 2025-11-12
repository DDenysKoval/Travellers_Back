import { StoriesCollection } from "../../db/models/stories.js";

const createStorie = async (payload) => {
    const stories = await StoriesCollection.create(payload);
  return stories;
};

export default createStorie;
