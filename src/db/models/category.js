import { model, Schema } from 'mongoose';

const categorySchema = new Schema(
  {
    name: {
      type: String,
    },
  },
);

export const CategoryCollection = model('categories', categorySchema);
