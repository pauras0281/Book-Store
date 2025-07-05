import express from "express";
import dotenv from "dotenv";
import { DATABASE_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log("App is listening on Port");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use(cors());

app.use("/books", booksRoute);

app.get("/", (req, res) => {});
