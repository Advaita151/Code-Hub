import express from "express";
import {getLeetcode,getCodechef,getCodeforces} from "../controllers/leaderboard.js"


const router = express.Router();

router.route("/codeforces").get(getCodeforces)
router.route("/codechef").get(getCodechef)
router.route("/leetcode").get(getLeetcode)

export default router;