import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:DB_NAME
        });
        console.log("Database connected successfully");     
    } catch (error) {
        console.log("Error connecting to database:",error.message);
    }
}
export {connectDB};             
