import mongoose from "mongoose";
import { DB_NAME } from "./constants";

// Note: Always use (try,catch) and (async,await);

// function connectDB() {}
// connectDB()

(async ()=>{    //IIFE
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    }catch(error){
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
})() 