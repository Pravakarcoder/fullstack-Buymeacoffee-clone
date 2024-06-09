import { uploadToCloudinary } from "@/actions/uploadActions";
import { ChangeEvent } from "react";
import { PiUploadSimpleLight } from "react-icons/pi";

export const UploadButton = ({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) => {
  //Upload the file on the cloudinary
  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];

      const formData = new FormData();
      formData.set("file", file);
      const result = await uploadToCloudinary(formData);
      onUploadComplete(result.url as string);
    }
  }

  return (
    <>
      <label className="bg-gray-300 shadow-sm shadow-black/30 p-2 cursor-pointer rounded-lg flex gap-1 items-center">
        <PiUploadSimpleLight size={20} />

        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          onChange={(ev) => upload(ev)}
        />
      </label>
    </>
  );
};
