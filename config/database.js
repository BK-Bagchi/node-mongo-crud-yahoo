import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//database connection
const dbConnection = () => {
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB database connected");
  });
};
export default dbConnection;
