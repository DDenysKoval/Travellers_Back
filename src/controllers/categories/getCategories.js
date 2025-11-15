import { CategoriesCollection } from '../../db/models/categories.js';

export const getCategoriesController = async (req, res, next) => {
  try {
    const categories = await CategoriesCollection.find();

    res.status(200).json({
      status: 200,
      message: 'Categories were fetched successfully',
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};
