import TryCatch from "../config/TryCatch.js";
import type { AuthenticatedRequest } from "../middlewares/isAuth.js";
import { Chat } from "../models/Chat.js";

export const createNewChat = TryCatch(async (req:AuthenticatedRequest, res) => {

  const userId = req.user?._id;
  const {otherUserId }= req.body;

  if(!otherUserId){
    res.status(400).json({
      message:"Other userid is required"
    });
    return;
  }
  const existingChat = await Chat.findOne({
    users: {$all:[userId,otherUserId],$size:2},
  })
  
})