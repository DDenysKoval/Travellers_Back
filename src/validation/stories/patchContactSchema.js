import Joi from 'joi';

const minCharacters = 3;
const maxCharacters = 20;

export const patchContactSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .messages({
      'string.base': 'Username should be a string',
      'string.min': `Username should have at least ${minCharacters} characters`,
      'string.max': `Username should have at most ${maxCharacters} characters`,
    }),
  phoneNumber: Joi.number().messages({
    'string.base': 'Phone number should be a number',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a string',
  }),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Username should be a string',
    'string.valid': `Contact type must be one of types`,
  }),
  photo: Joi.string(),
});
