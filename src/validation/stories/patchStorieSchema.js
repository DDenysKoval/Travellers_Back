import Joi from 'joi';

const minCharacters = 3;
const maxCharactersTitle = 50;
const maxCharactersArticle = 500;

export const patchStorieSchema = Joi.object({
  img: Joi.binary().max(2 * 1024 * 1024),
  title: Joi.string().messages({
    'string.base': 'Title should be a string',
    'string.min': `Title should have be least than ${minCharacters}`,
    'string.max': `Title should have be least than ${maxCharactersTitle}`,
  }),
  article: Joi.string().messages({
    'string.base': 'Article should be a string',
    'string.min': `Article should have be least than ${minCharacters}`,
    'string.max': `Article should have be least than ${maxCharactersArticle}`,
  }),
  category: Joi.string().messages({
    'string.base': 'Category should be a string',
  }),
  ownerId: Joi.string().messages({
    'string.base': 'OwnerId should be a string',
  }),
  date: Joi.string().messages({
    'string.base': 'Date should be a string',
  }),
});
