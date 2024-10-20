// Note: Always use (try,catch) and (async,await);
import dotenv from 'dotenv';
dotenv.config({path: './env'})
// import { app } from './app.js';

import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.on('error',(error)=>{
        console.log(error);
        throw error;
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`MongoDB Connection Failed: ${err.message}`);
})

/*
import express from "express";
const app = express();


(async ()=>{    //IIFE
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on('error',(error)=>{
            console.log(error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server running on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
})() 

*/