import getCategories from '../../services/stories/getCategories.js';

const getCategoriesController = async (req, res, next) => {
  const categories = await getCategories();

  res.status(200).json({
    status: 200,
    message: 'Categories were fetched successfully',
    data: categories,
  });
};

export default getCategoriesController;
