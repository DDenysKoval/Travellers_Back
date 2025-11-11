import { model, Schema } from 'mongoose';

export const usersSChema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
    },
    articlesAmount: {
      type: Number,
    },
    description: {
      type: String,
    },

    favoriteStories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'stories',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

usersSChema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('users', usersSChema);
