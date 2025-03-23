import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    const data = await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
