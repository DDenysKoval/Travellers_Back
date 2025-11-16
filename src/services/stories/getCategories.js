import { CategoriesCollection } from '../../db/models/categories.js';

const getCategories = async () => {
  const categories = await CategoriesCollection.find();

  return categories;
};

export default getCategories;
