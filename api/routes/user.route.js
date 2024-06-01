
import express from "express"
import { test, updateUser } from "../controllers/user.controller.js";
import { signup } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();


router.get('/test', test)
router.post('/signup', signup)
router.put('/update:userId', verifyToken, updateUser);


export default router;