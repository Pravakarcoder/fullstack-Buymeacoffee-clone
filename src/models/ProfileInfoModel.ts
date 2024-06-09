import { model, Schema, models } from "mongoose";

export type ProfileInfo = {
  email: string;
  username: string;
  displayname: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
};

const profileInfoSchema = new Schema<ProfileInfo>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },

    username: {
      type: String,
      unique: true,
      required: true,
    },
    displayname: {
      type: String,
    },
    bio: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
    coverUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ProfileInfoModel =
  models?.ProfileInfo || model<ProfileInfo>("ProfileInfo", profileInfoSchema);
