import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import * as dotenv from "dotenv";

const router = express.Router();
dotenv.config();
const maxAge = 1 * 24 * 60 * 60 * 1000;
const cookieOptions = {
    expires: new Date(Date.now() +  maxAge),
    httpOnly: false,
}
  
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY_JWT, {
    expiresIn: maxAge
    });
};
  
router.post("/login",async (req,res)=>{
    const {email,password} = req.body;
  
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt',token,cookieOptions)
  
        res.status(200).json({ user: user._id });
    } catch (err) {
        res.status(400).json({err});
    }
  
})
  
router.post("/register", async(req,res)=>{
    const {email,password,name,codeforces,codechef,leetcode,college} = req.body;
  
    try {
        const user = await User.create({email,password,name,codeforces,codechef,leetcode,college});
        res.status(400).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).send("User not Created")
    }
  
    res.send("User Registered")
})
  
  
export default router;