"use server";
import connectionDB from "@/Database/connectionDB.";
import { authOptions } from "@/app/lib/authOptions";
import { ProfileInfoModel } from "@/models/ProfileInfoModel";
import { getServerSession } from "next-auth";

export async function saveProfile(formData: FormData) {
  connectionDB();
  const session = await getServerSession(authOptions);
  if (!session) throw "You need to be logged in";
  const email = session.user?.email;
  const { username, displayname, bio, coverUrl, avatarUrl } =
    Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({ email });
  if (profileInfoDoc) {
    profileInfoDoc.set({ username, displayname, bio, coverUrl, avatarUrl });
    profileInfoDoc.save();
  } else {
    await ProfileInfoModel.create({
      username,
      displayname,
      bio,
      email,
      coverUrl,
      avatarUrl,
    });
  }
  return true;
}
