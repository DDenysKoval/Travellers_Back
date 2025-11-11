import { model, Schema } from 'mongoose';
import './categories.js';
export const storiesSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    date: {
      type: Date,
      required: true,
    },
    favoriteCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const StoriesCollection = model('stories', storiesSchema);
