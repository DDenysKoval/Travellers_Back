import { CategoriesCollection } from '../db/models/categories.js';

const parseCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory = (category) => CategoriesCollection.findById(category);

  if (isCategory(category)) return category;
};

const parseFavoriteCount = (favoriteCount) => {
  const isString = typeof favoriteCount === 'string';
  if (!isString) return;

  const isFavoriteCount = (favoriteCount) =>
    ['popular'].includes(favoriteCount);

  if (isFavoriteCount(favoriteCount)) return favoriteCount;
};

export const parseFilterParams = (query) => {
  const { category, type, page, perPage } = query;

  const parsedCategory = parseCategory(category);
  const parsedFavoriteCount = parseFavoriteCount(type);
  const parsedPage = Number(page) > 0 ? Number(page) : 1;
  const parsedPerPage = Number(perPage) > 0 ? Number(perPage) : 10;

  return {
    page: parsedPage,
    perPage: parsedPerPage,
    category: parsedCategory,
    favoriteCount: parsedFavoriteCount,
  };
};
