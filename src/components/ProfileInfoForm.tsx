"use client";
import { saveProfile } from "@/actions/ProfileInfoActions";
import { UploadButton } from "./UploadButton";
import { useState } from "react";
import { ProfileInfo } from "@/models/ProfileInfoModel";
import Image from "next/image";
import toast from "react-hot-toast";

type Props = {
  profileInfo: ProfileInfo | null;
};

export default function ProfileInfoForm({ profileInfo }: Props) {
  const [coverUrl, setCoverUrl] = useState(profileInfo?.coverUrl);
  const [avatarUrl, setAvatarUrl] = useState(profileInfo?.avatarUrl);
  async function handleFormAction(formData: FormData) {
    // const savePromise = new Promise<void>(async (resolve, reject) => {
    await saveProfile(formData);
    toast.success("Profile saved");
    // resolve();
    console.log(saveProfile);
    // });
    // toast.promise(savePromise, {
    //   loading: "Saving...",
    //   success: <b>Profile saved!</b>,
    //   error: <b>Could not save.</b>,
    // });
  }
  return (
    <form action={handleFormAction}>
      <div className="relative border bg-gray-100 rounded-lg h-48 mb-4">
        <Image
          src={coverUrl || ""}
          alt="cover image"
          width={1024}
          height={1024}
          priority
          className="w-full h-48 object-cover object-center rounded-lg"
        />
        <div className="absolute left-2 -bottom-6 z-10 border bg-gray-100 size-24 rounded-lg">
          <div className="rounded-lg size-24 overflow-hidden">
            <Image
              src={avatarUrl || ""}
              alt="avatar"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2">
            {" "}
            <UploadButton onUploadComplete={setAvatarUrl} />
          </div>
          <input type="hidden" name="avatarUrl" value={avatarUrl} />
        </div>

        <div className="absolute right-2 bottom-2">
          <UploadButton onUploadComplete={setCoverUrl} />
          <input type="hidden" name="coverUrl" value={coverUrl} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="">
          <label className="input-label" htmlFor="usernameIn">
            UserName
          </label>

          <input
            name="username"
            id="usernameIn"
            type="text"
            placeholder={profileInfo?.username || "username"}
          />
        </div>
        <div>
          <label className="input-label" htmlFor="displayIn">
            Display Name
          </label>
          <input
            name="displayname"
            id="displayIn"
            type="text"
            placeholder={profileInfo?.displayname || "displayname"}
          />
        </div>
      </div>
      <div>
        <label className="input-label" htmlFor="bioIn">
          Bio
        </label>
        <textarea
          name="bio"
          id="bioIn"
          placeholder={profileInfo?.bio || "bio"}
        />
      </div>
      <div>
        <button className="bg-yellow-300 px-4 py-2 mt-4  hover:bg-yellow-400 rounded-lg">
          Save profile
        </button>
      </div>
    </form>
  );
}
