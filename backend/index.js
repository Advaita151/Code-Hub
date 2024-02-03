import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import profileRoute from "./routes/profileRoute.js"


dotenv.config();
const app = express();
const PORT = process.env.PORT 
const mongoDB = process.env.MONGODB_URI
const message = process.env.MESSAGE


app.use(express.json());
app.use(cors()); 

app.get("/",(req,res)=>{
    res.status(235).send(message)
})

app.use("/profile",profileRoute)

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