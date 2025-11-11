import createHttpError from 'http-errors';
import getStorieById from '../../services/stories/getStorieById.js';

const getStorieByIdController = async (req, res) => {
  const { storieId } = req.params;
  const story = await getStorieById(storieId);

  if (!story) {
    throw new createHttpError.NotFound('Story not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Story found successfully',
    data: story,
  });
};

export default getStorieByIdController;
