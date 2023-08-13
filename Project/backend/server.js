const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRouter = require("./route/movieRoute");
const userRouter = require("./route/userRoute");
dotenv.config();
const notFound = require("./middleware/notFound");
const { errorMiddlewareHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

// connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/mernstack")
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.log(err));

// Middleware //
app.use(express.json());
app.use(cors());
// routes
app.use(movieRouter);
app.use("/api/v1/users", userRouter);

app.use(notFound);
app.use(errorMiddlewareHandler);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
