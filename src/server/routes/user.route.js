import express from "express";
import {
  uploadMiddleware,
  uploadProfilePic,
  user,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/", user);
router.post("/", user);

// Add route to manage upload image only
router.post("/profile-picture", verifyToken, uploadMiddleware, uploadProfilePic);

export default router;
