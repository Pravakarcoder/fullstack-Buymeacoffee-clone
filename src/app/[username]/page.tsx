"use server";

import connectionDB from "@/Database/connectionDB.";
import { ProfileInfo, ProfileInfoModel } from "@/models/ProfileInfoModel";
import Image from "next/image";
import { CiCoffeeCup } from "react-icons/ci";

type Props = {
  params: {
    username: string;
  };
};

export default async function SingleProfilePage({ params }: Props) {
  const username = params.username;
  connectionDB();
  const profileInfoDoc: ProfileInfo | null = await ProfileInfoModel.findOne({
    username,
  });

  if (!profileInfoDoc) {
    return <div>404 - profile not found</div>;
  }
  return (
    <div>
      <div className="w-full h-48">
        <Image
          src={profileInfoDoc.coverUrl}
          width={2048}
          height={2048}
          alt="cover image"
          className="object-cover object-center h-48"
        />
        <div className="max-w-[40rem] mx-auto px-2 relative -mt-16">
          <div className="flex items-end gap-4">
            <div className="size-36 overflow-hidden  border-2 rounded-xl border-white">
              <Image
                src={profileInfoDoc.avatarUrl}
                width={256}
                height={256}
                alt="avatar"
                className="size-36 object-cover object-center"
              />
            </div>
            <div className="mb-1">
              <h1 className="text-2xl font-semibold ">
                {profileInfoDoc.displayname}
              </h1>
              <h2 className="flex gap-1 items-center bg-gray-300 rounded-lg p-2 w-fit">
                <CiCoffeeCup size={20} />
                <span>/</span>
                <span>{profileInfoDoc.username}</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium">About {profileInfoDoc.username}</h3>
              {profileInfoDoc.bio}
              <hr className="my-4 " />
              <h3 className="font-medium">Recent supporters</h3>
              <p>no recent donations</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              Form for new donate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
