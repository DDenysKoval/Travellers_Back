import { model, Schema } from 'mongoose';

export const storiesSchema = new Schema(
  {},
  {
    timestamps: true,
  },
);

export const StoriesCollection = model('stories', storiesSchema);
