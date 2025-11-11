import { StoriesCollection } from "../../db/models/stories.js";

const deleteStorie = async (storiesId, ownerId) => {
    console.log(storiesId);
    console.log(ownerId);


const story = await StoriesCollection.findById(storiesId);
console.log('Found:', story);
    const stories = await StoriesCollection.findOneAndDelete({
    _id: storiesId,
    ownerId,
    });

  return stories;
};

export default deleteStorie;
