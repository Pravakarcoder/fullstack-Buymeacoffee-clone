import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URI as string
    );
    console.log(`Database Connected ${connectionInstance.connection.host}`);
  } catch (error: any) {
    console.log("Database Connection Failed", error);
    process.exit(1);
  }
};

export default connectionDB;
