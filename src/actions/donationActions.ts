import connectionDB from "@/Database/connectionDB.";
import { DonationModel } from "@/models/DonationModel";

export async function createDonation(formData: FormData): Promise<string> {
  //   1. save to our db
  const { amount, name, message, crypto } = Object.fromEntries(formData);
  connectionDB();
  const donationDoc = await DonationModel.create({
    amount,
    name,
    message,
    crypto,
  });
  //   2. create invoice and return the url
  return "";
}
