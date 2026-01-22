import express from 'express'
import { getAllUsers, getAuser, loginUser, myProfile, updateName, verifyUser } from '../controllers/user.js';
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();

router.post("/login",loginUser)
router.post("/verify",verifyUser)
router.get("/me",isAuth,myProfile)
router.get("/user/all",isAuth,getAllUsers)
router.get("/user/:id",getAuser)
router.post("/update/user",isAuth,updateName)

export default router;