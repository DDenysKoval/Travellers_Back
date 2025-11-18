import { StoriesCollection } from '../../db/models/stories.js';

const patchStorie = async (storieId, payload) => {
  // console.log(storieId, ownerId,payload);

  const rawResult = await StoriesCollection.findOneAndUpdate(
    {
      _id: storieId,
      // , ownerId
    },
    payload,
    {
      new: true,
      runValidators: true,
      context: 'query',
    },
  );
  console.log(rawResult);

  return rawResult;
};

export default patchStorie;
