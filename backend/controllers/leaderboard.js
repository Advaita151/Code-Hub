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

const getLeaderboard = asyncHandler (async (req, res) => {
    const leaderboard = await User.find({}).sort({rating : -1});
    res.status(200).json(leaderboard);
});

module.exports ={getLeaderboard}