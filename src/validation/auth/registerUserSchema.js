import Joi from 'joi';

const minCharacters = 3;
const maxCharacters = 30;

const registerUserSchema = Joi.object({
  name: Joi.string()
    .min(minCharacters)
    .max(maxCharacters)
    .required()
    .messages({
      'string.base': 'Name should be a string',
      'string.min': `Name should have at least ${minCharacters} characters`,
      'string.max': `Name should have at most ${maxCharacters} characters`,
      'any.required': 'Name is required',
    }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
   avatarUrl: Joi.string().uri().optional(),
  articlesAmount: Joi.number().min(0).optional(),
  description: Joi.string().max(500).optional(),
});
export default  registerUserSchema