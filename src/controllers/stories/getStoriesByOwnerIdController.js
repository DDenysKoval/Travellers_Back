import getStoriesbyOwnerId from '../../services/stories/getStoriesbyOwnerId.js';

const getStoriesByOwnerIdController = async (req, res) => {
  const { page, perPage } = req.query;
  const { ownerId } = req.params;

  const parsedPage = Number(page) > 0 ? Number(page) : 1;
  const parsedPerPage = Number(perPage) > 0 ? Number(perPage) : 10;

  const ownerStories = await getStoriesbyOwnerId(
    parsedPage,
    parsedPerPage,
    ownerId,
  );

  res.status(200).json({
    status: 200,
    message: 'Successfully found owner stories!',
    data: ownerStories,
  });
};

export default getStoriesByOwnerIdController;
