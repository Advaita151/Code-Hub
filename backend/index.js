import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.Port 
const mongoDB = process.env.MONGODB_URI
const message = process.env.MESSAGE


app.use(express.json());
app.use(cors()); 

app.get("/",(req,res)=>{
    res.status(235).send(message)
})

mongoose.connect(mongoDB)
    .then(()=>{
        console.log("App is connected to mongoose")
        app.listen(PORT, () =>{
            console.log(`Listening to port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })