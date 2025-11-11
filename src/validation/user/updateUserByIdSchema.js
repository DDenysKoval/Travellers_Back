import Joi from 'joi';

export const updateUserByIdSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  email: Joi.string().email(),
  avatarUrl: Joi.string().uri(),
  description: Joi.string().max(500),
  articlesAmount: Joi.number().integer().min(0),
}).min(1);
