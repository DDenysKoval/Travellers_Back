import { model, Schema } from 'mongoose';
import './category.js';
import "../models/category.js";
import "../models/users.js";

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
      default: Date.now,
    },
    favoriteCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    versionKey: false,
  },

);

export const StoriesCollection = model('stories', storiesSchema);
