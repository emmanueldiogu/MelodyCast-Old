import os from "node:os";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import config from "./config.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import { errorHandler } from "./utils/error.js";
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
