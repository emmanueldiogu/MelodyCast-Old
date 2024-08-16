import fs from "fs";
import multer from "multer";
import path from "path";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
const __dirname = import.meta.dirname;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../../uploads");
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const uploadProfilePic = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized request" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.img = `/api/uploads/${req.file.filename}`;
    await user.save();

    res
      .status(200)
      .json({ message: "Profile picture updated successfully", user });
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    res
      .status(500)
      .json({
        message: "Error uploading profile picture",
        error: error.message,
      });
    console.log(error);
  }
};

export const uploadMiddleware = upload.single("profilePic");

export const user = (req, res) => {
  console.log(req.body);
  res.send({ message: "working from router" });
};
