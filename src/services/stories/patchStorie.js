import { StoriesCollection } from "../../db/models/stories.js";

const patchStorie = async (storieId, ownerId, payload) => {
    console.log(storieId);

    const rawResult = await StoriesCollection.findOneAndUpdate(
    { _id: storieId, ownerId},
    payload,
    {
      new: true,
      runValidators: true,
      context: "query"
    },
  );
  return rawResult;
};

export default patchStorie;
