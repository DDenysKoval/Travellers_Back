import { StoriesCollection } from '../../db/models/stories.js';

const getMyStories = async (userId) => {
    const myStories = await StoriesCollection.find({ ownerId: userId }).populate('category');;
    return myStories;
};
export default getMyStories;
    