import Joi from 'joi';
import mongoose from 'mongoose';

const objectIdValidator = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

export const patchStorieSchema = Joi.object({
  img: Joi.any().custom((value, helper) => {
    if (!value) {
      return helper.message('Image is required');
    }
    if (!value.buffer || !Buffer.isBuffer(value.buffer)) {
      return helper.message('Image should be a binary file');
    }
    if (value.size > 10 * 1024 * 1024) {
      return helper.message('Image file size should not exceed 10 MB');
    }
    return value;
  }),
  title: Joi.string().min(3).max(80).messages({
    'string.base': 'Title should be a string',
    'string.min': `Title should have at least {#limit} characters`,
    'string.max': `Title should have no more than {#limit} characters`,
  }),
  article: Joi.string().min(3).max(2500).messages({
    'string.base': 'Article should be a string',
    'string.min': `Article should have at least {#limit} characters`,
    'string.max': `Article should have no more than {#limit} characters`,
  }),
  category: Joi.string()
    .custom(objectIdValidator, 'ObjectId validation')
    .message({
      'string.base': 'Category should be a string',
      'any.invalid': 'Category must be a string',
    }),
  favoriteCount: Joi.string(),
});
