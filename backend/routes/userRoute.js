import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import * as dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.get("/details",authenticateToken, async(req,res)=>{
    const userId = req.user.id;
    try {
      const user = await User.findById(userId);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
})
router.get("/logout",authenticateToken, async(req,res)=>{
  res.clearCookie("jwt");
  res.status(200).send({ status: "success", message: "Logged out successfully" });
})

function authenticateToken(req, res, next) {
    const token = req.cookies.jwt;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, process.env.SECRET_KEY_JWT, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
  
      req.user = user;
      next();
    });
}
  
export default router;