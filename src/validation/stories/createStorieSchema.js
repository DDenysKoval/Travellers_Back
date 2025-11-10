import Joi from 'joi';

const minCharacters = 3;
const maxCharactersTitle = 50;
const maxCharactersArticle = 500;

export const createStorieSchema = Joi.object({
  img: Joi.string().required(),
  title: Joi.string().max(80)
    .required()
    .messages({
      'string.base': 'Title should be a string',
      'any.required': 'Title is required',
      'string.min': `Title should have be least than ${minCharacters}`,
      'string.max': `Title should have be least than ${maxCharactersTitle}`,
    }),
  article: Joi.string().max(2500)
    .required()
    .messages({
      'string.base': 'Article should be a string',
      'any.required': 'Article is required',
      'string.min': `Article should have be least than ${minCharacters}`,
      'string.max': `Article should have be least than ${maxCharactersArticle}`,
    }),
  category: Joi.object({
      $oid: Joi.string().hex().length(24).required(),
  }).required(),
  ownerId: Joi.object({
      $oid: Joi.string().hex().length(24).required(),
  }).required(),
  // category: Joi.string().required().messages({
  //   'string.base': 'Category should be a string',
  //   'any.required': 'Category is required',
  // }),
  // ownerId: Joi.string().messages({
  //   'string.base': 'OwnerId should be a string',
  // }),
  // date: Joi.string().required().messages({
  //   'string.base': 'Date should be a string',
  //   'any.required': 'Date is required',
  // }),
});
