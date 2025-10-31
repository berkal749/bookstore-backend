import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// midlware to handle cors error
app.use(
  cors({
    origin: "http://localhost:5173", // Your Vite frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// middleware for parsing request body
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack tut");
});
app.use("/books", booksRoute);

app.listen(PORT, () => {
  console.log(`APP is working to port ${PORT}`);
});
mongoose
  .connect(mongoDBURL)
  .then((result) => {
    console.log("app connected to database");
  })
  .catch((err) => {
    console.log(error);
  });
