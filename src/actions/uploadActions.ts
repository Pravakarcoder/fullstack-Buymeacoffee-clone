"use server";

import { v2 as cloudinary } from "cloudinary";
import uniqid from "uniqid";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) {
    throw new Error("No file provided");
  }

  const buffer = await file.arrayBuffer();
  const bufferStream = Buffer.from(buffer);

  const uploadPromise = new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "folder" },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    stream.end(bufferStream);
  });

  const result: any = await uploadPromise;
  console.log(result);

  return {
    public_id: result.public_id,
    url: result.secure_url,
  };
}
