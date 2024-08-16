import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import os from "node:os";
import path from "node:path";
import config from "./config.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import { errorHandler } from "./utils/error.js";
const __dirname = import.meta.dirname;

dotenv.config();
const server = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.info("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

server.use(express.json());
server.use(cookieParser());
// Serve static files from the uploads directory
server.use(
  "/api/uploads",
  express.static(path.join(__dirname, "../uploads")),
);
server.use(express.static("dist"));

server.get("/", (req, res) => {
  res.render("index", { content: "EJS is cool" });
});

server.use("/api/user", userRoutes);
server.use("/api/auth", authRoutes);

server.use("*", (req, res) => {
  res.status(404).send("Page not found");
});

server.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res
    .status(statusCode)
    .send(errorHandler(false, statusCode, message));
});

server.listen(config.PORT, config.HOST, () => {
  console.log(
    `Listening on ${config.SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`,
  );
});
