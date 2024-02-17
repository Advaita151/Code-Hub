import { User } from "../models/User";
import axios from "axios";
import asyncHandler from "express-async-handler";

const getResponse = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
};

const getCodeforces = asyncHandler (async (req, res) => {
    const leaderboard = await User.find({}).sort({forcesrating : -1});
    res.status(200).json(leaderboard);
});

module.exports ={getCodeforces}