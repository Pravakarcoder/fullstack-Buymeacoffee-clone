"use server";
import connectionDB from "@/Database/connectionDB.";
import { authOptions } from "@/app/lib/authOptions";
import ProfileInfoForm from "@/components/ProfileInfoForm";
import { ProfileInfoModel } from "@/models/ProfileInfoModel";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return "Not logged in";
  }

  const email = session.user?.email;

  await mongoose.connect(process.env.MONGODB_URI as string);

  const profileInfoDoc = await ProfileInfoModel.findOne({ email });

  return (
    <div className="max-w-2xl mx-auto px-6">
      <ProfileInfoForm profileInfo={profileInfoDoc} />
      <div>donations lists... </div>
    </div>
  );
}
