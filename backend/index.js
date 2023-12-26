import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDURL } from "./config.js";
import bookRoute from "./routes/booksRoute.js";
const app = express();

// middleware for parsing request body
app.use(express.json());

// // middleware for handling CORS POLICY
// // option 1: allow all origins with default of cors(*)
app.use(cors());
// option 2: allow custom origin
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  res.status(234).send("hello world");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDURL)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
