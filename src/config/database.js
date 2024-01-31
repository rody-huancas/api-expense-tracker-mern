import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB cennected on port: ${response.connection.port}`);
  } catch (error) {
    console.log(`[ERROR]: ${error}`);
  }
};
