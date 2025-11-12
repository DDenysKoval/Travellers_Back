import { model, Schema } from 'mongoose';

export const categoriesSchema = new Schema(
  { name: { type: String, required: true } },
  { versionKey: false },
);

export const CategoriesCollection = model('categories', categoriesSchema);
